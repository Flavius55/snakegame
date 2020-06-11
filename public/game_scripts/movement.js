
//adding lenght to the snake's tail
function addTail(index)
{
    let div=document.createElement("div");
    let root=document.getElementById("root");
    div.className="tail";
    div.style.width=`${p.h}px`;
    div.style.height=`${p.h}px`;
    div.style.left=t[index].left+"px";
    div.style.top=t[index].top+"px";
    root.appendChild(div);
}

//moving the tail alog with the snake's head
function moveTail()
{
    let tail=document.getElementsByClassName("tail");
    for(let i=t.length-1;i>=1;i--)
    {
        t[i]=t[i-1];
        tail[i].style.left = tail[i-1].style.left;
        tail[i].style.top = tail[i-1].style.top;
    }
}

//check if the snake reach the edge
function checkOffSide()
{
    let tail=document.getElementsByClassName("tail");
    if(parseInt(tail[0].style.top)==p.h*17) tail[0].style.top="0px";
    if(parseInt(tail[0].style.left)==p.basic) tail[0].style.left="0px";
    if(parseInt(tail[0].style.top)==-p.h) tail[0].style.top=p.h*16+"px";
    if(parseInt(tail[0].style.left)==-p.h) tail[0].style.left=p.basic-p.h+"px";
}

//check if the snake catch the apple, then add it to his tail and spawn another one
function checkCatch()
{
    let tail=document.getElementsByClassName("tail");
    let a = document.getElementById("apple");
    if(tail[0].style.top==a.style.top && tail[0].style.left==a.style.left)
    {
        let index = t.length;
        t.push({
            top:parseInt(a.style.top)+direction.top*p.h,
            left:parseInt(a.style.left)+(-1)*direction.left*p.h
        });
        addTail(index);
        apple();
    }
}

//check if the snake bite his own tail, then stop the game
function checkBite()
{
    let tail=document.getElementsByClassName("tail");
    for(let i=1;i<tail.length;i++)
    {
        if(tail[0].style.top==tail[i].style.top && tail[0].style.left==tail[i].style.left) 
        {
            score=tail.length;
            gameOver();
            return "bite";
        }
    }
}