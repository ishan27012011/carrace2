canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
bgimage="https://i.postimg.cc/bv5d35nK/racing.jpg";
car1img="https://i.postimg.cc/YqdnnNX1/car1.png";
car2img="https://1001freedownloads.s3.amazonaws.com/vector/thumb/66432/SimpleDarkBlueCarTopView.png";
car1width=120;
car1height=70;
car1x=10;
car1y=10;
car2width=120;
car2height=70;
car2x=10;
car2y=100;
function add() {
bgimagetag=new Image();
bgimagetag.onload=uploadBackground;
bgimagetag.src=bgimage;
  
car1imgtag=new Image();
car1imgtag.onload=uploadCar1;
car1imgtag.src=car1img;

car2imgtag=new Image();
car2imgtag.onload=uploadCar2;
car2imgtag.src=car2img;
}
function uploadBackground() {
ctx.drawImage(bgimagetag,0,0,canvas.width,canvas.height);
}
function uploadCar1() {
    ctx.drawImage(car1imgtag,car1x,car1y,car1width,car1height);
    }
    function uploadCar2() {
        ctx.drawImage(car2imgtag,car2x,car2y,car2width,car2height);
        }
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
keyPressed=e.keyCode;
console.log(keyPressed); 
if (keyPressed=='37') {
console.log("left"); 
car1_left();   
}   
if (keyPressed==38) {
console.log("up");
car1_up();    
}
if (keyPressed==39) {
console.log("right");
car1_moveright();
}
if (keyPressed==40) {
console.log("Down");
car1_down();
}
if (keyPressed=='87') {
    console.log("W"); 
    car2_up();   
    }   
    if (keyPressed=='83') {
    console.log("S");
    car2_down();    
    }
    if (keyPressed=='65') {
    console.log("A");
    car2_left();
    }
    if (keyPressed=='68') {
    console.log("D");
    car2_right();
    }
    if (car1x>=700) {
        console.log("!!Car 1 Won!!");
        document.getElementById("game_status").innerHTML="!!Car 1 Won!!" ;   
        } 
        if (car2x>=700) {
            console.log("!!Car 2 Won!!");
            document.getElementById("game_status").innerHTML="!!Car 2 Won!!" ;   
            } 
}
function car1_left() {
if (car1x>10){
car1x=car1x-10;
uploadBackground();
 uploadCar1();  
 uploadCar2(); 
}
}
function car1_moveright() {
    if (car1x<=700){
    car1x=car1x+10;
    uploadBackground();
     uploadCar1();  
     uploadCar2(); 
    }
    }
    function car1_up() {
        if (car1y>10){
        car1y=car1y-10;
        uploadBackground();
         uploadCar1();  
         uploadCar2(); 
        }
        }
        function car1_down() {
            if (car1y<530){
            car1y=car1y+10;
            uploadBackground();
             uploadCar1();  
             uploadCar2(); 
            }
            }   
            function car2_left() {
                if (car2x>10){
                car2x=car2x-10;
                uploadBackground();
                 uploadCar1();  
                 uploadCar2(); 
                }
                }
                function car2_right() {
                    if (car2x<=700){
                    car2x=car2x+10;
                    uploadBackground();
                     uploadCar1();  
                     uploadCar2(); 
                    }
                    }
                    function car2_up() {
                        if (car2y>10){
                        car2y=car2y-10;
                        uploadBackground();
                         uploadCar1();  
                         uploadCar2(); 
                        }
                        }
                        function car2_down() {
                            if (car2y<530){
                            car2y=car2y+10;
                            uploadBackground();
                             uploadCar1();  
                             uploadCar2(); 
                            }
                            }  
                