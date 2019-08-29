img = new Array("./img/sunset.jpg","./img/sakura.jpg","./img/beach.jpg");
count = -1;
imgTimer();

function imgTimer(){
    count++;
    if(count == img.length)count = 0;
    document.bg.src = img[count];
    setTimeout("imgTimer()",1000);
}