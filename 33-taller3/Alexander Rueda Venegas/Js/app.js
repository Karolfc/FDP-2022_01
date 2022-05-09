const URL_api = "https://raw.githubusercontent.com/Axelito02/FDP-2022_01/main/33-taller3/weather.js";

// search bar
const search_cities = document.getElementById('bar_search');

// containers to display the data
const display_temperature = document.querySelector('#content_temperature');
const display_precipation = document.querySelector('#content_precipitation');
const display_uvlevel = document.querySelector('#content_ultraviolet');
const display_sunny = document.querySelector('#content_sunny');
const display_city_title = document.querySelector('#ciudad_tilte');

let api;
let city;

async function run(){
    const res = await fetch(URL_api);
    api = await res.json();
    city = api.ciudades;
    results = search_cities.value;
    draw();
    console.log(city);
}

// class day_of_the_week {
//     constructor(day, temp, sunny) {
//         this.day = day;
//         this.temp = temp;
//         this.sunny = sunny;
//     }
//     draw(domObj){
//         console.log(this.day, this.temo, this.sunny);
//     }
// }

// funtion for get the object bogota
function draw(){
    city.forEach(city => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${city.daily[0].celcius+" "+"degrees Celsius"}`;
        display_temperature.appendChild(opt);
    });

    city.forEach(city => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${city.daily[0].precipitation+"%"}`;
        display_precipation.appendChild(opt);
    });

    city.forEach(city => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${"uv index"+" "+city.daily[0].uvIndex}`;
        display_uvlevel.appendChild(opt);
    });

    city.forEach(city => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${city.daily[0].sunny}`;
        display_sunny.appendChild(opt);
    });

    city.forEach(city => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${city.city}`;
        display_city_title.appendChild(opt);
    });

}

function clear_mo() {
    display_temperature.innerHTML = "";
    display_precipation.innerHTML = "";
    display_uvlevel.innerHTML = "";
    display_sunny.innerHTML = "";
    display_city_title.innerHTML = "";
    gsap.from('#content_temperature', { duration: 1, y: '-120%', ease: 'power3.inOut', delay: 0.2})
    gsap.from('#display_precipation', { duration: 1, y: '-120%', ease: 'power3.inOut', delay: 0.2})
    gsap.from('#display_sunny', { duration: 1, y: '-120%', ease: 'power3.inOut', delay: 0.2})
    gsap.from('#display_uvlevel', { duration: 1, y: '-120%', ease: 'power3.inOut', delay: 0.2})
}