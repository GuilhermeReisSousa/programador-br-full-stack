const SearchModel = require("../Model/model");

const redirect = async (req, res) => {
  let title = req.params.title;
  try {
    let docs = await SearchModel.findOne({ title });

    res.redirect(docs.url);
  } catch (error) {
    res.status(500).send("Impossivel found document");
  }
};

module.exports = redirect;
