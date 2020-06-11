

async function showStats()
{
    let stats = document.getElementById("stats");
    stats.style.display = " block";
    let table = document.getElementById("customers");
    while(table.childElementCount >1) table.removeChild(table.lastChild);

    let json = await getData();
    for(let i=0;i<json.length;i++)
    {
        let tr = document.createElement("tr");
        let place = document.createElement("td");
        place.textContent = i+1;
        let username = document.createElement("td");
        username.textContent = json[i].username;
        let score = document.createElement("td");
        score.textContent = json[i].score;
        tr.appendChild(place);
        tr.appendChild(username);
        tr.appendChild(score);
        table.appendChild(tr);
    }
}