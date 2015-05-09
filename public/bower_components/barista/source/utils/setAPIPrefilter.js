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
