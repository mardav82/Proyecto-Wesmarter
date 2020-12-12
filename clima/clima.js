console.log('todo esta bien');

// http://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=7960d229cedb00be75db9e6cf4628823&lang=es&units=metric

var url ="https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=7960d229cedb00be75db9e6cf4628823&lang=es&units=metric";
fetch(url)
    .then(res =>{
        if (res.ok){
            console.log("todo esta bien");
            res.json()
            .then(data =>{
                console.log(data);
                
                ciudad.innerHTML = data.name;
                contenido.innerHTML= data.main.temp;

            });
        } else {
            console.log("opps algo falló")
        }
    })
    .catch(error =>{
        console.error("oops algo falló")
    })