let favorieten = 0

let r = document.querySelector(':root');
let rs = getComputedStyle(r);

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


function theme() {
    let r = document.querySelector(':root');
    if(rs.getPropertyValue('--kaart2') == "#203a2b") {
        /*Light mode*/
        r.style.setProperty('--white-text', '#FFFFFF');
        r.style.setProperty('--dark-text', '#000000');
        r.style.setProperty('--yellow-text', '#d5ea42');
        r.style.setProperty('--background', '#FFFFFF');
        r.style.setProperty('--background2', '#000000');
        r.style.setProperty('--kaarten', '#262728;');
        r.style.setProperty('--kaart2', '#355c46');
        r.style.setProperty('--info', '#f9f9f9');
        document.getElementById("modeimg").style.rotate = "180deg"
    } else {
        /*Dark mode*/
        r.style.setProperty('--white-text', '#000000');
        r.style.setProperty('--dark-text', '#FFFFFF');
        r.style.setProperty('--yellow-text', '#d5ea42');
        r.style.setProperty('--background', '#7a7a7a');
        r.style.setProperty('--background2', '#d4d4d4');
        r.style.setProperty('--kaarten', '#4f5153;');
        r.style.setProperty('--kaart2', '#203a2b');
        r.style.setProperty('--info', '#afaeae');
        document.getElementById("modeimg").style.rotate = "0deg"
    }
}