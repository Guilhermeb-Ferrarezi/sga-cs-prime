FROM oven/bun:1 AS build

WORKDIR /app

ARG APP_BASE_PATH=/cs2/prime/
ENV APP_BASE_PATH=${APP_BASE_PATH}

COPY package.json ./
RUN bun install

COPY . .
RUN bun run build

FROM oven/bun:1 AS runtime

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

COPY --from=build /app/dist ./dist
COPY --from=build /app/server.ts ./server.ts

EXPOSE 3000

CMD ["bun", "server.ts"]
