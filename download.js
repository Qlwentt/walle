// const GoogleDrive = require('google-drive');
var request = require('request');

var response;
function download(auth, url){
    request.get(url, function(err, res){        
        if(err) {
            //Handles error.
            console.log("error:",err)
        } else {
            response = res["body"]
        }
    });
    console.log(response)
    return response
}

module.exports = download;