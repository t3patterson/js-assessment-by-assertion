
/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of
 * words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

let findLongestWord = function(phrase){
	return phrase.split(' ').reduce((accum, current)=>{ 
   	return current.replace("'",'').length > accum.replace("'",'').length ? current : accum
	}, '')
}

var phrase1 = "a book full of money"
var phrase2 = "the hamburgers are tasty"
var phrase3 = "don't mess with Texas you know I don't" 

console.assert(findLongestWord(phrase1) === "money")
console.assert(findLongestWord(phrase2) === "hamburgers")
console.assert(findLongestWord(phrase3) === "Texas")
console.assert(findLongestWord(phrase3) !== "don't" )
