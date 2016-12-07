var NUMBER2 = NUMBER




let problemGroup = [
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
		
	}
	
]
