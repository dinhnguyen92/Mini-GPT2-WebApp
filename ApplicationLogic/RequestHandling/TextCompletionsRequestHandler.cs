using ApplicationLogic.Core;
using ApplicationLogic.RequestExecution;
using ApplicationLogic.Requests;
using DomainEntities;
using Microsoft.Extensions.Configuration;

namespace ApplicationLogic.RequestHandling
{
    public class TextCompletionsRequestHandler :
        BaseRequestHandler<TextCompletionsRequest, TextCompletionsRetrieval, TextCompletion[]>
    {
        public TextCompletionsRequestHandler(IConfiguration config) :
            base(new TextCompletionsRetrieval(config))
        {
        }
    }
}
