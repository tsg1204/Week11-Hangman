var Letter = function(letterSubmitted) {
     this.character = letterSubmitted;
     this.appear = false;
     this.letterRender = function() {
          if (this.appear === true) {
               return this.character;
          }
          else {
               return " _ ";
          }
     };
};

//export the Letter constructor
exports.Letter = Letter;