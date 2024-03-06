using System;
using System.Net.Http;
using DataIntegration.Core.REST.RestRequests.Definitions;
using DataIntegration.Core.REST.UrlParameters;

namespace DataIntegration.Core.REST.RestRequests.Builders
{
    public class NonPayloadRestRequestBuilder : BaseRestRequestBuilder<NonPayloadRestRequest>
    {
        public NonPayloadRestRequestBuilder(
            HttpMethod method,
            string? relativePath,
            UrlParameterList? urlParameter)
            : base(method, relativePath, urlParameter)
        {
        }

        protected override void ValidateRequestMethod()
        {
            switch (MethodName)
            {
                case "POST":
                case "PUT":
                case "PATCH":
                    throw new ArgumentException("POST/PUT/PATCH requests must have payloads");
            }
        }

        public override NonPayloadRestRequest Build() => new(
            Method,
            RelativePath,
            UrlParameters);
    }
}
