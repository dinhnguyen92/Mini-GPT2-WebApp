using ApplicationLogic.Core;
using ApplicationLogic.Requests;
using DomainEntities;
using Microsoft.Extensions.Configuration;
using System.Threading;
using System.Threading.Tasks;

namespace ApplicationLogic.RequestExecution
{
    public class ModelInfoRetrieval :
        BaseInferenceExecution,
        IRequestExecution<ModelInfoRequest, ModelInfo>
    {
        public ModelInfoRetrieval(IConfiguration config) : base(config)
        {
        }

        public async Task<ExecutionResult<ModelInfo>> ExecuteAsync(
            ModelInfoRequest request,
            CancellationToken cancellationToken)
        {
            var result = await InferenceClient.GetModelInfoAsync(request.ModelVersion);
            return ExecutionResult<ModelInfo>.Complete(result);
        }
    }
}
