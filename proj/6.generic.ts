function identity<T>(arg: T[]): T[] {
	console.log(arg.length);
	return arg;
}
// let identity: <U>(arg: U) => U = identity;

interface GenericIdentityFn<T> {
	(arg: T): T;
}
function identity_extend<T>(arg: T): T {
	return arg;
}
let myIdentity: GenericIdentityFn<number> = identity_extend;

//generic class
class GenericNumber<T>{
	zeroValue: T;
	add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

//Generic Constraints
interface Lengthwise {
	length: number;
}
function loggingIndentity<T extends Lengthwise>(arg: T): T {
	console.log(arg.length);
	return arg;
}
