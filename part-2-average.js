
// PART 2

// Write a function called average that takes two numbers
// as inputs and returns the average of the two. To avoid
// repeating yourself, use your sum function inside 
// of your average function.

let average = function(num1, num2){
	return num1 + num2 / 2
}

console.assert(average(8,12) === 10)
console.assert(average(100,200) === 150)
