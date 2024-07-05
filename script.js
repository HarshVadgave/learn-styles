let box=document.querySelector("div");
input=document.querySelector("input");

input.addEventListener("input", ()=>{
    box.style.cssText=input.value;
});