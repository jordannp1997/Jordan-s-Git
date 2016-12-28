/*
Project: Basic surge protector utilizing if statements
Author: Jordan Powell
*/

var pluggedIn = true;
var togglingPower = true;
var numAvailPorts = 4;

function surgeProtector(){}

function addAppliance()
{
	numAvailPorts = numAvailPorts - 1;
	console.log('You\'ve just plugged in an appliance');
}

function removeAppliance()
{
	numAvailPorts = numAvailPorts + 1;
	console.log('You\'ve just unplugged an appliance');
}

function getAvailPorts()
{
	return numAvailPorts;
}

surgeProtector.prototype.testPowerSurge()
{
	switch(pluggedIn)
	{
		case true:
		{
			console.log('Your surge protector is plugged into the wall');
			break;
		}
		case false:
		{
			console.log('Your surge protector is not plugged into anything');
			break;
		}
		default:
		{
			console.log('How did you even get here lol')
		}
	}

	switch(togglingPower)
	{
		case true:
		{
			console.log('Your surge protector is drawing power');
			break;
		}
		case false:
		{
			console.log('Your surge protector is not drawing any power');
			break;
		}
		default:
		{
			console.log('How did you even get here lol')
		}
	}

	switch(numAvailPorts)
	{
		case 4:
		{
			console.log(numAvailPorts + ' ports are available for use');
			break;
		}
		case 3:
		{
			console.log(numAvailPorts + ' ports are available for use');
			break;
		}
		case 2:
		{
			console.log(numAvailPorts + ' ports are available for use');
			break;
		}
		case 1:
		{
			console.log(numAvailPorts + ' ports are available for use');
			break;
		}
		default:
		{
			console.log('All ports are being used');
		}
	}
}
