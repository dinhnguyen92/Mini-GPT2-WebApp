using ApplicationLogic.Core;
using DataIntegration.Core.REST.Serialization;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public abstract class BaseApiController: ControllerBase
    {
        public IMediator Mediator => HttpContext.RequestServices.GetService<IMediator>() ??
            throw new ArgumentNullException(nameof(Mediator));

        public bool TryParseRequestBody<TParsedPayload>(
            [NotNullWhen(true)] out TParsedPayload? parsedPayload,
            [NotNullWhen(false)] out string? errorMessage)
            where TParsedPayload : class
        {
            errorMessage = null;
            try
            {
                parsedPayload = JsonContentHelper.DeserializeStreamAsJsonAsync<TParsedPayload>(Request.Body).Result;
            }
            catch (Exception ex)
            {
                errorMessage = ex.Message;
                parsedPayload = null;
            }
            return parsedPayload != null;
        }

        public bool IsNotFound<TResultValue>([NotNullWhen(false)] ExecutionResult<TResultValue>? result)
        {
            return result == null || (result.IsCompleted && result.Value == null);
        }

        protected async Task<IActionResult> ExecuteRequestAsync<TResultValue>(IRequest<ExecutionResult<TResultValue>> request)
        {
            var executionResult = await Mediator.Send(request);

            if (IsNotFound(executionResult)) return NotFound();

            // Return BadRequest if the request was not successful for now
            // TODO: determine the correct status code to return for a failed request
            if (!executionResult.IsCompleted) return BadRequest(executionResult.ErrorMessage);

            return Ok(executionResult.Value);
        }
    }
}
