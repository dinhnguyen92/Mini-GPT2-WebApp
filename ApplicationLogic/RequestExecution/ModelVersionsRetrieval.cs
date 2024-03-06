using ApplicationLogic.Core;
using ApplicationLogic.Requests;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace ApplicationLogic.RequestExecution
{
    public class ModelVersionsRetrieval :
        BaseInferenceExecution,
        IRequestExecution<ModelVersionsRequest, List<string>>
    {
        public ModelVersionsRetrieval(IConfiguration config) : base(config)
        {
        }

        public async Task<ExecutionResult<List<string>>> ExecuteAsync(
            ModelVersionsRequest request,
            CancellationToken cancellationToken)
        {
            var result = await InferenceClient.GetModelVersions();
            return ExecutionResult<List<string>>.Complete(result);
        }
    }
}
