

async function getWeather(){

try{

     let  city= document.getElementById("city").value;

     document.getElementById("result").innerText = "Loading...";

     let apiKey="a856e5414a844b3c73aa34d173485d0f";

   let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


let res= await fetch(url);

if(!res.ok){
    throw new Error("city not found");
}


let data = await res.json();

let cityName=data.name;

let temp=data.main.temp;

let weather = data.weather[0].description.toLowerCase();



if (weather.includes("cloud")) {
  document.body.style.background = "#bdc3c7";
}
else if (weather.includes("rain")) {
  document.body.style.background = "#2c3e50";
}
else if (weather.includes("clear")) {
  document.body.style.background = "#4facfe";
}
else {
  document.body.style.background = "#00c6ff";
}

let humidity=data.main.humidity;

//icon
let icon = data.weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    document.getElementById("result").innerHTML = `
      <img src="${iconUrl}" />
      <h3> ${cityName}</h3>
      <p>🌡️ ${temp}°C</p>
      <p>☁️ ${weather}</p>
      <p>💧 ${humidity}%</p>
    `;

//document.getElementById("result").innerText=`${temp}C | ${weather} | ${humidity}%` ;

}

catch(err){

    document.getElementById("result").innerText="Error:" + err.message;
}}
   

document.getElementById("city").addEventListener("keypress",function(e){

    if(e.key === "Enter"){

        getWeather();
    }
});
    
