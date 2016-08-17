//var
var a = 10;
function f(){
	var message = "hello, world";
	return message;
}

function f1(){
	var a = 10;
	return function g(){
		var b = a + 1;
		return b;
	}
}
var g = f1();
g(); // return '11'

function f3(){
	var a = 1;
	a = 2;
	var b = g();
	a = 3;
	return b;
	function g(){
		return a;
	}
}
f3();

//js hava odd scoping rules
//At any point that g gets called, the value of a will be tied to the value of a in f

//let  -- block-scoping
function f4(input: boolean){
	let a = 100;
	if(input){
		//still okay to reference 'a'
		let b = a + 1;
		return b;
	}
	//Error 'b' doesn't exit here;
	// return b;
}

//illegal to use 'a' it's declared

//a++;
//let a ;

//in typescript you can still capture a block-scoped variable /
//  before it's declared, but in es2015, it will throw an error

//let can't redeclare,but var do

//const
const numLivesForCat = 9;

