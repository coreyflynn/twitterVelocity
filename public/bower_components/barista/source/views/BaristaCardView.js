/**
 * card_view = new BaristaCardView({el: $("target_selector",
									url:"",
									title:"",
									subtitle:"",
									fg_color: "#1b9e77",
									image:"",
									span_class: "col-lg-12"});
 *
 * A Backbone View that displays a card of information wrapped in link
 * The view is meant to be a top level entry point to other pages
 * basic use:
		card_view = new BaristaCardView();
 * optional arguments:
 * @param {string} url         the link to navigate to if the card is clicked, defaults to ""
 * @param {string} title       the title of the card. defaults to "title"
 * @param {string} subtitle    the subtitle of the card. defaults to "subtitle"
 * @param {string} image       the link to an image to show as the cards main content. defaults to ""
 * @param {string} fg_color    the hex color code to use as the foreground color of the view, defaults to
 *                             #1b9e77
 * @param {string} span_class  a bootstrap span class to size the width of the view, defaults to
 *                             "col-lg-12"
 */
Barista.Views.BaristaCardView = Backbone.View.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "BaristaCardView",

	/**
	 * supply a base model for the view
	 * Overide this if you need to use it for dynamic content
	 * @type {Backbone}
	 */
	model: new Backbone.Model(),

	/**
	 * overide the view's default initialize method in order to catch options and render a custom template
	 */
	initialize: function(){
		// set up color options.  default if not specified
		this.fg_color = (this.options.fg_color !== undefined) ? this.options.fg_color : "#1b9e77";

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "col-lg-12";

		// set up the url
		this.url = (this.options.url !== undefined) ? this.options.url : "";

		// set up the title
		this.title = (this.options.title !== undefined) ? this.options.title : "Title";

		// set up the subtitle
		this.subtitle = (this.options.subtitle !== undefined) ? this.options.subtitle : "subtitle";

		// set up the image
		this.image = (this.options.image !== undefined) ? this.options.image : "";

		// bind render to model changes
		this.listenTo(this.model,'change', this.update);

		// compile the default template for the view
		this.compile_template();
	},

	/**
	 * use Handlebars to compile the template for the view
	 */
	compile_template: function(){
		var self = this;
		this.div_string = 'barista_view' + new Date().getTime();;
		this.$el.append(BaristaTemplates.CMapCard({div_string: this.div_string,
												span_class: this.span_class,
												url: this.url,
												title: this.title,
												subtitle: this.subtitle,
												image: this.image,
												fg_color: this.fg_color}));
	}
});
