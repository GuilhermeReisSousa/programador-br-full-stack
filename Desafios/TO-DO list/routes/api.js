const express = require("express");
const router = express.Router();
const posts = require("../module/posts");

router.get("/all", (req, res) => {
  res.json(posts.getAll());
});

router.post("/new", (req, res) => {
  let title = req.body.title;
  let description = req.body.description;

  posts.newPost(title, description);

  res.send("POST adicionado!");
});

module.exports = router;
