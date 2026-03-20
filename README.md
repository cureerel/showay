# showay

A minimal Express + TypeScript REST API boilerplate with Docker support.

---

## Stack

- Node.js
- TypeScript
- Express
- Docker

---

## Getting Started

### 1. Install dependencies

```bash
npm init -y
npm i -D typescript ts-node  @types/node @types/express tsx
npm install express
npx tsc --init
```

### 2. Run in development

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
npm start
```

---

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Run with hot reload using tsx |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run compiled output |

---

## Project Structure


showay/
├── src/
│   └── server.ts
├── dist/
├── Dockerfile
├── docker-compose.yaml
├── .dockerignore
├── .gitignore
├── tsconfig.json
└── package.json


---

## Docker

### Build image

```bash
docker build -t showay .
```

### Run container

```bash
docker run -p 4000:4000 showay
```

### Run in background (detached)

```bash
docker run -d -p 4000:4000 showay
```

### Stop a container

```bash
docker stop <container_id>
```

### Remove a container

```bash
docker rm <container_id>
```

---

## Docker Compose

### Start

```bash
docker compose up -d
```

### Stop

```bash
docker compose down
```

### Rebuild and start

```bash
docker compose up -d --build
```

---

## API Routes

### Health Check

```
GET /health
```

```bash
curl http://localhost:4000/health
```

Response:

```json
{
  "message": "api is running"
}
```

### 404

Any unknown route returns:

```json
{
  "message": "Route not found"
}
```

---

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `4000` | Port the server listens on |

---

https://github.com/cureerel