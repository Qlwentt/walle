var WordPOS = require('wordpos');
wordpos = new WordPOS();

var adj = ""
function getAdj(wordArray){
	wordpos.getAdjectives(wordArray.join(" "), getResponse(response));
}


function getResponse(response){
	// var sentence = wordArray.join(" ");
	// var adj = ""
	// wordpos.getAdjectives(sentence,)


	// var adj = "";
	// for (var i = 0; i < wordArray.length; i++) {
	// 	var word = wordArray[i]
	// 	wordpos.isAdjective(word, function(result){
 //    		if (result===true){
 //    			console.log(result)
 //    			adj = word
 //    			console.log(adj)
 //    			console.log(word)
 //    		}
 //    		return true
	// 	});
	// }
	// console.log(adj)
	
	console.log(response, response[0])
	adj = response[0]
	return response[0]


	// var adj;
	// wordArray.some(function(word) {
	// 	wordpos.isAdjective(word,setAdj)
	// 	if (wordpos.isAdjective(word)===true){
	// 		adj = word;
	// 	}
	// 	return adj
	// });
	// return adj
}

// function setAdj(word){
// 	return word
// }



module.exports = getAdj;