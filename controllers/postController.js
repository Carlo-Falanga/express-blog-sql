const connection = require("../data/db");

//index
const index = (req, res) => {
  const sql = "SELECT * FROM posts";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching posts:", err.message);
      return res.status(500).json({ error: "Error fetching posts" });
    }
    res.json(results);
  });
};

// show
const show = (req, res) => {
  const post = posts.find((post) => post.id === Number(req.params.id));
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: "Post non trovato" });
  }
};

// store
const store = (req, res) => {
  const newId = posts[posts.length - 1].id + 1;

  const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags,
  };

  posts.push(newPost);
  console.log(posts);

  res.status(201);
  res.json(newPost);
};

// update
const update = (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    res.status(404);
    return res.json({
      error: "Not Found",
      message: "Post Not Found",
    });
  }

  post.title = req.body.title;
  post.content = req.body.content;
  post.image = req.body.image;
  post.tags = req.body.tags;

  console.log(posts);
  res.json(post);
};

// modify
const modify = (req, res) => {
  res.send(`Modifica del post con id ${req.params.id}`);
};

// destroy
const destroy = (req, res) => {
  const { id } = req.params;

  // First, check if the post exists
  connection.query(
    "SELECT * FROM posts WHERE id = ?",
    [id],
    (err, results) => {
      if (err)
        return res
          .status(500)
          .json({ error: true, message: "Database query failed" });
      if (results.length === 0) {
        return res
          .status(404)
          .json({ error: true, message: "Post not found" });
      }

      // Delete the post
      connection.query("DELETE FROM posts WHERE id = ?", [id], (err) => {
        if (err)
          return res
            .status(500)
            .json({ error: true, message: "Failed to delete post" });
        res.sendStatus(204);
      });
    },
  );
};

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy,
};
