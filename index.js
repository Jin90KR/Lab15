var newColors = document.getElementById("new_colors");
var rgbNum = document.getElementById("change_color");
var box1 = document.getElementById("box_1");
var box2 = document.getElementById("box_2");
var box3 = document.getElementById("box_3");

function changebackground() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    box1.style.backgroundColor = "RGB(" + r + ", " + g + ", " + b + ")"
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    box2.style.backgroundColor = "RGB(" + r + ", " + g + ", " + b + ")"
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    box3.style.backgroundColor = "RGB(" + r + ", " + g + ", " + b + ")"
};

newColors.addEventListener("click", ()=> {
    changebackground()
    var boxs = [box1.style.backgroundColor, box2.style.backgroundColor, box3.style.backgroundColor];
    var randomBox = Math.floor(Math.random() * boxs.length);
    console.log(boxs)
    rgbNum.innerHTML = boxs[randomBox];
    console.log(boxs[randomBox])
});

box1.addEventListener("click", ()=> {
    if (box1.style.backgroundColor === rgbNum.innerHTML) {
        box2.style.backgroundColor = rgbNum.innerHTML
        box3.style.backgroundColor = rgbNum.innerHTML
        document.getElementById("guessing_game").style.backgroundColor = rgbNum.innerHTML
    } else {
        box1.style.backgroundColor = "rgb(0, 0, 0)";
    };
});

box2.addEventListener("click", ()=> {
    if (box2.style.backgroundColor === rgbNum.innerHTML) {
        box1.style.backgroundColor = rgbNum.innerHTML
        box3.style.backgroundColor = rgbNum.innerHTML
        document.getElementById("guessing_game").style.backgroundColor = rgbNum.innerHTML
    } else {
        box2.style.backgroundColor = "rgb(0, 0, 0)";
    };
});

box3.addEventListener("click", ()=> {
    if (box3.style.backgroundColor === rgbNum.innerHTML) {
        box1.style.backgroundColor = rgbNum.innerHTML
        box2.style.backgroundColor = rgbNum.innerHTML
        document.getElementById("guessing_game").style.backgroundColor = changeColor.innerHTML
    } else {
        box3.style.backgroundColor = "rgb(0, 0, 0)";
    };
});

