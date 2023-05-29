module.exports = {
  posts: [
    {
      id: generatorID(),
      title: "Teste 01",
      description: "Testando...",
    },
  ],

  getAll() {
    return this.posts;
  },

  newPost(title, description) {
    return this.posts.push({ id: generatorID(), title, description });
  },
};

function generatorID() {
  return Math.random().toString(36).substring(2, 9);
}
