# SignalDesk

A focused shipment-exception triage dashboard for operations teams. SignalDesk turns a noisy delivery network into a queue of clear, owned actions.

This is a small portfolio project built around the kind of workflow I enjoy solving as a full-stack engineer: make operational data easy to scan, preserve context, and give teams a fast path from issue to resolution.

## What it demonstrates

- Responsive TypeScript dashboard with a dense, work-focused information hierarchy
- Filterable exception queue with resolve/reopen behavior
- Metrics and network pulse view designed for fast operational scanning
- ASP.NET Core Minimal API with health, metrics, list, and status update endpoints
- Explicit status validation and a small in-memory store that can be replaced by a database
- Accessible labels, mobile layout, and production build configuration

## Stack

- Frontend: TypeScript, Vite, semantic HTML, responsive CSS
- API: ASP.NET Core 8 Minimal APIs, C# records, nullable reference types
- Next step: Angular client consuming the existing API, backed by SQL Server or PostgreSQL

## Run the frontend

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Run the API

The current development machine does not include the .NET SDK. On a machine with .NET 8 installed:

```bash
cd api/SignalDesk.Api
dotnet run
```

The API exposes:

- `GET /api/health`
- `GET /api/exceptions?status=Investigating`
- `PATCH /api/exceptions/{id}/status` with `{ "status": "Resolved" }`
- `GET /api/metrics`

The browser demo uses deterministic local data so it is immediately reviewable without credentials or an external service. The API mirrors that contract and is ready for the UI's data layer to be connected.

## Portfolio talking points

1. **Operational clarity:** the primary screen answers what is urgent, who owns it, and what changed.
2. **Small vertical slice:** list, filter, mutate, and report are represented across the UI and API boundary.
3. **Production-minded constraints:** the API has CORS, health reporting, input validation, and a replaceable store abstraction.
4. **Honest scope:** no UPS customer or internal data is used; all records are fictional seed data.

## License

MIT
