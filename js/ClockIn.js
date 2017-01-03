/*

ClockIn Checker
Using if statments

*/

alert('To clock in type: clockIn()');

var clockInAnswer = '';

function clockIn()
{
	clockInAnswer = prompt('Would you like to clock in? Yes or No. To exit type: "EXIT"');
	if(clockInAnswer == 'Yes')
	{
		alert('Getting ready to clock in!');
		getClockedIn();
	}
	else if (clockInAnswer == 'No')
	{
		alert('You need to clock in to work!');
		clockIn();
	}
	else if(clockInAnswer == 'Maybe' || clockInAnswer == "I don't know" || clockInAnswer == 'IDK' || clockInAnswer == "I don't wanna" || clockInAnswer == "I don't want to")
	{
		alert('HOW BOUTCHU MAKE YA MIND UP BRUH');
	}
	else if(clockInAnswer == 'Why you asking me?') 
	{
		alert('CUZ THATS WHAT I DO');
	}
	else if(clockInAnswer == 'EXIT')
	{
		alert('You are exiting the program.');
	}
	else
	{
		alert('You need to clock in to start working. To clock in type: clockIn()');
	}
}

var startShift = '4pm';
var endShift = '9pm';

function getClockedIn()
{
	alert('Your scheduled shift is ' + startShift);
	shiftStartConfirmation();
}

var sSCAnswer = '';

function shiftStartConfirmation()
{
	sSCAnswer = prompt('Are you scheduled to start at ' + startShift + ' ? Yes or No. To exit type: "EXIT"');
	if(sSCAnswer = 'Yes')
	{
		shiftEndConfirmation();
	}
	else if(sSCAnswer = 'EXIT')
	{
		alert('You are exiting the program.');
	}
	else
	{
		alert('You are not scheduled for this time');
		clockIn();
	}
}

function shiftEndConfirmation()
{
	sECAnswer = prompt('Are you scheduled until ' + endShift + ' ? Yes or No. To exit type: "EXIT"');
	if(sECAnswer = 'Yes')
	{
		alert('You are clocked in and ready to work!');
	}
	else if(sECAnswer = 'EXIT')
	{
		alert('You are exiting the program.');
	}
	else
	{
		alert('How did you even get this far lol?');
	}
}
