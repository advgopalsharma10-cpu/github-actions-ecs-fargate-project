const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from GitHub Actions + Docker + AWS ECS Fargate!");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "github-actions-ecs-fargate-app",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
