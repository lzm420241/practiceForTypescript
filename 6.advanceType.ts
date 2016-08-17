//union types
function padLeft(value: string, padding: any){
	if(typeof padding === "number"){
		return Array(padding + 1).join(" ") + value;
	}
	if(typeof padding === "string"){
		return padding + value;
	}
	throw new Error(`Expected string or number, got '${padding}'`);
	
}
padLeft("hello world", 4);

interface Bird {
	fly();
	layEggs();
}

interface Fish {
	swim();
	layEggs();
}
function getSmallPet(): Fish | Bird {
	//...
}
let pet = getSmallPet();
pet.layEggs();
pet.swim();