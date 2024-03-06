using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DomainEntities
{
    public class TextCompletion
    {
        [JsonPropertyName("prompt_tokens")]
        public List<string> PromptTokens { get; private set; }

        [JsonPropertyName("result_tokens")]
        public List<string> ResultTokens { get; private set; }

        [JsonPropertyName("alt_token_groups")]
        public List<List<string>> AltTokenGroups { get; private set; }

        [JsonPropertyName("alt_token_prob_groups")]
        public List<List<float>> AltTokenProbGroups { get; private set; }

        public TextCompletion(
            List<string> promptTokens,
            List<string> resultTokens,
            List<List<string>> altTokenGroups,
            List<List<float>> altTokenProbGroups)
        {
            PromptTokens = promptTokens;
            ResultTokens = resultTokens;
            AltTokenGroups = altTokenGroups;
            AltTokenProbGroups = altTokenProbGroups;
        }
    }
}
