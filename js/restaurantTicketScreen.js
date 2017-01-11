var menuScreen = [];
var orderNum = 0;
var isNewOrder = undefined;

function newOrder(drink, meal, side, dessert)
{
	this.drink = drink;
	this.meal = meal;
	this.side = side;
	this.dessert = dessert;

	isNewOrder = true;

	if(this.drink != undefined)
	{
		menuScreen.push(drink);
	}

	if(this.meal != undefined)
	{
		menuScreen.push(meal);
	}

	if(this.side != undefined)
	{
		menuScreen.push(side);
	}

	if(this.dessert != undefined)
	{
		menuScreen.push(dessert);
	}

	cycleOrderNum();
}

function cycleOrderNum()
{
	if(isNewOrder = true)
	{
		orderNum++;
	}
	else
	{
		// Do nothing
	}

	viewOrder();
}

function viewOrder()
{
	console.log("Order #" + orderNum + ": " + menuScreen);
}

newOrder("Coke", "Big Mac", "Fries", "Shake");
