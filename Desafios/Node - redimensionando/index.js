const sharp = require("sharp");
const compress_images = require("compress-images");
const fs = require("fs");

const path = process.argv[2];
const width = Number(process.argv[3]);

function resize(inputPath, outputPath, width) {
  sharp(inputPath)
    .resize({ width: width })
    .toFile(outputPath, (error) => {
      if (error) {
        console.log("ERRO =>" + error);
      } else {
        console.log("--------------------------------");
        console.log("Redimensionado Com Sucesso!!");
        console.log("--------------------------------");
        compress(outputPath, "./compressed/");
      }
    });
}

function compress(pathInput, outputPath) {
  compress_images(
    pathInput,
    outputPath,
    { compress_force: false, statistic: true, autoupdate: true },
    false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
    { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    {
      gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] },
    },
    function (error, completed, statistic) {
      console.log("-------------");
      console.log(error);
      console.log(completed);
      console.log(statistic);
      console.log("-------------");
      fs.unlink(pathInput, (err) => {
        if (err) {
          console.log("erro:", err);
        } else {
          console.log(pathInput, "Apagado");
        }
      });
    }
  );
}

fs.unlink(path);
resize(path, "./temp/output_resize.jpg", width);
