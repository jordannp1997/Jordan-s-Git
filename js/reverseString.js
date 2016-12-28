/* 
Author: Jordan Powell
Project: Reversing a string using split(), reverse(), and join() methods
*/

function reverseString(str)
{
	// Using the split() method to return a new array
	var splitString = str.split("");
	// ["H", "E", "L", "L", "o"]

	// Using the reverse() method to reverse the new created array
	var reverseArray = splitString.reverse();
	// ["O", "L", "L", "E", "H"]

	// Joining all elements to the array into a string once again
	var joinArray = reverseArray.join("");
	// "OLLEH"

	// Returning the reversed string
	return joinArray;
}

// Call the function with "HELLO"
reverseString("Greetings");