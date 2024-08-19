console.log(document);
console.log(document.head);
console.log(document.body.childNodes);

// let head = document.getElementById("heading")
// // head.style.color="blue";
// head.style.backgroundColor="black";
// head.style.fontSize="64px";
// // console.log(head)

// let p = document.getElementsByClassName("para")
// // p[0].style.color = "red";
// // p[0].style.fontSize="40px";
// // p[0].style.backgroundColor="grey";
// // p[1].style.color = "skyblue";
// // p[1].style.fontSize="40px";
// // p[1].style.backgroundColor="darkgrey";
// p[1].innerHTML= "DOM Manipulation"

// let collect = document.getElementsByTagName("li");
// document.getElementById("demo").innerHTML = collect[0].innerHTML;
// // document.getElementById("demo").innerHTML = collect[1].innerHTML;

// function changeColor(newColor){
//     const btn = document.getElementById("para")
//     btn.style.color = newColor
// }

// let select = document.querySelector("p").style.backgroundColor = "purple"

// document.getElementById("demo").innerHTML = "With the object model, JavaScript gets all the power it needs to create dynamic HTML"

// const element = document.getElementById("intro");

// document.getElementById("demo").innerHTML = 
// "The text from the intro paragraph is: " + element.innerHTML;

// first way of concatnate tag name and id 
// const element = document.getElementsByTagName("p");

// document.getElementById("intro").innerHTML = 'The text in first paragraph (index 0) is: ' + element[0].innerHTML;

// // second way of concatnate tag name and id
// const elements = document.getElementsByTagName("p");

// document.getElementById("demo").innerHTML = 'The text in first paragraph (index 0) is: ' + elements[0].innerHTML;

// const x = document.getElementById("main");
// const y = x.getElementsByTagName("p");

// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;

// div ki elemnet ko call kra raha ha is liy alag sa vaiable bana k call kra raha ha
// const a = document.getElementsByClassName("con");
// const firstPara = a[0]
// const b = firstPara.getElementsByTagName("p");
// document.getElementById("para").innerHTML = 
// 'The HTML DOM element by class Name is (index 1) container' + b[1].innerHTML;

// // simple tag ki jaga class ko call kra 
// const x = document.getElementsByClassName("intro");
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;

// const x = document.querySelectorAll("p.intro");
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) with class="intro" is: ' + x[1].innerHTML;

// SET TIME OUT function

// document.write("Hello World!")

// setTimeout(() => {
//     alert("I'm inside set ytime out function")
// }, 10000);// 3sec

// DOM Class 3

// click Eventlistner
let button = document.getElementById("btn")
// button.addEventListener("click",() =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// // contextmenu eventlistner 
// button.addEventListener("contextmenu",() =>{
//     document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// // dblclick Eventlistner
// button.addEventListener("dblclick",() =>{
//     document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// mousedown Eventlistner
// button.addEventListener("mousedown",() =>{
//     document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// // mouseup Eventlistner
// button.addEventListener("mouseup",() =>{
//     document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// button.addEventListener("mouseenter",() =>{
//     document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// button.addEventListener("mouseleave",() =>{
//     document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// button.addEventListener("mousemove",() =>{
//     document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// button.addEventListener("mouseout",() =>{
//     document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// button.addEventListener("mouseover",() =>{
//     document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// Key board event

// button.addEventListener("keydown",(e) =>{
//     document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click";
//     console.log(e);
// })

// button.addEventListener("keyup",(e) =>{
//     document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click";
//     console.log(e );
// })

// button.addEventListener("keypress",(e) =>{
//     document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click";
//     console.log(e .key);
// })

// function myFunction() {
//     let y = document. getElementById("fname");
//     y.value = y.value.toLowerCase()
// }

// function myFunction1() {
//    alert("you are a input field")
// }
// function myFunction2(){
//      document. getElementById("email").innerHTML = "You passed a key inside";
//     document.getElementById("email").style.color = 'purple'
// }

// for Each function loop

let text = "";
const fruits = ["Apple","orange","peach", "mango"];
fruits.forEach(myFruits)
document.write(text);

function myFruits(item, index){
    text = text +index +" : " +item +"<br>";
}

// let sum = 0 ;
// const number = [56, 89 , 34, 76];
// number.forEach( myNumber)
// document.write(sum)

// function myNumber (item){
//     sum = sum + item
// }
const number = [56, 89 , 34, 76];
number.forEach( myNumber)
document.write(number)

function myNumber (item , index ,arr){
    arr[index]= item * 10;
}