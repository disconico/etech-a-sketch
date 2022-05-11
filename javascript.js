console.log('Hello world');

//Etch-a-sketch


//Assign all elements
const container = document.body.getElementById('container');

//Create boxes on page load
// window.addEventListener('load', createDiv(16));

createDiv();

//Create divs
// function createDiv () {
//     for (let i = 0; i < 16; i++) {
//         newDiv = document.createElement('div');
//         newDiv.id = `square-number ${i}`;
//         newDiv.class = 'square-div';
//         container.appendChild(newDiv);
//         return newDiv;
//     }
// }




//Create divs
function createDiv () {
        const newDiv = document.body.createElement('div');
        const divContent = document.body.createTextNode("Hi I'm the new div");
        newDiv.appendChild(divContent);
        container.appendChild(newDiv);
    };





