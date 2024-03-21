var inputvalue= document.querySelector('#cityinput');  //to target id
var btn= document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');


// goto weather API, Signin and feth my API and copy it.
apik= "6e8e6be965b30746c9d1474cb81c91f0"

function convertion(val){
    return (val - 273).toFixed(3)  //.tofixed(to dicide how many decimal/digit of value)
}
 
btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value +'&appid='+apik)   //fetch- keyword
    .then(res => res.json())  //data take from "json" file

    .then(data =>
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspeed = data['wind']['speed']

            city.innerHTML=`Weather of <span>${nameval}<span>`
            temp.innerHTML= `Temperature: <span>${convertion(tempature)}C</span>`
            description.innerHTML= `Sky Condition: <span>${descrip}</span>`
            wind.innerHTML=`Wind Speed: <span>${wndspeed} km/h</span>`

        })


        .catch(err => alert('You Entered Wrong City Name'))
})

