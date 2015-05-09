/**
 * A Backbone View that displays a card of information about a user
 * basic use:
 * card_view = new BaristaUserCardView();
 * optional arguments:
 * @param {string} realName  the name to display, defaults to "Name"
 * @param {string} username  the name to display, defaults to "Username"
 * @param {string} email     the email to display, defaults to "user@mail.com"
 * @param {string} badges    an array of badge images to display, defaults to []
 */

Barista.Views.BaristaUserCardView = Backbone.View.extend({
    /**
     * give the view a name to be used throughout the View's functions when it needs to know what its class
     * name is
     * @type {String}
     */
    name: "BaristaUserCardView",

    /**
     * overide the view's default initialize method in order to catch options and render a custom template
     */
    initialize: function(){
        // set up defaults
        this.realName = (this.options.realName !== undefined) ? this.options.realName : "Name";
        this.username = (this.options.username !== undefined) ? this.options.username : "UserName";
        this.email = (this.options.email !== undefined) ? this.options.email : "user@email.com";
        this.badges = (this.options.badges !== undefined) ? this.options.badges : [];

        // compile the default template for the view
        this.map_badges();
        this.compile_template();
    },

    /**
     * use Handlebars to compile the template for the view
     */
    compile_template: function(){
        var self = this;
        this.div_string = 'barista_view' + new Date().getTime();;
        this.$el.append(BaristaTemplates.CMapUserCard({div_string: this.div_string,
                                                name: this.realName,
                                                username: this.username,
                                                email: this.email,
                                                badges: this.badge_urls}));
    },

    /**
     * translate the passed array of badge names into image urls
     */
    map_badges: function(){
        var self = this;
        this.badge_urls = [];
        this.badges.forEach(function(badge){
            switch(badge){
                case "active":
                    self.badge_urls.push("https://coreyflynn.github.io/Bellhop/ai/badges/active.svg");
                    break;
                case "developer":
                    self.badge_urls.push("https://coreyflynn.github.io/Bellhop/ai/badges/developer.svg");
                    break;
                case "explorer":
                    self.badge_urls.push("https://coreyflynn.github.io/Bellhop/ai/badges/explorer.svg");
                    break;
            }
        });
    }
});
