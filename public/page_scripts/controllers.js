
//Get the data
async function getData(){
    const data = await fetch("http://localhost:5000/score");
    const response = await data.json();
    return response;
}

//Post the data
async function postData(userdata){
    const data = await fetch("http://localhost:5000/score" , {
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(userdata)
    })
}
