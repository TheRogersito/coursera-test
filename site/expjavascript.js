// // ***** String concatination
// var string = "Hello";
// // string += " World";
// string = string + " World";
// document.write(string + "!");




// // ***** Regular math operators: +, -, *, /
// document.write((5 + 4) / 3);
// document.write(undefined / 5);
// function test1 (a) {
//   document.write( a / 5);
// }
// test1();




// // ***** Equality 
// var x = 4, y = 4;
// if (x == y) {
//   document.write("x=4 is equal to y=4");
// }

// x = "4";
// if (x == y) {
//   document.write("x='4' is equal to y=4");
// }





// // ***** Strict equality
// if (x === y) {
//   document.write("Strict: x='4' is equal to y=4");
// }
// else {
//   console
//   .log("Strict: x='4' is NOT equal to y=4");
// }






// // ***** If statement (all false)
// if ( false || null || 
//      undefined || "" || 0 || NaN) {
//   document.write("This line won't ever execute");
// }
// else {
//   document.write ("All false");
// }

// // ***** If statement (all true)
// if (true && "hello" && 1 && -1 && "false") {
//   document.write("All true");
// }





// // ***** Best practice for {} style
// // Curly brace on the same or next line...
// // Is it just a style?
// function a() 
// {
//   return
//   { 
//     name: "Yaakov"
//   };
// }

// function b() {
//   return { 
//       name: "Yaakov"
//   };
// }

// document.write(a());
// document.write(b());


// For loop
// var sum = 0;
// for (var i = 0; i < 10; i++) {
//   document.write(" valor i="+i);
//   sum = sum + i;
//   document.write(" valor sum="+sum);
// }
// document.write("sum of 0 through 9 is: " + sum);

// function test(tros){
// 	var tros = prompt("amb què vols el bocatacalamares?");
// 	tros = tros || "absolutament res? tens el gust al cul?";
// 	alert("D'aquí 4 anys i 23 minuts t'arribarà el bocatacalamares amb "+tros)
// };
// var dobjecte = {
// 	nom: "Senyor",
// 	cognom: "Imbecil",
// 	fills: {
// 		primer: "Doctor",
// 		segon: "Plastic"
// 	},
// };
// console.log(dobjecte);
// function decidir(){
// 	var mul1 = prompt("Posa un número per multiplicar");
// 	var mul2 = prompt("Posa un altre número per multiplicar");
// 	var resultat = mul1*mul2
// 	alert("El resultat és "+resultat)
// };
// function multi1(fac) {
// 	var hey = function (foc){
// 		return fac*foc
// 	}
// 	return hey
// }
// var fuc = multi1(4);
// console.log(fuc(15));

// function cercle (radius) {
//   this.radius = radius;
// }
// cercle.prototype.getArea = 
//   function () {
//     return Math.PI * Math.pow(this.radius, 2);
//   };
// var uncercle = new cercle(10);
// console.log(uncercle.getArea());
// var altrecercle = new cercle(20);
// console.log(altrecercle);

// var literalCircle = {
//   radius: 10,

//   getArea: function () {
//     var self = this;
//     console.log(this);

//     var increaseRadius = function () {
//       self.radius = 20;
//     };
//     increaseRadius();
//     console.log(this.radius);

//     return Math.PI * Math.pow(this.radius, 2);
//   }
// };
// console.log(literalCircle.getArea());

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.bark = function () {
//   console.log(this.name + " likes barking! Bark!");
// }

// var max = new Dog("Max", "Buddy");
// max.bark();

var hola = new Array();
hola[0] = "Subnormals";
hola[1] = 14;
hola[2] = function (pet){
	console.log("M'agraden els "+pet)
}
hola[3] = {colo: " caca de vaca"}
console.log(hola)
hola[2](hola[0])
console.log(hola[3].colo)

var coses = ["Doctor", "Eustaqui", "Arbre","Subnormal"]
coses[10] = "Rata peluda"
for (var i = 0; i < coses.length; i++) {
	document.write("Treballo de "+coses[i]+"<br>")
}
var cosa1 = ["Catifa", "Pantufla", "Senyor lleig"]
cosa1[99] = "Rata peluda"
for (var llista in cosa1){
	document.write("Soc un/a "+cosa1[llista]+"<br>")
}

(function (window) {
  var noi = {};
  noi.name = "Cabrón";
  var salu = "Hola ";
  noi.sayHello = function () {
    console.log(salu + noi.name);
  }

  window.noi = noi;

})(window);
noi.sayHello();