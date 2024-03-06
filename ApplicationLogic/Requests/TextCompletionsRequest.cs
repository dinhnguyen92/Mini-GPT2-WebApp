using ApplicationLogic.Core;
using DomainEntities;
using MediatR;

namespace ApplicationLogic.Requests
{
    public class TextCompletionsRequest : IRequest<ExecutionResult<TextCompletion[]>>
    {
        public string ModelVersion { get; }
        public Prompt Prompt { get; }

        public TextCompletionsRequest(string modelVersion, Prompt prompt)
        {
            ModelVersion = modelVersion;
            Prompt = prompt;
        }
    }
}
