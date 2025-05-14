//! UPDATING TEXT AND GRABBING NODES from HTML document
//? Grabs our "h1" tag from our index.html
let myName = document.getElementById("myName")
console.log(myName)

//? Updates h1 text and replaces it with set string ("Margarito Valencia")
myName.innerText = "Margarito Valencia"

const thingsILike = ["Teaching", "Foods", "Games"];

//? Grabs group list of ELEMENT NODES and converts to an ARRAY list
let liList = document.querySelectorAll(".my-items")
//? Grab One node element out of a specific list.
let liSecond = document.querySelector("#myList li:nth-child(2)")
console.log(liList)
console.log(liSecond);

//? Setting TEXT for each Node list with an EXISTING ARRAY (thingsILike)
liList[0].innerText = thingsILike[0]
liList[1].innerText = thingsILike[1]
liList[2].innerText = thingsILike[2]

// debugger
// for (let i = 0; i < liList.length; i++) {
//     console.log(liList[i])
//     liList[i].innerText = thingsILike[i]
// }

//! Creating Tags and Elements

//? Grabbing Ul Node Element to use appendChild()
let parentEl = document.getElementById('myList');
console.log(parentEl)

//? Created a Li Tag ("<li></li>")
let liItem = document.createElement("li");
// console.log(liItem); //<li></li>

liItem.innerText = "Watch Movies"
console.log(liItem); //<li>Watch Movies</li>

//? appending the "liItem" node to our HTML page
parentEl.appendChild(liItem);

//! DOM styling

let paragraph = document.querySelector("p");
console.log(paragraph)

//* .style gives you the option of changing the elements css properties from Javascript
//! https://www.w3schools.com/cssref/index.php
//? Reference to each javascript styling syntax 

paragraph.style.fontSize = "25px";
paragraph.style.backgroundColor = "#914775";


//! DOM Eventlisteners

//? EventListeners are waiting for a type of event to fire off.

let clickButton = document.querySelector("#here");
// console.log(clickButton)
//? clickButton Node element with an EVENTLISTENER referencing "colorList" function
clickButton.addEventListener("click", colorList)

function colorList() {
    //? "liList" variable is only coloring the first three li's
    //* Re-select that node list to get all 4 li's to get an update of latest "li" elements
    let reList = document.querySelectorAll("li");
    console.log(reList)

    for (let i = 0; i < reList.length; i++) {

        reList[i].style.color = "purple"
    }

    leftSide.classList.remove("leftBox")
leftSide.classList.add("newBackground");
}

//! ClassName (Bootstrap)

let leftSide = document.querySelector(".leftBox")
console.log(leftSide)

//? removing a class name
leftSide.classList.remove("col-6")
console.log(leftSide)
leftSide.classList.add("col-3");

//! Text from an input box

let textBox = document.getElementById("num");

//? Grabs the value of a textbox (IMMEDIATELY ONLOAD)
console.log(textBox.value)

leftSide.addEventListener("click", () => {
    //? Re-views and grabs the latest changes to it.
    textBox = document.getElementById("num")
    console.log(textBox)

    //? References Left Box element on HTML page and updates it's text using the inputbox's value attribute
    leftSide.innerText = textBox.value;

})

//! Removing Elements'

let rightSide = document.querySelector(".rightBox")
console.log(rightSide)

//? Removing an eleemnt from HTML DOC
rightSide.remove();

//! Attributes

//? How to get an attribute from an element
console.log(textBox.getAttribute('type'))