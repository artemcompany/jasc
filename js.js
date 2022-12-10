"use strict"
let x = sloveEquation(3, -4, -20)
function sloveEquation(a, b, c){
	let arr = []; 
	let d = b**2 -4 * a * c;
	if(d > 0){
	let root1 = (-b + Math.sqrt(d) ) / (2 * a);
	let root2 = (-b - Math.sqrt(d) ) / (2 * a);
	arr[0] = root1;
	arr[1] = root2;
	console.log(arr);
	}
	if(d < 0){
		console.log("Корней нет");
	}
	if(d == 0){
	let root0 = -b/(2*a)
	arr [0] = root0;
	console.log(arr);
	}
}