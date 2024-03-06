using ApplicationLogic.Core;
using ApplicationLogic.Requests;
using Microsoft.Extensions.Configuration;
using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace ApplicationLogic.RequestExecution
{
    public class ModelPlotRetrieval : BaseInferenceExecution,
        IRequestExecution<ModelPlotRequest, string>
    {
        public ModelPlotRetrieval(IConfiguration config) : base(config)
        {
        }

        public async Task<ExecutionResult<string>> ExecuteAsync(
            ModelPlotRequest request,
            CancellationToken cancellationToken)
        {
            using (var plotData = await InferenceClient.GetModelPlotAsync(request.ModelVersion))
            using (var memoryStream = new MemoryStream())
            {
                plotData.CopyTo(memoryStream);
                var plotDataBytes = memoryStream.ToArray();
                var result = Convert.ToBase64String(plotDataBytes);
                return ExecutionResult<string>.Complete(result);
            }
        }
    }
}
