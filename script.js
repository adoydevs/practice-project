// let counter = 0;
// function count(){
//     counter++;
//     alert(counter);
// }


// function myCar (carName , carWeight, carColor, carSeat){
//     this.carName = carName,
//     this.carWeight = carWeight,
//     this.carColor = carColor,
//     this.carSeat = carSeat

//     this.display = function(){
//         console.log(this.carName);
//         console.log(this.carWeight);
//         console.log(this.carColor);
//         console.log(this.carSeat);
//     }

// }

// let myCarDetails = new myCar ("Bhugati" , "500kg" , "blue" , 10);
// let yourCar = new myCar ("You" , "100kg" , "red" , 50);

// myCarDetails.display();
// yourCar.display();


// let x = 5;
// x--;
// console.log(x);


// let counTer = Number (prompt("Type a Number"));
// let result = counTer > 0 ? "Positive" :  counTer < 0 ? "Negetive" : "Zero";

// console.log(result);

// let txt = "Hello World!";
// txt = txt.toUpperCase();


// function myCar(a , b){
//     return a + b;
// }

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;
// console.log(size);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Pineapple");
// console.log(fruits[0]);
// console.log(fruits);



// const points = [40, 100, 1, 5, 25, 10];

// for (let i = points.length -1; i > 0; i--) {
//   let j = Math.floor(Math.random() * (i+1));
//   let k = points[i];
//   points[i] = points[j];
//   points[j] = k;
// }

let numbers = [45, 4, 9, 16, 25];

function myFunction(value , index) {
  console.log(value);
  console.log(index)
  console.log(".............");
}

numbers.forEach(myFunction);