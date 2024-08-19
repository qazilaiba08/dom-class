// var num = [[1,8,3],[7,5,6], [7,13,9]]
// var num2 = [[10,26,8], [12,20,2], [17,3,13]];
// var result = [];

// for (var i = 0; i < num.length; i++) {
//     result[i] =[];
//     for (var j = 0; j < num[i].length; j++) {
//         result[i][j] = num[i][j] + num2[i][j];
//     }
// }

// for (var i = 0; i < result.length; i++) {
//     for (var j = 0; j < result[i].length; j++) {
//         document.write(result[i][j] + " ")
//     }
//     document.write("<br/>")
// } 
// //calculator 

// // let num1 = +prompt( "Enter a number");
// // let num2 = +prompt("Enter a number");
// // let opretor = prompt("enter a opretor");
// // function calcultor (num1,num2,opretor){
// //     if(opretor === "+"){
// //         document.write(num1 +" "+ num2 +" "+ opretor)
// //     }
// // }
// //global values kahta ha
// // let a = 23;
// // let b = 45;
// // function sum (a,b){
// //     return a+b;
// // }
// // console.log(sum(a,b));

// function even(num){
//    return num % 2 === 0;
// }
// console.log(even(6));

// function odd(num){
//     return num % 3 === 0;
//  }
//  console.log(odd(7));

//  //chap switch statment

//  let dayOfWk ="saturday";
//  switch(dayOfWk) {
//      case "monday" :
//     document.write("today is monday"); 
//      break;
//      case "tuesday" :
//         document.write("today is tuesday"); 
//     break;
//     case "wenesday" :
//         document.write("today is wenesday"); 
//      break;
//      case "thrusday" :
//         document.write("today is thrusday");
//         break;
//         case "friday" :
//             document.write("today is friday")
//             break;
//             case "saturday" :
//                 document.write("today is saturday");
//                 break;
//      default :
//      document.write("Shoot me now!");
//      }
//      // chap 40
//      let dayOfWk1 = 3
//      switch(dayOfWk1) {
//          case 1 :
//          alert("Whoopee");
//          break;
//          case 2 :
//          alert("Whoopee");
//         break;
//          case 3 :
//          alert("TGIF!");
//         break;
//          default :
//         alert("Shoot me now!");
//      }

//      let months = "april"
//      function getmonth(months) {
//         switch(months){
//             case "january":
//             document.write("it's january");
//             break;
//             case "feburary":
//             document.write("it's feburary");
//             break;
//             case "march":
//             document.write("it's march");
//             break;
//             case "april":
//             document.write("it's april");
//             break;
//             case "may":
//             document.write("it's may");
//             break;
//             case "june":
//             document.write("it's june");
//             break;
//             case "july":
//             document.write("it's july");
//             break;
//             case "august":
//                 document.write("it's august");
//                 break;
//                 case "september":
//                     document.write("it's september");
//                     break; 
//                     case "october":
//                     document.write("it's october");
//                     break;
//                     default:
//                         document.write("it's not working");
//         }
//         }
//         console.log(getmonth(months));

//         // q

//         // Write a function called calculateDiscount that takes two parameters: productType 
//         //(a string indicating the type of product) and price (a number representing the original price of the product).
//         // The function should calculate and return the discounted price based on the following rules using a switch-case statement:
//         // If productType is "Electronics", apply a 10% discount.
//         // If productType is "Clothing", apply a 20% discount.
//         // If productType is "Books", apply a 15% discount.
//         // For any other productType, return the original price without any discount.
//         // Round the discounted price to two decimal places before returning it.
//         function calculatediscount(prducttype,price){
//             let discount ;
//             switch(prducttype){
//                 case  "Electronic":
//                     discount = price *0.01;
//                     break;
//              case  "Clothing":
//                     discount = price *0.02;
//                     break;
//               case "Books":
//                     discount = price *0.15;
//                     break;
//                     default:
//                         console.log("original price");
//                         break;    
//             }
//             let discountprice = (price - discount).toFixed(2);

