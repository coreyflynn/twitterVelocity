![barista.js](http://coreyflynn.github.io/Bellhop/img/cmap_broad_logo_small.png)


# **Barista.js**
### LINCS javascript components

Barista provides a library of components for working with data provided by the LINCS/Connectivity Map group at the Broad Institute.  These components are centered around the core structures of Models, Collections, and Views set up in [Backbone.js](http://backbonejs.org/ "Backbone").  The models provide sensible data objects for commonly used data types within Connectivity Map data.  The Collections group those models into common sets of data types.  The Views handle the on-screen display of either Models or Collections.  These components do not depend on each other and are meant to be the building blocks of larger applications that consume Connectivity Map data. 

## **Installation**
All of barista's dependencies are included in the main barista css and javascript files which we provide via a CDN, so all you need is

			<link href="http://cmap.github.io/barista/barista.main.min.css" rel="stylesheet">

and

			<script src="http://cmap.github.io/barista/barista.main.min.js"></script>

in your HTML and you're all set.

If you want to use only parts of the library or roll your own extensions to it, go right ahead!  Just download the code or fork it and go wild!  We welcome pull requests and feedback. 


# **Components**
Barista provides [models](#models), [collections](#collections), [views](#views), and [utility functions](#utils) out of the box.  These components can be extended using [standard extension mechanisms](http://backbonejs.org/#Model-extend "Extension") in backbone.js and underscore.js.  All components are housed under a top-level object called `Barista`.  

## **Models**
Models provide objects that encapsulate information about commonly used data types in Connectivity Map data.  Many models also abstract the logic required to retrieve that information via the Connectivity Map's data APIs. Check out an [example model](http://cmap.github.io/barista/doc/models/CellCountModel.html "Example Model") to get a feel for what models provide.  You can find models under `Barista.Models`.

## **Collections**
Collections build on top of models.  A Collection represents a group of models that will be operated on as a whole. As an example, rather than handling a set of [PertModels](http://cmap.github.io/barista/doc/models/PertModel.html "PertModel") indivudually it is convient to use a [PertCollection](http://cmap.github.io/barista/doc/collections/PertCollection.html "PertCollection").  This allows you to interact with the models as a set instead of handling them one at a time. Certain views such as the [GridView](http://cmap.github.io/barista/doc/views/GridView.html "GridView") are built on top of collections. You can find collections under `Barista.Collections`.

## **Views**
Views handle the display of data that is exposed in models and collections. A given model or collection could be used in multiple different views provided that the view is able to consume the data that it needs from the paired model or collection.  Views also handle much of the controller behavior in a typical MVC framework.  Think of the views as handling all rendering and UI responsibilities. If the User sees it, it is built through a view.  Views also transparently respond to changes in the underlying data model as it changes. You can find views under `Barista.Views`


### Instantiating a Minimal View
A minimal view can be instantiated using [BaristaBaseView](http://cmap.github.io/barista/doc/views/BaristaBaseView.html).  This view serves as the basis for
many more complicated views in barista and handles common tasks such as standard initialization, redraw, render, template compilation, and png export functions.

```html
<html>
<head>
	<meta charset="UTF-8">
	<title>Barista Base View Example</title>

	<!-- include barista css -->
	<link href="http://cmap.github.io/barista/barista.main.min.css" rel="stylesheet">

	<!-- include barista js -->
<script src="http://cmap.github.io/barista/barista.main.min.js"></script>

</head>

<body>
	<!-- this is the div element in which we will place a BaristaBaseView instance -->
	<div id="view_target"></div>
</body>

<script type="text/javascript">
	// generate an instance of BaristaBaseView on the div with the id "view_target"
	base_view = new Barista.Views.BaristaBaseView({el: $("#view_target")});
</script>
</html>
```  

### Extending a Minimal View
[BaristaBaseView](http://cmap.github.io/barista/doc/views/BaristaBaseView.html) is not very exciting in of itself since it is meant to be a bare bones view.  To contruct a more interesting view, [BaristaBaseView](http://cmap.github.io/barista/doc/views/BaristaBaseView.html) can be extended using the following

```javascript
MySweetView = Barista.Views.BaristaBaseView.extend({
	// your sweet code here 
});
```

To see this in action, check out one of the views built on top of [BaristaBaseView](http://cmap.github.io/barista/doc/views/BaristaBaseView.html) such as [ViolinPlotView](http://cmap.github.io/barista/doc/views/ViolinPlotView.html)

## **Utils**
There are a small set of utility functions that do not fit cleanly as a model, collection, or view.  Think of these as mechanisms through which we abstract away mundane processing of data.  For example, the function [CMapPertTypeAlias](http://cmap.github.io/barista/doc/utils/CMapTypeAlias.html "CMapPertTypeAlias") returns an object of standard names and acronyms when given a Connectivity Map perturbagen type.  Utility functions are registered under the top-level `Barista` object.

# **Developer Documentation**
Want the nuts and bolts? dig in!

[Developer Documentation >](http://cmap.github.io/barista/doc)

# **Attribution**
barista is written and maintained by [@coreyflynn](https://github.com/coreyflynn) and the [@cmap](https://github.com/cmap) team

[Photo](http://www.flickr.com/photos/47022937@N03/8107139495/in/photolist-dmpd8a-dmpoJE-dmpnjG-dmpmb1-dmpdsQ-dmpgNa-dmpiMQ-dmpkAC-dmpgty-dmpkmK-dmpg18-dmpmMG-dmphmv-dmph5k-dmpddy-dmpjCH-dmpe6x-dmpdF7-8WrvdG-9cZJgG-8tZWEP-aRKouX-8Ft19Q-9xA5r5-8qEsxq-94pTM7-9UeDnr-dY1qFR-arY4Td-esXQkc-9xWgCL-cjK6py-8Ekz9n-8gJxFo-a67vXm-agGJ62-e4H3Tf-e4BrVe-e4BrTH-e4BrSK-84vwCN-8TWGnZ-e2PF5t-a1Wc39-et1Nxh-esXH1c-et1EQo-esXB2v-esXsY8-esXDi4-esXuTV) taken from Flickr,
licensed under Creative Commons.
