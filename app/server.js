const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>ECS Fargate App</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          margin-top: 100px;
          background: #f4f4f4;
        }
        h1 {
          color: #2563eb;
        }
      </style>
    </head>
    <body>
      <h1>GitHub Actions + ECS Fargate Deployment Successful 🚀</h1>
      <p>Application is running.</p>
    </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
