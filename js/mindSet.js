var life = function(stress, problems)
{
	switch(stress && problems)
	{
		case true:
		{
			mindSet();
			break;
		}
		case false:
		{
			console.log("There is no finish line so enjoy the journey.");
			break;
		}
		default:
		{
			console.log("Let go of what's gone. Be grateful for what remains. Look forward to what's coming.");
		}
	}
}

var mindSet = function()
{
	console.log("There will be days where you're not motivated, but the motivation comes after you show up. Don't start with the motivation, start with doing.");
}

life(stress, problems);