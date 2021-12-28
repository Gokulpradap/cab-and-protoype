 // 1. call

var CALL = function(){
	 		return this.lastName + "," + this.firstName;

}

  var student2 ={
 	firstName: "Gokul",
 	lastName: "Pradap",
 	fullName: CALL,
 };

console.log(CALL.call(student2)); //Pradap,Gokul
//    Call invokes the function and allows you to pass in arguments one by one.


 // 2. apply
var APPLY = function(){
	 		return this.lastName + "," + this.firstName;

}

  var student2 ={
 	firstName: "devid",
 	lastName: "warnner",
 	fullName: APPLY,
 };

  console.log(APPLY.apply(student2)); //warnner,devid

  // Apply invokes the function and allows you to pass in arguments as an array.


  // 3. bind

var BIND = function(){
	 		return this.lastName + "," + this.firstName;

}

  var student2 ={
 	firstName: "MS",
 	lastName: "Dhoni",
 	fullName: BIND,
 };

   console.log(BIND.bind(student2)); 
//    //ƒ (){
// 	 		return this.lastName + "," + this.firstName;

// }


   // Bind returns a new function, allowing you to pass in a this array and any number of arguments.

// Prototype inheritance:
// The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. 
// It is a method by which an object can inherit the properties and methods of another object.


let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // (*)

// we can find both properties in rabbit now:
console.log( rabbit.eats ); // true 
console.log( rabbit.jumps ); // true


// A property from rabbit, and it’s missing, JavaScript will automatically take it from animal.
