canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_image_array = ["nasa1.jpg" , "nasa2.jpg" , "nasa3.jpg" , "nasa4.jpg"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_width = 100;
rover_height = 90;

backgrourd_image = nasa_image_array[random_number];
console.log("background_image = " + backgrourd_image);
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

function up(){
     if (rover_y >= 0)
{
    rover_y = rover_y-10;
    console.log("when the up arrow is pressed , x = " + rover_x + " - y = " + rover_y);
    uploadbackground();
    uploadrover();
}
}

function down(){
    if (rover_y <= 500)
{
   rover_y = rover_y + 10;
   console.log("when the down arrow is pressed , x = " + rover_x + " - y = " + rover_y);
   uploadbackground();
   uploadrover();
}
}

function right(){
    if (rover_x <= 700)
{
   rover_x = rover_x + 10;
   console.log("when the right arrow is pressed , x = " + rover_x + " - y = " + rover_y);
   uploadbackground();
   uploadrover();
}
}

function left(){
    if (rover_x >= 0)
{
   rover_x = rover_x - 10;
   console.log("when the left arrow is pressed , x = " + rover_x + " - y = " + rover_y);
   uploadbackground();
   uploadrover();
}
}