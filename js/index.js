function showNav(){
    let navbar = document.querySelector("#navbar");
    if (navbar.className === "container"){
        navbar.className += " responsive"
    }else {
        navbar.className = "container";
    }
}

function clearLeft() {
    let inp = document.querySelector("#heroInput");
    inp.style.placeholder = "";
    console.log("yeye");
}