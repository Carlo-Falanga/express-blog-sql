const express = require("express");
const path = require("path");
const postsRouter = require("./routes/posts");
const serverError = require("./middlewares/serverError");
const notFound = require("./middlewares/notFound");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve static assets from ../public
app.use(express.static(path.join(__dirname, "..", "public")));

// Starts the listener
app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});

// Server entry point
app.get("/", (req, res) => {
  res.type("text").send("Server del mio blog");
});

// Posts CRUD routes
// Use posts router for /posts routes
app.use("/posts", postsRouter);

// 404 not found
app.use(notFound);

// 500 server error
app.use(serverError);
