

async function submitScore()
{
    let u = document.getElementById("username").value;
    let s = parseInt(document.getElementById("score").innerHTML.match(/\d+/)[0]);
    let userdata={
        username:u,
        score:s
    }
    await postData(userdata);
    await showStats();
}