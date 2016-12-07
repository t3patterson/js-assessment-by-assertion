
// Bonus 1

// Make the following assertion work:

function factory1(){
	return function(){
		return 'hello world'
	}
}

console.assert(factory1()() === 'hello world')  // INCEPTION!

