const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What is your new password?", function(input){
	tokens = input.split(' ');
	
	newPasscode = tokens[0,'Acde',];
	pass1 = Passcode(tokens[1]);
	pass2 = Passcode(tokens[2]);

	console.log('mathSymbol', mathSymbol)
	console.log ( 'pass1',pass1);
	console.log('pass2', pass2);

	if (mathSymbol === "+"){
		console.log([pass1] + pass2);
	}

	// This line closes the connection to the command line interface.
	reader.close()

});