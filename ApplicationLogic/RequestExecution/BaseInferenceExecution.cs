using DataIntegration.InferenceService;
using Microsoft.Extensions.Configuration;

namespace ApplicationLogic.RequestExecution
{
    public abstract class BaseInferenceExecution
    {
        protected InferenceServiceClient InferenceClient { get; }

        public BaseInferenceExecution(IConfiguration config)
        {
            InferenceClient = new InferenceServiceClient(config);
        }
    }
}
