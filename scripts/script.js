let favorieten = 0

function hamenuOpen() {
    document.documentElement.scrollTop = 0;
    document.querySelector("nav").style.marginLeft = '0vw';
    document.getElementById("dark").style.opacity = '0.5';
    document.querySelector("body").setAttribute('id', 'noscroll');
}

function hamenuClose() {
    document.querySelector("nav").style.marginLeft = '-110vw';
    document.getElementById("dark").style.opacity = '0';
    document.querySelector("body").removeAttribute('id', 'noscroll');
}

function filmenuOpen() {
    document.documentElement.scrollTop = 0;
    document.getElementById("filmenu").style.marginLeft = '0vw';
    document.getElementById("dark2").style.opacity = '0.5';
    document.querySelector("body").setAttribute('id', 'noscroll');
}

function filmenuClose() {
    document.getElementById("filmenu").style.marginLeft = '110vw';
    document.getElementById("dark2").style.opacity = '0';
    document.querySelector("body").removeAttribute('id', 'noscroll');
}
function taalimg(){
    let taal = document.getElementById("taal");
    document.getElementById("land").src = "/images/svgicons/" + taal.value;
}
function heart() {
    favorieten ++;
    console.log(favorieten);
    document.getElementById("number").innerText = favorieten;
}