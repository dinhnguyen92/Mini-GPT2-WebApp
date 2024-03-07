using DataIntegration.Core.ApiClientConfig;
using DataIntegration.Core.ApiClients;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;
using System;
using DomainEntities;
using System.Collections.Generic;
using DataIntegration.Core.REST.Serialization;
using System.IO;

namespace DataIntegration.InferenceService
{
    public class InferenceServiceClient
    {
        private HttpRestClient RestClient { get; }

        public InferenceServiceClient(IConfiguration config)
        {
            RestClient = new HttpRestClient(new HttpClientConfig(
                config,
                "InferenceApiKey",
                "InferenceApiHost",
                "InferenceCloudRootUrl",
                "InferenceLocalRootUrl"));
        }

        private string MODELS_PATH = "models";
        private string MODEL_VERSIONS_PATH = "model-versions";

        private string ModelByVersionPath(string modelVersion) => $"{MODELS_PATH}/{modelVersion}";

        public async Task<TextCompletion> GetTextCompletionAsync(string modelVersion, Prompt prompt)
        {
            var relativePath = $"{ModelByVersionPath(modelVersion)}/generate";
            var response = await RestClient.PostAsync(prompt, relativePath);
            if (!response.IsSuccessStatusCode)
            {
                var errorMessage = await RestClient.ReadMessageAndStatusCodeAsync(response);
                throw new Exception($"Error sending completing text. {errorMessage}");
            }
            return await JsonContentHelper.DeserializeHttpContentAsJsonAsync<TextCompletion>(response.Content);
        }

        public async Task<ModelInfo> GetModelInfoAsync(string modelVersion)
        {
            var relativePath = $"{ModelByVersionPath(modelVersion)}/info";
            var response = await RestClient.GetAsync(relativePath);
            if (!response.IsSuccessStatusCode)
            {
                var errorMessage = await RestClient.ReadMessageAndStatusCodeAsync(response);
                throw new Exception($"Error getting model info. {errorMessage}");
            }
            return await JsonContentHelper.DeserializeHttpContentAsJsonAsync<ModelInfo>(response.Content);
        }

        public async Task<List<string>> GetModelVersions()
        {
            var response = await RestClient.GetAsync(MODEL_VERSIONS_PATH);
            if (!response.IsSuccessStatusCode)
            {
                var errorMessage = await RestClient.ReadMessageAndStatusCodeAsync(response);
                throw new Exception($"Error getting model versions. {errorMessage}");
            }
            return await JsonContentHelper.DeserializeHttpContentAsJsonAsync<List<string>>(response.Content);
        }

        public async Task<Stream> GetModelPlotAsync(string modelVersion)
        {
            var relativePath = $"{ModelByVersionPath(modelVersion)}/plot";
            var response = await RestClient.GetAsync(relativePath);
            if (!response.IsSuccessStatusCode)
            {
                var errorMessage = await RestClient.ReadMessageAndStatusCodeAsync(response);
                throw new Exception($"Error getting model plot. {errorMessage}");
            }
            return await response.Content.ReadAsStreamAsync();
        }
    }
}
