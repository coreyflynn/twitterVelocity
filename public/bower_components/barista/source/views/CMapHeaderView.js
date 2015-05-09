/**
 * header = new CMapHeaderView({el:"header_target",
									title: "",
									subtitle: "",
									template: "templates/CMapHeader.handlebars"});
 *
 * A view the provides the standard Connectivity map page header for apps built on apps.lincscloud.org
 * the header provides links in the view to navigate back to apps.lincscloud.org as well as links for
 * sharing, settings, and information
 * The view accepts as parameters a page title, subtitle, and handlebars template
 * basic use:
 * header = new CMapHeaderView({el:"header_target"});
 * optional arguments:
 * @param {string} title     The title of the page. Defaults to Title
 * @param {string} subtitle  The title of the page. Defaults to Sub Title
 * @param {string} template  The path to a handlebars template to use. Defaults to
 *                           templates/CMapHeader.handlebars
 */
Barista.Views.CMapHeaderView = Backbone.View.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "CMapHeaderView",

	/**
	 * overide the default Backbone.View initialize function to compile a built in template and then render
	 * the view
	 */
	initialize: function(){
        var self = this;

        // store passed parameters as attributes of the view
		this.title = (this.options.title !== undefined) ? this.options.title : undefined;
		this.subtitle = (this.options.subtitle !== undefined) ? this.options.subtitle : "";
		this.user = (this.options.user !== undefined) ? this.options.user : Barista.Utils.cookie("user_id");
		this.support_link = (this.options.support_link !== undefined) ? this.options.support_link : "//support.lincscloud.org";
		this.app_color = (this.options.app_color !== undefined) ? this.options.app_color : undefined;
		this.tour = (this.options.tour !== undefined) ? this.options.tour : true;

		// compile the default template for the view
		this.compile_template();

		// register an event for clicking on the menu button
        $(".cmapHeaderMenuButton",this.$el).on("click",function(){
            self.trigger("cmapHeaderMenuButton:DidClick");
			$(".cmap-navigation-wrapper").toggleClass("show-nav");
        });

		//color the app name bar if a color is specified
		if (this.app_color){
			$('#cmapHeaderMenuAppName').css('border-bottom','5px solid ' + this.app_color);
		}
	},

	/**
	 * use Handlebars to compile the specified template for the view
	 */
	compile_template: function(){
		var self = this;
		// grab the template
		this.compiled_template = BaristaTemplates.CMapHeader;
		this.$el.append(this.compiled_template({title: this.title,
										subtitle: this.subtitle,
										user: this.user,
										support_link: this.support_link,
										tour: this.tour
									}));
	}
});
