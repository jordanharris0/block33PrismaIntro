const express = require("express");
const app = express();
const PORT = 3000;

//body-parsing middleware
app.use(express.json());
app.use(require("morgan")("dev"));

//API routes
app.use("/api", require("/api"));

//Simple error handling middleware
app.use((error, req, res, next) => {
  res.status(res.status || 500).send({ error: error });
});

//port listen
app.listen(PORT, () => console.log(`listening from port ${PORT}`));
