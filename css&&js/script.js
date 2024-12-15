let car = '<img id="car" style="position:absolute;bottom:1;" src="img/car.png"/>';
let police1 = '<img id="police1" src="img/police.png"/>';
let police2 = '<img id="police2" src="img/police.png"/>';
let pos = 1;
function render_car(__car){
    if (pos == 0){
        document.getElementById("left").innerHTML = document.getElementById("left").innerHTML + __car;
    }
    else if (pos == 1){
        document.getElementById("middle").innerHTML = document.getElementById("middle").innerHTML + __car;
    }
    else if (pos == 2){
        document.getElementById("right").innerHTML = document.getElementById("right").innerHTML + __car;
    }
}
function unrender_car(){
    document.getElementById("car").remove();
}

function turn(direction){
    if (direction == "left"){
        if (pos != 0){
        document.getElementById("car").style.transform= "rotate(290deg)";
        setTimeout(() => {
            document.getElementById("car").style.transform=  "rotate(70deg)";
            unrender_car();
                pos = pos-1;
            render_car(car);
        },100);}
       
    }
    else if (direction == "right"){
        if (pos != 2){
        document.getElementById("car").style.transform= "rotate(45deg)";
        setTimeout(() => {
            document.getElementById("car").style.transform= "rotate(315deg)";
           
                unrender_car();
                pos = pos+1;
            render_car(car);
        },100);}
       
    }
}
function onload(){
    render_car(car);
    police_render();
    framing();
}
let police_index1;
let police_index2;
function police_render(){
    police_index1 = Math.floor(Math.random() * 3);
    if (police_index1 == 0){
        document.getElementById("left").innerHTML =  document.getElementById("left").innerHTML + police1;
    }
    else if (police_index1 == 1){
        document.getElementById("middle").innerHTML = document.getElementById("middle").innerHTML +  police1;
    }
    else if (police_index1 == 2){
        document.getElementById("right").innerHTML =  document.getElementById("right").innerHTML + police1;
    }
    police_index2 = Math.floor(Math.random() * 3);
    while (police_index2 == police_index1){
        police_index2 = Math.floor(Math.random() * 3);
    }
    if (police_index2 == 0){
        document.getElementById("left").innerHTML =  document.getElementById("left").innerHTML + police2;
    }
    else if (police_index2 == 1){
        document.getElementById("middle").innerHTML = document.getElementById("middle").innerHTML +  police2;
    }
    else if (police_index2 == 2){
        document.getElementById("right").innerHTML =  document.getElementById("right").innerHTML + police2;
    }
}
var interval = 32;
var points;
function framing() {
    points = 0;
    let frames = 0;
    let catched = false;
    let intervalid;
        function updateframe(){
        if (catched){
            clearInterval(intervalid);
            //GAME OVER CODE
            document.write(`<title>Traffic Driver</title><center><img src="img/gameover.png" /><h1>You got ${points} points </h1></center>`);
        }
        else{
           if (frames < 101){
                frames += 1;
                document.getElementById("police1").style.paddingTop = `${frames*4}px`;
                document.getElementById("police2").style.paddingTop = `${frames*4}px`;
            }
            else{
                if (police_index1 == pos || police_index2 == pos){
                    catched = true;
                }
                frames = 0;
                points +=1;
                interval = 32-points;
                if(interval < 10){interval = 10;}
                document.getElementById("police1").remove();
                document.getElementById("police2").remove();
                police_render();
                clearInterval(intervalid);
                intervalid = setInterval(updateframe,interval);
            }
        }
        
    }
    intervalid = setInterval(updateframe,interval);

}
