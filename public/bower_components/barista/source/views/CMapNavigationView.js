/**
 * A view the provides the standard Connectivity map application navigation for apps built on
 * apps.lincscloud.org
 * basic use:
 * nav = new CMapNavigationView({el:"header_target"});
 */

Barista.Views.CMapNavigationView = Backbone.View.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "CMapNavigationView",

	/**
	 * overide the default Backbone.View initialize function to compile a built in template and then render
	 * the view
	 */
	initialize: function(){
        var self = this;

        // store passed parameters as attributes of the view
				this.items = (this.options.items !== undefined) ? this.options.items : ["all apps","data synopsis","query","compound digest","gene digest","PCL","Concordance","history"];
        this.links = (this.options.links !== undefined) ? this.options.links : ["/app_list","/data_synopsis","/query","/compound_digest","/gene_digest","/pcl","/concordance","/history"];


        // wrap the content
        this.wrap_content();

        // build the navigation panel
        this.build_navigation();

		// make sure the height of the html and body element is set to 100%
		// so our pull out menu looks like it extends all the way down the
		// page even if the browser window is larger than the content of the
		// page
		$("html").css("height","100%");
		$("body").css("height","100%");

	},

    /**
     * wrap all existing content in the elements we need to work the slide out navigation that we are going
     * to build
     */
    wrap_content: function(){
        $("body").children().wrapAll('<div class="cmap-navigation-content"/>');
        $(".cmap-navigation-content").wrapAll('<div class="cmap-navigation-wrapper"/>');
    },

    /**
     * build the navigation pane using all reuested menu items and links
     */
    build_navigation: function(){
        var self = this;
        $(".cmap-navigation-wrapper").prepend('<div class="cmap-navigation-menu"></div>');
        var $el = $(".cmap-navigation-menu");
        this.items.forEach(function(item,i){
			$el.append('<a href="' + self.links[i] + '" class="col-xs-12 cmap-navigation-menu-item">' + item + '</a>');
		});
		$el.prepend("<div class='cmap-spacer-large'></div>");
		$el.prepend("<p id='cmap-navigation-menu-close' title='close' class='cmap-navigation-menu-item cmap-header-link-no-border class=col-xs-12'>X</p>");
		$(".cmap-navigation-menu-item",$el).on("click",function(){
			$(".cmap-navigation-wrapper").toggleClass("show-nav");
		});
	},
/**
 * adds a new attribute to the element that is comprised of an href with link text, and visible text
 * @param {string} text   visible text of the element
 * @param {string} route  href value of the element
 */
	addLink: function(text,route) {
		var $el = $(".cmap-navigation-menu");
		$el.append('<a href="' + route + '" class="col-xs-12 cmap-navigation-menu-item">' + text + '</a>');
	}
});
