const express = require("express");
const sampleJson = require("./utils/sampleJson");

const app = express();
const PORT = 3000;

app.get("/api/v1/formData", (req, res) => {
  if (!sampleJson) {
    return res.status(500).send({ error: "Failed to fetch JSON data" });
  }
  res.status(200).send({ data: sampleJson });
});

app.use((req, res, next) => {
  res.status(404).send({ error: "Not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "Something went wrong" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
