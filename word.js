//import Letter object from the letter.js file
var letter = require('./letter.js');

var Word = function(wrd){
     this.word = wrd;
     this.letters = [];
     this.found = false;
     this.getLetters = function() {
          for (var i = 0; i < this.word.length; i++) {
               this.letters.push(new letter.Letter(this.word[i]));
          }
     };
	//word found or not
	this.didWeFindWord = function() {
          var returnTrue = 0;
          for (var i = 0; i < this.letters.length; i++) {
               if (this.letters[i].appear === true) {
                    returnTrue++;
               }
               else {
                    return false;
               }
          }
          if (returnTrue === this.letters.length) {
               this.found = true;
          }
          else {
               this.found = false;
          }
          return this.found;
	};

	this.checkIfLetterFound = function(guessLetter) {
          var found = 0; //greater if found
          for (var i = 0; i < this.letters.length; i++) {
               if (this.letters[i].character === guessLetter) {
                    this.letters[i].appear = true;
                    found += 1;
               }
          }
          return found;
	};

	this.wordRender = function() {
          var strTemp = "";
          for (var i = 0; i < this.letters.length; i++) {
               strTemp += this.letters[i].letterRender();
          }
          return strTemp;
	};
};

//export the Word constructor 
exports.Word = Word;