var canvas = document.getElementById('myCanvas');
var cgc = canvas.getContext("2d");

var car1_width = 120;
var car1_height = 70;
var car1_image = "yellowcar.png";
var car1_x = 10;
var car1_y = 10;

var car2_width = 120;
var car2_height = 70;
var car2_image = "whitecar.png";
var car2_x = 10;
var car2_y = 100;

var background_image = "canvascarracinggif.gif";

function add() {


    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1();
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2();
    car2_imgTag.src = car2_image;

    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground();
    background_imgTag.src = background_image;
}

function uploadBackground() {
    cgc.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    cgc.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    cgc.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}


window.addEventListener("keydown", my_trillions_of_ifs);

function my_trillions_of_ifs(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') {
        car1_up();
    }
    if(keyPressed == '40') {
        car1_down();
    }
    if(keyPressed == '37') {
        car1_left();
    }
    if(keyPressed == '39') {
        car1_right();
    }
//car 1 is above this comment and car 2 is below.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           if you see this, well, i dont really know what happens if you see this.     
    if(keyPressed == '87') {
        car2_up();
    }
    if(keyPressed == '83') {
        car2_down();
    }
    if(keyPressed == '65') {
        car2_left();
    }
    if(keyPressed == '68') {
        car2_right();
    }
}

function car1_up() { // car 1 going up
    if(car1_y >=0) {
        car1_y = car1_y - 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
        game_status();
  
    }
}

function car1_down() { // car 1 going down
    if(car1_y <=500) {
        car1_y = car1_y + 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
        game_status();
    
    }
}


function car1_left() { //car 1 going left
    if(car1_x >=0) {
        car1_x = car1_x - 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
        game_status();
      
    }
}

function car1_right() { //car 1 going right
    if(car1_x <=670) {
        car1_x = car1_x + 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
        game_status();
  
    }
}
//car 1 above car 2 below
function car2_up() {
    if(car2_y >=0) {
        car2_y = car2_y - 10; //car 2 going up
        uploadBackground();
        uploadcar1();
        uploadcar2();
        game_status();
 
    }
}

function car2_down() {
    if(car2_y <=500) {
        car2_y = car2_y + 10;  //car 2 going down
        uploadBackground();
        uploadcar1();
        uploadcar2();
        game_status();

    }
}


function car2_left() {
    if(car2_x >=0) {
        car2_x = car2_x - 10;  //car 2 going left
        uploadBackground();
        uploadcar1();
        uploadcar2();
        game_status();

    }
}

function car2_right() {
    if(car2_x <=670) {
        car2_x = car2_x + 10;  //car 2 going right
        uploadBackground();
        uploadcar1();
        uploadcar2();
        game_status();

    }
}

//Is the race complete?
//Which car finished first?
//Is it a tie?
var status = "in progress";
function game_status() {
   // newgame_status();

 
    var raceLimit = 670;
    if ((car1_x >= raceLimit) || (car2_x >= raceLimit)) {
        if ((car1_x > car2_x) && (status == "in progress")) {
            status = "Car 1 is the winner";
        }

        if ((car2_x > car1_x) && (status == "in progress")) {
            status = "Car 2 is the winner";
        }

        if ((status == "Car 1 is the winner") && (car2_x >= raceLimit)) {
            status = "Car 2 is in second place";
        }

        
        if ((status == "Car 2 is the winner") && (car1_x >= raceLimit)) {
            status = "Car 1 is in second place";
        }
         if ((car1_x >= raceLimit) && (car2_x >= raceLimit) & (status == "in progress")) {
            status = "Its a tie";
         }
    }
    
    document.getElementById("game_status").innerHTML = status;
    
}

function newgame_status(){
    var raceLimit = 660;
    var car1done = false;
    var car2done = false;


    if (car1_x >= raceLimit)
        car1done = true;
    if (car2_x >= raceLimit)
        car2done = true;

    if (car1done && !car2done)
        status="Car 1 wins";
    if (car2done && !car1done)
        status="Car 2 wins";
    if (car1done && car2done) {
        if (status=="Car 1 wins")
            status="Car 2 is in second place";
        if (status=="Car 2 wins")
        status="Car 1 is in second place";
    } 


    if (!car1done && !car2done) {
        if (car1_x > car2_x)
            status="Car 1 is in the lead";
        else if (car1_x < car2_x)
            status="Car 2 is in the lead";
        else if (car1_x = car2_x)
            status="Cars are tied at the moment";
    }


    document.getElementById("game_status").innerHTML = status;

}
