// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function() {
	
  
$("#submitbutton").click(function()
{
	console.log("I'm here");
	var firstlatin = $("#textbox").val();
	var newWord = sentenceToPigLatin(firstlatin);
	
}
);



});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 
function wordToPigLatin(word)
{
	return word + "ay";
}







// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance
function sentenceToPigLatin(sentence)
{
	var splitsentence = sentence.split(' ');
	console.log(splitsentence);
	
	for (var count = 0; count < splitsentence.length; count ++)
	{
		var newword = splitsentence[count] + "ay <br />";
		$("#output").append(newword);	
	}

}

