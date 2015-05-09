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
