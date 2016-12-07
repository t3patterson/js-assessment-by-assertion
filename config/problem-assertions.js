var NUMBER2 = NUMBER




let problemGroup = [
	{
		name: 'sum',
		globalFunc: typeof sum !== 'undefined' && sum || 'undefined-function',
		description: "Write a function called <code>sum</code> that takes 2 arguments and returns the total",
		runTests: function(){
			let assertions = []

			//PART 1
			let output = sum(8,11) 
			let assert1 = new Assertion({
            description: '<code>sum(8,11) === 20</code>',
            assertion:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 19,
            actual: output
         })
        
			assert1.assertionResult =  assert1.testAssertion(assert1.expected, assert1.actual)
			
			//PART 2
			let output2 = sum(20,10) 
			let assert2 = new Assertion({
            description: '<code>sum(10,10) === 20</code>',
            assertion:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 30,
            actual: output2
         })

         assert2.assertionResult = assert2.testAssertion(assert2.expected, assert2.actual)
			
			//PART 3
			let output3 = sum(2,2)
			let assert3 = new Assertion({
            description: '<code> sum(2,2) !== 5 </code>',
            assertion:  function(userOutput, badResult){ return userOutput !== badResult },
            expected: 4,
				actual: output3
         })
			
         assert3.assertionResult = assert2.testAssertion(assert3.expected, assert3.actual)


			assertions.push(assert1)
			assertions.push(assert2)
			assertions.push(assert3)
			return assertions
		},
		
	},
	{
		name: 'doTwice',
		globalFunc: typeof doTwice !== 'undefined' && doTwice || 'undefined-function',
		description: "Write a function called <code>doTwice</code> that takes 2 arguments and returns the boolean <code>doTwicelse<code> if one of the inputs is not a number",
		runTests: function(){
			let assertions = []

			//PART 1
			let pt1 = doTwice(ENV.doTwice.incrNUM_TEST) 
			let assert1 = new Assertion({
            description: 'NUMBER === 12 after passing <code>incrementGlobalNumber</code> to <code>doTwice()</code>',
            assertion:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 12,
            actual: ENV.doTwice.globals.NUMBER
         })
        
			assert1.assertionResult =  assert1.testAssertion(assert1.expected, assert1.actual)
			assertions.push(assert1)
			
			//PART 2
			let pt2 = doTwice(ENV.doTwice.multNUM_TEST) 
			let assert2 = new Assertion({
            description: 'NUMBER === 48 after passing <code>multiplyGlobalNumber</code> to <code>doTwice()</code>',
            assertion:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 48,
				actual: ENV.doTwice.globals.NUMBER
         })

         assert2.assertionResult = assert2.testAssertion(assert2.expected, assert2.actual)
			assertions.push(assert2)

			let assert3 = new Assertion({
            description: '4 callback functions were fired',
            assertion:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 4,
				actual: ENV.doTwice.globals.functionCalls
         })
			assert3.assertionResult = assert2.testAssertion(assert3.expected, assert3.actual )
			assertions.push(assert3)

			return assertions
		},
	},
	{
		name: 'funFactory',
		globalFunc: typeof funFactory !== 'undefined' && funFactory || 'undefined-function',
		description: "Write a function called <code>funFactory</code> that takes 2 arguments and returns the total",
		runTests: function(){
			let assertions = []

			//PART 1
			//~~~~~~~~
			let output = funFactory()('you sly dog') 
			let assert1 = new Assertion({
            description: `<code>funFactory()('you sly dog') === 10</code>`,
            assertion:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 'you sly dog',
            actual: output
         })
        
			assert1.assertionResult =  assert1.testAssertion(assert1.expected, assert1.actual)
			
			//PART 2
			//~~~~~~~~
			let output2 = funFactory()(999) 
			let assert2 = new Assertion({
            description: `<code>funFactory()(999) === 999</code>`,
            assertion:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 999,
            actual: output2
         })

         assert2.assertionResult = assert2.testAssertion(assert2.expected, assert2.actual)
			

			assertions.push(assert1)
			assertions.push(assert2)
			// assertions.push(assert3)
			return assertions
		},
		
	},
	{
		name: 'simpOrSamp',
		globalFunc: typeof simpOrSamp !== 'undefined' && simpOrSamp || 'undefined-function',
		description: "Write a function called <code>simpOrSamp</code> that takes 2 arguments and returns the total",
		runTests: function(){
			let assertions = []
			//SETUP
			//~~~~~~~~
			
			let modifiedNamesList = simpOrSamp(ENV.simpOrSamp.globals.simpList) 


			//PART 1
			//~~~~~~~~
			
			let assert1 = new Assertion({
				description: `<code>modifiedNamesList[1] === "OJ Simpson"</code>`,
				assertion:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 'OJ Sampson',
				actual: modifiedNamesList[1]
			})

			assert1.assertionResult = assert1.testAssertion(assert1.actual, assert1.expected)
		  	
			//PART 2
			//~~~~~~~~
			
			let assert2 = new Assertion({
				description: `<code>modifiedNamesList[2] === "Marge Sampson "</code>`,
				assertion:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 'Marge Sampson',
				actual: modifiedNamesList[2]
			})

			assert2.assertionResult = assert2.testAssertion(assert2.actual, assert2.expected)
		  	
			//PART 3
			//~~~~~~~~
			
			let assert3 = new Assertion({
				description: `<code>modifiedNamesList[5] === "Maggie Sampson "</code>`,
				assertion:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 'Maggie Simpson',
				actual: modifiedNamesList[5]
			})

			assert3.assertionResult = assert2.testAssertion(assert3.actual, assert3.expected)
		  	
			
			assertions.push(assert1)
			assertions.push(assert2)
			assertions.push(assert3)

			return assertions
		},
		
	},
	{
		name: 'findLongestWord',
		globalFunc: typeof findLongestWord !== 'undefined' && findLongestWord || 'undefined-function',
		description: "Write a function called <code>findLongestWord</code> a string and returns the longest word ",
		runTests: function(){
			let assertions = []
			//SETUP
			//~~~~~~~~
			
			let longestWord_1 = findLongestWord(ENV.findLongestWord.globals.phrase_1)
			let longestWord_2 = findLongestWord(ENV.findLongestWord.globals.phrase_2) 
			let longestWord_3 = findLongestWord(ENV.findLongestWord.globals.phrase_3) 


			//PART 1
			//~~~~~~~~
			
			let assert1 = new Assertion({
				description: `<code>phrase1</code> longest word is 'money'`,
				assertion:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 'money',
				actual: longestWord_1
			})

			assert1.assertionResult = assert1.testAssertion(assert1.actual, assert1.expected)
		  	
			//PART 2
			//~~~~~~~~
			
			let assert2 = new Assertion({
				description: `<code>phrase2</code> longest word is 'hamburgers'`,
				assertion:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 'hamburgers',
				actual: longestWord_2
			})

			assert2.assertionResult = assert2.testAssertion(assert2.actual, assert2.expected)
		  	
			//PART 3
			//~~~~~~~~
			
			let assert3 = new Assertion({
				description: `<code>phrase3</code> longest word is 'Texas'`,
				assertion:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 'Texas',
				actual: longestWord_3
			})

			assert3.assertionResult = assert3.testAssertion(assert3.actual, assert3.expected)
		  	
			let assert4 = new Assertion({
				description: `<code>phrase3</code> longest word is NOT "don't" <br/> <small>apostrophes should be excluded from word length</small> `,
				assertion:  function(longestWord, wordWithApostrophe){ return longestWord !== wordWithApostrophe },
				expected: 'Texas',
				actual: longestWord_3
			})

			assert4.assertionResult = assert4.testAssertion(assert3.actual, "don't")


			assertions.push(assert1)
			assertions.push(assert2)
			assertions.push(assert3)
			assertions.push(assert4)


			return assertions
		},
		
	},

	
]
