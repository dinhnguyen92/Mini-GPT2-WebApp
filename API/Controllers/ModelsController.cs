using ApplicationLogic.Requests;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class ModelsController : BaseApiController
    {
        [HttpGet("{modelVersion}/info")]
        public async Task<IActionResult> GetModelInfo(string modelVersion)
        {
            return await ExecuteRequestAsync(new ModelInfoRequest(modelVersion));
        }

        [HttpGet("{modelVersion}/plot")]
        public async Task<IActionResult> GetModelPlot(string modelVersion)
        {
            return await ExecuteRequestAsync(new ModelPlotRequest(modelVersion));
        }

        [HttpGet("versions")]
        public async Task<IActionResult> GetModelVersions()
        {
            return await ExecuteRequestAsync(new ModelVersionsRequest());
        }
    }
}
