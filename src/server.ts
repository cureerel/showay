import express from "express";
import type { Request, Response, NextFunction } from "express";

const app = express();
const PORT: number = Number(process.env.PORT) || 4000;

app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    message: "api is running",
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// Error handler
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(err);

  if (err instanceof Error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }

  return res.status(500).json({
    message: "Unknown error",
  });
});

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
