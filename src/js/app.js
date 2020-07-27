require("!style-loader!css-loader!../../dist/style.css")
// require("../css/style.css");
const people = require("./people.js");
const $ = require("jquery");

let peopleList = people(); 
$.each(peopleList, (x) => {
    $("body").append(`<button class='rounded bg-green-400 mx-2 my-3 px-2 py-2 border border-white-1 hover:bg-green-600 hover:text-white'>${peopleList[x].name}</button>`);
}); 
   
console.log(peopleList);