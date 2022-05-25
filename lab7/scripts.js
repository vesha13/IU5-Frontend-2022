
const api =  "58276d2fb015c0846c12a66b4cc972b1";

check("Tokyo");

function check(city) {
    console.log(city)
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&lang=en&appid=" + api;
    fetch(url).then((resp) => resp.json()).then((data) =>
    {
        console.log(data);
        if (data.cod === "404") {alert("Sorry we couldn't find this city( Let's see Konoha together"); best();}
        else change(data);
    }
    );
}

function search(e)
{
    if (e.target === document.getElementById("Button")) {
        check(document.getElementById("city_search").value);
    } else if (e.code === "Enter") {
            check(document.getElementById("city_search").value);
    }
}
addEventListener('click', search, false);
addEventListener('keydown', search, false);

function change(data){

    let zero;
        if (Math.round(data.main.temp -273.15)>0)
            zero= " degres above zero";
        else zero =" degres below zero";
    console.log(data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1));

        switch( data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1)){
        case "Clear sky":
            document.getElementById("now").style.backgroundImage = "url('image/clear.jpg')";
            break;
        case "Few clouds":
            document.getElementById("now").style.backgroundImage = "url('image/few.jpg')";
            break;
            case "Overcast clouds":
                document.getElementById("now").style.backgroundImage = "url('image/over.jpg')";
                break;
        case "Scattered clouds":
            document.getElementById("now").style.backgroundImage = "url('image/scet.jpg')";
            break;
        case "Broken clouds":
            document.getElementById("now").style.backgroundImage = "url('image/broken.jpg')";
            break;
        case "Shower rain":
            document.getElementById("now").style.backgroundImage = "url('image/shower.jpg')";
            break;
        case "Rain":
            document.getElementById("now").style.backgroundImage = "url('image/rain.png')";
            break;
        case "Thunderstorm":
            document.getElementById("now").style.backgroundImage = "url('image/thoun.jpg')";
            break;
        case "Snow":
            document.getElementById("now").style.backgroundImage = "url('image/snow.jpg')";
            break;
        case "Mist":
            document.getElementById("now").style.backgroundImage = "url('image/mist.jpg')";
            break;

    }

        document.getElementById("cityName").innerText= "Weather in " + data.name;
        document.getElementById("descr").innerText = data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1);

        document.getElementById("wind").innerText=  + Math.round(data.wind.speed) +" m/s";
        document.getElementById("tem").innerText= "Temperature: " + Math.round(data.main.temp -273.15) + zero ;
        document.getElementById("humid").innerText=   Math.round(data.main.humidity)+ "%";
        document.getElementById("pres").innerText= +  Math.round(data.main.pressure*0.75) + " mmhg";



}

function best(){
    document.getElementById("now").style.backgroundImage = "url('image/wel.jpeg')";
    document.getElementById("cityName").innerText= "Weather in Konoha";
        document.getElementById("descr").innerText = "Always sunny!";

        document.getElementById("wind").innerText=  "3 m/s";
        document.getElementById("tem").innerText= "Temperature: so very hot" ;
        document.getElementById("humid").innerText=   "100%";
        document.getElementById("pres").innerText= +  "not";
        document.getElementById("sas").style.backgroundImage= "url('image/wel.jpeg')";
}

