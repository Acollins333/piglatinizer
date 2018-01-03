// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
  $("button").click(function(){
  	var userInput=("input").val();
  	var pig = pigLatin(userInput);
  	$("div").html(pig);
  })



});
function pigLatin(word) {
	var firstLetter = word [0];
	var beginswithVowel = indexOf> -1
	"".indexOf("");
	var vowels= ["a","e","i","o","u"]
	if(beginswithVowel){
	 return word + "yay ";
		
	}else{
		return word + "ay";
	}
	 
	 
	return  pig + "ay";
}

// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


