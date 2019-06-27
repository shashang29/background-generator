var css = document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient(){
	body.style.background= "linear-gradient(to right, " + color1.value
	+", "
	+color2.value
	+")";
	
css.textContent = body.style.background ;
}

function setRandom(){
    color1.value = setColor();
    color2.value = setColor();
    setGradient();
 }

 function setColor(){
    return "#" + set2digits()+set2digits()+set2digits();
}
function set2digits(){
    var i = getRndInteger(0, 99);
    if (i.toString(16).length < 2) {
        return "0"+i.toString(16)
    } else {
        return i.toString(16)
    }
}
 function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandom);