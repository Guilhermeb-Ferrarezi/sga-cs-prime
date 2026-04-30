import app from "./dist/server/index.js";

const port = Number(process.env.PORT ?? 3000);
const hostname = process.env.HOST ?? "0.0.0.0";

Bun.serve({
  port,
  hostname,
  fetch: app.fetch.bind(app),
});

console.log(`Server listening on http://${hostname}:${port}`);
