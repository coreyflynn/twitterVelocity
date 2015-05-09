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