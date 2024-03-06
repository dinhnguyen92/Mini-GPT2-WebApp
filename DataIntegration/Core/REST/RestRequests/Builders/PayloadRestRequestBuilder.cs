using System;
using System.Net.Http;
using DataIntegration.Core.REST.RestRequests.Definitions;
using DataIntegration.Core.REST.Serialization;
using DataIntegration.Core.REST.UrlParameters;

namespace DataIntegration.Core.REST.RestRequests.Builders
{
    public class PayloadRestRequestBuilder<TPayload>: BaseRestRequestBuilder<PayloadRestRequest>
    {
        protected HttpContent PayloadContent { get; set; }

        public PayloadRestRequestBuilder(
            HttpMethod method,
            TPayload payload,
            string? relativePath,
            UrlParameterList? urlParameter)
            : base(method, relativePath, urlParameter)
        {
            PayloadContent = SerializeToPayloadContent(payload);
        }

        protected override void ValidateRequestMethod()
        {
            switch (MethodName)
            {
                case "GET":
                case "DELETE":
                    throw new ArgumentException("GET/DELETE requests must not have payloads");
            }
        }

        private HttpContent SerializeToPayloadContent(TPayload payload)
        {
            return JsonContentHelper.SerializeToJsonStringContent(payload);
        }

        public override PayloadRestRequest Build() => new(
            Method,
            RelativePath,
            UrlParameters,
            PayloadContent);
    }
}
