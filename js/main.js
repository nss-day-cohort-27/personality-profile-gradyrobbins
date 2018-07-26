console.log("hello world main.js")

// You must create an object with three keys, each representing one of the sections. Store that object in local storage.
//     Then when you write your application, read from local storage and use the data to build the three sections in your HTML.


//     document.createElement()


// from W3schools:
// var para = document.createElement("P");                       // Create a <p> element
// var t = document.createTextNode("This is a paragraph.");      // Create a text node
// para.appendChild(t);                                          // Append the text to <p>
// document.getElementById("myDIV").appendChild(para);           // Append <p> to <div> with id="myDIV"

var para = document.createElement("P");                       // Create a <p> element
var t = document.createTextNode("This is a paragraph.");      // Create a text node
para.appendChild(t);                                          // Append the text to <p>
document.getElementById("myDIV").appendChild(para);           // Append <p> to <div> with id="myDIV"

// trying to replicate the above, except, make it a section and add innerHTML instead
var para1 = document.createElement("P");                       // Create a <p> element
var t1 = document.createTextNode("General Profile Section: Three statements that you agree with. Three statements that you don't agree with, and why..");                 
s1.appendChild(t1);
document.getElementById("s1").appendChild(para);           // Append <p> to <div> with id="s1"
















// You must create an object with three keys, each representing one of the sections. Store that object in local storage.
//     Then when you write your application, read from local storage and use the data to build the three sections in your HTML.
//     localStorage.getItem()


//JavaScript objects that are stored in memory. In order to send a JavaScipt object to Local Storage, we need to serialize it (make it into a string). We do that with JSON.stringify()
// Three statements that you agree with. Three statements that you don't agree with, and why.
let agree = {
    lastName: "Ducharme",
    favoriteColor: "Yellow",
    homeTown: "Baltimore"
};

let disagree = {
    lastName: "Brownlee",
    favoriteColor: "Blue",
    homeTown: "Pittsburgh"
};


//instead of writing this code over and over again, you can make a function 
//to make it dynamic you need to pass it the parameters that will change each time - the name that you want to store it as, and the object you want to store
function setData(jsObject, nameTag){
    //stringify it!
    let stringifiedObject = JSON.stringify(jsObject);
    //send it to local storage
    localStorage.setItem(nameTag, stringifiedObject);
}

setData(agree, "agree")
setData(disagree, "Disagree");


//we will do the same thing when loading the data back from local storage. This time we will get the data as a string and we need to make it back into a javascript object by using parse
function loadData(nameTag){
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    //we need to get this object out of the function. Return will return it to where we invoked it
    return parsedObject;
}


let a1 = loadData(agree);
console.log(a1)  //returns "Null" idk why?
let d1 = loadData(disagree);
console.log(d1);  //returns "null " idk why?





















// here is the template for local storage, tania rascia's tutorial
// const form = document.querySelector('form');
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
// const input = document.getElementById('item');
// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// localStorage.setItem('items', JSON.stringify(itemsArray));
// const data = JSON.parse(localStorage.getItem('items'));

// const liMaker = (text) => {
//   const li = document.createElement('li');
//   li.textContent = text;
//   ul.appendChild(li);
// }

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   itemsArray.push(input.value);
//   localStorage.setItem('items', JSON.stringify(itemsArray));
//   liMaker(input.value);
//   input.value = "";
// });

// data.forEach(item => {
//   liMaker(item);
// });

// button.addEventListener('click', function () {
//   localStorage.clear();
//   while (ul.firstChild) {
//     ul.removeChild(ul.firstChild);
//   }
// });