
//setting the game variables
let p ={
    w:Math.floor(window.innerWidth/100)*5,          //units of width
    h:Math.floor(window.innerHeight/100)*5,         //units of height
    basic:0
}
let t = [{
    top:p.h*8,                                      //the snake body props
    left:p.h*8
}];
let direction = {                                   //the direction
    top:0,
    left:0
}
let score=0;                                        //the live score

//setting the game view
function setView()
{
    let a=Math.floor(innerWidth*8/10);
    let ct=0;
    while(a>=p.h){
        ct++;
        a-=p.h;
    }
    let root = document.getElementById("root");
    root.style.width = (ct*p.h)+"px";
    root.style.height = p.h*17 +"px";
    p.basic=ct*p.h;
}

//spawning the snake head
function head()
{
    let div=document.createElement("div");
    let root=document.getElementById("root");
    div.className="tail";
    div.style.width=`${p.h}px`;
    div.style.height=`${p.h}px`;
    div.style.left=t[0].left+"px";
    div.style.top=t[0].top+"px";
    root.appendChild(div);
}

//spawning the apple in random places
function apple()
{
    let a = document.getElementById("apple");
    let tail=document.getElementsByClassName("tail");
    let ranL = Math.floor(Math.random()*(p.basic/p.h-2)+1)*p.h+"px";
    let ranT = Math.floor(Math.random()*15+1)*p.h+"px";
    let OK=1;
    a.style.width=`${p.h}px`;
    a.style.height=`${p.h}px`;
    a.style.backgroundColor="red";
    a.style.position="absolute";
    while(OK==1)
    {
        OK=0;
        for(let i=0;i<tail.length;i++) 
            if(tail[i].style.top === ranT && tail[i].style.left === ranL) 
                {
                    OK=1;
                    break;
                }
        if(a.style.left === ranT && a.style.top === ranL) OK=1;
        if(OK==1) 
            {
                ranL = Math.floor(Math.random()*(p.basic/p.h-2)+1)*p.h;
                ranT = Math.floor(Math.random()*15+1)*p.h;
            }
    }
    a.style.left =  ranL;
    a.style.top =  ranT;
}

//making sure that the game view is set before starting the game
window.onload = function()
{
    setView();
    document.getElementById("text").textContent = "Play Snake right now!";
}

//checking the tip of the device the user have
function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

//switch between display block and none for the mobile keys
function toggleArrorws()
{
    if( document.getElementById("up").style.display=="block")
    {
        document.getElementById("up").style.display="none";
        document.getElementById("down").style.display="none";
        document.getElementById("left").style.display="none";
        document.getElementById("right").style.display="none";
    }
    else
    {        
        document.getElementById("up").style.display="block";
        document.getElementById("down").style.display="block";
        document.getElementById("left").style.display="block";
        document.getElementById("right").style.display="block";
    }
}