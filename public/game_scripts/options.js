
//starting the game
startGame = function()
{
    let root= document.getElementById("root");
    let appleCreated = document.createElement("div");
    let stats = document.getElementById("stats");
    let mainMenu = document.getElementById("mainMenu");

    appleCreated.id="apple";
    root.appendChild(appleCreated);

    //hide the menu
    stats.style.display="none"; 
    mainMenu.style.display="none";

    //initiate the view
    setView();
    apple();
    head();
    if(detectMob()) toggleArrorws();

    //set an interval to move the snake's head every 100ms
    var myinterval = setInterval(() => {
        let tail=document.getElementsByClassName("tail");
        
        tail[0].style.top = (parseInt(tail[0].style.top)+direction.top*p.h*(-1))+"px";
        tail[0].style.left = (parseInt(tail[0].style.left)+direction.left*p.h)+"px";
        t[0].top = parseInt(tail[0].style.top)+direction.top*p.h*(-1);
        t[0].left = parseInt(tail[0].style.left)+direction.left*p.h;
        if(checkBite()==="bite") clearInterval(myinterval);
        else{
            checkOffSide();
            checkCatch();
            moveTail();
        }
    }, 100);
}

//if the game is over the menu will apear and the game props will be reseted
function gameOver()
{
    let root = document.getElementById("root");
    let s = document.getElementById("score");
    let mainMenu=document.getElementById("mainMenu");

    s.textContent="Your score: "+score;
    while(root.lastChild) root.removeChild(root.lastChild);
    mainMenu.style.display="block";
    t.length=1;
    document.getElementById("text").textContent = "Game over! Play again?";
    if(detectMob()) toggleArrorws();
}

//specify the game keys
document.addEventListener('keydown', logKey);
function logKey(e) {
    if(e.code==="KeyA" && direction.left!==1) {
        direction.top=0;
        direction.left=-1;
    }
    else if(e.code==="KeyD" && direction.left!==-1) {
        direction.top=0;
        direction.left=1;
    }
    else if(e.code==="KeyW" && direction.top!==-1) {
        direction.top=1;
        direction.left=0;
    }
    else if(e.code==="KeyS" && direction.top!==1) {
        direction.top=-1;
        direction.left=0;
    }
}

//game keys on mobile
function up()
{
    if(direction.top!==-1) {
        direction.top=1;
        direction.left=0;
    }
}
function down()
{
    if(direction.top!==1) {
        direction.top=-1;
        direction.left=0;
    }
}
function left()
{
    if(direction.left!==1) {
        direction.top=0;
        direction.left=-1;
    }
}
function right()
{
    if(direction.left!==-1) {
        direction.top=0;
        direction.left=1;
    }
}