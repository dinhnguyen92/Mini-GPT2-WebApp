using ApplicationLogic.Core;
using MediatR;

namespace ApplicationLogic.Requests
{
    public class ModelPlotRequest : IRequest<ExecutionResult<string>>
    {
        public string ModelVersion { get; }

        public ModelPlotRequest(string modelVersion)
        {
            ModelVersion = modelVersion;
        }
    }
}
