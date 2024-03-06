using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DomainEntities
{
    public class ModelInfo
    {
        [JsonPropertyName("version")]
        public string Version { get; private set; }

        [JsonPropertyName("config")]
        public ModelConfig Config { get; private set; }

        [JsonPropertyName("test_losses")]
        public List<float> TestLosses { get; private set; }

        [JsonPropertyName("train_losses")]
        public List<float> TrainLosses { get; private set; }

        [JsonPropertyName("num_params")]
        public long NumParameters { get; private set; }

        public ModelInfo(
            string version,
            ModelConfig config,
            List<float> testLosses,
            List<float> trainLosses,
            long numParameters)
        {
            Config = config;
            Version = version;
            TestLosses = testLosses;
            TrainLosses = trainLosses;
            NumParameters = numParameters;
        }
    }
}
