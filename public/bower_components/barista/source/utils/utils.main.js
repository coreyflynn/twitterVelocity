/**
 * var pert_type_object = CMapPertTypeAlias("trt_cp");
 * pert_type_object.name;
 * pert_type_object.acronym;
 * 
 * a utility function to convert standard perturbagen type descriptors into more human friendly strings
 * Given an input type string, an object is returned with field names of 'name' and 'acronym'
 * If the passed string is not a recoqnized type, the 'name' and 'acronym' fields are set to the passed
 * string
 * @param {string} input_type  type of perturbagen (must be recognized type from cases below, or an error
 *                             will occur)
 */
Barista.CMapPertTypeAlias = function(input_type){
	switch(input_type){
		case "trt_cp":
			return {name: "small molecule compound", acronym: "SMC"};
		case "trt_sh":
			return {name: "knock down", acronym: "KD"};
		case "trt_oe":
			return {name: "over expression", acronym: "OE"};
		case "trt_oe.mut":
			return {name: "variant", acronym: "VAR"};
		case "DOS":
			return {name: "tool compounds", acronym: "DOS"};
		case "BIOA":
			return {name: "drugs and bioactives", acronym: "BIOA"};
		default:
			return {name: input_type, acronym: input_type};
	}
};
/**
 * a utility to map numbers in an input string to subscript
 * @param {string} s  input string to apply subscript to
 */
Barista.NumbersToSubscript = function(s) {
    if (!s){
        return s;
    }
    var subscript = "₀₁₂₃₄₅₆₇₈₉";
    var re = new RegExp('^[0-9]$');
    var new_s = "";
    s.split("").forEach(function(char){
        if (re.test(char)){
            new_s += subscript[char];
        }else{
            new_s += char;
        }
    });
    return new_s;
}

/**
 * a utility function to take the average of an array of numeric values
 * the following evaluates to 2:
 * var a = arrayAverage([1,2,3]);
 * @param  {array} arr  array of numeric values
 */
Barista.arrayAverage = function arrayAverage (arr){
	return _.reduce(arr, function(memo, num){
		return memo + num;
	}, 0) / arr.length;
};
/**
 * a utility function to find the size of 1em for the given element id
 * @param  {string}  id  element id
 */
Barista.getEmSizeInPixels = function(id) {
    var el = document.body;
    return Number(getComputedStyle(el, "").fontSize.match(/(\d+)px/)[1]);
}
/**
 * taken from http://css-tricks.com/snippets/javascript/get-url-variables/
 * utility function to grab url parameters
 * @param  {string}  the attribute whose value we want returned
 */
Barista.getQueryVariable = function(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

/**
 * credit to Elias Zamaria http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-
 * thousands-separators-in-javascript
 * a utility function to return a number with commas every three digits
 * @param  {number} x  number to add commas to
 */
Barista.numberWithCommas = function(x){
    // first check to see if something was passed. if so, convert it
    if (x){
      if (x == 0) {
        return '0';
      } else {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    } else {
      return '0';
    }
};

/**
 * a utility function to set up ajax calls to api.lincscloud.org to pass Barista.user_key as a parameter
 * @param {string} api_endpoint  The location of the API endpoint to prefilter call from, defaults to
 *                               "api.lincscloud.org"
 */
Barista.setAPIPrefilter = function(api_endpoint) {
    api_endpoint = (api_endpoint !== undefined) ? api_endpoint : 'api.lincscloud.org';
    // configure ajax calls to add the user key parameter on calls to api.lincscloud.org
    $.ajaxPrefilter(function( options, originalOptions, jqXHR ){
        var re = new RegExp(api_endpoint);
        var re_default = new RegExp('api.lincscloud.org');
        if (re.test(options.url) || re_default.test(options.url)){
            options.data = $.param($.extend(originalOptions.data,{user_key:Barista.user_key}));
        }
    });
};

/**
 * a utility function to set an APIURL attribute on the Barista object
 * @param {string} url  the url for an API endpoint that your would like barista to hit for all API calls,
 *                      defaults to '//api.lincscloud.org'
 */
Barista.setAPIURL = function(url) {
    url = (url !== undefined) ? url : '//api.lincscloud.org';
    // truncate explicit protocols
    url.replace('https://','//');
    url.replace('http://','//');

    // make sure that the first two characters of the url are '//'
    if (url[0].slice(0,2) !== '//'){
        url = '//' + url;
    }
    Barista.APIURL = url;
    Barista.setAPIPrefilter(url);
};

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
