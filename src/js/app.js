require("!style-loader!css-loader!../../dist/style.css")
// require("../css/style.css");
const people = require("./people.js");
const $ = require("jquery");

let peopleList = people(); 
$.each(peopleList, (x) => {
    $("body").append("<button class='rounded bg-green-200 mx-2 my-3 px-3 py-3'>" + peopleList[x].name + "</button>")
    // $("body").append("<p></p>")
}); 
   
console.log(peopleList);