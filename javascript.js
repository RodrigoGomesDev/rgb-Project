//Color via rgb
function chanceColor() {
    var result = document.getElementById("color"); //Resultado
    let red = document.getElementById("red").value //Red
    let green = document.getElementById("green").value //Green
    let blue = document.getElementById("blue").value //Blue
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';

    result.style.backgroundColor = color; //Mostrara a cor 
    document.getElementById('result').innerHTML = color; //Mostrara a cor em formato rgb
}

document.getElementById("red").addEventListener("input", chanceColor)
document.getElementById("green").addEventListener("input", chanceColor)
document.getElementById("blue").addEventListener("input", chanceColor)