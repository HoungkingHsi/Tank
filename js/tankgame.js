/**
 * Created by houngking on 16/3/8.
 */
"use strict"
function initGame(){
    initCanvas();
    initScene();
    initImage();
    initSound();
}

function initCanvas(){

}

function initScene(){

}


let bgImage = new Image();
function initImage(){
    bgImage.addEventListener("load", bgImageLoad, false);
    bgImage.src = "Resources/bg_game.png";
}

function initSound(){

}


function bgImageLoad() {
    ctx.drawImage(bgImage,0,0,1024,768);
}