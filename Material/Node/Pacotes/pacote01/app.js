const sharp = require("sharp");
let path = process.argv[2];
let width = Number(process.argv[3]);
function resize(width, path) {}
sharp(path)
  .resize({ width: width })
  .toFile("./New_Image.jpg", (err) => {
    if (err) throw err;
    console.log("Sucesso!");
  });
resize(width, path);
