let  btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let randomClr =  getRandom();
    h3.innerText = randomClr;
    let div = document.querySelector("div");
    div.style.backgroundColor = randomClr;
    div.innerText = "Colour Updated";
});


function  getRandom(){

    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let colour = (`rgb( ${red},${green},${blue})`);

    return colour;
}
