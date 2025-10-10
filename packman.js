function getpos(){
    return Math.floor(Math.random()*200)+20
}
function getvel(){
    return Math.floor(Math.random()*20)
}
function getimg(){
var packmanImage=["PacMan1.png","PacMan2.png","PacMan3.png","PacMan4.png"];
let i=Math.floor(Math.random()*packmanImage.length);
return packmanImage[i]
}
var xvelocity=[];
var yvelocity=[];
var xpos=[];
var ypos=[];
var images=[];

function makePac()
{
   var img=document.createElement("img")
   let x=getpos();
   let y=getpos();
   let velx=getvel();
   let vely=getvel();

   img.style.top=y+"px";
   img.style.left=x+"px";
   img.style.height="50px";
   img.style.width="50px";
   img.style.position="absolute";
   img.src=getimg()


   document.body.appendChild(img)
   xvelocity.push(velx)
   yvelocity.push(vely)
   xpos.push(x)
   ypos.push(y)
   images.push(img)
}
function move(){
    for(i=0;i<images.length;i++)
    {
    xpos[i]=xpos[i]+xvelocity[i];
    images[i].style.left=xpos[i]+"px";

    ypos[i]=ypos[i]+yvelocity[i];
    images[i].style.top=ypos[i]+"px";

    if(xpos[i]<=0 || xpos[i]>=window.innerWidth)
    {
        xvelocity[i]=-xvelocity[i];
    }
    if(ypos[i]<=0 || ypos[i]>=window.innerHeight)
        {
        yvelocity[i]=-yvelocity[i]
    }
}
setTimeout(move,50)
}


