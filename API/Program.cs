using API.Extensions;
using API.Middleware;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

#region Add services to the container.

builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddApplicationServices(builder.Configuration, builder.Environment);

#endregion


#region Configure the HTTP request pipeline

var app = builder.Build();

app.UseMiddleware<ExceptionMiddleware>();

app.UseHttpsRedirection();

app.UseAuthorization();

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
