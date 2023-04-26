
  function mudar(){
    let muda = document.getElementById("cor")
    var a = 255 * Math.random()
    var b = 255 * Math.random()
    var c = 255 * Math.random()
    muda.style.backgroundColor = `rgb(${a}, ${b}, ${c})`
    refresh(parseInt(a), parseInt(b), parseInt(c))
}
function enviar(){
    let rcor = document.getElementById("Rcor")
    let gcor = document.getElementById("Gcor")
    let bcor = document.getElementById("Bcor")
    let muda = document.getElementById("cor")
    muda.style.backgroundColor = `rgb(${num(rcor)}, ${num(gcor)}, ${num(bcor)})`
    refresh(num(rcor), num(gcor), num(bcor))
}

function refresh(r, g, b){
    let resr = document.getElementById("resR")
    let resg = document.getElementById("resG")
    let resb = document.getElementById("resB")
    let hexa = document.getElementById("resHex")
    
    resr.innerHTML = `R: ${r}`
    resg.innerHTML = `G: ${g}`
    resb.innerHTML = `B: ${b}`
    hexa.innerHTML = `${ConvertRGBtoHex(r, g, b)}`
}



function ColorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  }
  
function ConvertRGBtoHex(red, green, blue) {
return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}
function num(i){
    return Number(i.value)
}