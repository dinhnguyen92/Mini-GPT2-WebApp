using DataIntegration.Core.ApiClientConfig;
using DataIntegration.Core.REST.RestRequests.Builders;
using DataIntegration.Core.REST.RestRequests.Definitions;
using DataIntegration.Core.REST.UrlParameters;
using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace DataIntegration.Core.ApiClients
{
    public class HttpRestClient
    {
        protected HttpClientConfig HttpClientConfig { get; }

        public HttpRestClient(HttpClientConfig httpClientConfig)
        {
            HttpClientConfig = httpClientConfig;
        }

        protected HttpClient BuildHttpClient()
        {
            HttpClient client = new() { BaseAddress = new Uri(HttpClientConfig.RootUrl) };
            client.DefaultRequestHeaders.Accept.Clear();

            if (HttpClientConfig.DefaultRequestHeaders != null)
            {
                foreach (var header in HttpClientConfig.DefaultRequestHeaders)
                {
                    client.DefaultRequestHeaders.Add(header.Key, header.Value);
                }
            }
            return client;
        }


        #region GET/DELETE Methods

        public Task<HttpResponseMessage> GetAsync(string relativePath, UrlParameterList? urlParameters = null)
        {
            var requestBuilder = new NonPayloadRestRequestBuilder(HttpMethod.Get, relativePath, urlParameters);
            return SendNonPayloadRequestWithRetryAsync(requestBuilder.Build());
        }

        public Task<HttpResponseMessage> DeleteAsync(string relativePath, UrlParameterList? urlParameters = null)
        {
            var requestBuilder = new NonPayloadRestRequestBuilder(HttpMethod.Delete, relativePath, urlParameters);
            return SendNonPayloadRequestWithRetryAsync(requestBuilder.Build());
        }

        #endregion


        #region POST/PUT/PATCH Methods

        public Task<HttpResponseMessage> PostAsync<TPayload>(
            TPayload payload,
            string relativePath,
            UrlParameterList? urlParameters = null)
        {
            var requestBuilder = new PayloadRestRequestBuilder<TPayload>(HttpMethod.Post, payload, relativePath, urlParameters);
            return SendPayloadRequestWithRetryAsync(requestBuilder.Build());
        }

        public Task<HttpResponseMessage> PutAsync<TPayload>(
            TPayload payload,
            string relativePath,
            UrlParameterList? urlParameters = null)
        {
            var requestBuilder = new PayloadRestRequestBuilder<TPayload>(HttpMethod.Put, payload, relativePath, urlParameters);
            return SendPayloadRequestWithRetryAsync(requestBuilder.Build());
        }

        public Task<HttpResponseMessage> PatchAsync<TPayload>(
            TPayload payload,
            string relativePath,
            UrlParameterList? urlParameters = null)
        {
            var requestBuilder = new PayloadRestRequestBuilder<TPayload>(HttpMethod.Put, payload, relativePath, urlParameters);
            return SendPayloadRequestWithRetryAsync(requestBuilder.Build());
        }

        #endregion


        #region Retry Logic

        protected async Task<HttpResponseMessage> SendNonPayloadRequestWithRetryAsync(NonPayloadRestRequest request)
        {
            Func<HttpClient, Task<HttpResponseMessage>> sendRequestAsync = request.MethodName switch
            {
                "GET" => async client => await client.GetAsync(request.RequestUri),
                "DELETE" => async client => await client.DeleteAsync(request.RequestUri),
                _ => throw new Exception($"Unsupported non-payload HTTP method {request.MethodName}")
            };
            return await ExecuteWithRetryAsync(sendRequestAsync);
        }

        protected async Task<HttpResponseMessage> SendPayloadRequestWithRetryAsync(PayloadRestRequest request)
        {
            Func<HttpClient, Task<HttpResponseMessage>> sendRequestAsync = request.MethodName switch
            {
                "POST" => async client => await client.PostAsync(request.RequestUri, request.PayloadContent),
                "PUT" => async client => await client.PutAsync(request.RequestUri, request.PayloadContent),
                "PATCH" => async client => await client.PatchAsync(request.RequestUri, request.PayloadContent),
                _ => throw new Exception($"Unsupported payload HTTP method {request.MethodName}")
            };
            return await ExecuteWithRetryAsync(sendRequestAsync);
        }

        private async Task<HttpResponseMessage> ExecuteWithRetryAsync(Func<HttpClient, Task<HttpResponseMessage>> sendRequestAsync)
        {
            int retries = 0;
            const int maxRetries = 5;
            HttpResponseMessage response;
            TimeSpan delay = TimeSpan.FromMilliseconds(0);

            using (var client = BuildHttpClient())
            {
                do
                {
                    await Task.Delay(delay);
                    response = await sendRequestAsync(client);
                    delay = TimeSpan.FromMilliseconds(Math.Pow(2, retries) * 500);
                    retries++;
                }
                while (response.StatusCode == HttpStatusCode.TooManyRequests && retries < maxRetries);
            }

            return response;
        }

        #endregion


        #region Response Handling

        public async Task<string> ReadMessageAndStatusCodeAsync(HttpResponseMessage response)
        {
            string content = await response.Content.ReadAsStringAsync();
            return $"Status code: {response.StatusCode}. Message: {content}";
        }

        #endregion
    }
}
