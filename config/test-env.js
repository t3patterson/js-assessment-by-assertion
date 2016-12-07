function Assertion (configObj){

	this.description = configObj.description
	this.expected    = configObj.expected
	this.actual   = configObj.actual
	this.testAssertion  = function(...args){ return configObj.assertion(...args) }

	return this
}

let ENV = {
	doTwice: {
		globals: {
			NUMBER: 10,
			functionCalls: 0
		},

		incrNUM_TEST: function(){
			ENV.doTwice.globals.NUMBER = ENV.doTwice.globals.NUMBER +1; 
			let n = ENV.doTwice.globals.NUMBER ;  
			ENV.doTwice.globals.functionCalls++
			return n
		},
		multNUM_TEST: function(){
			ENV.doTwice.globals.NUMBER = ENV.doTwice.globals.NUMBER * 2; 
			let n = ENV.doTwice.globals.NUMBER; 
			console.log(n)
			ENV.doTwice.globals.functionCalls++
			return n
		}

	},

	simpOrSamp: {
		globals: { 
			simpList: window.simpList
		}
	},

	findLongestWord: {
		globals: { 
			phrase_1: 'a book full of money',
			phrase_2: 'the hamburgers are tasty',
			phrase_3: "don't mess with Texas"
		}
	}

	
	


}
console.log(ENV)