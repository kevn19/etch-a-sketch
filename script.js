
let container  = document.querySelector(".container");
let square = document.createElement("div")
square.className = "square"
let slider = document.querySelector(".slider")

let selectColor = document.querySelector(".selectColor")
let color = selectColor.value
selectColor.addEventListener("input", changeColor)
slider.addEventListener("input", changeSize)

let reset = document.querySelector(".reset")
reset.addEventListener("click", resetGrid)

let rainbow = document.querySelector(".rainbow")
rainbow.addEventListener("click", randomColor)

let eraser = document.querySelector(".eraser")
eraser.addEventListener("click", erase)

let lines = document.querySelector(".lines")
lines.addEventListener("click", gridlines)


// Creates a 15 by 15 grid within the container
for (i=0; i<625;i++){
    let square = document.createElement("div")
    square.className = "square"
    container.appendChild(square);
}


//Allows user to change size of the grid with the slider
function changeSize() {
    let size = slider.value
    let gridText = document.querySelector(".gridsize")
    container.innerHTML = ""
    for (i=0; i<slider.value**2;i++){
        let square = document.createElement("div")
        square.className = "square"
        container.appendChild(square);
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    sketch()
    gridText.textContent = `${size} x ${size}`
}

//Allows user to draw on the grid by mousing over the pixel
function sketch(){
    let selectColor = document.querySelector(".selectColor")
    let color = selectColor.value
    let draw = document.querySelectorAll(".square")

    draw.forEach((item)=>
        item.addEventListener("mouseover", ()=>{
            item.style.backgroundColor = color
        }))
}


sketch()

// Allows user to slect colour and draw on board with it

function changeColor() {
    let selectColor = document.querySelector(".selectColor")
    let color = selectColor.value
    let draw = document.querySelectorAll(".square")

    draw.forEach((item)=>
        item.addEventListener("mouseover", ()=>{
            item.style.backgroundColor = color
        }))
}



function randomColor(){
    let selectColor = document.querySelector(".selectColor")
    let color = selectColor.value
    let draw = document.querySelectorAll(".square")
    

    draw.forEach((item)=>
        item.addEventListener("mouseover", ()=>{
            let randomColor = Math.floor(Math.random()*16777215).toString(16)
            item.style.backgroundColor = "#"+randomColor
        }))
}



// Clears the board
function resetGrid(){
    let board = document.querySelectorAll(".square")
    board.forEach((item)=> {
        item.style.backgroundColor = "white"
        
    })
    let draw = document.querySelectorAll(".square")

    draw.forEach((item)=>
        item.addEventListener("mouseover", ()=>{
            item.style.backgroundColor = color
        }))
}

function erase(){
    let draw = document.querySelectorAll(".square")

    draw.forEach((item)=>
        item.addEventListener("mouseover", ()=>{
            item.style.backgroundColor = "white";
        }))
}

// Toggles gridlines
function gridlines(){
    let draw = document.querySelectorAll(".square")
    console.log(draw[0].style.border)
    if (draw[1].style.border === ""){
    draw.forEach((item)=>{
        item.style.border = "1px solid transparent"
    })
    }else if (draw[0].style.border === "1px solid transparent"){
        draw.forEach((item)=>{
            item.style.border = ""
        })     

    }
}
