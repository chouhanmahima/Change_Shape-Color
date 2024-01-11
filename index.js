let shapeContainer = document.querySelector(".circle");
let shape = document.querySelector(".inner-shape")
let colorChangingBtn = document.querySelector(".change-color");
let shapeChangingBtn = document.querySelector(".change-shape")

function changeColor(){
    let str = "0123456789abcdef";
    let color = "#";
    for(let i = 0; i < 6; i++){
        let index = Math.floor(Math.random() * str.length);
        color += str.charAt(index);
    }
    return color;
}

function changeShape(){
    let shapes = ["square","rect","tri","diamond"];
    let index = Math.floor(Math.random() * shapes.length);
    return shapes[index];
}

colorChangingBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    shapeContainer.style.backgroundColor = changeColor();
})

shapeChangingBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    shape.classList.remove(shape.classList[0]);
    shape.classList.add(changeShape());
});