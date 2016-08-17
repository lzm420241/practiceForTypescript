//demo
interface LabelledValue {
	label: string;
}
function printLabel(labelledObj: LabelledValue){
	console.log((labelledObj.label));
	
}
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

//option Properties
interface SquareConfig {
	color?: string;
	width?: number;
}
function createSquare(config: SquareConfig): {color: string; area: number}{
	let newSquare = {color: "white", area: 100};
	if(config.color){
		newSquare.color = config.color;
	}
	if(config.width){
		newSquare.area = config.width * config.width;
	}
	return newSquare;
}
let mySquare = createSquare({color: "black"});

interface SearchFunc {
	(source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string){
	let result = source.search(subString);
	if(result == -1){
		return false;
	}else{
		return true;
	}
}

//Indexable Types
interface StringArray {
	[index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];

//Class Types
interface ClockInterface {
	currentTime: Date;
	setTime(d: Date);
}
class Clock implements ClockInterface {
	currentTime: Date;
	setTime(d: Date){
		this.currentTime = d;
	}
	constructor(h: number, m: number){}
}

//extending interfaces
interface Shape {
	color: string;
}
interface Square extends Shape {
	sideLength: number;
}
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;