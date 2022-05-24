class Country {
    constructor(name, lang, greeting, colors, flagURL) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flagURL = flagURL
    }
}
let usa = new Country("USA", "English", "Hello world.", ["red", "white", "blue"], "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/800px-Flag_of_Mexico.svg.png");
let algeria = new Country("Algeria", "Arabic and Berber", "مرحبا بالعالم", ["blue", "yellow", "red"], "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/800px-Flag_of_Algeria.svg.png")
let bangladesh = new Country("Bangladesh", "Bengali", "ওহে বিশ্ব",["red", "green", "gold"], "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/800px-Flag_of_Bangladesh.svg.png");
let mongolia = new Country("Mongolia", "Mongolian", "сайн уу ертөнц", ["blue", "red", "gold"], "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/800px-Flag_of_Mongolia.svg.png");

function SwitchCountry() {
    let input = document.getElementById("CountryList").value;

    if (input === "USA") {
        getCountryInfo(usa);
        getCountryColors(usa);
    }
    else if (input === "Mexico") {
        getCountryInfo(mexico);
        getCountryColors(mexico);
    }
    else if (input === "Algeria") {
        getCountryInfo(algeria);
        getCountryColors(algeria);
    }
    else if (input == "Bangladesh"){
        getCountryInfo(bangladesh);
        getCountryColors(bangladesh);
    }
    else if (input == "Mongolia"){
        getCountryInfo(mongolia);
        getCountryColors(mongolia);
    }
}

function getCountryInfo(country){
    document.getElementById("countryInfo").innerHTML = 
    `<h2>${country.name}</h2>
    <h2>${country.lang}</h2>
    <h2>${country.greeting}</h2>
    <h2><img src=${country.flagURL}></h2>`;
}

function getCountryColors(country){
    document.getElementById("Color1").style.backgroundColor = country.colors[0];

    document.getElementById("Color2").style.backgroundColor = country.colors[1];

    document.getElementById("Color3").style.backgroundColor = country.colors[2];
}