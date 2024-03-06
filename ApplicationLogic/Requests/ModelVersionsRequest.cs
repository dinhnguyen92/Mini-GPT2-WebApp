using ApplicationLogic.Core;
using MediatR;
using System.Collections.Generic;

namespace ApplicationLogic.Requests
{
    public class ModelVersionsRequest : IRequest<ExecutionResult<List<string>>>
    {
        public ModelVersionsRequest() { }
    }
}