//             return discountprice;
//         }
//      console.log(calculatediscount("Electronic",80));
//      console.log(calculatediscount("Electronic",400));
//      console.log(calculatediscount("Clothing",350));
//      console.log(calculatediscount("Book",120));

     // chap 41 while loops

// syantax of while loop//while (condation){ code to be excuatecd}

// let n = +prompt("Enter the value of n");
// let i = 45; // i ki value hamesha choti honi chahyi
// while(i>=n){   // n = 13 i = 0
//     document.write("<br>"+i)// block of while
//     i--;
// }

// question write a program to display sum of numbers from 1 to 100
let sum =0 ;
let num = 1;
while(num<=100){// 1 <= 100 
    sum += num;//sum = sum += num//0+1=1,3,6,10,15,21
    num++;//1(2)
}
document.write("<br>"+"Sum of 1 to 100: " +sum)

// write a program to display a factroil of a number

let number = 4;
let factoril = 1;
while(number>0){
    factoril = factoril * number //4,12,24,0
     number--;//3,2,1
}
document.write("<br>"+"Factorial of a number is : " +factoril)

//write a program to display finding first 10 even number
let evenNumber = [];
let i =1;
while(evenNumber.length< 10){
    if(i %2===0){
        evenNumber.push(i)// empty array ma add krwana ka liy push use kiy
    }
    i++;
}
document.write("<br>"+"first 10 even number is : " + evenNumber)

// let oddNumber = [];
// let a =0;
// while(oddNumber.length<10){
//     if(i %3===0){
//     oddNumber.push(i)// empty array ma add krwana ka liy push use kiy
//     }
//     a++;
// }
// document.write("<br>"+"first 10 odd number is : " + oddNumber)

//write a program to display user input vaildation

// let userInput ;
// let password = "Javascript123";
// while(userInput !==password){
//     userInput = prompt("Enter your password");
// }
// document.write("<br>"+"Access Granted")

// write a program to display genrating countdown

// let countdown = 10;
// while(countdown>0){
// document.write("<br>"+countdown)
// countdown--;
// }
// document.write("<br>"+"<h1>Happy New Year</h1>")

// chap do while loop

// do while loop ma condation true nhi bhi ho tab bhi chalta ha
// intalize wali value return kr daga
//  let n = +prompt("enter the value of n")
// let a =10;
// do{
//     document.write("<br>"+a)
//    a++;
// } while(a<=n) // n = 12
    
  // question write a program to display sum of numbers from 1 to 100
// let Sum =0 ;
// let Num = 1;
// do{
//     Sum += Num;//sum = sum += num//0+1=1,3,6,10,15,21
//     Num++;//1(2)
// }
// while(Num<=100)
// document.write("<br>"+"Sum of 1 to 100: " +Sum)


// // Write a program  to display for a number factorial of a number
// let SUM  = 4
// let factorial = 1
// do{
//     factorial = factorial * SUM;
//     SUM--
// }while (SUM>0)
// document.write("factorial of  a number is: " + factorial)

// //write a program to display finding first 10 even number
// let EvenNumber = [];
// let b =1;
// do{
//     if(b%2===0){
//         EvenNumber.push(b)// empty array ma add krwana ka liy push use kiy
//     }
//     b++;
  
// }
// while(EvenNumber.length< 10)
// document.write("<br>"+"first 10 even number is : " + EvenNumber)

//write a program to display user input vaildation

// let userInput ;
// let password = "Javascript123";
// do{
//     userInput = prompt("Enter your password");
// }
// while(userInput !==password)
// document.write("<br>"+"Access Granted")

// write a program to display genrating countdown

// let countDown = 10;
// do{
//     document.write("<br>"+countDown)
//     countDown--;
// }
// while(countDown>0)
// document.write("<br>"+"<h1>Happy New Year</h1>")

// fUNCATIONS 

function Sum(a,b){
    return a * Number(b);
}
console.log(Sum(2,3));// arguments

// DOM Document 

console.log(DocumentType)