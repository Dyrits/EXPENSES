# Expenses

A full-stack expenses tracker exploring a modern TypeScript stack.

**Status:** work in progress (exploratory project)

## About The Project

An expenses tracker built as an exploratory project: a Hono API server running on Bun, and a React client built with Vite.

### Built With

- Bun (runtime)
- Hono + zod (API server, with @hono/zod-validator)
- React + Vite (client)
- Tailwind CSS, Radix UI, lucide-react (UI)
- TanStack Query (client data)
- Biome (lint and format)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh)

### Installation

This is a Bun workspaces monorepo (`client` and `server`); one install at the root covers both:

```sh
bun install
```

### Development

Run the server and the client together from the repository root:

```sh
bun run dev
```

This starts `bun --watch server/index.ts` and the Vite dev server for the client in parallel.

### Checks

```sh
bun run check   # lint and format with Biome
```

## License

No license file is present in this repository.

## Contact

Dyrits - https://github.com/Dyrits
