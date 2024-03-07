using ApplicationLogic.RequestHandling;
using Microsoft.ApplicationInsights.AspNetCore.Extensions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;

namespace API.Extensions
{
    public static class ApplicationServicesExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config, IHostEnvironment env)
        {
            // Add Application Insights telemetry collection if deployed in production
            if (env.IsProduction())
            {
                string APP_INSIGHTS_CONNECTION_KEY= "AppInsightsConnectionString";
                var appInsightsConnectionString = config[APP_INSIGHTS_CONNECTION_KEY] ??
                    throw new ArgumentNullException(APP_INSIGHTS_CONNECTION_KEY);

                services.AddApplicationInsightsTelemetry(
                    new ApplicationInsightsServiceOptions
                    {
                        ConnectionString = appInsightsConnectionString
                    });
            }

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
