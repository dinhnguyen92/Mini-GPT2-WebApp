using ApplicationLogic.Core;
using DomainEntities;
using MediatR;

namespace ApplicationLogic.Requests
{
    public class ModelInfoRequest : IRequest<ExecutionResult<ModelInfo>>
    {
        public string ModelVersion { get; }
        
        public ModelInfoRequest(string modelVersion)
        {
            ModelVersion = modelVersion;
        }
    }
}
