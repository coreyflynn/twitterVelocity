/**
 * A view that provides the standard Connectivity map page footer for apps built on apps.lincscloud.org
 * the view provides standard copyright text and customizable organization name, terms and conditions link,
 * and organization logo/link
 * basic use:
 * header = new CMapHeaderView({el:"header_target"});
 * optional arguments:
 * @param {string} organization  the name of the organization that claims copyright. Defaults to Broad
 *                               Institute
 * @param {string} terms_url     The url on which to find terms and conditions. Defaults to
 *                               '//lincscloud.org/terms-and-conditions/'
 * @param {array}  logo          The urls to organization logos to use. Defaults to
 *                               ['//coreyflynn.github.io/Bellhop/img/broad_logo_small.png',
 *                               '//coreyflynn.github.io/Bellhop/img/cmap_logo_small.png']
 * @param {array}  logo_url      The urls to organization links to use. Defaults to
 *                               ['//www.broadinstitute.org/','//lincscloud.org/']
 * @param {string} template      The path to a handlebars template to use. Defaults to
 *                               templates/CMapFooter.handlebars
 * header = new CMapFooterView({el:"footer_target",
									organization: "Broad Institute",
									terms_url: "//lincscloud.org/terms-and-conditions/",
 									logo: ['../img/broad_logo_small.png','../img/cmap_logo_small.png'],
 									logo_url: ['//www.broadinstitute.org/','//lincscloud.org/'],
									template: "../templates/CMapFooter.handlebars"});
 */
Barista.Views.CMapFooterView = Backbone.View.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "CMapFooterView",

	/**
	 * overide the default Backbone.View initialize function to compile a built in template and then render
	 * the view
	 */
	initialize: function(){
		// store passed parameters as attributes of the view
		this.organization = (this.options.organization !== undefined) ? this.options.organization : "Broad Institute";
		this.terms_url = (this.options.terms_url !== undefined) ? this.options.terms_url : "/terms";
		this.logo = (this.options.logo !== undefined) ? this.options.logo : ['//coreyflynn.github.io/Bellhop/img/broad_logo_small_text.png','//coreyflynn.github.io/Bellhop/img/CMap-logox.png','//coreyflynn.github.io/Bellhop/img/skunkworks-logo.png','//hometestingblog.testcountry.com/wp-content/uploads/2013/07/roche-logo.png'];
		this.logo = (this.options.logo !== undefined) ? this.options.logo : ['//coreyflynn.github.io/Bellhop/img/broad_logo_small_text.png','//coreyflynn.github.io/Bellhop/img/CMap-logox.png','//coreyflynn.github.io/Bellhop/img/skunkworks-logo.png','//hometestingblog.testcountry.com/wp-content/uploads/2013/07/roche-logo.png'];
		this.logo_url = (this.options.logo_url !== undefined) ? this.options.logo_url : ['//www.broadinstitute.org/','//clue.io/','//www.broadinstitute.org/vis','//www.roche.com'];
		this.template = (this.options.template !== undefined) ? this.options.template : "templates/CMapFooter.handlebars";

		// compile the default template for the view
		this.compile_template();

		// render the template
		this.render();
	},

	/**
	 * use Handlebars to compile the specified template for the view
	 */
	compile_template: function(){
		// grab the template
		this.compiled_template = BaristaTemplates.CMapFooter;

		// package logos and log_urls into a set of object to iterate over
		var logo_objects = []
		for (var i=0; i < this.logo.length; i++){
			logo_objects.push({logo: this.logo[i], url: this.logo_url[i]});
		}
		this.$el.append(this.compiled_template({organization: this.organization,
										terms_url: this.terms_url,
										logo_objects: logo_objects,
										year: new Date().getFullYear()}));
	}
});
