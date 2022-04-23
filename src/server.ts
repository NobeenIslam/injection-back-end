import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import filePath from "./filePath";

// loading in some dummy items into the database
// (comment out if desired, or change the number)

const app = express();

/** Parses JSON data in a request automatically */
app.use(express.json());
/** To allow 'Cross-Origin Resource Sharing': https://en.wikipedia.org/wiki/Cross-origin_resource_sharing */
app.use(cors());

// read in contents of any environment variables in the .env file
dotenv.config();

// use the environment variable PORT, or 4000 as a fallback
const PORT_NUMBER = process.env.PORT ?? 4000;

interface DbItem {

}

// API info page
app.get("/", (req, res) => {
  const pathToFile = filePath("../public/index.html");
  res.sendFile(pathToFile);
});

// GET /items
app.get("/items", (req, res) => {

});

// POST /items
app.post<{}, {}, DbItem>("/items", (req, res) => {

});

// GET /items/:id
app.get<{ id: string }>("/items/:id", (req, res) => {

});

// DELETE /items/:id
app.delete<{ id: string }>("/items/:id", (req, res) => {

});

// PATCH /items/:id
app.patch<{ id: string }, {}, Partial<DbItem>>("/items/:id", (req, res) => {

});

app.listen(PORT_NUMBER, () => {
  console.log(`Server is listening on port ${PORT_NUMBER}!`);
});
