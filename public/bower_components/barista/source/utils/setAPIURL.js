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
