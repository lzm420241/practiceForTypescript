//function type   we typed the function ,then the function add a return type
function add(x: number, y: number): number{
	return x + y;
}
let myAdd = function(x: number, y: number): number {return x+y;};

//Lambdas and using this
let deck = {
	suits: ["hearts", "spades", "clubs", "diamonds"],
	cards: Array(52),
	createCardPicker: function(){
		return () => {
			let pickedCard = Math.floor(Math.random()*52);
			let pickedSuit = Math.floor(pickedCard / 13);
			return {suit: this.suits[pickedSuit], card: pickedCard % 13};
		}
	}
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);

//overload
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x: {suit: string; card: number;}[]): number;
function pickCard(x: number): {suit: string; card: number};
function pickCard(x): any {
	if(typeof x == "object"){
		let pickedCard = Math.floor(Math.random() * x.length);
		return pickCard;
	}else if(typeof x == "number"){
		let pickedSuit = Math.floor(x / 13);
		return { suit: suits[pickedSuit], card: x % 13 };
	}
}

let myDeck = [{suit: "diamond", card: 2}, {suit: "spades", card: 10}, { suit: "hearts", card: 4}];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit );
let pickCard2 = pickCard(15);
alert("card: " + pickCard2.card + " of " + pickCard2.suit );