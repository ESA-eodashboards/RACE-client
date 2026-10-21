# RACE Client

Rapid Action for Citizens with Earth Observation (RACE) dashboard client built with VitePress and `@eodash/eodash`.

## Local Development

```bash
npm install
npm run dev
```

## Build

Builds the `@eodash/eodash` bundle and VitePress static site output into `.vitepress/dist`:

```bash
npm run build
```

## Docker

The `Dockerfile` wraps the pre-built static application in an Nginx image.

> **Important:** You must build the application locally before building the Docker image so `.vitepress/dist` exists.

```bash
# 1. Build the application
npm run build

# 2. Build the Docker image
docker build -t race-client:test .

# 3. Run the container
docker run --rm -p 80:80 race-client:test
```

Access the application at `http://localhost:80`.

## CI / CD

The GitHub Actions workflow (`.github/workflows/docker.yml`) automatically builds the client and pushes a versioned Docker image to GHCR on every push to `main`:

```bash
ghcr.io/esa-eodashboards/race-client:<commit-hash>
```
