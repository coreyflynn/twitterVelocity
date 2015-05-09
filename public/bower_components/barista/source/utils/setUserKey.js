/**
 * a utility function to set a user_key attribute on the Barista object and set up ajax calls to
 * api.lincscloud.org to pass that user_key as a parameter
 * @param {string} key  The user_key to use or a path to a JSON file containing a user_key attribute,
 *                      defaults to ""
 */
Barista.setUserKey = function(key) {
	Barista.setAPIPrefilter();

	// grab the user_key from the url given by string passed in 'key' or set the string itself
	// as user_key if an ajax call to the string fails
	var key_request = $.ajax(key,{dataType: 'json',async: false});
	key_request.done(function(res){
		Barista.user_key = res.user_key;
		return Barista.user_key;
	});
	key_request.fail(function(){
		console.log("could not find a file at " + key + "; setting Barista.user_key to " + key);
		Barista.user_key = key;
		return null;
	});
};
