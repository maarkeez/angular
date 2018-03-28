"use strict";
var NameAndWeatherLocation = require("./modules/NameAndWeather");
var DuplicateName_1 = require("./modules/DuplicateName");
var tempConverter_1 = require("./tempConverter");
var name = new NameAndWeatherLocation.Name("Adam", "Freeman");
var loc = new NameAndWeatherLocation.WeatherLocation("raining", "London");
var other = new DuplicateName_1.Name();
var cTemp = tempConverter_1.TempConverter.convertFtoC(38);
//Tuples
var tuple;
tuple = ["London", "raining", tempConverter_1.TempConverter.convertFtoC("38")];
console.log("It is " + tuple[2] + " degrees C and " + tuple[1] + " in " + tuple[0]);
//Indexable types
var cities = {};
cities["London"] = ["raining", tempConverter_1.TempConverter.convertFtoC("38")];
cities["Paris"] = ["sunny", tempConverter_1.TempConverter.convertFtoC("52")];
cities["Berlin"] = ["snowing", tempConverter_1.TempConverter.convertFtoC("23")];
for (var key in cities) {
    console.log(key + ": " + cities[key][0] + ", " + cities[key][1]);
}
