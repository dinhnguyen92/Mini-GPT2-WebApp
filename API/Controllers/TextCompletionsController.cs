using ApplicationLogic.Requests;
using DomainEntities;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class TextCompletionsController : BaseApiController
    {
        [HttpPost("{modelVersion}")]
        public async Task<IActionResult> GenerateCompletions(string modelVersion)
        {
            if (TryParseRequestBody(out Prompt? prompt, out string? errorMessage))
            {
                return await ExecuteRequestAsync(new TextCompletionsRequest(modelVersion, prompt));
            }
            return BadRequest(errorMessage);
        }
    }
}
