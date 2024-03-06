using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace ApplicationLogic.Core
{
    public abstract class BaseRequestHandler<TRequest, TRequestExecution, TResultValue> :
        IRequestHandler<TRequest, ExecutionResult<TResultValue>>
        where TRequest : IRequest<ExecutionResult<TResultValue>>
        where TRequestExecution : IRequestExecution<TRequest, TResultValue>
    {
        protected TRequestExecution RequestExecution { get; }

        public BaseRequestHandler(TRequestExecution requestExecution)
        {
            RequestExecution = requestExecution;
        }

        public Task<ExecutionResult<TResultValue>> Handle(TRequest request, CancellationToken cancellationToken)
        {
            try
            {
                return RequestExecution.ExecuteAsync(request, cancellationToken);
            }
            catch (Exception ex)
            {
                return Task.FromResult(ExecutionResult<TResultValue>.Error($"Failed to handle request: {ex.Message}"));
            }
        }
    }
}
