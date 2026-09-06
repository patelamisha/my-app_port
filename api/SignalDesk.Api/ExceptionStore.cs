namespace SignalDesk.Api;

public sealed record ShipmentException(
    string Id,
    string Tracking,
    string Title,
    string Location,
    string Age,
    string Owner,
    string Status,
    string Priority);

public sealed record UpdateStatusRequest(string Status);

public sealed class ExceptionStore
{
    private readonly List<ShipmentException> exceptions =
    [
        new("EX-1048", "1Z 84A 29 03 1194 038 2", "Address verification required", "Newark, NJ", "18 min", "Maya Chen", "Escalated", "Critical"),
        new("EX-1042", "1Z 84A 29 03 1194 022 7", "Weather delay: route paused", "Buffalo, NY", "42 min", "Unassigned", "Investigating", "High"),
        new("EX-1037", "1Z 84A 29 03 1193 781 4", "Sort scan missing", "Louisville, KY", "1 hr", "Owen Wright", "Investigating", "High"),
        new("EX-1029", "1Z 84A 29 03 1192 650 9", "Customer pickup requested", "Austin, TX", "2 hr", "Maya Chen", "Resolved", "Medium")
    ];

    public IReadOnlyList<ShipmentException> Get(string? status) =>
        string.IsNullOrWhiteSpace(status)
            ? exceptions
            : exceptions.Where(exception => exception.Status.Equals(status, StringComparison.OrdinalIgnoreCase)).ToList();

    public ShipmentException? UpdateStatus(string id, string status)
    {
        var index = exceptions.FindIndex(exception => exception.Id.Equals(id, StringComparison.OrdinalIgnoreCase));
        if (index < 0 || status is not ("Escalated" or "Investigating" or "Resolved")) return null;
        exceptions[index] = exceptions[index] with { Status = status };
        return exceptions[index];
    }

    public object GetMetrics() => new
    {
        openExceptions = exceptions.Count(exception => exception.Status != "Resolved"),
        atRiskShipments = 27,
        averageResolution = "2h 14m",
        onTimeDelivery = 96.8
    };
}
