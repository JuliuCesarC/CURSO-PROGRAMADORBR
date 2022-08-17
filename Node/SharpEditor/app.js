const sharp = require('sharp')
const compress_images = require('compress-images')
const fs = require('fs')

let path = process.argv[2]
let outPath = process.argv[4]
let tamanho = Number(process.argv[3])

function redim(inputPath, outputPath, wd){
    sharp(inputPath).resize({width: wd})
    // O 'sharp' possui varios métodos, um deles é o 'resize' que tem como função redimensionar uma imagem, ele retorna um outro método que é o 'toFile'.
    .toFile(outputPath, (erro)=>{
        if(erro){console.log(erro)}
        else{
            console.log('Imagem redimensionada com sucesso.')
            comprimir(outputPath, './Comprimida/')
        }
    })
}


function comprimir(inPath, outputPath){

compress_images(inPath, outputPath, { compress_force: false, statistic: true, autoupdate: true }, false,
                { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
                { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
                { svg: { engine: "svgo", command: "--multipass" } },
                { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
  function (error, completed, statistic) {
    console.log("-------------");
    console.log(error);
    console.log(completed);
    console.log(statistic);
    console.log("-------------");
  }
);
}



redim(path, outPath, tamanho)