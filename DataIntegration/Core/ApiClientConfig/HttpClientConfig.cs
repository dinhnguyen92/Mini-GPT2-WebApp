using DataIntegration.Core.REST;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;

namespace DataIntegration.Core.ApiClientConfig
{
    public class HttpClientConfig
    {
        private IConfiguration Config { get; }
        private string ApiKeyConfigKey { get; }
        private string ApiKey => Config[ApiKeyConfigKey] ?? throw new ArgumentNullException(ApiKeyConfigKey);

        private string CloudRootUrlConfigKey { get; }
        private string LocalRootUrlConfigKey { get; }
        public string CloudRootUrl => Config[CloudRootUrlConfigKey] ?? throw new ArgumentNullException(CloudRootUrlConfigKey);
        public string LocalRootUrl => Config[LocalRootUrlConfigKey] ?? throw new ArgumentNullException(LocalRootUrlConfigKey);

        // If the API host is set to "local", we'll use the local API URL. Otherwise, we'll use the production API URL
        // When the client is deployed in production, this config will be null by default, so we'll use the production API URL.
        // When the client is deployed locally, if this config is not set, we'll use the production API URL via VPN.
        // To debug a locally deployed client against a local API, set this config to "local".
        private string ApiHostConfigKey { get; }
        public string? ApiHostEnv => Config[ApiHostConfigKey];
        public bool UseLocalApi => ApiHostEnv == "local";
        public string RootUrl => UseLocalApi ? LocalRootUrl : CloudRootUrl;

        public IDictionary<string, string> DefaultRequestHeaders { get; }

        public HttpClientConfig(
            IConfiguration config,
            string apiKeyConfigKey,
            string apiHostConfigKey,
            string cloudRootUrlConfigKey,
            string localRootUrlConfigKey)
        {
            Config = config;
            
            ApiKeyConfigKey = apiKeyConfigKey;
            ApiHostConfigKey = apiHostConfigKey;
            CloudRootUrlConfigKey = cloudRootUrlConfigKey;
            LocalRootUrlConfigKey = localRootUrlConfigKey;

            DefaultRequestHeaders = new Dictionary<string, string>(new[]
            {
                RESTConstants.BuildAuthorizationHeader(ApiKey)
            });
        }
    }
}
