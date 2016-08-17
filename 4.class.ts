//classes
class Greeter {
	greeting: string;
	constructor(message: string){
		this.greeting = message;
	}
	greet(){
		return "hello, " + this.greeting;
	}
}
let greeter = new Greeter("world");

//inheritance
class Animal {
	name: string;
	constructor(theName: string){ this.name = theName; }
	move(distanceInMeters: number = 0){
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}
class Snake extends Animal {
	
	constructor(name: string) {
		super(name);
	}
	move(distanceInMeters = 5){
		console.log("Slithering");
		super.move(distanceInMeters);
	}
}
class Horse extends Animal {
	
	constructor(name: string) {
		super(name);
	}
	move(distanceInMeters = 45){
		console.log("Galloping...");
		super.move(distanceInMeters);
	}
}
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

//public ,private, protected modifiers and public by default

//Accessors  supports getters/setters
let passcode = "secret passcode";
class Employee {
	private _fullName: string;
	get fullName(): string {
		return this._fullName;
	}
	set fullName(newName: string){
		if(passcode && passcode == "secret passcode"){
			this._fullName = newName;
		}else{
			console.log("Error: Unauthorized update of employee !");
		}
	}
}
let employee = new Employee();
employee.fullName = "Bob Smith";
if(employee.fullName){
	console.log(employee.fullName);
}

//static properties
class Grid {
	static origin = {x: 0, y: 0}
	calculateDistanceFromOrigin(point: {x: number; y: number}){
		let xDist = (point.x - Grid.origin.x);
		let yDist = (point.y - Grid.origin.y);
		return Math.sqrt(x.Dist * xDist + yDist * yDist) / this.scale;
	}
	constructor(public scale: number) {
		// code...
	}
}
let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x:10, y: 10}));

//abstract class
abstract class Department {
	constructor(public name: string){

	}
	printName(): void {
		console.log("Department name:"+ this.name);
	}
	
	abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
	constructor(){
		super("Accounting and Auditing");
	}
	printMeeting(): void {
		console.log("The Accounting Department meets each Monday at 10am");
	}
	generateReports(): void{
		console.log("Generating accounting reports...");
	}
}