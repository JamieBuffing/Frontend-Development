function hamenuOpen() {
    document.documentElement.scrollTop = 0;
    document.getElementById("hamenu").style.marginLeft = '0vw';
    document.getElementById("dark").style.opacity = '0.5';
    document.querySelector("body").setAttribute('id', 'noscroll');
}

function hamenuClose() {
    document.getElementById("hamenu").style.marginLeft = '-110vw';
    document.getElementById("dark").style.opacity = '0';
    document.querySelector("body").removeAttribute('id', 'noscroll');
}

function taalimg(){
    let taal = document.getElementById("taal");
    document.getElementById("land").src = "/images/svgicons/" + taal.value;
}