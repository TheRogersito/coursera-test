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
var sum = 0;
for (var i = 0; i < 10; i++) {
  document.write(" valor i="+i);
  sum = sum + i;
  document.write(" valor sum="+sum);
}
document.write("sum of 0 through 9 is: " + sum);

function test(tros){
	var tros = prompt("amb què vols el bocatacalamares?");
	tros = tros || "absolutament res? tens el gust al cul?";
	alert("D'aquí 4 anys i 23 minuts t'arribarà el bocatacalamares amb "+tros)
};
var dobjecte = {
	nom: "Senyor",
	cognom: "Imbecil",
	fills: {
		primer: "Doctor",
		segon: "Plastic"
	},
};
console.log(dobjecte);
function decidir(){
	var mul1 = prompt("Posa un número per multiplicar");
	var mul2 = prompt("Posa un altre número per multiplicar");
	var resultat = mul1*mul2
	alert("El resultat és "+resultat)
};
function multi1(fac) {
	var hey = function (foc){
		return fac*foc
	}
	return hey
}
var fuc = multi1(4);
console.log(fuc(15));