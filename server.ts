import app from "./dist/server/index.js";

const port = Number(process.env.PORT ?? 3000);
const hostname = process.env.HOST ?? "0.0.0.0";
const appBasePath = process.env.APP_BASE_PATH ?? "/";
const normalizedBasePath = appBasePath.endsWith("/") ? appBasePath : `${appBasePath}/`;
const assetsPrefix = `${normalizedBasePath}assets/`;
const clientAssetsDir = new URL("./dist/client/assets/", import.meta.url);
const serverAssetsDir = new URL("./dist/server/assets/", import.meta.url);

const serveAsset = async (pathname: string) => {
  const relPath = pathname.slice(assetsPrefix.length);
  const clientFile = Bun.file(new URL(relPath, clientAssetsDir));

  if (await clientFile.exists()) {
    return new Response(clientFile);
  }

  const serverFile = Bun.file(new URL(relPath, serverAssetsDir));
  if (await serverFile.exists()) {
    return new Response(serverFile);
  }

  return null;
};

Bun.serve({
  port,
  hostname,
  fetch: async (request) => {
    const { pathname } = new URL(request.url);

    if (pathname.startsWith(assetsPrefix)) {
      const assetResponse = await serveAsset(pathname);
      if (assetResponse) return assetResponse;
    }

    return app.fetch(request);
  },
});

console.log(`Server listening on http://${hostname}:${port}`);
