const posts = require("../data/postData");

require('../data/db');


//index
const index = (req, res) => {
  let filteredPosts = posts;

  if (req.query.tags) {
    filteredPosts = posts.filter((post) => post.tags.includes(req.query.tags));
  }

  res.json(filteredPosts);
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
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    res.status(404);
    return res.json({
      status: 404,
      error: "Not Found",
      message: "Post Not Found",
    });
  }
  posts.splice(posts.indexOf(post), 1);
  res.sendStatus(204);
};

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy,
};
