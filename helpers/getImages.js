var timestamp = require("unix-timestamp")

function getImages(days,channel){
	const latest = timestamp.now()
	const oldest = timestamp.now((-days).toString()+"d")

	
	var url = "https://slack.com/api/channels.history?token=" + require('../config').token 
	+ "&latest=" + latest + "&oldest=" + oldest + "&channel=" + channel
	
	var response = request.get(url);
	response
}

module.exports = getImages;

//should I change this to a rails backend?
//What I want to do is say, if message type is fileshare and the file is an image,
//put into my list of images
//the list of images is just a list of private urls
//this is then sent to the describer function so I get descriptions of all these images
//ultimately you should send something back like this

//{number} images were shared {yesterday, since you were gone, within the last five days etc}. 
//(if 3 or fewer images were shared then describe them)
//The first image contained a {adj} {noun}...the second...etc
//If 4 or more images wered shared say
//{User} shared the most popular image which was of a {adj} {noun}