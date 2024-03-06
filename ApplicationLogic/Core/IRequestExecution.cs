using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace ApplicationLogic.Core
{
    public interface IRequestExecution<TRequest, TResultValue>
        where TRequest : IRequest<ExecutionResult<TResultValue>>
    {
        public Task<ExecutionResult<TResultValue>> ExecuteAsync(TRequest request, CancellationToken cancellationToken);
    }
}
