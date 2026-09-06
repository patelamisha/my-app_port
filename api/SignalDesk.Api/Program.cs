using SignalDesk.Api;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options => options.AddDefaultPolicy(policy =>
    policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));
builder.Services.AddSingleton<ExceptionStore>();

var app = builder.Build();
app.UseCors();

app.MapGet("/api/health", () => Results.Ok(new { status = "operational", service = "signaldesk-api" }));
app.MapGet("/api/exceptions", (ExceptionStore store, string? status) =>
    Results.Ok(store.Get(status)));
app.MapPatch("/api/exceptions/{id}/status", (string id, UpdateStatusRequest request, ExceptionStore store) =>
{
    var updated = store.UpdateStatus(id, request.Status);
    return updated is null ? Results.NotFound() : Results.Ok(updated);
});
app.MapGet("/api/metrics", (ExceptionStore store) => Results.Ok(store.GetMetrics()));

app.Run();
