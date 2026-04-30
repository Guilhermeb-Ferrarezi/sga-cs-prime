import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const appBasePath = process.env.APP_BASE_PATH ?? "/";

const normalizedBasePath = appBasePath.endsWith("/") ? appBasePath : `${appBasePath}/`;

export default defineConfig({
  vite: {
    base: normalizedBasePath,
  },
});
