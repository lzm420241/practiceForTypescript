//Boolean
let isDone: boolean = false;

//number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//string
let color: string = "blue";
color = "red";
let fullName: string = 'Bob Bobbington';
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }
	I'll be ${ age + 1 } years old next month.`

//Array
let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];


//tuple
let x: [string, number];
x = ["hello", 10];
// error: x = [10, "hello"];
console.log(x[0].substr(1)); //string has substr method
// error: console.log(x[1].substr(1));   number has not substr method
x[3] = "world"; // ok , 'string' can be assigned to 'string|number'
console.log(x[5].toString()); // ok, 'string' and 'number' both have 'toString'
// error: x[6] = true;  'boolean' isn't 'string | number'

//Enum
enum Color {Red, Green, Blue}; // enum's member can set the value of their member like { red = 1, green, blue}
let c: Color = Color.Green;

//Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
notSure.ifItExists();
notSure.toFixed();

let prettySure: Object = 4;
// error prettySure.toFixed();  property doesn't exist on type 'Object'
let list_any: any[] = [1, true, "free"];
list_any[1] = 100;

//void
function warnUser(): void {
	alert("This is my warning message");
}
let unusable: void = undefined;  // variable of type void only assign undefined or null

//type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
//or let strLength: number = (someValue as string).length;  //using JSX only are allowed