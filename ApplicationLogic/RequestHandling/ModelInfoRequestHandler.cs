using ApplicationLogic.Core;
using ApplicationLogic.RequestExecution;
using ApplicationLogic.Requests;
using DomainEntities;
using Microsoft.Extensions.Configuration;

namespace ApplicationLogic.RequestHandling
{
    public class ModelInfoRequestHandler :
        BaseRequestHandler<ModelInfoRequest, ModelInfoRetrieval, ModelInfo>
    {
        public ModelInfoRequestHandler(IConfiguration config) :
            base(new ModelInfoRetrieval(config))
        {
        }
    }
}
