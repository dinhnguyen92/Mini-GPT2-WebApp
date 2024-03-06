using System.Text.Json.Serialization;

namespace DomainEntities
{
    public class ModelConfig
    {
        [JsonPropertyName("batch_size")]
        public int BatchSize { get; private set; }

        [JsonPropertyName("max_len")]
        public int MaxLength { get; private set; }

        [JsonPropertyName("d_k")]
        public int ContextSize { get; private set; }

        [JsonPropertyName("d_model")]
        public int EmbeddingSize { get; private set; }

        [JsonPropertyName("n_heads")]
        public int NumHeads { get; private set; }

        [JsonPropertyName("n_layers")]
        public int NumLayers { get; private set; }

        [JsonPropertyName("epochs")]
        public int Epochs { get; private set; }

        [JsonPropertyName("dropout_rate")]
        public float DropoutRate { get; private set; }

        [JsonPropertyName("lr")]
        public float LearningRate { get; private set; }

        [JsonPropertyName("lr_min")]
        public float MinLearningRate { get; private set; }

        [JsonPropertyName("T_0")]
        public int T_0 { get; private set; }

        [JsonPropertyName("T_mult")]
        public int T_mult { get; private set; }

        public ModelConfig(
            int batchSize,
            int maxLength,
            int contextSize,
            int embeddingSize,
            int numHeads,
            int numLayers,
            int epochs,
            float dropoutRate,
            float learningRate,
            float minLearningRate,
            int t_0,
            int t_mult)
        {
            BatchSize = batchSize;
            MaxLength = maxLength;
            ContextSize = contextSize;
            EmbeddingSize = embeddingSize;
            NumHeads = numHeads;
            NumLayers = numLayers;
            Epochs = epochs;
            DropoutRate = dropoutRate;
            LearningRate = learningRate;
            MinLearningRate = minLearningRate;
            T_0 = t_0;
            T_mult = t_mult;
        }
    }
}
