using API.Extensions;
using API.Middleware;
using Azure.Identity;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;

var builder = WebApplication.CreateBuilder(args);

#region Add services to the container.

if (builder.Environment.IsProduction())
{
    var keyVaultUri = builder.Configuration["KeyVaultURI"] ?? throw new ArgumentNullException("KeyVaultURI");
    builder.Configuration.AddAzureKeyVault(new Uri(keyVaultUri), new DefaultAzureCredential());
}

builder.Services.AddControllers();
builder.Services.AddApplicationServices(builder.Configuration, builder.Environment);

#endregion


#region Configure the HTTP request pipeline

var app = builder.Build();

app.UseMiddleware<ExceptionMiddleware>();
app.UseHttpsRedirection();
app.UseRouting();

app.MapControllerRoute(
  name: "default",
  pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("/index.html");

// Configure the app to server static files from the wwwroot folder
// This folder is where the React build output is placed
app.UseFileServer();

#endregion


app.Run();
