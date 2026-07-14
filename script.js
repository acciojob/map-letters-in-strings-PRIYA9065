//your JS code here. If required.
function mapLetterIndexes(word) {
	const result = {};
    for (let i = 0; i < word.length; i++) {
		const letter = word[i];
		if(result[word[i]] !== undefined){
			result[word[i]].push(i);
	    }
	    else{
			result[word[i]] = [i];
	    }
	}
	return result;
}

const word = prompt("Enter the String : ")
const result = mapLetterIndexes(word);
alert(JSON.stringify(result));
