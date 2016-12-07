
// Bonus 2

var funFactory = function(){
	
	return function(arg){
		return arg

	}
}
// Want more? 

console.assert(funFactory()('you sly dog') === 'you sly dog')
console.assert(funFactory()(999) === 999)
