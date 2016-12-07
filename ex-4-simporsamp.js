////------------------------------------------------------------------
// TASK 1 : Build a function that returns an array of strings with last names added:
//    If less than 6 characters, append Sampson: e.g. "Homer Sampson"
//    If 6 characters or longer, append Simpson: 'Jessica Simpson'
////------------------------------------------------------------------

var simpOrSamp = function(arr){
	let mappedList = arr.map(function(name){
		if(name.length > 5){
			return `${name} Simpson`
		} else {
			return `${name} Sampson`
		}
	})
	return mappedList
}

var simpList = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]


var modifiedNamesList = simpOrSamp(simpList)

console.assert( modifiedNamesList[1] === "OJ Sampson" )
console.assert( modifiedNamesList[2] === "Marge Sampson" )
console.assert( modifiedNamesList[5] === "Maggie Simpson" )
