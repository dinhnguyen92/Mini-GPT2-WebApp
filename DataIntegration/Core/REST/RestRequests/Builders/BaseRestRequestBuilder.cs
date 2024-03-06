using DataIntegration.Core.REST.RestRequests.Definitions;
using DataIntegration.Core.REST.UrlParameters;
using System.Net.Http;

namespace DataIntegration.Core.REST.RestRequests.Builders
{
    public abstract class BaseRestRequestBuilder<TRequest> where TRequest : BaseRestRequest
    {
        protected HttpMethod Method { get; set; }
        protected string? RelativePath { get; set; }
        protected UrlParameterList UrlParameters { get; set; }
        protected string MethodName => Method.Method;

        public BaseRestRequestBuilder(
            HttpMethod method,
            string? relativePath,
            UrlParameterList? urlParameter)
        {
            Method = method;
            RelativePath = relativePath;
            UrlParameters = urlParameter ?? new();
            ValidateRequestMethod();
        }

        protected abstract void ValidateRequestMethod();

        public abstract TRequest Build();
    }
}
