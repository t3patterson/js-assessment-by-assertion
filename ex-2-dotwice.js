// Part 7

// Write a function called doTwice that takes as input a 
// function and invokes that function twice. 

// For testing purposes, I've included some functions that
// modify global variables, although that's not a good
// pattern for production code.

var NUMBER = 10

var incrementGlobalNumber = function(){
	NUMBER = NUMBER + 1
	var returnedNum = NUMBER
	return returnedNum
}

var doubleGlobalNumber = function() {
	NUMBER = NUMBER * 2
	var returnedNum = NUMBER
	return returnedNum
}

var doTwice = function(cb){
	cb()
	return cb()
}

let phase1 = doTwice(incrementGlobalNumber)
console.assert(phase1 === 12)

let phase2 = doTwice(doubleGlobalNumber)
console.assert(phase2 === 48)

