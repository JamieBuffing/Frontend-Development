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

function taalimg(){
    let taal = document.getElementById("taal");
    document.getElementById("land").src = "/images/svgicons/" + taal.value;
}

function test() {
    console.log(document.querySelector(".heart").src)
}

function heart() {
    favorieten ++;
    console.log(favorieten);
    if(document.querySelector(".heart").src == "https://jamiebuffing.github.io/Frontend-Development/images/svgicons/heart_empty.svg"){
        console.log("ja")
    } else {
        console.log("nee")
    }



}