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
