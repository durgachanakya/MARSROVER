canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

backgrourd_image = "mars.jpg";
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add(){
    backgrourdimage = new Image();
    backgrourdimage.onload = uploadbackground; 
    backgrourdimage.src = backgrourd_image;

    roverimage = new Image();
    roverimage.onload = uploadrover;
    roverimage.src = rover_image;
}

function uploadbackground(){
    ctx.drawImage(backgrourdimage , 0, 0 , canvas.width , canvas.height);
}
function uploadrover(){
    ctx.drawImage(roverimage , rover_x , rover_y , rover_width , rover_height);
}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e){
    keypress = e.keyCode;
    if (keypress == "38"){
        up();
        console.log("up"); 
    }

     if (keypress == "40"){
        down();
        console.log("down"); 
    }

    if (keypress == "37"){
        left();
        console.log("left"); 
    }

    if (keypress == "39"){
        right();
        console.log("right"); 
    }
}