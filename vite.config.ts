import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const appBasePath = process.env.APP_BASE_PATH ?? "/cs2/prime/";

const normalizedBasePath = appBasePath.endsWith("/") ? appBasePath : `${appBasePath}/`;
const routerBasePath = normalizedBasePath.replace(/^\/|\/$/g, "");

export default defineConfig({
  tanstackStart: {
    router: {
      basepath: routerBasePath,
    },
    client: {
      base: normalizedBasePath,
    },
  },
  vite: {
    base: normalizedBasePath,
  },
});
