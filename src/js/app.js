require("!style-loader!css-loader!../../dist/style.css");
const React = require("react");

// require("../css/style.css");
const people = require("./people.js");
// const $ = require("jquery");

let peopleList = people(); 
// $.each(peopleList, (x) => {
//     $("body").append(`<button class='rounded bg-green-400 mx-2 my-3 px-2 py-2 border border-white-1 hover:bg-green-600 hover:text-white'>${peopleList[x].name}</button>`);
// }); 
const App = () => {
    console.log(peopleList);

    return (
           <div> 
               <h3 className="bg-blue-400 rounded w-100 py-4 px-2">Webpack App with React & TailwindCSS</h3>
               {peopleList.map((person, index) => (
                <button key={index} className='rounded-full bg-blue-400 mx-2 my-3 px-2 py-2 border-white-4 hover:bg-blue-600 hover:text-white'>
                    {/* {person.name} */}
                    button {index + 1}
                    </button>
            ))} 
            </div>
    );
}   

module.exports = App;

