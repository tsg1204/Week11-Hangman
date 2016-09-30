var prompt = require('prompt');
var Word = require('./word.js');
var gameImport = require('./game.js');
var lettersGuessed = '';

//start(), get() part of the prompt library
prompt.start();

//game object
game = {
    lettersGuessed: '',
	wordsWon : 0,
	guessesRemaining : 5, //per word
	currentWord : null, //the word object
	startGame : function (wrd){
		this.resetGuessesRemaining();
		//export game object from the game.js file and Word object from the word.js file
		this.currentWord = new Word.Word(gameImport.game.wordsArr[Math.floor(Math.random()
								* gameImport.game.wordsArr.length)]);

		this.currentWord.getLetters(); 

		this.keepPrompting();

	},
	resetGuessesRemaining : function(){
		this.guessRemaining = 5;
	},

	keepPrompting : function(){
		//using self, can be useful in same or nested scope
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
			//console.log(result);
            lettersGuessed += result.guessLetter;
		    console.log('  The letter guessed is: ' + result.guessLetter);

		    var findHowManyOfUserGuess = self.currentWord.checkIfLetterFound(result.guessLetter);

		    if (findHowManyOfUserGuess === 0){
		    	console.log('Guessed wrong!');
		    	self.guessesRemaining--;
		    }else{
		    	console.log('Guessed right!');

		    	//check if win when the right word
	    		if(self.currentWord.didWeFindWord()){
			    	console.log('You Won!!! :)');
			    	return; //end game
			    }
		    }

		    console.log('Guesses remaining: ', self.guessesRemaining);
		    console.log(self.currentWord.wordRender());
		    console.log('the letters guessed: ' + lettersGuessed);

		    if ((self.guessesRemaining > 0) && (self.currentWord.found === false)){
		    	self.keepPrompting();
		    }
		    else if(self.guessesRemaining === 0){
		    	console.log('Game over! The word is: ', self.currentWord.word);
		    }else{
		    	console.log(self.currentWord.wordRender());
		    }
		});
	}


};

game.startGame();