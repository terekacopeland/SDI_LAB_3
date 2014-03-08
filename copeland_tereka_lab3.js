//alert("JavaScript works!");
//SDI 1403
//Lab 3 
//Following a flowchart

//variables

var sandwich = "turkey sandwich"
var soup = "cheddar brocoli soup";
var closeRestaurant = "Crispers";
var Decided = true;
var howMuchCash = false;
var extra



//my outputs
console.log("I have an hour break for lunch so I decide to head to " + closeRestaurant + ".");
console.log("The menu is huge and I am undecided on what to have.");
console.log("My waiter is kind and asks me if I need any help.")
var whatsForLunch = confirm ("Do you want a Soup and Sandwich or Salad? \nYes for Soup and Sandwich or No for Salad");

if (whatsForLunch === Decided) {
	console.log("If I have enough money i'll take the " + soup + " and " + sandwich + " combo, thank you!");
	
	var howMuchCash = prompt ("How much cash do you have? \nEnter a number between 1 - 10\n");

	if (howMuchCash>5) {

		console.log("I'll take the combo!");

	}else{

		console.log("I only have enough for the salad!");
};

	}else{
		console.log("I'll take the salad today!");
		
};

extra = prompt ("How many desserts would you like today? ");
extra = parseInt(extra);
console.log("You have 0 desserts on your order and you'd like to add " + (extra + 0));





