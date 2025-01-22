FROM oven/bun:latest

WORKDIR /app

COPY package.json ./
COPY bun.lockb ./

RUN bun install

COPY ./ ./

CMD ["bun", "dev", "--host", "0.0.0.0"]