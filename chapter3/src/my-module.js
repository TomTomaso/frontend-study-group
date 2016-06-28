


function capitalize(str) {
	return str.substr(0,1).toUpperCase() + str.substr(1);
}


function capitalizeSentence(str) {
	var words = str.split(' ');
	var capitalizedWords = words.map(function(word) {
		return capitalize(word);
	});
	return capitalizedWords.join(' ');
}


