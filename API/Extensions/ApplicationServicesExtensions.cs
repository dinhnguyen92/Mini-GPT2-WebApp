using ApplicationLogic.RequestHandling;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;

namespace API.Extensions
{
    public static class ApplicationServicesExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config, IHostEnvironment env)
        {
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen(opt =>
            {
                opt.SwaggerDoc("v1", new OpenApiInfo { Title = "WebAPIv5", Version = "v1" });
            });

            services.AddLogging(delegate (ILoggingBuilder loggingBuilder)
            {
                loggingBuilder.AddConsole();
                loggingBuilder.AddDebug();
                loggingBuilder.AddAzureWebAppDiagnostics();
            });

            // Register all the MediatR request handlers
            services.AddMediatR(config => config.RegisterServicesFromAssemblies(
                typeof(ModelInfoRequestHandler).Assembly,
                typeof(ModelPlotRequestHandler).Assembly,
                typeof(ModelVersionsRequestHandler).Assembly,
                typeof(TextCompletionsRequestHandler).Assembly
            ));

            return services;
        }
    }
}
