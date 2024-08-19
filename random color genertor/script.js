

// monday class

// let button = document.querySelector('#btn');
// // button.addEventListener('click',(e) =>{
// //     console.log(e);
// //     console.log(e.type);// pointerevent, propety and types=  object handler hota ha 
// //     console.log(e.clientX);// x is horizontal
// //     console.log(e.clientY);// y is vertical 
// // })

// button.addEventListener('click', () => {
//     console.log("this is handler 1");
// })


// button.addEventListener('click', () => {
//     console.log("this is handler 2");
// })

// const handler3 = () =>{
//     console.log("this is handler 3");
// }
// button.addEventListener('click', handler3)// remove krna k liy arrow function bana ka remove hogae

// // button.addEventListener('click', () => {
// //     console.log("this is handler 3");
// // })


// button.removeEventListener('click',handler3)
// // js developer ma space hidden hoti ha -

// const myDiv = document.getElementById("myDIV");
// myDiv.addEventListener("mousemove", myFunction);

// function removeHandler() {
//   myDiv.removeEventListener("mousemove", myFunction);
// }

// function myFunction() {
//   document.getElementById("demo").innerHTML = Math.random();
// }

// // const arr = () =>{

// // }

// const multiplication = (l, b) =>{
//   return l*b;
// }

// console.log(multiplication(3,7));

// getAttribuites
// let divElement = document.querySelector('div');
// console.log(divElement);

// let att = divElement.getAttribute('class');
// console.log(att);

// // setAttributes 

// let para = document.querySelector('p');
// console.log(para.setAttribute('id','newid'));


// function myFunction() {
//   document.getElementById("myH1").setAttribute("class", "democlass"); 
// }

let para = document.querySelector('p');
para.style.backgroundColor = 'blue'
para.style.color = 'pink';
para.style.fontSize = '25px'

let newbtn = document.createElement('button');
newbtn.innerText = 'submit'
console.log(newbtn);

let add = document.querySelector('div');
// add.append(newbtn);// inside
// add.prepend(newbtn)
add.after(newbtn)// outside of div completly after
// add.before(newbtn) // outside of the div before 

let newh = document.createElement('h2');
newh. innerText = 'JS Create Element';

add.prepend(newh)

