using ApplicationLogic.Core;
using ApplicationLogic.RequestExecution;
using ApplicationLogic.Requests;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace ApplicationLogic.RequestHandling
{
    public class ModelVersionsRequestHandler :
        BaseRequestHandler<ModelVersionsRequest, ModelVersionsRetrieval, List<string>>
    {
        public ModelVersionsRequestHandler(IConfiguration config) :
            base(new ModelVersionsRetrieval(config))
        {
        }
    }
}
