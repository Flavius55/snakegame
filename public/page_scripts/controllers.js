
//Get the data
async function getData(){
    const data = await fetch("https://snakegame2020.herokuapp.com/score");
    const response = await data.json();
    return response;
}

//Post the data
async function postData(userdata){
    const data = await fetch("https://snakegame2020.herokuapp.com/score" , {
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(userdata)
    })
}
