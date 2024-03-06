using ApplicationLogic.Core;
using ApplicationLogic.RequestExecution;
using ApplicationLogic.Requests;
using Microsoft.Extensions.Configuration;

namespace ApplicationLogic.RequestHandling
{
    public class ModelPlotRequestHandler :
        BaseRequestHandler<ModelPlotRequest, ModelPlotRetrieval, string>
    {
        public ModelPlotRequestHandler(IConfiguration config) :
            base(new ModelPlotRetrieval(config))
        {
        }
    }
}
