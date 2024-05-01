using System;
using Domain;
using Microsoft.EntityFrameworkCore;
using API;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the application

builder.Services.AddControllers();
builder.Services.AddApplicationServices(builder.Configuration);

// Kestrel server configured to allow listening on [local_ipv4_addr]:5001
// Queries should be sent to [local_ipv4_addr]:5001/API/videos

builder.WebHost.ConfigureKestrel(options =>
{
    options.ListenAnyIP(5001); // to listen for incoming http connection on port 5001
    options.ListenAnyIP(7001, configure => configure.UseHttps()); // to listen for incoming https connection on port 7001
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("CorsPolicy");

app.UseAuthorization();

app.MapControllers();

// Using keyword is automatic garbage collection

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

try
{
    var context = services.GetRequiredService<DataContext>();

    // Asynchronous - wait until database is updated and then migrate database and seed data (if needed)

    await context.Database.MigrateAsync();
    await Seed.SeedData(context);
}
catch (Exception ex)
{
    
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occured during migration!");

}

app.Run();
