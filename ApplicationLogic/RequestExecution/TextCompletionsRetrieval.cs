using ApplicationLogic.Core;
using ApplicationLogic.Requests;
using DomainEntities;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace ApplicationLogic.RequestExecution
{
    public class TextCompletionsRetrieval :
        BaseInferenceExecution,
        IRequestExecution<TextCompletionsRequest, TextCompletion[]>
    {
        public TextCompletionsRetrieval(IConfiguration config) : base(config)
        {
        }

        public async Task<ExecutionResult<TextCompletion[]>> ExecuteAsync(
            TextCompletionsRequest request,
            CancellationToken cancellationToken)
        {
            // Send multiple requests to the inference service to get text completions in parallel
            const int maxCompletions = 3;
            List<Task<TextCompletion>> tasks = new List<Task<TextCompletion>>();
            for (int i = 0; i < maxCompletions; i++)
            {
                tasks.Add(InferenceClient.GetTextCompletionAsync(request.ModelVersion, request.Prompt));
            }

            // Wait for all requests to complete
            var completions = await Task.WhenAll(tasks);
            return ExecutionResult<TextCompletion[]>.Complete(completions);
        }
    }
}
