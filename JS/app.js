//! Updating text and grabbing nodes from HTML document
//? Grabs our "h1" tag from our index.html
let myName = document.getElementById("myName")
console.log(myName)

//? update h1 text and replaces it with set strings ("Jongo Simon")
myName.innerText = "Jongo Simon"

const thingsILike = ["Football", "Foods", "Video Games"];

//? Grabs group list of element nodes and converts to an ARREY list
let liList = document.querySelectorAll(".my-items")
console.log(liList)

//? Setting text for each Node list with an Existing ARRAY (thingsILike)
for (let i = 0; i < liList.length; i++) {
    console.log (liList[i])
    liList[i].innerText = thingsILike[i]

}

//  liList[0].innerText = thingsILike[0]
//  liList[1].innerText = thingsILike[1] 
//  liList[2].innerText = thingsILike[2]

//! Creating Tags and Elements
let liItem = document.createElement("li");
console.log(liItem);
liItem.innerText = "Watch TV"
console.log(liItem);

//? appending the liItem node to our HTML page.
// parentEl.appendChild(liItem);


//! DOM styling and changing text

let paragraph = document.querySelector("p");
console.log(paragraph);

paragraph.style.fontSize = "25px";
paragraph.style.backgroundColor = "#4498";



//! ClassName (Bootstrap)

let leftSide = document.querySelector(".leftBox")
console.log(leftSide)

//? removing a class name

leftSide.classList.remove("col-6")
console.log(leftSide)
leftSide.classList.add("col-3")


//! Text from an input box

 let textBox = document.getElementById("num");
 console.log(textBox.value)
//? Grabs the value of a textBox (IMMEDIATELY ONLOAD)
leftSide.addEventListener('click', () => {
textBox = document.getElementById("num");
 console.log(textBox.value)
})


//! Removing Elements

let rightSide = document.querySelector(".rightBox")
console.log(rightSide)

rightSide.remove();

//? how to get an attribute from an element 
console.log(textBox.getAttribute('type'))