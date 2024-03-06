using System.Text.Json.Serialization;

namespace DomainEntities
{
    public class Prompt
    {
        [JsonPropertyName("text")]
        public string Text { get; private set; }

        [JsonPropertyName("max_resp_len")]
        public int MaxResponseLength { get; private set; }

        [JsonPropertyName("sampling_temp")]
        public float SamplingTemperature { get; private set; }

        public Prompt(string text, int maxResponseLength, float samplingTemperature)
        {
            Text = text;
            MaxResponseLength = maxResponseLength;
            SamplingTemperature = samplingTemperature;
        }
    }
}
