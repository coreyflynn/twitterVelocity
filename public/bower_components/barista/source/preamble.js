//		Barista.js 0.2.0
//		(c) 2014 Corey Flynn, Broad Institute.
//		For all documentation:
//		http://cmap.github.io/barista

// ### Initial Setup
// build the top level namespace.  All Barista components will be exposed through this object
var Barista = {};

// current version of the library
Barista.VERSION = '0.2.0';

// build objects to be extended for Models, Collections, and Views
Barista.Models = {};
Barista.Collections = {};
Barista.Views = {};

// build an array to contain backing datasets definitions
Barista.Datasets = {};

// build a set of configuration attributes that are referenced throughout the
// library
Barista.APIURL = '//api.lincscloud.org';

// build an object of utilities that we need to make sure are not overwritten
Barista.Utils = {cookie: $.cookie};
