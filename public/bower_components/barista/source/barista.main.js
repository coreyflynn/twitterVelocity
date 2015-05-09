this["BaristaTemplates"] = this["BaristaTemplates"] || {};

this["BaristaTemplates"]["CMapBaseGrid"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n	";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<p class=\"pull-left\" style=\"cursor: pointer\" id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "_download\">\n			<font color=\"#0072B2\"><i class=\"icon-download\"></i> download table</font>\n		</p>\n	";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<p class=\"pull-left\" style=\"padding-left: 8px; cursor: pointer\" id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "_edit\">\n			<font color=\"#e51c23\"><i class=\"fa fa-times-circle\"></i> edit </font>\n		</p>\n	";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<p class=\"pull-left\" style=\"padding-left: 8px; cursor: pointer\" id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "_slice\">\n			<font color=\"#0072B2\"><i class=\"icon-cogs\"></i> slice all data</font>\n		</p>\n	";
  return buffer;
  }

function program9(depth0,data) {
  
  
  return "\n		<div class=\"col-lg-8\"></div>\n	";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		";
  stack1 = helpers['if'].call(depth0, depth0.legend, {hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			";
  if (stack1 = helpers.legend) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.legend; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n		";
  return buffer;
  }

function program14(depth0,data) {
  
  
  return "\n			<span class=\"col-lg-8\">\n				<p class=\"pull-right\" style=\"padding-right: 8px\"><span class=\"label\" style=\"background-color: #E69F00\">SMC</span> Small Molecule Compound </p>\n				<p class=\"pull-right\" style=\"padding-right: 8px\"><span class=\"label\" style=\"background-color: #56B4E9\">KD</span> Knock Down </p>\n				<p class=\"pull-right\" style=\"padding-right: 8px\"><span class=\"label\" style=\"background-color: #D55E00\">OE</span> Over Expression </p>\n			</span>\n		";
  }

  buffer += "<div id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  if (stack1 = helpers.span_class) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.span_class; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " backgrid-container\" height=\"300\">\n</div>\n<div class=\"row\">\n	<span class=\"col-lg-4\">\n	";
  stack1 = helpers['if'].call(depth0, depth0.no_download, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  stack1 = helpers['if'].call(depth0, depth0.edit, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  stack1 = helpers['if'].call(depth0, depth0.no_slice, {hash:{},inverse:self.program(7, program7, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</span>\n	";
  stack1 = helpers['if'].call(depth0, depth0.no_legend, {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["BaristaTemplates"]["CMapCard"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"cmap-card-wrapper ";
  if (stack1 = helpers.span_class) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.span_class; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <div class=\"cmap-card\">\n        <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n            <div class='cmap-card-title'>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            <p class=\"cmap-card-subtitle\">";
  if (stack1 = helpers.subtitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n        </a>\n    </div>\n</div>\n";
  return buffer;
  });

this["BaristaTemplates"]["CMapFooter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img class=\"pull-right cmap-footer-image\" src=\"";
  if (stack1 = helpers.logo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.logo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a>\n	";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img class=\"cmap-footer-image\" src=\"";
  if (stack1 = helpers.logo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.logo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a>\n	";
  return buffer;
  }

  buffer += "<hr>\n<div class=\"row hidden-xs\">\n	<div class=\"col-sm-offset-1 col-sm-5 pull-left\">\n		<p>&copy ";
  if (stack1 = helpers.year) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.year; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.organization) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.organization; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " all rights reserved</p>\n		<p><a href=\"";
  if (stack1 = helpers.terms_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.terms_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">terms and conditions</a></p>\n	</div>\n	<div class=\"col-sm-5\">\n	";
  stack1 = helpers.each.call(depth0, depth0.logo_objects, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n</div>\n\n<div class=\"row visible-xs\">\n	<div class=\"col-xs-12\">\n		<p class=\"cmap-center-text\">&copy ";
  if (stack1 = helpers.year) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.year; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.organization) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.organization; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " all rights reserved</p>\n		<p class=\"cmap-center-text\"><a href=\"";
  if (stack1 = helpers.terms_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.terms_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">terms and conditions</a></p>\n	</div>\n	<div class=\"col-xs-12 cmap-center-text\">\n	";
  stack1 = helpers.each.call(depth0, depth0.logo_objects, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n</div>\n<div class=\"cmap-spacer-medium\"></div>\n";
  return buffer;
  });

this["BaristaTemplates"]["CMapHeader"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n						<p id=\"cmapHeaderMenuAppName\" title=\"app name\" class=\"cmap-header-app-name pull-left\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n					";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n						<div class=\"dropdown pull-right\">\n							<p id=\"username\" title=\"profile\" class=\"cmap-header-username data-toggle\" data-toggle=\"dropdown\">";
  if (stack1 = helpers.user) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"caret cmap-header-caret\"></span></p>\n							<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"username\">\n						    <li role=\"presentation\"><a id=\"logout\" role=\"menuitem\" tabindex=\"-1\" href=\"/signout\">Logout</a></li>\n							<li role=\"presentation\"><a id=\"settings\" role=\"menuitem\" tabindex=\"-1\" href=\"/settings\">Account settings</a></li>\n							<li role=\"presentation\"><a id=\"about\" role=\"menuitem\" tabindex=\"-1\" href=\"/about\">About CLUE</a></li>\n						  </ul>\n						</div>\n					";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "\n						<p title=\"login\" class=\"cmap-header-link-left-border pull-right\" onclick=\"window.location.href = '/start';\">login</p>\n					";
  }

function program7(depth0,data) {
  
  
  return "\n						<p title=\"tour\" class=\"cmap-header-link-no-border pull-right\" onclick=\"tour();\">Tour</p>\n					";
  }

function program9(depth0,data) {
  
  
  return "\n						<div class=\"dropdown pull-right\">\n							<p id=\"username\" title=\"profile\" class=\"cmap-header-username data-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user cmap-header-mobile-user-icon\"></i><span class=\"caret cmap-header-caret\"></span></p>\n							<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"username\">\n								<li role=\"presentation\"><a id=\"logout\" role=\"menuitem\" tabindex=\"-1\" href=\"/signout\">Logout</a></li>\n							<li role=\"presentation\"><a id=\"settings\" role=\"menuitem\" tabindex=\"-1\" href=\"/settings\">Account settings</a></li>\n							<li role=\"presentation\"><a id=\"about\" role=\"menuitem\" tabindex=\"-1\" href=\"/about\">About CLUE</a></li>\n							</ul>\n						</div>\n					";
  }

  buffer += "<div class=\"cmap-header\">\n\n	<!-- large screens -->\n	<div class=\"row hidden-xs\">\n		<div class=\"row\">\n			<div class=\"col-sm-12 cmap-header-toolbar\">\n				<div class=\"col-xs-8\">\n					<p id=\"cmapHeaderMenuButtonXL\" title=\"menu\" class=\"cmap-header-link-no-border pull-left cmapHeaderMenuButton\"><i class=\"fa fa-bars\"></i> Menu</p>\n					<!-- <a href=\"/\"> -->\n						<img class=\"cmap-header-image pull-left\" src=\"//cmap.github.io/cdn/img/logos/linscloud_logo_RGB_small-cloud-web.png\">\n					<!-- </a> -->\n					";
  stack1 = helpers['if'].call(depth0, depth0.title, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					<p id=\"cmapHeaderMenuAppDescription\" title=\"description\" class=\"cmap-header-subtitle pull-left\">";
  if (stack1 = helpers.subtitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n				</div>\n\n				<div class=\"col-xs-4\">\n					";
  stack1 = helpers['if'].call(depth0, depth0.user, {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					<p class=\"cmap-header-splitter pull-right\"> </p>\n					";
  stack1 = helpers['if'].call(depth0, depth0.tour, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</div>\n			</div>\n		</div>\n	</div>\n\n\n\n	<!-- small screens -->\n	<div class=\"row visible-xs\">\n\n		<div class=\"row\">\n			<div class=\"col-sm-12 cmap-header-toolbar\">\n				<div class=\"col-xs-8\">\n					<p id=\"cmapHeaderMenuButtonXS\" title=\"menu\" class=\"cmap-header-link-no-border pull-left cmapHeaderMenuButton\"><i class=\"fa fa-bars\"></i> Menu</p>\n					";
  stack1 = helpers['if'].call(depth0, depth0.title, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</div>\n\n				<div class=\"col-xs-4\">\n					";
  stack1 = helpers['if'].call(depth0, depth0.user, {hash:{},inverse:self.program(5, program5, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					<p class=\"cmap-header-splitter pull-right\"> </p>\n					";
  stack1 = helpers['if'].call(depth0, depth0.tour, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</div>\n			</div>\n		</div>\n\n	</div>\n\n</div>\n";
  return buffer;
  });

this["BaristaTemplates"]["CMapPertSearchBar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<input class=\"typeahead form-control col-lg-12\" autocomplete=\"off\" type=\"text\" placeholder=\"";
  if (stack1 = helpers.placeholder) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.placeholder; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-provide=\"typeahead\" id=\"search\">";
  return buffer;
  });

this["BaristaTemplates"]["CMapUserCard"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n                    <img src=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" alt=\"\" class=\"cmap-user-badge pull-right\" />\n                ";
  return buffer;
  }

  buffer += "<div id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"cmap-card-wrapper ";
  if (stack1 = helpers.span_class) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.span_class; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <div class=\"cmap-user-card row\">\n        <div class=\"col-xs-6\">\n            <h1 class=\"cmap-user-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n            <p class=\"cmap-user-username\">";
  if (stack1 = helpers.username) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.username; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n            <p class=\"cmap-user-email\">";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n        </div>\n        <div class=\"col-xs-6\">\n            <div class=\"cmap-user-image-container\">\n                ";
  stack1 = helpers.each.call(depth0, depth0.badges, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n    </div>\n</div>\n";
  return buffer;
  });

this["BaristaTemplates"]["TypeaheadItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"tt-suggestion\"><span class=\"label\" style=\"background-color: ";
  if (stack1 = helpers.color) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.color; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> ";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>";
  return buffer;
  });

this["BaristaTemplates"]["d3_target"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  if (stack1 = helpers.span_class) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.span_class; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"height:";
  if (stack1 = helpers.height) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.height; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px\"></div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  if (stack1 = helpers.span_class) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.span_class; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"height:120px\"></div>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, depth0.height, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
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

/**
 * An object that extends Barista.Datasets to specify a backing dataset for Cellular Contexts available
 * in the Connectivity Map
 * CellHistologyDataset is typically not used directly, rather it's content is extracted from
 * Barista.Datasets in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
	{ 	CellHistology:
			{
			/**
			 * only return 6 items at a time in the autocomplete dropdown
			 * @type {Number}
			 */
			limit: 6,

			/**
			 * provide a name for the default typeahead data source
			 * @type {String}
			 */
			name: 'CellHistology',

			/**
			 * the template to render for all results
			 * @type {String}
			 */
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			/**
			 * use twitter's hogan.js to compile the template for the typeahead results
			 */
			engine: Hogan,

			remote: {
				url: "",
				  /**
  					* set the remote data source to use cellinfo with custom query params
  					* @param  {string}  url    @todo this parameter is never used, consider removing
  					*                          from function
  					* @param  {string}  query  custom query
  					*/ 
				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/a2/cellinfo?',
						'q={"lincs_status":{"$in":["core_cline","core_pline","DIVR"]},"cell_histology":{"$regex":"^' + query + '", "$options":"i"}}',
						'&l=10',
						'&s={"cell_id":1}'].join('');
				},

				dataType: 'jsonp',
				/**
				 * returns the processed list of data for the autocomplete
				 * @param {array} response  array of data to extract cell histology from
				 */
				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its cell_histology and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.cell_histology);
						object_map[element.cell_histology] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						_.extend(datum,{
							type: 'Cell Histology',
							search_column: 'cell_histology',
							color: '#BB4D8A',
						});
						datum_list.push(datum);
					});

					// return the processed list of datums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

/**
 * An object that extends Barista.Datasets to specify a backing dataset for Cellular Contexts available
 * in the Connectivity Map
 * CellIDDataset is typically not used directly, rather it's content is extracted from Barista.Datasets
 * in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
	{ CellID:
			{
			/**
			 * only return 6 items at a time in the autocomplete dropdown
			 * @type {Number}
			 */
			limit: 6,

			/**
			 * provide a name for the default typeahead data source
			 * @type {String}
			 */
			name: 'CellID',

			/**
			 * the template to render for all results
			 * @type {String}
			 */
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			/**
			 * use twitter's hogan.js to compile the template for the typeahead results
			 */
			engine: Hogan,

			remote: {
				url: '',
				  /**
  					* set the remote data source to use cellinfo with custom query params
  					* @param  {string}  url    @todo this parameter is never used, consider removing
  					*                          from function
  					* @param  {string}  query  custom query
  					*/ 
				replace: function(url, query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/a2/cellinfo?',
						'q={"lincs_status":{"$in":["core_cline","core_pline","DIVR"]},"cell_id":{"$regex":"^' + query + '", "$options":"i"}}',
						'&l=10',
						'&s={"cell_id":1}'].join('')
				} ,

				dataType: 'jsonp',
				/**
				 * returns the processed list of data for the autocomplete
				 * @param {array} response  array of data to extract cell id from
				 */
				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its cell_id and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.cell_id);
						object_map[element.cell_id] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						_.extend(datum,{
							type: 'Cell ID',
							search_column: 'cell_id',
							color: '#CC79A7',
						});
						datum_list.push(datum);
					});

					// return the processed list of datums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

/**
 * An object that extends Barista.Datasets to specify a backing dataset for Cellular Contexts available
 * in the Connectivity Map
 * CellLineageDataset is typically not used directly, rather it's content is extracted from
 * Barista.Datasets in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
	{ CellLineage:
			{
			/**
			 * only return 6 items at a time in the autocomplete dropdown
			 * @type {Number}
			 */
			limit: 6,

			/**
			 * provide a name for the default typeahead data source
			 * @type {String}
			 */
			name: 'CellLineage',

			/**
			 * the template to render for all results
			 * @type {String}
			 */
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			/**
			 * use twitter's hogan.js to compile the template for the typeahead results
			 */
			engine: Hogan,

			remote: {
				url: '',
				  /**
  					* set the remote data source to use cellinfo with custom query params
  					* @param  {string}  url    @todo this parameter is never used, consider removing
  					*                          from function
  					* @param  {string}  query  custom query
  					*/ 
				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/a2/cellinfo?',
						'q={"lincs_status":{"$in":["core_cline","core_pline","DIVR"]},"cell_lineage":{"$regex":"^' + query + '", "$options":"i"}}',
						'&l=10',
						'&s={"cell_id":1}'].join('');
				} ,

				dataType: 'jsonp',
				/**
				 * returns the processed list of data for the autocomplete
				 * @param {array} response  array of data to extract cell lineage from
				 */
				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its cell_lineage and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.cell_lineage);
						object_map[element.cell_lineage] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						_.extend(datum,{
							type: 'Cell Lineage',
							search_column: 'cell_lineage',
							color: '#DDA6C4',
						});
						datum_list.push(datum);
					});

					// return the processed list of datums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

/**
 * An object that extends Barista.Datasets to specify a backing dataset for Cellular mutation
 * annotations available in the Connectivity Map
 * CellMutationDataset is typically not used directly, rather it's content is extracted from
 * Barista.Datasets in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
	{ CellMutation:
			{
			/**
			 * only return 6 items at a time in the autocomplete dropdown
			 * @type {Number}
			 */
			limit: 6,

			/**
			 * provide a name for the default typeahead data source
			 * @type {String}
			 */
			name: 'CellMutation',

			/**
			 * the template to render for all results
			 * @type {String}
			 */
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			/**
			 * use twitter's hogan.js to compile the template for the typeahead results
			 */
			engine: Hogan,

			remote: {
				url: '',
				  /**
  					* set the remote data source to use cellinfo with custom query params
  					* @param  {string}  url    @todo this parameter is never used, consider removing
  					*                          from function
  					* @param  {string}  query  custom query
  					*/ 
				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/a2/cellinfo?',
						'q={"lincs_status":{"$in":["core_cline","core_pline","DIVR"]}}',
						'&d=mutations'].join('');
				},

				dataType: 'jsonp',
				/**
				 * returns the processed list of data for the autocomplete
				 * @param {array} response  array of data to extract mutation data from
				 */
				filter: function(response){
					var datum_list = [];
					var auto_data = response;

					// filter the list based on the query.  self comes from the closure in the view that calls the
					// dataset. It shold be a reference to the view that is consuming the dataset.  That view should
					// have a typeahead elment in it somewhere
					var re = new RegExp($(".typeahead",self.div_string).val(),"i");
					auto_data = _.filter(auto_data,function(mutation){return re.test(mutation);});

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: item
						}
						_.extend(datum,{
							type: 'Cell Mutation',
							search_column: 'mutations',
							color: '#999999',
						});
						datum_list.push(datum);
					});

					// return the processed list of datums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

/**
 * An object that extends Barista.Datasets to specify a backing dataset for Perturbation IDs available
 * in the Connectivity Map
 * CompoundPertINameDataset is typically not used directly, rather it's content is extracted from
 * Barista.Datasets in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
	{ CompoundPertIName:
			{
			/**
			 * only return 6 items at a time in the autocomplete dropdown
			 * @type {Number}
			 */
			limit: 6,

			/**
			 * provide a name for the default typeahead data source
			 * @type {String}
			 */
			name: 'CompoundPertIName',

			/**
			 * the template to render for all results
			 * @type {String}
			 */
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			/**
			 * use twitter's hogan.js to compile the template for the typeahead results
			 */
			engine: Hogan,

			remote: {
				url: '',
				  /**
  					* set the remote data source to use pertinfo with custom query params
  					* @param  {string}  url    @todo this parameter is never used, consider removing
  					*                          from function
  					* @param  {string}  query  custom query
  					*/ 
				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/a2/pertinfo?',
						'q={"pert_iname":{"$regex":"^' + query + '", "$options":"i"}, "pert_type":"trt_cp"}',
						'&f={"pert_iname":1,"pert_type":1}',
						'&l=100',
						'&s={"pert_iname":1}'].join('');
				},

				dataType: 'jsonp',
				/**
				 * returns the processed list of data for the autocomplete
				 * @param {array} response  array of data to extract pert_iname from
				 */
				filter: function(response){
					var genetic_types = ["trt_sh","trt_oe","trt_sh.cgs"];
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its pert_iname and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.pert_iname);
						object_map[element.pert_iname] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// add cell lines if required
					// if (self.match_cell_lines){
					// 	auto_data = auto_data.concat(self.cell_lines);
					// }

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						if (genetic_types.indexOf(object_map[item].pert_type) != -1){
							_.extend(datum,{
								type: 'Genetic Reagent',
								color: '#0072B2',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_cp' ){
							_.extend(datum,{
								type: 'Chemical Reagent',
								color: '#E69F00',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_sh.css' ){
							_.extend(datum,{
								type: 'Seed Sequence',
								color: '#009E73',
							});
							datum_list.push(datum);
							return datum_list;
						}else{
							_.extend(datum,{
								type: object_map[item].pert_type,
								color: '#999',
							});
							datum_list.push(datum);
							return datum_list;
						}
					});

					// return the processed list of daums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

/**
 * An object that extends Barista.Datasets to specify a backing dataset for Perturbation IDs available
 * in the Connectivity Map
 * GeneticPertINameDataset is typically not used directly, rather it's content is extracted from
 * Barista.Datasets in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
	{ GeneticPertIName:
			{
			/**
			 * only return 6 items at a time in the autocomplete dropdown
			 * @type {Number}
			 */
			limit: 6,

			/**
			 * provide a name for the default typeahead data source
			 * @type {String}
			 */
			name: 'GeneticPertIName',

			/**
			 * the template to render for all results
			 * @type {String}
			 */
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			/**
			 * use twitter's hogan.js to compile the template for the typeahead results
			 */
			engine: Hogan,

			remote: {
				url: '',
				  /**
  					* set the remote data source to use pertinfo with custom query params
  					* @param  {string}  url    @todo this parameter is never used, consider removing
  					*                          from function
  					* @param  {string}  query  custom query
  					*/ 
				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/a2/pertinfo?',
						'q={"pert_iname":{"$regex":"^' + query + '", "$options":"i"}, "pert_type":{"$in":["trt_sh","trt_oe","trt_oe.mut"]}}',
						'&f={"pert_iname":1,"pert_type":1}',
						'&l=100',
						'&s={"pert_iname":1}'].join('');
				},

				dataType: 'jsonp',
				/**
				 * returns the processed list of data for the autocomplete
				 * @param {array} response  array of data to extract pert_iname from
				 */
				filter: function(response){
					var genetic_types = ["trt_sh","trt_oe","trt_sh.cgs"];
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its pert_iname and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.pert_iname);
						object_map[element.pert_iname] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// add cell lines if required
					// if (self.match_cell_lines){
					// 	auto_data = auto_data.concat(self.cell_lines);
					// }

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						if (genetic_types.indexOf(object_map[item].pert_type) != -1){
							_.extend(datum,{
								type: 'Genetic Reagent',
								color: '#0072B2',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_cp' ){
							_.extend(datum,{
								type: 'Chemical Reagent',
								color: '#E69F00',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_sh.css' ){
							_.extend(datum,{
								type: 'Seed Sequence',
								color: '#009E73',
							});
							datum_list.push(datum);
							return datum_list;
						}else{
							_.extend(datum,{
								type: object_map[item].pert_type,
								color: '#999',
							});
							datum_list.push(datum);
							return datum_list;
						}
					});

					// return the processed list of daums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

/**
 * An object that extends Barista.Datasets to specify a backing dataset for job IDs available in the
 * Connectivity Map
 * JobIDDataset is typically not used directly, rather it's content is extracted from Barista.Datasets in
 * views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
    { JobID:
            {
            /**
             * only return 6 items at a time in the autocomplete dropdown
             * @type {Number}
             */
            limit: 6,

            /**
             * provide a name for the default typeahead data source
             * @type {String}
             */
            name: 'JobID',

            /**
             * the template to render for all results
             * @type {String}
             */
            template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

            /**
             * use twitter's hogan.js to compile the template for the typeahead results
             */
            engine: Hogan,

            remote: {
                url: '',
                  /**
                    * set the remote data source to use compute_status with custom query params
                    * @param  {string}  url    @todo this parameter is never used, consider removing
                    *                          from function
                    * @param  {string}  query  custom query
                    */ 
                replace: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    return [Barista.APIURL + '/compute_status?',
                          'q={"job_id":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"job_id":1}'].join('');
                },

                dataType: 'jsonp',
        /**
         * returns the processed list of data for the autocomplete
         * @param {array} response  array of data to extract job id from
         */
        filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its job_id and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.job_id);
                        object_map[element.job_id] = element;
                    });

                    // make sure we only show unique items
                    auto_data = _.uniq(auto_data);

                    // build a list of datum objects
                    auto_data.forEach(function(item){
                        var datum = {
                            value: item,
                            tokens: [item],
                            data: object_map[item]
                        }
                        _.extend(datum,{
                            type: 'Job',
                            search_column: 'job_id',
                            color: '#BDBDBD',
                        });
                        datum_list.push(datum);
                    });

                    // return the processed list of datums for the autocomplete
                    return datum_list;
                }
            }
        }
    }
);

/**
 * An object that extends Barista.Datasets to specify a backing dataset for job IDs available in the
 * Connectivity Map
 * JobNameDataset is typically not used directly, rather it's content is extracted from Barista.Datasets 
 * in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
    { JobName:
            {
            /**
             * only return 6 items at a time in the autocomplete dropdown
             * @type {Number}
             */
            limit: 6,

            /**
             * provide a name for the default typeahead data source
             * @type {String}
             */
            name: 'JobName',

            /**
             * the template to render for all results
             * @type {String}
             */
            template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

            /**
             * use twitter's hogan.js to compile the template for the typeahead results
             */
            engine: Hogan,

            remote: {
                url: '',
                  /**
                    * set the remote data source to use compute_status with custom query params
                    * @param  {string}  url    @todo this parameter is never used, consider removing
                    *                          from function
                    * @param  {string}  query  custom query
                    */ 
                remote: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    return [Barista.APIURL + '/compute_status?',
                          'q={"params.rpt":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"job_id":1}'].join('');
                },

                dataType: 'jsonp',
        /**
         * returns the processed list of data for the autocomplete
         * @param {array} response  array of data to extract job id from
         */
        filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its job_id and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.params.rpt);
                        object_map[element.params.rpt] = element;
                    });

                    // make sure we only show unique items
                    auto_data = _.uniq(auto_data);

                    // build a list of datum objects
                    auto_data.forEach(function(item){
                        var datum = {
                            value: item,
                            tokens: [item],
                            data: object_map[item]
                        }
                        _.extend(datum,{
                            type: 'Job Name',
                            search_column: 'params.rpt',
                            color: '#77A2A6',
                        });
                        datum_list.push(datum);
                    });

                    // return the processed list of datums for the autocomplete
                    return datum_list;
                }
            }
        }
    }
);

/**
 * An object that extends Barista.Datasets to specify a backing dataset for job Statuses available in the
 * Connectivity Map
 * JobStatusDataset is typically not used directly, rather it's content is extracted from Barista.Datasets 
 * in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
    { JobStatus:
            {
            /**
             * only return 6 items at a time in the autocomplete dropdown
             * @type {Number}
             */
            limit: 6,

            /**
             * provide a name for the default typeahead data source
             * @type {String}
             */
            name: 'JobStatus',

            /**
             * the template to render for all results
             * @type {String}
             */
            template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

            /**
             * use twitter's hogan.js to compile the template for the typeahead results
             */
            engine: Hogan,

            remote: {
                url: '',
                  /**
                    * set the remote data source to use compute_status with custom query params
                    * @param  {string}  url    @todo this parameter is never used, consider removing
                    *                          from function
                    * @param  {string}  query  custom query
                    */ 
                replace: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    return [Barista.APIURL + '/compute_status?',
                          'q={"status":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"status":1}'].join('')
                },

                dataType: 'jsonp',
                      /**
         * returns the processed list of data for the autocomplete
         * @param {array} response  array of data to extract status from
         */
        filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its status and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.status);
                        object_map[element.status] = element;
                    });

                    // make sure we only show unique items
                    auto_data = _.uniq(auto_data);

                    // build a list of datum objects
                    auto_data.forEach(function(item){
                        var datum = {
                            value: item,
                            tokens: [item],
                            data: object_map[item]
                        }
                        _.extend(datum,{
                            type: 'Status',
                            search_column: 'status',
                            color: '#B14A4E',
                        });
                        datum_list.push(datum);
                    });

                    // return the processed list of datums for the autocomplete
                    return datum_list;
                }
            }
        }
    }
);

/**
 * An object that extends Barista.Datasets to specify a backing dataset for P100 Perturbation IDs available
 * in the Connectivity Map
 * P100PertINameDataset is typically not used directly, rather it's content is extracted from
 * Barista.Datasets in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
	{ P100PertIName:
			{
			/**
			 * only return 6 items at a time in the autocomplete dropdown
			 * @type {Number}
			 */
			limit: 6,

			/**
			 * provide a name for the default typeahead data source
			 * @type {String}
			 */
			name: 'P100PertIName',

			/**
			 * the template to render for all results
			 * @type {String}
			 */
			template: '<span class="label" style="background-color: #7bd9e4">P100</span><span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			/**
			 * use twitter's hogan.js to compile the template for the typeahead results
			 */
			engine: Hogan,

			remote: {
				url: '',
                  /**
                    * set the remote data source to use profileinfo with custom query params
                    * @param  {string}  url    @todo this parameter is never used, consider removing
  					*                          from function
  					* @param  {string}  query  custom query
                    */ 
				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return ['//prefix:8080/p100/v1/profileinfo?',
						'q={"pert_iname":{"$regex":"^' + query + '", "$options":"i"}}',
						'&f={"pert_iname":1}',
						'&l=100',
						'&s={"pert_iname":1}'].join('');
				},

				dataType: 'jsonp',
				/**
				 * returns the processed list of data for the autocomplete
				 * @param {array} response  array of data to extract pert_iname from
				 */
				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its pert_iname and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.pert_iname);
						object_map[element.pert_iname] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// add cell lines if required
					// if (self.match_cell_lines){
					// 	auto_data = auto_data.concat(self.cell_lines);
					// }

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						_.extend(datum,{
							type: 'Chemical Reagent',
							color: '#E69F00',
						});
						datum_list.push(datum);
						return datum_list;
					});

					// return the processed list of daums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

/**
 * An object that extends Barista.Datasets to specify a backing dataset for PRISM Perturbation IDs available
 * in the Connectivity Map
 * PRISMPertINameDataset is typically not used directly, rather it's content is extracted from
 * Barista.Datasets in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
	{ PRISMPertIName:
			{
			/**
			 * only return 6 items at a time in the autocomplete dropdown
			 * @type {Number}
			 */
			limit: 6,

			/**
			 * provide a name for the default typeahead data source
			 * @type {String}
			 */
			name: 'PRISMPertIName',

			/**
			 * the template to render for all results
			 * @type {String}
			 */
			template: '<span class="label" style="background-color: #8387e6">PRISM</span><span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			/**
			 * use twitter's hogan.js to compile the template for the typeahead results
			 */
			engine: Hogan,

			remote: {
				url: '',
                  /**
                    * set the remote data source to use profileinfo with custom query params
                    * @param  {string}  url    @todo this parameter is never used, consider removing
  					*                          from function
  					* @param  {string}  query  custom query
                    */ 
				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/prism/v1/profileinfo?',
						'q={"pert_iname":{"$regex":"^' + query + '", "$options":"i"}}',
						'&f={"pert_iname":1}',
						'&l=100',
						'&s={"pert_iname":1}'].join('')
				},

				dataType: 'jsonp',
				/**
				 * returns the processed list of data for the autocomplete
				 * @param {array} response  array of data to extract pert_iname from
				 */
				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its pert_iname and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.pert_iname);
						object_map[element.pert_iname] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// add cell lines if required
					// if (self.match_cell_lines){
					// 	auto_data = auto_data.concat(self.cell_lines);
					// }

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						_.extend(datum,{
							type: 'Chemical Reagent',
							color: '#E69F00',
						});
						datum_list.push(datum);
						return datum_list;
					});

					// return the processed list of daums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

/**
 * An object that extends Barista.Datasets to specify a backing dataset for Perturbation IDs available in
 * the Connectivity Map
 * PertINameDataset is typically not used directly, rather it's content is extracted from Barista.Datasets
 * in views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
	{ PertIName:
			{
			/**
			 * only return 6 items at a time in the autocomplete dropdown
			 * @type {Number}
			 */
			limit: 6,

			/**
			 * provide a name for the default typeahead data source
			 * @type {String}
			 */
			name: 'PertIName',

			/**
			 * the template to render for all results
			 * @type {String}
			 */
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			/**
			 * use twitter's hogan.js to compile the template for the typeahead results
			 */
			engine: Hogan,

			remote: {
				url: '',
                  /**
                    * set the remote data source to use pertinfo with custom query params
                    * @param  {string}  url    @todo this parameter is never used, consider removing
  					*                          from function
  					* @param  {string}  query  custom query
                    */ 
				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/a2/pertinfo?',
						'q={"pert_iname":{"$regex":"^' + query + '", "$options":"i"}, "pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}',
						'&f={"pert_iname":1,"pert_type":1}',
						'&l=100',
						'&s={"pert_iname":1}'].join('');
				},

				dataType: 'jsonp',
				/**
				 * returns the processed list of data for the autocomplete
				 * @param {array} response  array of data to extract pert_iname from
				 */
				filter: function(response){
					var genetic_types = ["trt_sh","trt_oe","trt_sh.cgs"];
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its pert_iname and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.pert_iname);
						object_map[element.pert_iname] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// add cell lines if required
					// if (self.match_cell_lines){
					// 	auto_data = auto_data.concat(self.cell_lines);
					// }

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						if (genetic_types.indexOf(object_map[item].pert_type) != -1){
							_.extend(datum,{
								type: 'Genetic Reagent',
								color: '#0072B2',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_cp' ){
							_.extend(datum,{
								type: 'Chemical Reagent',
								color: '#E69F00',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_sh.css' ){
							_.extend(datum,{
								type: 'Seed Sequence',
								color: '#009E73',
							});
							datum_list.push(datum);
							return datum_list;
						}else{
							_.extend(datum,{
								type: object_map[item].pert_type,
								color: '#999',
							});
							datum_list.push(datum);
							return datum_list;
						}
					});

					// return the processed list of daums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

/**
 * An object that extends Barista.Datasets to specify a backing dataset for Tool IDs available in the
 * Connectivity Map
 * ToolIDDataset is typically not used directly, rather it's content is extracted from Barista.Datasets in
 * views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
    { ToolID:
            {
            /**
             * only return 6 items at a time in the autocomplete dropdown
             */
            limit: 6,

            /**
             * provide a name for the default typeahead data source
             * @type {String}
             */
            name: 'ToolID',

            /**
             * the template to render for all results
             * @type {String}
             */
            template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

            /**
             * use twitter's hogan.js to compile the template for the typeahead results
             */
            engine: Hogan,

            remote: {
                url: '',
                  /**
                    * set the remote data source to use compute_status with custom query params
                    * @param  {string}  url    @todo this parameter is never used, consider removing
                    *                          from function
                    * @param  {string}  query  custom query
                    */ 
                replace: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    return [Barista.APIURL + '/compute_status?',
                          'q={"tool_id":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"tool_id":1}'].join('');
                },

                dataType: 'jsonp',
                        /**
         * returns the processed list of data for the autocomplete
         * @param {array} response  array of data to extract tool id from
         */
        filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its tool_id and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.tool_id);
                        object_map[element.tool_id] = element;
                    });

                    // make sure we only show unique items
                    auto_data = _.uniq(auto_data);

                    // build a list of datum objects
                    auto_data.forEach(function(item){
                        var datum = {
                            value: item,
                            tokens: [item],
                            data: object_map[item]
                        }
                        _.extend(datum,{
                            type: 'Tool',
                            search_column: 'tool_id',
                            color: '#005CF2',
                        });
                        datum_list.push(datum);
                    });

                    // return the processed list of datums for the autocomplete
                    return datum_list;
                }
            }
        }
    }
);

/**
 * An object that extends Barista.Datasets to specify a backing dataset for user IDs available in the
 * Connectivity Map
 * UserIDDataset is typically not used directly, rather it's content is extracted from Barista.Datasets in
 * views such as CMapSearchView
 */

Barista.Datasets = _.extend(Barista.Datasets,
    { UserID:
            {
            /**
             * only return 6 items at a time in the autocomplete dropdown
             * @type {Number}
             */
            limit: 6,

            /**
             * provide a name for the default typeahead data source
             * @type {String}
             */
            name: 'UserID',

            /**
             * the template to render for all results
             * @type {String}
             */
            template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

            /**
             * use twitter's hogan.js to compile the template for the typeahead results
             */
            engine: Hogan,

            remote: {
                url: '',
                  /**
                    * set the remote data source to use compute_status with custom query params
                    * @param  {string}  url    @todo this parameter is never used, consider removing
                    *                          from function
                    * @param  {string}  query  custom query
                    */ 
                replace: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    return [Barista.APIURL + '/compute_status?',
                          'q={"user_id":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"user_id":1}'].join('');
                },

                dataType: 'jsonp',
        /**
         * returns the processed list of data for the autocomplete
         * @param {array} response  array of data to extract job id from
         */
        filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its job_id and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.user_id);
                        object_map[element.user_id] = element;
                    });

                    // make sure we only show unique items
                    auto_data = _.uniq(auto_data);

                    // build a list of datum objects
                    auto_data.forEach(function(item){
                        var datum = {
                            value: item,
                            tokens: [item],
                            data: object_map[item]
                        }
                        _.extend(datum,{
                            type: 'Username',
                            search_column: 'user_id',
                            color: '#B348DA',
                        });
                        datum_list.push(datum);
                    });

                    // return the processed list of datums for the autocomplete
                    return datum_list;
                }
            }
        }
    }
);

/**
 * var pert_type_object = CMapPertTypeAlias("trt_cp");
 * pert_type_object.name;
 * pert_type_object.acronym;
 * 
 * a utility function to convert standard perturbagen type descriptors into more human friendly strings
 * Given an input type string, an object is returned with field names of 'name' and 'acronym'
 * If the passed string is not a recoqnized type, the 'name' and 'acronym' fields are set to the passed
 * string
 * @param {string} input_type  type of perturbagen (must be recognized type from cases below, or an error
 *                             will occur)
 */
Barista.CMapPertTypeAlias = function(input_type){
	switch(input_type){
		case "trt_cp":
			return {name: "small molecule compound", acronym: "SMC"};
		case "trt_sh":
			return {name: "knock down", acronym: "KD"};
		case "trt_oe":
			return {name: "over expression", acronym: "OE"};
		case "trt_oe.mut":
			return {name: "variant", acronym: "VAR"};
		case "DOS":
			return {name: "tool compounds", acronym: "DOS"};
		case "BIOA":
			return {name: "drugs and bioactives", acronym: "BIOA"};
		default:
			return {name: input_type, acronym: input_type};
	}
};
/**
 * a utility to map numbers in an input string to subscript
 * @param {string} s  input string to apply subscript to
 */
Barista.NumbersToSubscript = function(s) {
    if (!s){
        return s;
    }
    var subscript = "₀₁₂₃₄₅₆₇₈₉";
    var re = new RegExp('^[0-9]$');
    var new_s = "";
    s.split("").forEach(function(char){
        if (re.test(char)){
            new_s += subscript[char];
        }else{
            new_s += char;
        }
    });
    return new_s;
}

/**
 * a utility function to take the average of an array of numeric values
 * the following evaluates to 2:
 * var a = arrayAverage([1,2,3]);
 * @param  {array} arr  array of numeric values
 */
Barista.arrayAverage = function arrayAverage (arr){
	return _.reduce(arr, function(memo, num){
		return memo + num;
	}, 0) / arr.length;
};
/**
 * a utility function to find the size of 1em for the given element id
 * @param  {string}  id  element id
 */
Barista.getEmSizeInPixels = function(id) {
    var el = document.body;
    return Number(getComputedStyle(el, "").fontSize.match(/(\d+)px/)[1]);
}
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

/**
 * credit to Elias Zamaria http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-
 * thousands-separators-in-javascript
 * a utility function to return a number with commas every three digits
 * @param  {number} x  number to add commas to
 */
Barista.numberWithCommas = function(x){
    // first check to see if something was passed. if so, convert it
    if (x){
      if (x == 0) {
        return '0';
      } else {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    } else {
      return '0';
    }
};

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

/**
 * a utility function to set a user_key attribute on the Barista object and set up ajax calls to
 * api.lincscloud.org to pass that user_key as a parameter
 * @param {string} key  The user_key to use or a path to a JSON file containing a user_key attribute,
 *                      defaults to ""
 */
Barista.setUserKey = function(key) {
	Barista.setAPIPrefilter();

	// grab the user_key from the url given by string passed in 'key' or set the string itself
	// as user_key if an ajax call to the string fails
	var key_request = $.ajax(key,{dataType: 'json',async: false});
	key_request.done(function(res){
		Barista.user_key = res.user_key;
		return Barista.user_key;
	});
	key_request.fail(function(){
		console.log("could not find a file at " + key + "; setting Barista.user_key to " + key);
		Barista.user_key = key;
		return null;
	});
};

/**
 * `pert_model = new AnalysisHistoryModel()`
 * 
 * A Backbone.Model that represents an analysis history object.
 */
Barista.Models.AnalysisHistoryModel = Backbone.Model.extend({
    /**
     * Overides the base Model's initialize method to add the models date attribute and set the cid to the
     * mongo _id field
     * @todo these parameters are never used, consider removing from function
     * @param  {object}  attributes
     * @param  {object}  options
     */
    initialize: function(attributes, options) {
        this.cid = this.get('_id')
        this.set("date", new Date(parseInt(this.cid.substring(0,8), 16)*1000));
        this.set("rpt",this.get("params").rpt);
        if (this.get("status") === "completed"){
            this.set({view_result_link: '<a href="' + this.get("standard_result") + '"><i class="fa fa-eye"></i></a>'});
        }else{
            this.set({view_result_link: ''});
        }
        this.set({edit: '<i class="fa fa-times-circle cmap-grid-delete-button" onclick="Backbone.trigger(' + "'AnalysisHistoryModel:delete'" + ',' + "'" +  this.get("job_id") + "'" + ')"></i>'});
  }
});

/**
 * A Backbone.Model to hold the information needed to make a simple bar plot
 * The model includes a title, axis title, data, data_labels, and an optional object for metadata on the
 * points in the data
 * The meta data object should contain attributes for each meta data category and an array of values
 * matching the size of the points in the data
 * 
 * for example:
 * meta_data = {'dose: [1,2,3]', timepoint: ['6H','6H','6H']}

   usage:

		summly_result = new SummlyResultModel();
 */
Barista.Models.BarPlotModel = Backbone.Model.extend({
	/**
	 * set of model defaults
	 * @param {string}  title        the title of the plot, defaults to ""
	 * @param {string}  axis_title   the title of the x_axis, defaults to ""
	 * @param {array}   data         an array of data for the x_axis, defaults to []
	 * @param {array}   data_labels  an array of data for the y_axis, defaults to []
	 * @param {object}  meta_data    object containing meta data for the points in the plot,
	 *                               defaults to {}
	 */
	defaults: {
		title: "",
		axis_title: "",
		data: [],
		data_labels: [],
		meta_data: {}
	}
});

/**
 * `cell_count_model = new CellCountModel({type_string: '["trt_sh","trt_oe"]'})`
 * 
 * A Backbone.Model that represents the count of a set of cell_lines
 * The data model captures both the total count of cell lines that meet a search criteria and the count of
 * each annotation category for the set of cell lines
 * optional arguments:
 * @param {string} type_string  the string of pert_types that will be search upon fetching data, defaults
 *                              to '["trt_sh","trt_oe"]'
 */
Barista.Models.CellCountModel = Backbone.Model.extend({
  /**
   * describes the model's default parameters
   * @param {number} count        the number of perturbagens matching an api query, defaults to 0
   * @param {array}  pert_types   an array of objects representing pert\_type categories to keep track of,
   *                              defaults to [{}}]
   * @param {date}   last_update  a timestamp of the latest model update, defaults to the current time
   */
  defaults: {
    count: 0,
    pert_types: [{}],
    g: "cell_type",
    last_update: (new Date()).getTime()
  },

  /**
   * fetches new data from the cell_info api
   * the count and pert_types data is replaced with new data coming from the api call
   * @param  {string}  search_string  value to search for
   * @param  {string}  search_type    one of 'multi', 'single', or 'cell'
   */
  fetch: function(search_string,search_type){
    // depending on the type of query we are making, set up the pert_params for the api call.
    // if we are doing a single query, match that query as a regular expression. If we are
    // doing a multi query, match exact names. If we are doing a cell line query, only match
    // cell_ids
    var sig_info = Barista.APIURL + '/a2/siginfo?callback=?';
    var pert_info = Barista.APIURL + '/a2/pertinfo?callback=?';
    var cell_info = Barista.APIURL + '/a2/cellinfo?callback=?';
    var params = {};
    if (search_type === "multi"){
      search_string = '["' + search_string.split(/[:, ]/).join('","') + '"]';
      pert_params = {q:'{"pert_iname":{"$in":' + search_string + '},"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}', d:"cell_id"};
    }
    if (search_type === "single" || search_type === undefined){
      pert_params = {q:'{"pert_iname":{"$regex":"^' + search_string + '","$options":"i"},"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}', d:"cell_id"};
    }
    if (search_type === "cell") {
      pert_params = {q:'{"cell_id":"' + search_string + '"}', f:'{"cell_id":1}', l:1};
    }

    // run the api request to get the total count of cell lines.
    var self = this;
    var num_perts;
    var t = (new Date()).getTime();
    // if the search type is a "cell", leverage siginfo and cellinfo apis
    if (search_type === "cell") {
      $.getJSON(sig_info,pert_params,function(sig_res) {
        // if there is no reponse, set pert_count: num_perts and pert_types: [{}]
        if (sig_res === 0){
          num_perts = 0;
          self.set({count: num_perts, pert_types: [{}], last_update: t});
        }else{
          // if there is a reponse, update *pert\_count* and *pert\_types*
          num_perts = sig_res.length;
          var cell_lines = '["' + sig_res.join('","') + '"]';
          var cell_params = {q:'{"cell_id":"' + search_string + '"}', g:"cell_type"};
          $.getJSON(cell_info,cell_params,function(cell_res){
            self.set({count: num_perts, pert_types: cell_res, last_update: t});
          });
        }
      });
    }else{
        // if the search type is not "cell", leverage the pertinfo api
        $.getJSON(pert_info,pert_params,function(pert_res) {
        if (pert_res === 0){
          // if there is no reponse, set pert_count: num_perts and pert_types: [{}]
          num_perts = 0;
          self.set({count: num_perts, pert_types: [{}], last_update: t});
        }else{
          // if there is a reponse, update pert_count and pert_types
          num_perts = pert_res.length;
          var cell_lines = '["' + pert_res.join('","') + '"]';
          var cell_params = {q:'{"cell_id":{"$in":' + cell_lines + '}}', g:self.get("g")};
          $.getJSON(cell_info,cell_params,function(cell_res){
            self.set({count: num_perts, pert_types: cell_res, last_update: t});
          });
        }
      });
     }
  }
});

/**
 * `pert_model = new CellModel()`
 * 
 * A Backbone.Model that represents a cell line
 */
Barista.Models.CellModel = Backbone.Model.extend({
	/**
	 * Overides the base Model's initialize method to set the model's cid to the cell_id of the perturbagen
	 * @todo these parameters are never used, consider removing from function
	 * @param  {string}  attributes
	 * @param  {string}  options
	 */
	initialize: function(attributes, options) {
		this.cid = this.get('cell_id');
  }
});

/**
 * `pert_detail_model = new CompoundDetailModel()`
 * 
 * A Backbone.Model that represents a single compound's description
 * The data model captures a number of fields including
 */

Barista.Models.CompoundDetailModel = Backbone.Model.extend({
  /**
   * describes the model's default parameters
   * @param {string} pert_id       the compound's perturbagen identifier
   * @param {string} pert_iname    the compound's standardized name
   * @param {string} pert_summary  a short description of the compound
   * @param {string} pubchem_cid   the PubChem identifier associated with the compound
   * @param {string} wiki_url      wikipedia url
   */

  defaults: {
    pert_id: "",
    pert_iname: "",
    pert_summary: null,
    pubchem_cid: null,
    wiki_url: null,
    molecular_formula: null,
    molecular_wt: null,
    pert_vendor: null,
    num_gold: 0,
    num_sig: 0,
    cell_id: [],
    inchi_key: "",
    structure_url: ""
  },

  /**
   * fetches new data from the pert_info api
   * @param  {string}  search_string  value to search for
   */
  fetch: function(search_string){
    // set up a deferred object that can be used by outside functions.  This deferred will be
    // resolved with the contents of the model attributes
    var deferred = $.Deferred();

    // set up the api parameters to make a regular expression matched query against
    // pert_inames in pertinfo and retrieve the first result's pert_iname and pert_desc
    var pert_info = Barista.APIURL + '/a2/pertinfo?callback=?';
    var params = params = {q:'{"pert_type":"trt_cp","pert_iname":{"$regex":"^' + search_string + '", "$options":"i"}}',
                          l:1};

    // run the api request.  If the search string is "", set the short and long
    // description to undefined and trigger a "CompoundDetailModel:ModelIsNull" event.
    // Otherwise, retrive the pert_iname and pert_desc of the response and set
    // them to the model and trigger a "CompoundDetailModel:ModelIsNotNull" event
    var self = this;
    $.getJSON(pert_info,params,function(perts) {
      if (perts == 0 || search_string == ""){
        self.set({pert_id: "",
                  pert_iname: "",
                  pert_summary: null,
                  pubchem_cid: null,
                  wiki_url: null,
                  molecular_formula: null,
                  molecular_wt: null,
                  pert_vendor: null,
                  num_gold: 0,
                  num_sig: 0,
                  cell_id: [],
                  inchi_key: "",
                  structure_url: ""})
        self.trigger("CompoundDetailModel:ModelIsNull");
      }else{
        //   set all fields on the model
        self.set(perts[0]);

        // grab the wikipedia link if it is there
        var wiki_url = null;
        if (perts[0].pert_url){
          var links = perts[0].pert_url.split(',');
          var wiki_re = /wikipedia/
          links.forEach(function(link){
            if (wiki_re.exec(link)){
              wiki_url = link;
            }
          });
        }

        // grab the PubChem ID if it is there.
        var pubchem_cid = null;
        if (perts[0].pubchem_cid){
          pubchem_cid = perts[0].pubchem_cid;
        }

        // grab the pert summary if it is there
        var pert_summary = null;
        if (perts[0].pert_summary){
          pert_summary = perts[0].pert_summary;
        }

        // grab the sstructure_url if it is there and there is a pubchem_cid (i.e. it is public).
        var structure_url = null;
        if (perts[0].structure_url && pubchem_cid){
          structure_url = perts[0].structure_url;
        }

        // set the fields on the model
        self.set({pert_id: perts[0].pert_id,
                  pert_iname: perts[0].pert_iname,
                  pert_summary: pert_summary,
                  pubchem_cid: pubchem_cid,
                  wiki_url: wiki_url,
                  molecular_formula: perts[0].molecular_formula,
                  molecular_wt: perts[0].molecular_wt,
                  pert_vendor: perts[0].pert_vendor,
                  num_gold: perts[0].num_gold,
                  num_sig: perts[0].num_sig,
                  cell_id: perts[0].cell_id,
                  inchi_key: perts[0].inchi_key,
                  structure_url: structure_url,
                  last_update: (new Date()).getTime()});

        // trigger an event to tell us that the model is not null
        self.trigger("CompoundDetailModel:ModelIsNotNull");
      }
      deferred.resolve(self.attributes);
    });
    return deferred;
  }
});

/**
 * `pert_detail_model = new GeneDetailModel()`
 * 
 * A Backbone.Model that represents a single compound's description
 * The data model captures a number of fields including
 */

Barista.Models.GeneDetailModel = Backbone.Model.extend({
    /**
   * describes the model's default parameters
   * @param {string} pert_id       the compound's perturbagen identifier
   * @param {string} pert_iname    the compound's standardized name
   * @param {string} pert_summary  a short description of the compound
   * @param {string} pubchem_cid   the PubChem identifier associated with the compound
   * @param {string} wiki_url      wikipedia url
   */

  defaults: {
    cell_id: [],
    clone_name: null,
    has_kd: false,
    has_oe: false,
    num_gold: null,
    num_inst: null,
    num_sig: null,
    oligo_seq: null,
    pert_id: null,
    pert_iname: null,
    pert_summary: null,
    seed_seq6: null,
    seed_seq7: null,
    sig_id: [],
    sig_id_gold: [],
    target_region: null,
    target_seq: null,
    vector_id: null
  },

  /**
   * kd specific model fields
   * @type {Array}
   */
  kd_fields: ['clone_name','oligo_seq','seed_seq6','seed_seq7','target_region','target_seq','vector_id'],

  /**
   * fields that are arrays
   * @type {Array}
   */
  array_fields: ['cell_id','sig_id','sig_id_gold'],

  /**
   * fetches new data from the pert_info api
   * All fields are replaced by the first item that matches the api search_string
   * @param  {string}  search_string  value to search for
   */
  fetch: function(search_string){
    // set up a deferred object that can be used by outside functions.  This deferred will be
    // resolved with the contents of the model attributes
    var deferred = $.Deferred();

    // set up the api parameters to make a regular expression matched query against
    // pert_inames in pertinfo
    var pert_info = Barista.APIURL + '/a2/pertinfo?callback=?';
    var params = params = {
        q:'{"pert_type":{"$in":["trt_sh","trt_oe"]},"pert_iname":{"$regex":"^' + search_string + '", "$options":"i"}}',
        f:'{"pert_iname":1}',
        l:1
    };

    // get annotations for both KD and OE experiments of the matched gene name
    var self = this;
    $.getJSON(pert_info,params,function(perts) {
          if (perts == 0 || search_string == ""){
            // if there is no matched gene, go back to defaults
            self.set(self.defaults);
            self.trigger("GeneDetailModel:ModelIsNull");
          }else{
            // otherwise, populate the model with a combination of KD and OE annotations

            // set up the deferred objects for calls to the pertinfo API
            var search_string = perts[0].pert_iname;
            KD_deferred = self.fetch_pert_type(search_string,"trt_sh");
            OE_deferred = self.fetch_pert_type(search_string,"trt_oe");

            // act on the deferred objects once they are resolved
            $.when(KD_deferred,OE_deferred).done(function(kd_annots, oe_annots){
                if ( kd_annots === null && oe_annots === null ){
                    self.set(self.defaults);
                    self.trigger("GeneDetailModel:ModelIsNull");
                }else{
                    var annots = {pert_type:"gene"};
                    if (kd_annots === null){
                        annots.has_kd = false;
                        annots.has_oe = true;
                        self.set(_.extend(oe_annots.unprefixed,oe_annots.prefixed,annots));
                    }else if (oe_annots === null){
                        annots.has_kd = true;
                        annots.has_oe = false;
                        self.set(_.extend(kd_annots.unprefixed,kd_annots.prefixed,annots));
                    }else{
                        annots.has_kd = true;
                        annots.has_oe = true;
                        self.set(_.extend(kd_annots.unprefixed,kd_annots.prefixed,oe_annots.prefixed,annots));
                    }
                    // trigger an event to tell us that the model is not null
                    self.trigger("GeneDetailModel:ModelIsNotNull");
                }
                deferred.resolve(self.attributes);
            });
          }
        });
        return deferred;
    },

      /**
   * fetches new data from the pert_info API for the given pert_type
   * @param  {string}  search_string  value to search for
   * @param  {string}  pert_type      one of 'multi', 'single', or 'cell'
   */
    fetch_pert_type: function(search_string,pert_type){
        // set up a deferred object that we can use in the fetch function above
        var deferred = $.Deferred();

        // set up the api parameters to make an exact matched query against
        // pert_inames in pertinfo and retrieve the first result
        var pert_info = Barista.APIURL + '/a2/pertinfo?callback=?';
        var params = params = {q:'{"pert_type":"'+ pert_type + '","pert_iname":"' + search_string + '"}',
                              l:1};

        // run the api request.  If the search string is "", resolve the generated promise
        // with a null value, otherwise resolve it with the returned pert annotations
        var self = this;
        $.getJSON(pert_info,params,function(perts) {
            if (perts == 0 || search_string == ""){
                deferred.resolve(null);
            }else{
                var annots = {};
                for (field in perts[0]){
                    annots[pert_type + '_' + field] = perts[0][field];
                }
                deferred.resolve({prefixed: annots, unprefixed: perts[0]});
            }
        });

        return deferred;
    }
});

/**
 * `generic_count_model = new GenericCountModel()`
 * 
 * A Backbone.Model that represents the count of a set CMap databbase items
 * The data model captures the total count of perturbagens that meet a search criteria
 * optional arguments:
 * @param {string} search_field  the document field the model with count over upon fetching data,
 *                               defaults to "pert_iname"
 * @param {string} url           the url of the api service to fetch data from, defaults to
 *                               "//api.lincscloud.org/a2/pertinfo"
 */

Barista.Models.GenericCountModel = Backbone.Model.extend({

  defaults:{
    count:0,

  },
  /**
   * custom initialization to make sure we have the correct url for jsonp
   */
  initialize:function(attrs){
    this.setListeners();
  },

/**
 * add description
 */
  setListeners: function() {
    var source = this.get('source');
    if (source) {
      this.listenTo(source,'update',function(){
        if(attrs.source.getCount(attrs.key)) {
          this.set('count',attrs.source.getCount(attrs.key));
        } else {
          this.set('count',0);
        }
      });
    };
  }
  
});

Barista.Models.GenericSourceModel = Backbone.Model.extend({

  /**
   * custom initialization to make sure we have the correct url for jsonp
   */
  initialize:function(attrs){
    this.setKey();
  },

/**
 * add description
 */
  setKey: function() {
    var key = this.get('key');
    this.url = 'http://10.125.171.42:8080/' + key;
  },

/**
 * add description
 * @param  {[type]} inputKey [description]
 */
  getCount:function(inputKey){
    return this.data[inputKey.group][inputKey.name];
  },

/**
 * add description
 */
  update:function(){
    var self = this;
    $.getJSON(this.url,function(data){
      self.data = data;
      self.trigger('update');
    })
  }
});


/**
 * `pert_model = new GenericMongoModel()`
 * 
 * A Backbone.Model that represents a generic MongoDB object
 * All fields in the document are passed to the model as normal and a date attribute is set from the _id
 * field of the mongo document
 */
Barista.Models.GenericMongoModel = Backbone.Model.extend({
    /**
	 * Overides the base Model's initialize method to add the models date attribute and set the cid to
   * the mongo _id field
   * @todo these parameters are never used, consider removing from function
	 * @param  {string}  attributes
	 * @param  {string}  options
	 */
    initialize: function(attributes, options) {
        this.cid = this.get('_id')
        this.set("date", new Date(parseInt(this.cid.substring(0,8), 16)*1000));
  }
});

/**
 * heatmap_model = new HeatmapModel({data: [[1,2],[3,4]],
											rid: ['1','2'],
											cid: ['1','2'],
											annots: ['1','2'],
											title: ""});
 *
 * A Backbone.Model that represents the data in a heatmap
 * The model contains a two dimensional array of numbers, row and columns labels, and a title
 * example usage:

 			heatmap_model = new HeatmapModel();
 * optional arguments:
 * @param {array}  data          the data object to use in the heatmap, defualts to [[1,2],[3,4]]
 * @param {array}  rid           the row labels to use in the heatmap, defualts to ['1','2']
 * @param {array}  cid           the column labels to use in the heatmap, defualts to ['1','2']
 * @param {array}  annots        optional annotations categories to show under the heatmap, defualts to
 *                               undefined
 * @param {array}  annote_label  optional label for annotations. defualts to undefined
 * @param {string} title         the title to use in the plot, defaults to ""
 */
Barista.Models.HeatmapModel = Backbone.Model.extend({
	/**
   * set up defaults for model values
   * @param {array}  data    the data object to use in the heatmap, defualts to [[1,2],[3,4]]
   * @param {array}  rid     the row labels to use in the heatmap, defualts to ['1','2']
   * @param {array}  cid     the column labels to use in the heatmap, defualts to ['1','2']
   * @param {array}  annots  optional annotations categories to show under the heatmap, defualts to
   *                         undefined
   * @param {string} title   the title to use in the plot, defaults to ""
   */
	defaults: {
		data: [[1,2],[3,4]],
		rid: ['1','2'],
		cid: ['1','2'],
		annots: undefined,
		title: "",
		last_update: (new Date()).getTime()
	}
})
/**
 * `pert_cell_breakdown_model = new PertCellBreakdownModel()`
 * 
 * A Backbone.Model that represents the cell line based breakdown of a set of perturbagens
 * the number of perturbagens matching a query is counted for each cell line
 * Data for all cell lines that contain a match to the query are represented in the model
 */
Barista.Models.PertCellBreakdownModel = Backbone.Model.extend({
      /**
   * describes the model's default parameters
   * @param {string} filter       the current filter to be used with api calls, defaults to ""
   * @param {object} tree_object  an object that describes the structured tree data representing cell_line
   *                              counts, defaults to {children:[]}
   */
  defaults: {
    "filter": "",
    "tree_object": {children:[]}
  },

    /**
   * fetches new data from the pert_info api
   * the tree_object data is updated
   * @param  {string}  search_string  value to search for
   * @param  {string}  search_type    one of 'multi', 'single', or 'cell'
   */
  fetch: function(search_string,search_type){
    // depending on the type of query we are making, set up the q param for the api call.
    // if we are doing a single query, match that query as a regular expression. If we are
    // doing a multi query, match exact names. If we are doing a cell line query, only match
    // cell_ids
    var pert_info = Barista.APIURL + '/a2/pertinfo?callback=?';
    var params = {};
    if (search_type === "multi"){
      search_string = '["' + search_string.split(/[:, ]/).join('","') + '"]';
      params = {q:'{' + this.get('filter') + '"pert_iname":{"$in":' + search_string + '}}', g:"cell_id"};
    }
    if (search_type === "single" || search_type === undefined){
      params = {q:'{' + this.get('filter') + '"pert_iname":{"$regex":"^' + search_string + '","$options":"i"}}', g:"cell_id"};
    }
    if (search_type === "cell") {
      params = {q:'{' + this.get('filter') + '"pert_iname":{"$regex":""}}', g:"cell_id"};
    }


    // run the api request
    var self = this;
    $.getJSON(pert_info,params,function(response) {
      if (response === 0){
        children = [];
      }else{
        children = response;
      }
      if (search_type === "cell") {
        children = _.filter(children,function(o){return o._id == search_string;});
      }
      var t = (new Date()).getTime();
      self.set({tree_object: {name:"root", children:children}, last_update: t});
    });
  }
});
/**
 * `count_model = new PertCountModel({type_string: '["trt_sh","trt_oe"]'})`
 * 
 * A Backbone.Model that represents the count of a set of perturbagens
 * The data model captures both the total count of perturbagens that meet a search criteria and the count 
 * of each annotation category for the set of perturbagens
 * optional arguments:
 * @param {string} type_string  the string of pert_types that will be search upon fetching data, defaults
 *                              to '["trt_sh","trt_oe"]'
 */

Barista.Models.PertCountModel = Backbone.Model.extend({
  /**
   * describes the model's default parameters
   * @param {string}  type_string      the string of pert_types that will be search upon fetching data,
   *                                   defaults to '["trt_sh","trt_oe"]'
   * @param {number}  count            the number of perturbagens matching an api query, defaults to 0
   * @param {array}   pert_types       an array of objects representing pert_type categories to keep track
   *                                   of, defaults to [{}}]
   * @param {string}  pert_type_field  a field name over which to look for pert_types.  This runs an
   *                                   aggregated count over the specified field name in the Connectivity
   *                                   Map database, defaults to 'pert_icollection'
   * @param {date}    last_update      a timestamp of the latest model update, defaults to the current time
   */
  defaults: {
    "type_string": '["trt_cp"]',
    "count": 0,
    "pert_types": [{}],
    "pert_type_field": "pert_icollection",
    "last_update": (new Date()).getTime()
  },

  /**
   * fetches new data from the pert_info api
   * the count and pert_types data is replaced with new data coming from the api call
   * @param  {string}  search_string  value to search for
   * @param  {string}  search_type    one of 'multi', 'single', or 'cell'
   */
  fetch: function(search_string,search_type){
    // depending on the type of query we are making, set up the q param for the api call.
    // if we are doing a single query, match that query as a regular expression. If we are
    // doing a multi query, match exact names. If we are doing a cell line query, only match
    // cell_ids
    var pert_info = Barista.APIURL + '/a2/pertinfo?callback=?';
    var params = {};
    if (search_type === "multi") {
      search_string = '["' + search_string.split(/[:, ]/).join('","') + '"]';
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$in":' + search_string + '}}',c:true};
    }
    if (search_type === "single" || search_type === undefined){
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$regex":"^' + search_string + '","$options":"i"}}',c:true};
    }
    if (search_type === "cell") {
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$regex":"","$options":"i"},"cell_id":"' + search_string + '"}', c:true};
    }

    // run the api request
    var self = this;
    var num_perts;
    $.getJSON(pert_info,params,function(perts) {
      if (perts === 0){
        num_perts = 0;
      }else{
        num_perts = perts.count;
      }
      var t = (new Date()).getTime();
      params = _.omit(params,'c');
      params = _.extend(params,{g:self.get('pert_type_field')});
      $.getJSON(pert_info, params, function(pert_types){
        self.set({count: num_perts, pert_types: pert_types, last_update: t});
      });
    });
  }
});

/**
 * A Backbone.Model that represents a single perturbagen's description
 * The data model captures annotation data from compounds or genes
 * To do this, the model uses CompoundDetailModel and GeneDetailModel under the hood and pulls in their
 * attributes depending on how the model's fetch method is called
 */

Barista.Models.PertDetailModel = Backbone.Model.extend({
  /**
   * describes the model's default parameters
   * this an incomplete list of defaults, only those that are common to all perturbagens
   */
  defaults: {
    cell_id: [],
    num_gold: null,
    num_inst: null,
    num_sig: null,
    pert_id: null,
    pert_iname: null,
    pert_type: null,
    sig_id: [],
    sig_id_gold: []
  },

  /**
   * a sub-model to be used when the PertDetailModel model needs to fetch Compound annotations
   * @type {Barista}
   */
  compound_sub_model: new Barista.Models.CompoundDetailModel(),

  /**
   * a sub-model to be used when the PertDetailModel model needs to fetch Gene annotations
   * @type {Barista}
   */
  gene_sub_model: new Barista.Models.GeneDetailModel(),

  /**
   * fetches new data from the pert_info api
   * depending on the model_type parameter,the method calls the appropriate fetch method for the given sub
   * model type and fills the PertDetailModel's attributes with that of the sub model
   * @param  {string}  search_string  value to search for
   * @param  {string}  search_type    one of 'multi', 'single', or 'cell'
   */
  fetch: function(search_string, model_type){
      var self = this;
      var deferred = $.Deferred();
      switch (model_type){
      case "compound":
          this.compound_sub_model.fetch(search_string).then(function(attributes){
              self.clear().set(attributes);
              deferred.resolve();
          });
          break;
      case "gene":
          this.gene_sub_model.fetch(search_string).then(function(attributes){
              self.clear().set(attributes);
              deferred.resolve();
          });
          break;
      }
      return deferred;
  }
});

/**
 * `pert_model = new PertModel()`
 * 
 * A Backbone.Model that represents a single perturbagen
 */
Barista.Models.PertModel = Backbone.Model.extend({
	/**
  * Overrides the base Model's initialize method to set the model's cid to the pert_id of the perturbagen
  * @todo these parameters are never used, consider removing from function
  * @param  {string}  attributes
  * @param  {string}  options
  */ 
	initialize: function(attributes, options) {
		this.cid = this.get('pert_id');
		var pert_type = this.get('pert_type');
		switch(pert_type){
			case "trt_cp": this.set({pert_type_label: '<span class="label" style="background-color: #E69F00">SMC</span>'}); break;
			case "trt_oe": this.set({pert_type_label: '<span class="label" style="background-color: #D55E00">OE</span>'}); break;
			case "trt_sh": this.set({pert_type_label: '<span class="label" style="background-color: #56B4E9">KD</span>'}); break;
			default: this.set({pert_type_label: '<span class="label" style="background-color: #BDBDBD">' + pert_type + '</span>'});
		}
  }
});
/**
 * A Backbone.Model to hold the information needed to make a simple scatter plot
 * The model includes a title, x and y axis titles, x and y data, and an optional object for metadata on
 * the points in the data
 * The meta data object should contain attributes for each meta data category and an array of values
 * matching the size of the points in the data
 * for example:
 * meta_data = {'dose: [1,2,3]', timepoint: ['6H','6H','6H']}
 * usage:
 * summly_result = new SummlyResultModel();
 */
Barista.Models.ScatterPlotModel = Backbone.Model.extend({
	/**
   * set of model defaults
   * @param {string} title         the title of the plot. Defaults to ""
   * @param {string} x_axis-title  the title of the x_axis. Defaults to ""
   * @param {string} y_axis-title  the title of the y_axis. Defaults to ""
   * @param {array}  x_data        an array of data for the x_axis. Defaults to []
   * @param {array}  y_data        an array of data for the y_axis. Defaults to []
   * @param {object} meta-data     object containing meta data for the points in the plot. Defaults to {}
   */
	defaults: {
		title: "",
		x_axis_title: "",
		y_axis_title: "",
		x_data: [],
		y_data: [],
		meta_data: {}
	}
});
/**
 * A Backbone.Model that represents the count of a set of signatures
 * he data model captures both the total count of signatures that meet a search criteria and the count of
 * each annotation category for the set of signatures
 * optional arguments:
 * @param {string} type_string  the string of pert_types that will be search upon fetching data, defaults
 *                              to '["trt_sh","trt_oe"]'
 */

Barista.Models.SigCountModel = Backbone.Model.extend({
  /**
   * describes the model's default parameters
   * @param {string} type_string      the string of pert_types that will be search upon fetching data,
   *                                  defaults to '["trt_sh","trt_oe"]'
   * @param {number} count            the number of perturbagens matching an api query, defaults to 0
   * @param {array}  pert_types       an array of objects representing pert\_type categories to keep track
   *                                  of, defaults to [{}}]
   * @param {string} pert_type_field  a field name over which to look for pert_types.  This runs an
   *                                  aggregated count over the specified field name in the Connectivity
   *                                  Map database, defaults to 'pert_icollection'
   * @param {date}   last_update      a timestamp of the latest model update, defaults to the current time
   */
  defaults: {
    "type_string": '["trt_sh","trt_oe","trt_oe.mut"]',
    "count": 0,
    "pert_types": [{}],
    "pert_type_field": "pert_icollection",
    "last_update": (new Date()).getTime()
  },

  /**
   * fetches new data from the sig_info api
   * the count and sig_types data is replaced with new data coming from the api call
   * @param  {string}  search_string  value to search for
   * @param  {string}  search_type    one of 'multi', 'single', or 'cell'
   */
  fetch: function(search_string,search_type){
    // depending on the type of query we are making, set up the q param for the api call.
    // if we are doing a single query, match that query as a regular expression. If we are
    // doing a multi query, match exact names. If we are doing a cell line query, only match
    // cell_ids
    var sig_info = Barista.APIURL + '/a2/siginfo?callback=?';
    var params = {};
    if (search_type === "multi") {
      search_string = '["' + search_string.split(/[:, ]/).join('","') + '"]';
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$in":' + search_string + '}}',c:true};
    }
    if (search_type === "single" || search_type === undefined){
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$regex":"^' + search_string + '","$options":"i"}}',c:true};
    }
    if (search_type === "cell") {
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$regex":"","$options":"i"},"cell_id":"' + search_string + '"}', c:true};
    }

    // run the api request
    var self = this;
    var num_perts;
    $.getJSON(sig_info,params,function(perts) {
      if (perts === 0){
        num_perts = 0;
      }else{
        num_perts = perts.count;
      }
      var t = (new Date()).getTime();
      params = _.omit(params,'c');
      params = _.extend(params,{g:self.get('pert_type_field')});
      $.getJSON(sig_info, params, function(pert_types){
        self.set({count: num_perts, pert_types: pert_types, last_update: t});
      });
    });
  }
});
/**
 * `pert_model = new SignatureModel()`
 * 
 * A Backbone.Model that represents a single signature
 */
Barista.Models.SignatureModel = Backbone.Model.extend({
	/**
     * Overides the base Model's initialize method to add the model's cid to the sig_id of the perturbagen
     * @todo these parameters are never used, consider removing from function
     * @param  {string}  attributes
     * @param  {string}  options
     */
	initialize: function(attributes, options) {
		// set the unique collection identifier to match the sig_id
		this.cid = this.get('sig_id');
		
		// generate an html label for pert_type
		var pert_type = this.get('pert_type');
		switch(pert_type){
			case "trt_cp": this.set({pert_type_label: '<span class="label" style="background-color: #E69F00">SMC</span>'}); break;
			case "trt_oe": this.set({pert_type_label: '<span class="label" style="background-color: #D55E00">OE</span>'}); break;
			case "trt_sh": this.set({pert_type_label: '<span class="label" style="background-color: #56B4E9">KD</span>'}); break;
			this.set({pert_type_label: '<span class="label" style="background-color: #BDBDBD">' + pert_type + '</span>'});
		}

		// generate an html label for is_gold
		var is_gold = this.get('is_gold');
		if (is_gold){
			this.set({is_gold_label: '<span class="label" style="background-color: #F0E442; color:gray">Gold</span>'});
		}else{
			this.set({is_gold_label: '<span class="label">Not Gold</span>'});
		}
  }
});
/**
 * summly_result = new SummlyResultModel();
 * A Backbone.Model that represents the a single CMap Summly result
 * A single result is composed of the connection between two pert_inames (a query and a target), the
 * component data that went into computing the summly result, and the statistics  of the summly computation
 */
Barista.Models.SummlyResultModel = Backbone.Model.extend({
	/**
   * set up defaults for model values
   * @param {string} query             the query perturbagen (pert_iname), defaults to *""*
   * @param {string} target            the target perturbagen (pert_iname), defaults to *""*
   * @param {number} summly_score      summarized connectivity score across cell types, defaults to *-666*
   * @param {number} summly_rank       summarized percent rank across cell types, defaults to *-666*
   * @param {number} specificity       fraction of background queries that score/rank higher than the
   *                                   observed connection, defaults to *-666*
   * @param {object} cell_line_scores  the connectivity map scores in each cell line for the target
   *                                   perturbagen, defaults to *{}*
   */
	defaults: {
		query: "",
		target: "",
		summly_score: -666,
		summly_rank: -666,
		specificity: -666,
		cell_line_scores: {}
	},

	/**
     * Overides the base Model's initialize method to add the model's cid to the summly_id
     * @todo these parameters are never used, consider removing from function
     * @param  {string}  attributes
     * @param  {string}  options
     */
	initialize: function(attributes,options){
		this.cid = this.get('target');
		var pert_type = this.get('pert_type');
		switch(pert_type){
			case "trt_cp": this.set({pert_type_label: '<span class="label" style="background-color: #E69F00">SMC</span>'}); break;
			case "trt_oe": this.set({pert_type_label: '<span class="label" style="background-color: #D55E00">OE</span>'}); break;
			case "trt_sh": this.set({pert_type_label: '<span class="label" style="background-color: #56B4E9">KD</span>'}); break;
			default: this.set({pert_type_label: '<span class="label">' + pert_type + '</span>'});
		}
	}
});
/**
 * A Backbone.Model that represents the data required to build a CMapTickView
 * The model contains a data object that has keys for each row to display in the view and array values for
 * each tick to display in each row
 * An example data object might look like this:

			{PC3: [.23,-.28], MCF7: [-0.6]}
 * example usage:
 * tick_model = new TickModel();
 */
Barista.Models.TickModel = Backbone.Model.extend({
	/**
   * set up defaults for model values
   * @param {string} title        the title to use in the plot, defaults to ""
   * @param {object} data_object  the data object to use when plotting. defualts to {}
   */
	defaults: {
		title: "",
		data_object: {}
	}
});
/**
 * Model to represent a sequence and the modifications on that sequence
 */
Barista.Models.SequenceModel = Backbone.Model.extend({

  /**
   * the default options for the model
   */
  defaults: {
    sequence: '',
    displaySequence: '',
    modifications: new Backbone.Collection()
  },

  /**
   * initialize the model to listen to its own model changes
   */
  initialize: function() {
    this.listenTo(this, 'change:sequence', this.parseSequence);
  },

  /**
   * function to populate the derived model attributes of displaySequence and modifications
   */
  parseSequence: function() {
    var sequence = this.get('sequence'),
        modifications = this.get('modifications'),
        indices = [],
        numMods = 0;
        modObjects = [];

    // reset the modifications collection
    modifications.reset();

    // remove leading and trailing underscores
    sequence = sequence.replace(/_/g,'');

    // find all occurances of '(' in the sequence, these are the modifications
    for(var i=0; i<sequence.length;i++) {
      if (sequence[i] === '(') {
        indices.push(i);
      }
    }

    // for each modification, pop it out of the sequence string and add a new
    // model to the modifications collection
    indices.forEach(function(index) {
      var mod;
      index -= numMods * 4;
      mod = sequence.slice(index + 1,index + 3);
      sequence = [sequence.slice(0,index),sequence.slice(index + 4,sequence.length)].join('');
      modObjects.push({index: index, modification: mod});
      numMods += 1;
    });

    modifications.add(modObjects);

    // set the derived attributes on the model
    this.set({'modifications': modifications, 'displaySequence': sequence});
  }
});

/**
 * A Backbone.Collection that represents a set of analysis history objects
 * This collection is suitable for internal use in GridView
 * optional arguments:
 * @param {Backbone.model} model      the model used for the collection objects, defaults to PertModel
 * @param {string}         url        the url from which model data is fetched, defaults  to
 *                                    '//api.lincscloud.org/a2/pertinfo?callback=?'
 * @param {string}         skip       the skip parameter used in api calls when the collection is updated
 *                                    defaults to 0
 * @param {boolean}        isLoading  indicates wether or not the collection is in the middle of a fetch
 *                                    operation, defaults to false
 */

Barista.Collections.AnalysisHistoryCollection = Backbone.Collection.extend({
    /**
     * fetch model data from assigned url
     */
    initialize: function(){
        // the url from which model data is fetched
        this.url =  Barista.APIURL + '/compute_status?callback=?';
    },

    /**
     * the model used for the collection objects
     */
    model: Barista.Models.AnalysisHistoryModel,

    /**
     * the skip parameter used in api calls when the collection is updated
     * @type {Number}
     */
    skip: 0,

    /**
     * indicates wether or not the collection is in the middle of a fetch operation
     * @type {Boolean}
     */
    isLoading: false,

    /**
     * the maximum size of the collection
     * defaults to Infinity
     * @type {Number}
     */
    maxCount: Infinity,

    /**
     * the user_id to search jobs for
     * Forcing this to be set prevents us from searching other users jobs
     * @type {string}
     */
    user: undefined,

  /**
   * Gets additional data from the specified url and stores them as models in the collection
   * `AnalysisHistoryCollection.getData(search_string,search_type,limit)`
   * the count and pert_types data is replaced with new data coming from the api call
   * @param  {string}  search_string  the string on which a regex search into the api at the collections
   *                                  url will be performed, defaults to ""
   * @param  {string}  search_type    the type of search that will be performed, defaults to "single"
   * @param  {number}  limit          the number of models to be fetched, defaults to 30
   */
    getData: function(search_string,search_type,limit){
        var self = this;
        // set isLoading to true so we don't constantly make api calls before the data comes back
        this.isLoading = true;

        // store the value of search_string, search_type, and limit on the collection object
        this.search_string = (search_string !== undefined) ? search_string : '';
        this.search_type = (search_type !== undefined) ? search_type : '';
        this.limit = (limit !== undefined) ? limit : 30;

        // set up the query parameter for user_id
        var user_q = "";
        if (self.user){
            user_q = '"user_id":"' + self.user + '",';
        }
        switch (search_type){
        case "job_id":
            this.q_param = '{' + user_q + '"job_id":{"$regex":"' + search_string + '", "$options":"i"},"status":{"$ne":"deleted"}}';
            break;
        case "status":
            this.q_param = '{' + user_q + '"status":{"$regex":"' + search_string + '", "$options":"i"},"status":{"$ne":"deleted"}}';
            break;
        case "tool_id":
            this.q_param = '{' + user_q + '"tool_id":{"$regex":"' + search_string + '", "$options":"i"},"status":{"$ne":"deleted"}}';
            break;
        case "job_name":
            this.q_param = '{' + user_q + '"params.rpt":"' + search_string + '","status":{"$ne":"deleted"}}';
            break;
        case "user_id":
            this.q_param = '{' + user_q + '"user_id":{"$regex":"' + search_string + '", "$options":"i"},"status":{"$ne":"deleted"}}';
            break;
        default:
            this.q_param = '{' + user_q + '"job_id":{"$regex":"' + search_string + '", "$options":"i"},"status":{"$ne":"deleted"}}';
        }


        // build a parameter object for the api call
        var params = {q: this.q_param,
            l: this.limit,
            sk: this.skip,
            s: '{"_id":-1}'};

        // make the api call and store the results as individual models in the collection.
        // we don't remove old models in this case as we want to support continuous building
        // of the model list from a remote api.  On success, set isLoading back to false
        // and resolve a deferred that we set up as a return value
        var def = $.Deferred();
        $.getJSON(this.url, params, function(res){
            self.set(res,{remove: false});
            self.isLoading = false;
            def.resolve();
        });

        // make a second api call to find the maximum number of items in the collection
        // and set that as an attribute on it
        if (this.maxCount == Infinity){
            params = _.omit(params,['l','sk','s']);
            params = _.extend(params,{c: true});
            $.getJSON(this.url,params,function(res){
                self.maxCount = res.count;
            });
        }

        return def;
    }
});

/**
 *  pert_collection = new CellCollection({model: PertModel,
                                           url: Barista.APIURL + '/a2/pertinfo?callback=?',
                                           skip: 0,
                                           isLoading: false});
 *                                          
 * A Backbone.Collection that represents a set of cell types
 * This collection is suitable for internal use in GridView
 * optional arguments:
 * @param {Backbone.model} model      the model used for the collection objects, defaults to *PertModel*
 * @param {string}         url        the url from which model data is fetched, defaults to
 *                                    '//api.lincscloud.org/a2/pertinfo?callback=?'
 * @param {string}         skip       the skip parameter used in api calls when the collection is updated,
 *                                    defaults to 0
 * @param {boolean}        isLoading  indicates wether or not the collection is in the middle of a fetch
 *                                    operation, defaults to false`
 */

Barista.Collections.CellCollection = Backbone.Collection.extend({
    /**
     * fetch model data from assigned url
     */
    initialize: function(){
        // the url from which model data is fetched
        this.url =  Barista.APIURL + '/a2/cellinfo?callback=?';
    },

    /**
     * the model used for the collection objects
     */
    model: Barista.Models.CellModel,

    /**
     * the skip parameter used in api calls when the collection is updated
     * @type {Number}
     */
    skip: 0,

    /**
     * indicates wether or not the collection is in the middle of a fetch operation
     * @type {Boolean}
     */
    isLoading: false,

/**
   * Gets additional data from the specified url and stores them as models in the collection
   * the count and pert_types data is replaced with new data coming from the api call
   * `PertCollection.getData(search_string,search_type,limit)`
   * @param  {string}  search_string  the string on which a regex search into the api at the collections
   *                                  url will be performed, defaults to ""
   * @param  {string}  search_type    the type of search that will be performed, defaults to "single"
   * @param  {number}  limit          the number of models to be fetched, defaults to 30
   */
    getData: function(search_string,search_column,limit){
        var self = this;
        // set isLoading to true so we don't constantly make api calls before the data comes back
        this.isLoading = true;

        this.search_string = (search_string !== undefined) ? search_string : '';
        this.search_column = (search_column !== undefined) ? search_column : 'cell_id';
        //TODO big hack to adapt to GridView implementation
        if (this.search_column == 'single') {
          this.search_column = 'cell_id';
        }
        // this.search_type = (search_type !== undefined) ? search_type : '';
        this.limit = (limit !== undefined) ? limit : 30;

        if (this.search_column == 'mutations'){
            this.q_param = '{"lincs_status":{"$in":["core_cline","core_pline","DIVR"]},"mutations":"' + this.search_string + '"}';
        }else{
            this.q_param = '{"lincs_status":{"$in":["core_cline","core_pline","DIVR"]},"' + this.search_column + '":' + '{"$regex":"^' + this.search_string + '","$options":"i"}}';
        }

        // build a parameter object for the api call
        // TODO-remove: alert(this.q_param);
        var params = {q: this.q_param,
            l: this.limit,
            // s: this.s_param, // no sorting yet
            sk: this.skip};

        $.getJSON(this.url, params, function(res){
            self.set(res,{remove: false});
            self.isLoading = false;
            self.trigger("fetch");
        });
    }
});

/**
 *        pert_collection = new PertCollection({model: PertModel,
 *                                         url: Barista.APIURL + '/a2/pertinfo?callback=?',
 *                                         skip: 0,
 *                                         isLoading: false});
 *                                         
 * A Backbone.Collection that represents an arbitrary set of objects stored in a JSON file
 * The JSON file is assumed to contain a top level array containing objects
 * Each object in the array is modeled as a base Backbone.Model inside of the collection
 * optional arguments:
 * @param {Backbone.model} model      the model used for the collection objects, defaults to *PertModel*
 * @param {string}         url        the url from which model data is fetched, defaults  to
 *                                    '//api.lincscloud.org/a2/pertinfo?callback=?'
 * @param {string}         skip       the skip parameter used in api calls when the collection is updated
 *                                    defaults to 0
 * @param {boolean}        isLoading  indicates wether or not the collection is in the middle of a fetch
 *                                    operation. defaults to false
 */
Barista.Collections.GenericJSONCollection = Backbone.Collection.extend({
    /**
     * the model used for collection objects
     */
	model: Barista.Models.PertModel,

    /**
     * the url from which model data is fetched
     * @type {String}
     */
    url: 'data.json',

    /**
     * the skip parameter used in api calls when the collection is updated
     * @type {Number}
     */
    skip: 0,
 
    /**
     * indicates wether or not the collection is in the middle of a fetch operation
     * @type {Boolean}
     */
    isLoading: false,

    /**
     * the maximum size of the collection
     * defaults to Infinity
     * @type {Number}
     */
    maxCount: Infinity,

  /**
   * Gets additional data from the specified url and stores them as models in the collection
   * the count and pert_types data is replaced with new data coming from the api call
   * `GenericJSONCollection.getData(search_string,search_type,limit)`
   * @param  {string}  search_string  the string on which a regex search into the api at the collections
   *                                  url will be performed, defaults to ""
   * @param  {string}  search_type    the type of search that will be performed, defaults to "single"
   * @param  {number}  limit          the number of models to be fetched, defaults to 30
   */
    getData: function(search_string,search_type,limit){
        var self = this;
        // set isLoading to true so we don't constantly make api calls before the data comes back
        this.isLoading = true;

        // store the value of search_string, search_type, and limit on the collection object
        this.search_string = (search_string !== undefined) ? search_string : '';
        this.search_type = (search_type !== undefined) ? search_type : '';
        this.limit = (limit !== undefined) ? limit : 30;

        // fetch data from the given url.  If the url attribute is a string, fetch data via an ajax
        // request. Read each returned item in the response into a new PertModel.  If it is an object, 
        // assume it is an array of data and read each array item into a new PertModel
        if (typeof(this.url) == 'object'){
            this.url.forEach(function(o){self.add(new Barista.Models.PertModel(o));});
            // set the collection's maxCount attribute to the length of the collection
            this.maxCount = this.models.length;
        }else{
            $.getJSON(this.url,function(res){
                res.forEach(function(o){
                    self.add(new PertModel(o));
                });
                // set the collection's maxCount attribute to the length of the collection
                this.maxCount = this.models.length;
            });
        }
	}
});
/**
 * `pert_collection = new PertCollection({model: PertModel,
 *                                         // url: Barista.APIURL + '/a2/pertinfo?callback=?',
 *                                         // skip: 0,
 *                                         // isLoading: false});`
 *                                         
 * A Backbone.Collection that represents a set of perturbagens
 * This collection is suitable for internal use in GridView
 * optional arguments:
 * @param {Backbone.model} model      the model used for the collection objects, defaults to *PertModel*
 * @param {string}         url        the url from which model data is fetched, defaults  to
 *                                    '//api.lincscloud.org/a2/pertinfo?callback=?'
 * @param {string}         skip       the skip parameter used in api calls when the collection is updated,
 *                                    defaults to 0
 * @param {boolean}        isLoading  indicates wether or not the collection is in the middle of a fetch
 *                                    operation, defaults to false
 */

Barista.Collections.PertCollection = Backbone.Collection.extend({
    /**
     * fetch model data from assigned url
     */
    initialize: function(){
        // the url from which model data is fetched
        this.url =  Barista.APIURL + '/a2/pertinfo?callback=?';
    },

    /**
     * the model used for the collection objects
     */
    model: Barista.Models.PertModel,

    /**
     * the skip parameter used in api calls when the collection is updated
     * @type {Number}
     */
    skip: 0,

    /**
     * indicates wether or not the collection is in the middle of a fetch operation
     * @type {Boolean}
     */
    isLoading: false,

    /**
     * the maximum size of the collection
     * defaults to Infinity
     * @type {Number}
     */
    maxCount: Infinity,

  /**
   * Gets additional data from the specified url and stores them as models in the collection
   * the count and pert_types data is replaced with new data coming from the api call
   * `PertCollection.getData(search_string,search_type,limit)`
   * @param  {string}  search_string  the string on which a regex search into the api at the collections
   *                                  url will be performed, defaults to ""
   * @param  {string}  search_type    the type of search that will be performed, defaults to "single"
   * @param  {number}  limit          the number of models to be fetched, defaults to 30
   */
    getData: function(search_string,search_type,limit){
        var self = this;
        // set isLoading to true so we don't constantly make api calls before the data comes back
        this.isLoading = true;

        // store the value of search_string, search_type, and limit on the collection object
        this.search_string = (search_string !== undefined) ? search_string : '';
        this.search_type = (search_type !== undefined) ? search_type : '';
        this.limit = (limit !== undefined) ? limit : 30;

        // depending on the type of query we are making, set up the q param for the api call.
        // if we are doing a single query, match that query as a regular expression. If we are
        // doing a multi query, match exact names. If we are doing a cell line query, only match
        // cell\_ids
        if (search_type === "single" || search_type === undefined){
            this.q_param = '{"pert_iname":{"$regex":"^' + search_string + '","$options":"i"},"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}';
        }
        if (search_type === "multi"){
            search_string = '["' + search_string.split(":").join('","') + '"]';
            this.q_param = '{"pert_iname":{"$in":"' + search_string + '"},"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}';
        }
        if (search_type === "cell"){
            this.q_param = '{"cell_id":"' + search_string + '"}';
        }

        // set up the sorting paramter for the api call
        this.s_param = '{"pert_iname":1}';

        // set up a filtering parameter for the api call
        this.f_param = '{"pert_iname":1,"pert_type":1,"pert_id":1,"num_sig":1}';

        // build a parameter object for the api call
        var params = {q: this.q_param,
            l: this.limit,
            s: this.s_param,
            f: this.f_param,
            sk: this.skip};

        // make the api call and store the results as individual models in the collection.
        // we don't remove old models in this case as we want to support continuous building
        // of the model list from a remote api.  On success, set isLoading back to false
		$.getJSON(this.url, params, function(res){
            self.set(res,{remove: false});
            self.isLoading = false;
        });

        // make a second api call to find the maximum number of items in the collection
        // and set that as an attribute on it
        if (this.maxCount == Infinity){
            params = _.omit(params,['l','s','f','sk']);
            params = _.extend(params,{c: true});
            $.getJSON(this.url,params,function(res){
                self.maxCount = res.count;
            });
        }
    }
});

/**
 * `pert_collection = new SignatureCollection({model: PertModel,
 *                                         // url: Barista.APIURL + '/a2/siginfo?callback=?',
 *                                         // skip: 0,
 *                                         // isLoading: false});`
 *                                         
 * A Backbone.Collection that represents a set of signatures
 * This collection is suitable for internal use in GridView
 * optional arguments:
 * @param {Backbone.model} model      the model used for the collection objects, defaults to *PertModel*
 * @param {string}         url        the url from which model data is fetched, defaults  to
 *                                    '//api.lincscloud.org/a2/pertinfo?callback=?'
 * @param {string}         skip       the skip parameter used in api calls when the collection is updated,
 *                                    defaults to 0
 * @param {boolean}        isLoading  indicates wether or not the collection is in the middle of a fetch
 *                                    operation, defaults to false
 */

Barista.Collections.SignatureCollection = Backbone.Collection.extend({
    /**
     * fetch model data from assigned url
     */
    initialize: function(){
        // the url from which model data is fetched
        this.url =  Barista.APIURL + '/a2/siginfo?callback=?';
    },

    /**
     * the model used for the collection objects
     */
    model: Barista.Models.SignatureModel,

    /**
     * the skip parameter used in api calls when the collection is updated
     * @type {Number}
     */
    skip: 0,

    /**
     * indicates wether or not the collection is in the middle of a fetch operation
     * @type {Boolean}
     */
    isLoading: false,

    /**
     * the maximum size of the collection
     * defaults to Infinity
     * @type {Number}
     */
    maxCount: Infinity,

    /**
     * boolean flag telling the collection to only include gold Connectivity Map signatures
     * @type {Boolean}
     */
    gold_only: true,

  /**
   * Gets additional data from the specified url and stores them as models in the collection
   * the count and pert_types data is replaced with new data coming from the api call
   * `SignatureCollection.getData(search_string,search_type,limit)`
   * @param  {string}  search_string  the string on which a regex search into the api at the collections
   *                                  url will be performed, defaults to ""
   * @param  {string}  search_type    the type of search that will be performed, defaults to "single"
   * @param  {number}  limit          the number of models to be fetched, defaults to 30
   */
    getData: function(search_string,search_type,limit){
        var self = this;
        // set isLoading to true so we don't constantly make api calls before the data comes back
        this.isLoading = true;

        // store the value of search_string, search_type, and limit on the collection object
        this.search_string = (search_string !== undefined) ? search_string : "";
        this.search_type = (search_type !== undefined) ? search_type : "";
        this.limit = (limit !== undefined) ? limit : 30;

        // depending on the type of query we are making, set up the q param for the api call.
        // if we are doing a single query, match that query as a regular expression. If we are
        // doing a multi query, match exact names. If we are doing a cell line query, only match
        // cell_ids
        if (search_type === "single" || search_type === ""){
            if (this.gold_only){
                this.q_param = '{"pert_id":"' + search_string + '","is_gold":1}';
            }else{
                this.q_param = '{"pert_id":"' + search_string + '"}';
            }
        }
        if (search_type === "multi"){
            search_string = '["' + search_string.split(":").join('","') + '"]';
            if (this.gold_only){
                this.q_param = '{"pert_id":{"$in":"' + search_string + '"},"is_gold":1,"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}';
            }else{
                this.q_param = '{"pert_id":{"$in":"' + search_string + '"},"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}';
            }
        }
        if (search_type === "cell"){
            if (this.gold_only){
                this.q_param = '{"cell_id":"' + search_string + '","is_gold":1}';
            }else{
                this.q_param = '{"cell_id":"' + search_string + '"}';
            }
        }

        // set up the sorting paramter for the api call
        this.s_param = '{"pert_id":1}';

        // set up a filtering parameter for the api call
        this.f_param = '{"pert_id":1,"pert_type":1,"pert_iname":1,"pert_itime":1,"pert_idose":1,"cell_id":1,"sig_id":1,"is_gold":1,"distil_ss":1,"distil_cc_q75":1,"ngenes_modulated_dn_lm":1,"ngenes_modulated_up_lm":1}';

        // build a parameter object for the api call
        var params = {q: this.q_param,
            l: this.limit,
            s: this.s_param,
            f: this.f_param,
            sk: this.skip};

        // make the api call and store the results as individual models in the collection.
        // we don't remove old models in this case as we want to support continuous building
        // of the model list from a remote api.  On success, set isLoading back to false
		var getData_promise = $.getJSON(this.url, params, function(res){
            self.set(res,{remove: false});
            self.isLoading = false;
        });

        // make a second api call to find the maximum number of items in the collection
        // and set that as an attribute on it
        if (this.maxCount == Infinity){
            params = _.omit(params,['l','s','f','sk']);
            params = _.extend(params,{c: true});
            $.getJSON(this.url,params,function(res){
                self.maxCount = res.count;
            });
        }

        // return the getData_promise for use with downstream functions if we want
        return getData_promise;
    }
});

/**
 * pert_collection = new PertCollection({model: PertModel,
 *                                         url: Barista.APIURL + '/a2/pertinfo?callback=?',
 *                                         skip: 0,
 *                                         isLoading: false});
 *                                         
 * A Backbone.Collection that represents a set of CMap Summly results
 * This collection is suitable for internal use in GridView
 * optional arguments:
 * @param {Backbone.model} model      the model used for the collection objects, defaults to *PertModel*
 * @param {string}         url        the url from which model data is fetched, defaults  to
 *                                    '//api.lincscloud.org/a2/pertinfo?callback=?'
 * @param {string}         skip       the skip parameter used in api calls when the collection is updated,
 *                                    defaults to 0
 * @param {boolean}        isLoading  indicates wether or not the collection is in the middle of a fetch
 *                                    operation, defaults to false
 */

Barista.Collections.SummlyResultCollection = Backbone.Collection.extend({
    /**
     * fetch model data from assigned url
     */
	initialize: function(){
		// the url from which model data is fetched
		this.url =  Barista.APIURL + '/a2/pertinfo?callback=?';
	},

    /**
     * the model used for collection objects
     */
	model: Barista.Models.SummlyResultModel,

    /**
     * the skip parameter used in api calls when the collection is updated
     * @type {Number}
     */
    skip: 0,

    /**
     * indicates wether or not the collection is in the middle of a fetch operation
     * @type {Boolean}
     */
    isLoading: false,

    /**
     * the maximum size of the collection
     * defaults to Infinity
     * @type {Number}
     */
    maxCount: Infinity,

  /**
   * Gets additional data from the specified url and stores them as models in the collection
   * the count and pert_types data is replaced with new data coming from the api call
   * @param  {string}  search_string  the string on which a regex search into the api at the collections
   *                                  url will be performed, defaults to ""
   * @param  {string}  search_type    the type of search that will be performed, defaults to "single"
   * @param  {number}  limit          the number of models to be fetched, defaults to 30
   */
    getData: function(search_string,search_type,limit){
		var self = this;
		// set isLoading to true so we don't constantly make api calls before the data comes back
		this.isLoading = true;

		// store the value of search_string, search_type, and limit on the collection object
        this.search_string = search_string;
        this.search_type = search_type;
        this.limit = (limit !== undefined) ? limit : 30;

		// depending on the type of query we are making, set up the q param for the api call.
        // if we are doing a single query, match that query as a regular expression. If we are
        // doing a multi query, match exact names. If we are doing a cell line query, only match
        // cell_ids
        if (search_type === "single" || search_type === undefined){
            this.q_param = '{"pert_iname":{"$regex":"' + "" + '","$options":"i"}}';
        }
        if (search_type === "multi"){
            search_string = '["' + search_string.split(":").join('","') + '"]';
            this.q_param = '{"pert_iname":{"$in":"' + search_string + '"}}';
        }

		// build a parameter object for the api call
        var params = {q: this.q_param,
            l: this.limit,
            s: '{"num_gold":1}',
            sk: Math.round(Math.random() * (40000 - 30))};

		// make the api call and store the results as individual models in the collection.
        // we don't remove old models in this case as we want to support continuous building
        // of the model list from a remote api.  On success, set isLoading back to false
		$.getJSON(this.url,params,function(res){
			var data = [];
			var cell_lines = ["ASC","HA1E","HCC515","NEU","NPC","PHH","SKL",
							"MCF7","HEPG2","VCAP","A549","A375","HT29","PC3"];
			res.forEach(function(o){
				var random_lines = cell_lines.slice(0, Math.round(Math.random()*14) + 1);
				var random_line_scores = {};
				random_lines.forEach(function(line){
					random_line_scores[line] = [Math.random()*2 - 1];
				});
				data.push({query: search_string,
							target: o.pert_iname,
							pert_type: o.pert_type,
							summly_score: Math.random(),
							summly_rank: Math.random(),
							specificity: Math.random(),
							cell_line_scores: random_line_scores});
			});
			self.add(data);
			self.isLoading = false;
		});

        // make a second api call to find the maximum number of items in the collection
        // and set that as an attribute on it
        if (this.maxCount < Infinity){
            params = _.omit(params,['l','s','f','sk']);
            params = _.extend(params,{c: true});
            $.getJSON(this.url,params,function(res){
                self.maxCount = res.count;
            });
        }
    }
});

/**
 * base_view = new BaristaBaseView({el: $("target_selector",
									bg_color:"#ffffff",
									fg_color: "#1b9e77",
									span_class: "col-lg-12",
									plot_height: 120});
 * to extend BaristaBaseView, use

		extended_view = BaristaBaseView.extend({
										...
										});
 *										
 * A Backbone.View the serves as the base view for other views in the barista library
 * BaristaBaseView provides common functionality for views including standard initialization, redraw,
 * render, template compilation, and png export functions
 * This view by itself will construct a single panel with a png export option, but it is meant to be used
 * as the base view that more complex views extend
 * basic use:
 * base_view = new BaristaBaseView();
 * optional arguments:
 * @param {string}  bg_color     the hex color code to use as the backgound of the view, defaults to
 *                               #ffffff
 * @param {string}  fg_color     the hex color code to use as the foreground color of the view, defaults
 *                               to #1b9e77
 * @param {string}  span_class   a bootstrap span class to size the width of the view, defaults to
 *                               "col-lg-12"
 * @param {number}  plot_height  the height of the plot in pixels, defaults to 120
 * @param {boolean} png          show the png export button. defaults to true
 */
Barista.Views.BaristaBaseView = Backbone.View.extend({
	/**
 * initialize the view
 * Views that extend BaristaBaseView should impliment code overiding this method
 * If extended BaristaBaseViews want to use the built in base_initialize method of BaristaBaseView, they
 * should call it in their redraw method
 * As an example:
 * initialize: function(){
				this.base_initialize();
				//your code here
				}
 */
	initialize: function(){
		this.base_initialize();
	},

	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "BaristaBaseView",

	/**
	 * default model to Backbone.Model
	 * This default is only provided to make the view functional as a un-extended standalone
	 * An appropriate data model should be supplied for all views that extend BaristaBaseView
	 * @type {Backbone}
	 */
	model: new Backbone.Model(),

	/**
	 * overide the default Backbone.View initialize method to handle optional arguments, compile the view
	 * template, bind model changes to view updates, and render the view
	 * This method is provided so it can be used in view that extend BaristaBaseView
	 */
	base_initialize: function(){
		// set up color options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : "#ffffff";
		this.fg_color = (this.options.fg_color !== undefined) ? this.options.fg_color : "#1b9e77";

		// set up the default height for the plot
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 120;

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "col-lg-12";

		// set up the png option
		this.png = (this.options.png !== undefined) ? this.options.png : true;

		// bind render to model changes
		this.listenTo(this.model,'change', this.update);

		// compile the default template for the view
		this.compile_template();

		// define the location where d3 will build its plot
		this.width = $("#" + this.div_string).outerWidth();
		this.height = $("#" + this.div_string).outerHeight();
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		// make sure that the top level div target is set to hide overflow content
		$("#" + this.div_string).css("overflow","hidden");

		// render the vis
		this.render();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.render();} );

		return this;
	},

	/**
	 * use Handlebars to compile the template for the view
	 */
	compile_template: function(){
		var self = this;
		this.div_string = 'barista_view' + new Date().getTime();
		this.compiled_template = BaristaTemplates.d3_target;
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	/**
 * completely render the view
 * Updates both static and dynamic content in the view
 * Views that extend BaristaBaseView should impliment draw code overiding this method
 * If extended BaristaBaseViews want to use the built in base_render method of BaristaBaseView, they should
 * call it in their render method
 * As an example:
 * render: function(){
			this.base_render();
			//your code here
			}
 */
	render: function(){
		this.base_render();
		return this;
	},

	/**
	 * completely redraw the view
	 * Updates both static and dynamic content in the view
	 * This method is provided so it can be used in view that extend BaristaBaseView
	 */
	base_render: function(){
		// stuff this into a variable for later use
		var self = this;

		// check to see if the container is visible, if not, make it visible, but transparent so we draw it with
		// the proper dimensions
		if (this.$el.is(":hidden")){
			this.$el.animate({opacity:0},1);
			this.$el.show();
		}

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		this.vis.selectAll('.controls_layer').data([]).exit().remove();
		this.controls_layer = this.vis.append("g").attr("class", "controls_layer");

		// set up the panel's width and height
		this.width = $("#" + this.div_string).outerWidth();
		this.height = $("#" + this.div_string).outerHeight();

		// rescale the width of the vis
		this.vis.transition().attr("width",this.width);
		this.vis.transition().attr("height",this.height);

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// add a png export overlay
		if (this.png) {
			this.controls_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
			this.controls_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",10)
			.attr("y",this.height - 10)
			.attr("opacity",0.25)
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});
		}


		return this;
	},

	/**
	 * update the dynamic portions of the view
	 */
	update: function(){
		return this;
	},

	/**
	 * save the current state of the view into a png image
	 */
	save_png: function(){
		// do any pre save work that the child class may require
		this.save_png_pre();

		//set the animate the div containing the view by applying and then removing
		// css classes that defined the transitions we want
		var $div = $("#" + this.div_string);
		$div.addClass("barista-base-view");
		$div.toggleClass("exporting");
		setTimeout(function(){$div.toggleClass("exporting");},500);

		// build a canvas element to store the image temporarily while we save it
		var width = this.width;
		var height = this.height;
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.vis.selectAll(".no_png_export");
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.vis.node().parentNode.innerHTML;
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = this.name + new Date().getTime() + ".png";
		if (canvas.toBlob){
			canvas.toBlob(function(blob){
				saveAs(blob,filename);
				});
		}
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);

		// do any post save work that the child class may require
		this.save_png_post();
	},

	/**
	 * dummy method that should be overridden if there is any work to do before saving the png image of
	 * the view
	 * For example, removing elements that will not render properly could be done before saving the image
	 * This function is called as the first step of save_png
	 */
	save_png_pre: function(){},

	/**
	 * dummy method that should be overridden if there is any work to do after saving the png image of
	 * the view
	 * For example, restoring elements that were removed before saving could be done after saving the image
	 * This function is called as the last step of save_png
	 */
	save_png_post: function(){},

	/**
	 * hides the view by dimming the opacity and hiding it in the DOM
	 * @param  {number} duration  the time in ms for the hide animation. defualts to 1
	 * pert_detail_view.hide(duration);
	 */
	hide: function(duration){
		duration = (duration !== undefined) ? duration : 1;
		var self = this;
		this.$el.animate({opacity:0},duration);
		setTimeout(function(){self.$el.hide()},duration);
	},

	/**
	 * shows the view by brightening the opacity and showing it in the DOM
	 * @param  {number} duration  the time in ms for the hide animation, defualts to *1*
	 * pert_detail_view.show(duration);
	 */
	show: function(duration){
		duration = (duration !== undefined) ? duration : 1;
		this.$el.show();
		this.$el.animate({opacity:1},duration);
	}
});

/**
 * bar_plot_view = new BarPlotView({el: $("target_selector",
									bg_color:"#ffffff", 
									fg_color: "#1b9e77",
									span_class: "span4",
									scale_by: undefined,
									range: undefined,
									log: false,
									min_lock: undefined,
									max_lock: undefined,
									min_expand: false,
									max_expand: false,
									plot_height: 120});
 *									
 * A Backbone.View that displays a scatter plot
 * the view's model is assumed to have the same defaults as specified in BarPlotModel
 * basic use:
 * bar_plot_view = new BarPlotView();
 * optional arguments:
 * @param {string}  bg_color     the hex color code to use as the backgound of the view, defaults to
 *                               #ffffff
 * @param {string}  fg_color     the hex color code to use as the foreground color of the view, defaults to
 *                               #1b9e77
 * @param {string}  span_class   a bootstrap span class to size the width of the view, defaults to
 *                               "span12"
 * @param {array}   range        a two element array specifying the plotting bounds of the plot, defaults
 *                               to [min(data),max(data)]
 * @param {boolean} log          if set to true, plots the data on a log scale, defaults to false
 * @param {number}  min_lock     if set, locks the minimum of the range at the given value. Ignored if
 *                               range is set. defaults to undefined
 * @param {number}  max_lock     if set, locks the maximum of the range at the given value. Ignored if
 *                               range is set. defaults to undefined
 * @param {boolean} min_expand   if set, allows the minimum of the range to expand if data is found below
 *                               it. defaults to false
 * @param {boolean} max_expand   if set, allows the maximum of the range to expand if data is found above
 *                               it. defaults to false
 * @param {string}  orientation  sets the orientation of the bar plot. options are 'horizontal' or
 *                               'vertical'. defaults to 'vertical'
 * @param {number}  plot_height  the height of the plot in pixels, defaults to *120*
 */

Barista.Views.BarPlotView = Barista.Views.BaristaBaseView.extend({
	/**
	 * set up the view's default model
	 * @type {Barista}
	 */
	model: new Barista.Models.BarPlotModel(),

	/**
	 * overide the default Backbone.View initialize method to handle optional arguments, compile the view
	 * template, bind model changes to view updates, and render the view
	 */
	initialize: function(){
		// set up x and y range and determine if are going to draw the axes dynamically
		this.range = (this.options.range !== undefined) ? this.options.x_range : undefined;
		this.dynamic_range = (this.range === undefined) ? true : false;

		// set up axis expansion and lock features
		this.min_lock = (this.options.min_lock !== undefined) ? this.options.min_lock : undefined;
		this.max_lock = (this.options.max_lock !== undefined) ? this.options.max_lock : undefined;

		this.min_expand = (this.options.min_expand !== undefined) ? this.options.min_expand : undefined;
		this.max_expand = (this.options.max_expand !== undefined) ? this.options.max_expand : undefined;

		// set up log flag
		this.log = (this.options.log !== undefined) ? this.options.log : false;

		// set up the margin
		this.margin = (this.options.margin !== undefined) ? this.options.margin : 50;

		// set up the orientation
		this.orientation = (this.options.orientation !== undefined) ? this.options.orientation : 'vertical';

		// set up x and y ranges
		this.set_ranges();

		// set up x and y scaling
		this.set_scales();		

		// run BaristaBaseView's base_initialize method to handle boilerplate view construction
		// and initial view rendering
		this.base_initialize();

		// build Axes
		this.build_axes();

	},

	/**
	 * completely redraw the view
	 * Updates both static and dynamic content in the view
	 */
	render: function(){
		this.base_render();
		this.init_plot();
		this.update();
	},

	/**
	 * initialize the static parts of the view's panel
	 */
	init_plot: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up x and y ranges
		this.set_ranges();

		// set up x and y scaling
		this.set_scales();		

		// build Axes
		this.build_axes();

		// style the axis
		this.style_axes();

		// render the bar data
		if (this.orientation === 'horizontal'){
			this.render_horizontal_bars();
		}else{
			this.render_vertical_bars();
		}

		// plot the title
		this.bg_layer.selectAll('.title').data([]).exit().remove();
		this.bg_layer.selectAll('.title').data([1]).enter().append('text')
			.attr("class","title title")
			.attr("x",this.width/2)
			.attr("y",this.margin/2)
			.style("text-anchor","middle")
			.text(this.model.get('title'));
	},

	/**
	 * update the dynamic potions of the view
	 */
	update: function(){
		var self = this;
		
		// get model data
		this.data = this.model.get('data');
		
		// set up x and y ranges
		this.set_ranges();

		// set up x and y scaling
		this.set_scales();

		// build Axes
		this.build_axes();

		// update the bar data
		if (this.orientation === 'horizontal'){
			this.update_horizontal_bars();
		}else{
			this.update_vertical_bars();
		}
	},

	/**
	 * utility function used to get the x and y ranges used in the plot
	 */
	set_ranges: function(){
		var data,min,max;
		// calculate the range. If we need to caluclate it dynamically, check the lock and expand
		// parameters for the axis
		if (this.dynamic_range === true){
			data = this.model.get('data');

			// if the data is of length larger than 1, calculate the range, otherwise set the range to [0,0]
			if (data.length > 0 ){
				// check the min lock and expand flags and report the min of the range accordingly
				if (this.min_lock === undefined){
					min = _.min(data);
				}else{
					if (this.min_expand){
						data_min = _.min(data);
						min = (this.min_lock > data_min) ? data_min : this.min_lock;
					}else{
						min = this.min_lock;
					}
				}

				// check the max lock and expand flags and report the max of the range accordingly
				if (this.max_lock === undefined){
					max = _.max(data);
				}else{
					if (this.max_expand){
						data_max = _.max(data);
						max = (this.max_lock < data_max) ? data_max : this.max_lock;
					}else{
						max = this.max_lock;
					}
				}
				this.range = [min,max];
			}else{
				this.range = [0,0];
			}
		}
	},

	/**
	 * utility function used to get the x and y scales used in the plot
	 */
	set_scales: function(){
		if (this.log){
			this.x_scale=d3.scale.log().domain([this.range[0],this.range[1]]).range([this.margin, this.width - this.margin]);
		}else{
			this.x_scale=d3.scale.linear().domain([this.range[0],this.range[1]]).range([this.margin, this.width - this.margin]);
		}
		if (this.log){
			this.y_scale=d3.scale.log().domain([this.range[1],this.range[0]]).range([this.margin, this.height - this.margin]);
		}else{
			this.y_scale=d3.scale.linear().domain([this.range[1],this.range[0]]).range([this.margin, this.height - this.margin]);
		}
	},

	/**
	 * utility function used to build x and y axes
	 */
	build_axes: function(){
		var self = this;

		this.xAxis = d3.svg.axis()
			.scale(this.x_scale)
			.orient("bottom");
		this.yAxis = d3.svg.axis()
			.scale(this.y_scale)
			.orient("left");

		// plot the appropriate axis depending on the orientation of the plot
		this.bg_layer.selectAll('.axis').data([]).exit().remove();
		if (this.orientation === 'horizontal'){
				self.bg_layer.append("g")
					.attr("class", "axis x-axis")
					.attr("transform", "translate(0," + (self.height - self.margin) + ")")
					.call(self.xAxis);
		}else{
			self.bg_layer.append("g")
				.attr("class", "axis y-axis")
				.attr("transform", "translate(" + self.margin + ",0)")
				.call(self.yAxis);
		}
	},

	/**
	 * utility function to apply custom styles to axis components
	 */
	style_axes: function(){
		this.vis.selectAll('.axis').selectAll("path")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("line")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("text")
			.style("font-family","sans-serif")
			.style("font-size","11px");
	},

	/**
	 * draws bars in vertical mode
	 */
	render_vertical_bars: function(){
		var self = this;
		// get the model's data
		this.data = this.model.get('data');

		// figure out how wide each bar will be
		this.x_domain = this.x_scale.range();
		this.bar_width = (this.x_domain[1] - this.x_domain[0]) / this.data.length;

		// plot the data points
		this.bg_layer.selectAll('.data_bar').data([]).exit().remove();
		this.bg_layer.selectAll('.data_bar').data(this.data).enter().append('rect')
			.attr("class","data_bar")
			.attr("x",function(d,i){return self.bar_width*i + self.margin;})
			.attr("y",this.y_scale(this.range[0]))
			.attr("width",this.bar_width)
			.attr("height",0)
			.attr("opacity",0)
			.attr("stroke","white")
			.attr("fill",this.fg_color);

		// plot the x axis title
		this.bg_layer.selectAll('.x_axis_label').data([]).exit().remove();
		this.bg_layer.selectAll('.x_axis_label').data([1]).enter().append('text')
			.attr("class","x_axis_label axis_label")
			.attr("x",this.width/2)
			.attr("y",this.height-10)
			.style("text-anchor","middle")
			.text(this.model.get('axis_title'));

		// plot the labels if they are there
		var labels = this.model.get('data_labels');
		if (labels.length > 0){
			this.bg_layer.selectAll('.bar_label').data([]).exit().remove();
			this.bg_layer.selectAll('.bar_label').data(labels).enter().append('text')
				.attr('class','bar_label')
				.attr("x",function(d,i){return self.bar_width*i + self.margin + self.bar_width/2;})
				.attr('y',this.height - this.margin)
				.attr('dy','1em')
				.attr('opacity',0)
				.style("text-anchor","middle")
				.text(function(d){return d;});
		}

		// style the axis
		this.style_axes();
	},

	/**
	 * draws bars in horizontal mode
	 */
	render_horizontal_bars: function(){
		var self = this;
		// get the model's data
		this.data = this.model.get('data');

		// figure out how tall each bar will be
		this.y_domain = this.y_scale.range();
		this.bar_height = (this.y_domain[1] - this.y_domain[0]) / this.data.length;

		// plot the data points
		this.bg_layer.selectAll('.data_bar').data([]).exit().remove();
		this.bg_layer.selectAll('.data_bar').data(this.data).enter().append('rect')
			.attr("class","data_bar")
			.attr("y",function(d,i){return self.bar_height*i;})
			.attr("x",this.margin + 2)
			.attr("height",this.bar_height)
			.attr("width",0)
			.attr("opacity",0)
			.attr("stroke","white")
			.attr("fill",this.fg_color);

		// plot the x axis title
		this.bg_layer.selectAll('.x_axis_label').data([]).exit().remove();
		this.bg_layer.selectAll('.x_axis_label').data([1]).enter().append('text')
			.attr("class","x_axis_label axis_label")
			.attr("x",this.width/2)
			.attr("y",this.height-10)
			.style("text-anchor","middle")
			.text(this.model.get('axis_title'));
	},

	/**
	 * updates the data in the bars in vertical orientation
	 */
	update_vertical_bars: function(){
		var self = this;
		// build Axes
		this.build_axes();

		// figure out how wide each bar will be
		this.x_domain = this.x_scale.range();
		this.bar_width = (this.x_domain[1] - this.x_domain[0]) / this.data.length;

		// plot new data points
		var bar_selection = this.bg_layer.selectAll('.data_bar').data(this.data);
		bar_selection.enter().append('rect')
			.attr("class","data_bar")
			.attr("x",function(d,i){return self.bar_width*i + self.margin;})
			.attr("y",this.y_scale(this.range[0]))
			.attr("width",this.bar_width)
			.attr("height",0)
			.attr("opacity",0)
			.attr("stroke","white")
			.attr("fill",this.fg_color);

		// transition points
		bar_selection.transition().duration(500)
			.attr("x",function(d,i){return self.bar_width*i + self.margin;})
			.attr("y",this.y_scale)
			.attr("width",this.bar_width)
			.attr("height",function(d){return self.y_scale(self.range[0]) - self.y_scale(d)})
			.attr("opacity",1);

		// remove excess points 
		bar_selection.exit().remove();

		// update the labels if they are there
		var labels = this.model.get('data_labels');
		if (labels.length > 0){
			var bar_label_selection = this.bg_layer.selectAll('.bar_label').data(labels);
			bar_label_selection.enter().append('text')
				.attr('class','bar_label')
				.attr("x",function(d,i){return self.bar_width*i + self.margin + self.bar_width/2;})
				.attr('y',this.height - this.margin)
				.attr('dy','1em')
				.attr('opacity',0)
				.style("text-anchor","middle")
				.text(function(d){return d;});

			bar_label_selection.transition().duration(500)
				.attr("x",function(d,i){return self.bar_width*i + self.margin + self.bar_width/2;})
				.attr('y',this.height - this.margin)
				.attr('dy','1em')
				.attr('opacity',1);

			bar_label_selection.exit().remove();
		}else{
			this.bg_layer.selectAll('.bar_label').data([]).exit().remove();
		}

		// transition the axes
		this.vis.selectAll('.y-axis').transition().duration(500).call(this.yAxis);
		this.style_axes();
	},

	/**
	 * updates the data in the bars in vertical orientation
	 */
	update_horizontal_bars: function(){
		var self = this;
		// figure out how tall each bar will be
		this.y_domain = this.y_scale.range();
		this.bar_height = (this.y_domain[1] - this.y_domain[0]) / this.data.length;

		// plot new data points
		var bar_selection = this.bg_layer.selectAll('.data_bar').data(this.data);
		bar_selection.enter().append('rect')
			.attr("class","data_bar")
			.attr("y",function(d,i){return self.bar_height*i;})
			.attr("x",this.margin + 2)
			.attr("height",this.bar_height)
			.attr("width",0)
			.attr("opacity",0)
			.attr("stroke","white")
			.attr("fill",this.fg_color);

		// transition points
		bar_selection.transition().duration(500)
			.attr("width",this.x_scale)
			.attr("opacity",1);

		// remove excess points 
		bar_selection.exit().remove();

		// transition the axes
		this.vis.selectAll('.x-axis').transition().duration(500).call(this.xAxis);
		this.style_axes();
	}
});
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

/**
 * bubble_view = new BubbleView({el: $("target_selector"),
									fg_color: "#1b9e77",
									span_class: "span4"});
 *									
 * A Backbone.View that displays a single level tree of data as a bubble plot
 * The view should be bound to a model such as a **PertCellBreakdownModel** that captures tree data in a
 * tree_object attribute
 * basic use:
 * bubble_view = new BubbleView({el: $("target_selector")});
 * optional arguments:
 * @param {string} fg_color    the hex color code to use as the foreground color of the view, defaults to
 *                             #1b9e77
 * @param {string} span_class  a bootstrap span class to size the width of the view, defaults to "span4"
 */

Barista.Views.BubbleView = Backbone.View.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "BubbleView",

	/**
	 * set up the view's default model
	 * @type {Barista}
	 */
	model: new Barista.Models.PertCellBreakdownModel(),

	/**
	 * overide the default Backbone.View initialize method to handle optional arguments, compile the view
	 * template, bind model changes to view updates, and render the view
	 */
	initialize: function(){
		// set up color options.  default if not specified
		this.fg_color = (this.options.fg_color !== undefined) ? this.options.fg_color : "#1b9e77";

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "span4";

		// set up the plot height
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 120;

		// set up the bubble minimum and maximum scale values
		this.min_val = (this.options.min_val !== undefined) ? this.options.min_val : undefined;
		this.max_val = (this.options.max_val !== undefined) ? this.options.max_val : undefined;

		// set up splitting categories
		this.v_split = (this.options.v_split !== undefined) ? this.options.v_split : undefined;
		this.h_split = (this.options.h_split !== undefined) ? this.options.h_split : undefined;

		// set up splitting category centers
		this.category_centers = (this.options.category_centers !== undefined) ? this.options.category_centers : {up: {x:0,y:-10},dn: {x:0,y:10}};

		// set up category colors
		this.category_colors = (this.options.category_colors !== undefined) ? this.options.category_colors : {up: "#D55E00",dn: "#56B4E9"};

		// bind render to model changes
		this.listenTo(this.model,'change', this.update);

		// compile the default template for the view
		this.compile_template();

		// define the location where d3 will build its plot
		this.width = $("#" + this.div_string).outerWidth();
		this.height = $("#" + this.div_string).outerHeight();
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		// render the vis
		this.render();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.render();} );
	},

	/**
	 * use Handlebars to compile the template for the view
	 */
	compile_template: function(){
		this.div_string = 'd3_target' + new Date().getTime();;
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	/**
	 * draw the view from scratch
	 */
	render: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the panel's width and height
		this.width = $("#" + this.div_string).outerWidth();
		this.height = $("#" + this.div_string).outerHeight();
		this.v_center = this.height / 2;
		this.h_center = this.width / 2;

		// rescale the width of the vis
		this.vis.transition().duration(1).attr("width",this.width);

		// grab the data from the model
		this.data = this.model.get('tree_object').children;

		// set up some data scaling
		var max_count, min_count;
		if (this.max_val !== undefined){
			max_count = this.max_val;
		}else{
			max_count = _.max(_.pluck(this.data,'count'));
		}
		if (this.min_val !== undefined){
			min_count = this.min_val;
		}else{
			min_count = _.min(_.pluck(this.data,'count'));
		}
		this.data_scale = d3.scale.linear().domain([min_count,max_count])
						.range([5,30]);

		// define the force directed graph layout
		this.force = d3.layout.force()
						.nodes(this.data)
						.gravity(0.1)
						.friction(0.9)
						.size([this.width, this.height])
						.on("tick",function(e){tick(e);})
						.charge(function(d){return -Math.pow(self.data_scale(d.count),2)/6;})
						.start();

		// draw the initial layout
		this.vis.selectAll("circle").data(this.force.nodes()).exit().remove();
		this.vis.selectAll("circle").data(this.force.nodes())
				.enter().append("circle")
				.attr("class",this.div_string + "_circle")
				.attr("fill",function(d){
					if (self.category_colors[d[self.v_split]] !== undefined){
						return self.category_colors[d[self.v_split]];
					}else{
						return self.fg_color;
					}
				})
				.attr("v_category",function(d){
					if (self.v_split !== undefined){
						return d[self.v_split];
					}else{
						return null;
					}
				})
				.attr("cx", Math.random() * 300)
				.attr("cy", Math.random() * 300)
				.attr("stroke","white")
				.attr("_id",function(d){return d._id;})
				.attr("r",function(d){return Math.sqrt(self.data_scale(d.count)/Math.PI);});

		// specify the nodes selection so we don't have to repeat the selection on each tick
        this.nodes = this.vis.selectAll("circle");
        this.nodes.call(this.force.drag());

		// reset a dampening variable for simulation
		this.damp = 0.1;

		/**
		 * tick function for use in the force class, decrements alpha value
		 * @param  {object} e  data from tick event
		 */
		function tick(e){
			self.vertical_split(e.alpha);
			self.nodes.attr("cx", function(d) {return d.x;})
                .attr("cy", function(d) {return d.y;})
                // .attr("r",function(d){return self.data_scale(d.count);});

        }
	},

	/**
	 * push bubbles vertically based on an attribute property
	 * @param  {number} alpha  in combination with damp value, creates spring constant for bubble animation
	 */
	vertical_split: function(alpha){
		var self = this;
		//select all circles on the page
		bubble_selection = this.vis.selectAll('circle');
		bubble_selection
		//edit the center y attribute
			.attr("cy",function(d){
				//if the vertical split category is undefined, return the y value of d
				if (self.category_centers[d[self.v_split]] === undefined){
					return(d.y);
				}
				//if the value of the vertical split category is 0, return the y value of d
				var category_y = self.category_centers[d[self.v_split]].y;
				if (category_y === 0){
					return(d.y);
				}
				//otherwise, add the current d.y value to the product of equations involving the vertical
				//center, vertical split category, dampening value, and alpha value
				else{
					d.y = d.y + (self.v_center + category_y - d.y) * (self.damp + 0.03) * alpha * 1.1;
					return(d.y);
				}
			})
			//edit the center x attribute
			.attr("cx",function(d){
				//if the vertical split category is undefined, return the y value of d
				if (self.category_centers[d[self.v_split]] === undefined){
					return(d.x);
				}
				//if the value of the vertical split category is 0, return the x value of d
				var category_x = self.category_centers[d[self.v_split]].x;
				if (category_x === 0){
					return(d.x);
				}
				//otherwise, add the current d.x value to the product of equations involving the horizontal
				//center, vertical split category, dampening value, and alpha value
				else{
					d.x = d.x + (self.h_center - category_x - d.x) * (self.damp + 0.03) * alpha * 1.1;
					return (d.x);
				}
			});
	},

	/**
	 * update the plot with new data
	 */
	update: function(){
		// stuff this into a variable for later use
		var self = this;

		// grab the data from the model
		var new_data = this.model.get('tree_object').children;

		// grab the current nodes
		var nodes = this.force.nodes();

		// update the nodes in this.force
		if (this.force.nodes().length <= new_data.length){
			this.force.nodes().forEach(function(o,i){
				_.extend(o,new_data[i]);
				_.extend(o,{x:nodes[i]['x'],y:nodes[i]['y']});
			});
			if (this.force.nodes().length < new_data.length){
				this.force.nodes(this.force.nodes().concat(new_data.slice(this.force.nodes().length,new_data.length)));
			}
		}else{
			this.force.nodes(this.force.nodes().slice(0,new_data.length));
			this.force.nodes().forEach(function(o,i){
				_.extend(o,new_data[i]);
				_.extend(o,{x:nodes[i]['x'],y:nodes[i]['y']});
			});
		}

		// draw the initial layout for new bubbles
		bubble_selection = this.vis.selectAll("circle").data(this.force.nodes());
		bubble_selection.enter()
				.append("circle")
				.attr("class",this.div_string + "_circle")
				.attr("fill",function(d){
					if (self.category_colors[d[self.v_split]] !== undefined){
						return self.category_colors[d[self.v_split]];
					}else{
						return self.fg_color;
					}
				})
				.attr("cx", function(d){return d.x;})
				.attr("cy", function(d){return d.y;})
				.attr("stroke","white")
				.attr("_id",function(d){return d._id;})
				.attr("r",0);

		// transition bubbles
		bubble_selection.transition().duration(500)
				.attr("r",function(d){return self.data_scale(d.count);});

		// remove bubbles with no data
		bubble_selection.exit().remove();

		// start the simulation again
		this.force.start();

		// specify the nodes selection so we don't have to repeat the selection on each tick
        this.nodes = this.vis.selectAll("circle");
        this.nodes.call(this.force.drag());

        /**
		 * tick function for use in the force class, decrements alpha value
		 * @param  {object} e  data from tick event
		 */
		function tick(e){
			self.vertical_split(e.alpha);
			self.nodes.attr("cx", function(d) {return d.x;})
                .attr("cy", function(d) {return d.y;})
                .attr("r",function(d){return self.data_scale(d.count);});

        }

	}
});

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

/**
 * A Backbone.View that exposes a custom search bar.  The search bar provides autocomplete
 * functionality for Connectivity Map pert_inames and cell_ids.  When the user types in the
 * search view's input, a "search:DidType" event is fired.
 * @class PertSearchBar
 * @constructor
 * @extends Backbone.View
*/
Barista.Views.CellSearchBar = Backbone.View.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
 */
	name: "CellSearchBar",
/**
 * overrides the default Backbone.View initialize method
 */
	initialize: function(){
		var self = this;

		/**
		 * determines whether or not the search view will match cell lines for autocomplete
		 * @property match_cell_lines
		 * @default true
		 * @type Boolean
		*/
		// determine whether or not we will match cell line strings in the autocomplete
		this.match_cell_lines = (this.options.match_cell_lines !== undefined) ? this.options.match_cell_lines : true;

		// custom placeholder if specified
		this.placeholder = (this.options.placeholder !== undefined) ? this.options.placeholder : "search cell lines";

		// grab cell_ids and store them as an atribute of the view
		var cellinfo = Barista.APIURL + '/a2/cellinfo?callback=?';
		var params = {q:'{"cell_id":{"$regex":""}}',d:"cell_id"};
		$.getJSON(cellinfo,params,function(res){
			self.cell_lines = res;
			self.render();

			// once the view is rendered, bind a change event to trigger a "search:DidType" event from the view
			/**
			 * once the view is rendered, bind a change event to trigger a "search:DidType" event from
			 * the view
			 */
			var change_callback = function () {
				var val  = $("#search",self.el).val();
				var type = "";
				if (self.cell_lines.indexOf(val) != -1 && self.match_cell_lines){
					type = "cell";
				}

				/**
				 * Fired when the text in the view's search box changes
				 * @event search:DidType
				 * @param {Object} [msg={val:"",type:""}] an object containing the message of the event
				 * @param {String} [msg.val=""] the string val of the views search bar at the time of
				 *                              the event
				 * @param {String} [msg.type=""] the type of message being passed, either "" or "cell"
				 *                               "cell"is passed, if the string matches a cell line and
				 *                               match\_cell\_lines is set
				 */
				self.trigger("search:DidType",{val: val,search_column: undefined});
			};

			$("#search",self.el).bind('input propertychange change', _.throttle(change_callback,500));

			// bind a search:DidType event to the typeahead events coming out of typeahead.js
			$(".typeahead",self.el).bind('typeahead:selected typeahead:autocompleted', function (obj,datum) {
				var val = datum.value;
				var search_column = datum.search_column;
				self.trigger("search:DidType",{val: val,search_column: search_column});
			});
		});

	},

    /**
     * Gets the current text entered in the view's search bar
     */
	get_val: function(){
		return $("#search",this.el).val();
	},

	/**
	 * fills the view's search bar with a random pert_iname and triggers a "search:DidType" event
    */
	random_val: function(){
		var self = this;
		var cellinfo = Barista.APIURL + '/a2/cellinfo?callback=?';

		var skip = Math.round(Math.random()*40);
		var params = {q:'{"lincs_status":{"$in":["core_cline","core_pline","DIVR"]}}', l:1, sk:skip};
		$.getJSON(cellinfo,params,function(res){
			var val = res[0].cell_id;
			$("#search",this.el).val(val);
			self.trigger("search:DidType",{val: val,search_column: 'cell_id'});
		});
	},
/**
 * triggers a "search:DidType" event for the given search value
 * @param {} new_val value to search for
 */
	set_val: function(new_val){
		$("#search",this.el).val(new_val);
		this.trigger("search:DidType",{val: new_val,search_column: undefined }); //TODO need to find search column info
	},

	/**
	 * renders the view
    */
	render: function(){
		var self = this;

		// load the template into the view's el tag
		this.$el.append(BaristaTemplates.CMapPertSearchBar({placeholder: this.placeholder}));

		// hook up the typeahead with backing datasets
		$('#search',this.$el).typeahead([Barista.Datasets.CellID,
										 Barista.Datasets.CellLineage,
										 Barista.Datasets.CellHistology,
										 Barista.Datasets.CellMutation]);
	}
});

/**
 * pert_detail_view = new CompoundDetailView({el: $("target_selector"),
 												model: CompoundDetailModel,
 												bg_color: "#ffffff",
 												span_class: "col-lg-12"});
 *
 * A Backbone.View that shows information about a small molecule compound
 * This view is frequently paired with a CompoundDetailModel
 * pert_detail_view = new CompoundDetailView({el: $("target_selector")});
 * optional arguments:
 * @param {string} bg_color    the hex color code to use as the backgound of the view, defaults to
 *                             #ffffff
 * @param {string} span_class  a bootstrap span class to size the width of the view, defaults to
 *                             "col-lg-12"
 */
Barista.Views.CompoundDetailView = Barista.Views.BaristaBaseView.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "CompoundDetailView",

	/**
	 * set up the view's default model
	 * @type {Barista}
	 */
	model: new Barista.Models.CompoundDetailModel(),

	/**
	 * overide the defualt Backbone.View initialize method to bind the view to model changes, bind window
	 * resize events to view re-draws, compile the template, and render the view
	 */
	initialize: function(){
		// set up the plot height
		this.options.plot_height = 260;

		// set up the open and closed state heights
		this.open_height = this.options.plot_height;
		this.closed_height = this.options.plot_height;
		this.panel_open = false;

		// initialize the view using the base view's built in method
		this.base_initialize();
	},

	/**
	 * completely render the view
	 * Updates both static and dynamic content in the view
	 */
	render: function(){
		// keep track of our scope at this level
		var self = this;

		// render the base view components
		this.base_render();

		// draw compound structure if there is one
		if (this.model.get("structure_url")){
			this.fg_layer.selectAll('.index_text_icon').data([]).exit().remove();
			this.fg_layer.selectAll('.index_text_icon').data([1])
								.enter().append("svg:image")
								.attr("class","index_text_icon")
								.attr("xlink:href", this.model.get("structure_url"))
								.attr("x",10)
								.attr("y",100)
								.attr("height",150)
								.attr("width",300)
								.style("cursor","pointer")
								.on("click", function(){window.location = self.model.get('structure_url')});
		}

		// draw the static index reagent text
		this.fg_layer.selectAll('.index_text').data([]).exit().remove();
		this.fg_layer.selectAll('.index_text').data([1])
							.enter().append("text")
							.attr("class","index_text")
							.attr("x",10)
							.attr("y",30)
							.attr("fill","#E69F00")
							.attr("font-family","Helvetica Neue")
							.attr("font-size","20pt")
							.text('Small Molecule Compound');

		// (re)draw the pert_iname text
		this.fg_layer.selectAll('.pert_iname_text').data([]).exit().remove();
		this.fg_layer.selectAll('.pert_iname_text').data([1])
							.enter().append("text")
							.attr("class","pert_iname_text")
							.attr("x",10)
							.attr("y",75)
							.attr("font-family","Helvetica Neue")
							.attr("font-weight","bold")
							.attr("font-size","36pt")
							.text(this.model.get('pert_iname'));

		// (re)draw the pert_id text
		this.fg_layer.selectAll('.pert_id_text').data([]).exit().remove();
		this.fg_layer.selectAll('.pert_id_text').data([1])
							.enter()
							.append("text")
							.attr("class","pert_id_text")
							.attr("x",10)
							.attr("y",100)
							.attr("font-family","Helvetica Neue")
							.attr("font-size","14pt")
							.text(this.model.get('pert_id'));

		// render additional labels
		this.label_y_position = 100;

		// (re)draw the in_summly annotation
		this.render_label_and_value('collection', 'Collection', 'pert_icollection', false, 320);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('num_sig', 'Signatures', 'num_sig', false, 320);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('gold_sig', 'Gold Signatures', 'num_gold', false, 320);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('num_inst', 'Experiments', 'num_inst', false, 320);

		// (re)draw the in_summly annotation
		this.render_label_and_value('summly', 'In Summly', 'in_summly', false, 320);


		// set the y position to be below the fold
		this.label_y_position = 260;

		// (re)draw the weight label and weight
		this.render_label_and_value('weight', 'Weight', 'molecular_wt');

		// (re)draw the formula and label
		this.render_label_and_value('formula', 'Formula', Barista.NumbersToSubscript(this.model.get('molecular_formula')),true);

		// (re)draw the logp and label
		this.render_label_and_value('logp', 'LogP', 'logp');

		// (re)draw the formula and label
		this.render_label_and_value('vendor', 'Vendor', 'pert_vendor');

		// (re)draw the pubchem_cid and label
		this.render_label_and_value('pubchem_cid', 'PubChem CID', 'pubchem_cid', false, 10, "//pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?cid=" + self.model.get('pubchem_cid'));

		// (re)draw the InChIKey label and InChIKey
		this.render_label_and_value('inchi_key', 'InChIKey', this.model.get("inchi_key").split("InChIKey=")[1], true);

		// (re)draw the InChI string
		// this.render_label_and_value('inchi_string', 'InChI String', this.model.get("inchi_string").split("InChI=")[1], true);

		// (re)draw the SMILES
		this.render_label_and_value('smiles', 'SMILES', 'canonical_smiles');

		// draw alternate names
		this.label_y_position += 20;
		if (this.model.get('alt_name')){
			this.render_label_and_value('alt_name_label', 'Alternate Names', '', true);
			this.label_y_position += 5;
			this.draw_tags('alt_name', 'Alternate Names', this.model.get('alt_name'), 'white', '#BDBDBD');
		}

		// draw the cell lines that the compound has been profiled in
		if (this.model.get('cell_id')){
			this.render_label_and_value('cell_id_label', 'Cell Lines', '', true);
			this.label_y_position += 5;
			this.draw_tags('cell_id', 'Cell Lines', this.model.get('cell_id'), 'white', '#CC79A7');
		}

		// draw the signatures for the compound
		if (this.model.get('sig_id')){
			this.render_label_and_value('sig_id_label', 'Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('sig_id', 'Signature IDs', this.model.get('sig_id'), 'white', '#BDBDBD');
		}

		// draw the gold signatures for the compound
		if (this.model.get('sig_id_gold')){
			this.render_label_and_value('gold_sig_id_label', 'Gold Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('gold_sig_id', 'Gold Signature IDs', this.model.get('sig_id_gold'), 'white', '#BDBDBD');
		}

		// (re)draw the pert_summary or clear it if there pert_summary is null
		if (this.model.get('pert_summary')){
			this.render_summary({summary_string: this.model.get('pert_summary'),
								 top: 45,
								 bottom: 100,
								 left: this.fg_layer.selectAll('.pert_iname_text').node().getComputedTextLength() + 30});
		}else{
			this.clear_summary();
		}

		// add a png export overlay
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",10)
			.attr("y",this.height - 20)
			.attr("opacity",0.25)
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});

		// check to see if there is a pubchem id and draw a link for it if there
		// is one
		this.controls_layer.selectAll("." + this.div_string + "pubchem_link").data([]).exit().remove();
		if (this.model.get('pubchem_cid')){
			this.controls_layer.selectAll("." + this.div_string + "pubchem_link").data([1]).enter().append("text")
				.attr("class", this.div_string + "pubchem_link no_png_export")
				.attr("x",this.width - 10)
				.attr("y",this.height - 20)
				.attr("opacity",0.25)
				.attr("text-anchor","end")
				.style("cursor","pointer")
				.text("PubChem")
				.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
				.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
				.on("click", function(){window.location = "//pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?cid=" + self.model.get('pubchem_cid')});
		}

		// check to see if there is a wikipedia url and draw a link for it if there
		// is one
		this.controls_layer.selectAll("." + this.div_string + "wiki_link").data([]).exit().remove();
		if (this.model.get('wiki_url')){
			this.controls_layer.selectAll("." + this.div_string + "wiki_link").data([1]).enter().append("text")
				.attr("class", this.div_string + "wiki_link no_png_export")
				.attr("x",this.width - 80)
				.attr("y",this.height - 20)
				.attr("opacity",0.25)
				.attr("text-anchor","end")
				.style("cursor","pointer")
				.text("Wiki")
				.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
				.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
				.on("click", function(){window.location = self.model.get('wiki_url')});
		}

		// render an image that will to indicate that the user can click the content to unfold the panel
		this.cevron_image_link = (this.panel_open) ? '//coreyflynn.github.io/Bellhop/img/up_arrow_select.png' : '//coreyflynn.github.io/Bellhop/img/down_arrow_select.png';

		this.controls_layer.selectAll('.cevron_icon').data([]).exit().remove();
		this.controls_layer.selectAll('.cevron_icon').data([1])
			.enter().append("svg:image")
			.attr("class","cevron_icon")
			.attr("xlink:href", this.cevron_image_link)
			.attr("x",this.width/2 - 9)
			.attr("y",function(){
				if (self.panel_open){
					return self.height - 15;
				}else{
					return self.height - 20;
				}
			})
			.attr("height",20)
			.attr("width", 18)
			.attr("transform", "rotate(0)")
			.style("cursor","pointer")
			.on("click", function(){self.toggle_panel_state()});

		// render a button to allow the user to expand the view to show its full content
		this.controls_layer.selectAll("." + this.div_string + "more_button").data([]).exit().remove();
		this.controls_layer.selectAll("." + this.div_string + "more_button").data([1]).enter()
			.append("rect")
			.attr("x",0)
			.attr("y",this.height - 15)
			.attr("class",this.div_string + "more_button")
			.attr("height",15)
			.attr("width",this.width)
			.attr("opacity",0)
			.style("cursor","pointer")
			.attr("fill","#BDBDBD")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",0.25);})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0);})
			.on("click", function(){self.toggle_panel_state()})

		return this;
	},

	/**
	 * update the dynamic potions of the view
	 */
	update: function(){
		this.render();
		return this;
	},

	/**
	* utility function to draw a standard label and value for that label under the main pert_iname and
	* pert_id text
	* If pass_model_field_as_text is true, pass the value in model_field as text instead of serching for
	* it in the model
	* @param  {string}  class_name_base           base of the class name of the attribute
	* @param  {string}  label_text                visible text that labels the element on screen
	* @param  {string}  model_field               text to appear in the model field
	* @param  {boolean} pass_model_field_as_text  determines whether the value in model_field will appear
	*                                             as text (true) or if the value must be obtained by
	*                                             searching (false)
	* @param  {number}  x_pos_base                base position for the x_label set
	* @param  {[type]}  value_link                iff supplied, used as a link on the visible text
*/
	render_label_and_value: function(class_name_base, label_text, model_field, pass_model_field_as_text, x_pos_base, value_link){
		// set up a local variable to keep our scope straight
		var self = this;

		// make sure that we have a label_y_position set
		this.label_y_position = (this.label_y_position !== undefined) ? this.label_y_position: 100;
		this.label_y_position += 25;

		// make sure that there is a base position for the x_label set
		var x_pos_base = (x_pos_base !== undefined) ? x_pos_base: 10;

		// update the open_height to the total height of all that we have drawn
		this.open_height = (this.options.plot_height > this.label_y_position + 40) ? this.options.plot_height : this.label_y_position + 40;

		// (re)draw the label
		this.fg_layer.selectAll('.' + class_name_base + '_label_text').data([]).exit().remove();
		this.fg_layer.selectAll('.' + class_name_base + '_label_text').data([1])
							.enter()
							.append("text")
							.attr("class",class_name_base + '_label_text')
							.attr("x",x_pos_base)
							.attr("y",this.label_y_position)
							.attr("font-family","Helvetica Neue")
							.attr("font-size","14pt")
							.text(label_text + ':');

		// (re)draw the text
		this.fg_layer.selectAll('.' + class_name_base + '_text').data([]).exit().remove();
		var model_text = '';
		if (pass_model_field_as_text){
			model_text = model_field;
		}else{
			model_text = this.model.get(model_field);
		}
		var x_pos = x_pos_base + this.fg_layer.selectAll('.' + class_name_base + '_label_text').node().getComputedTextLength() + 10;

		// if there is a value link supplied, use it as a link on the text, otherwise, render plain text
		if (value_link){
			this.fg_layer.selectAll('.' + class_name_base + '_text').data([1])
								.enter()
								.append("text")
								.attr("class",class_name_base + '_text')
								.attr("x",x_pos)
								.attr("y",this.label_y_position)
								.attr("font-family","Helvetica Neue")
								.attr("font-size","14pt")
								.attr("fill","#BDBDBD")
								.style("cursor","pointer")
								.on("mouseover",function(){d3.select(this).transition().duration(500).attr("fill","#56B4E9");})
								.on("mouseout",function(){d3.select(this).transition().duration(500).attr("fill","#BDBDBD");})
								.on("click", function(){window.location = value_link})
								.text(model_text);
		}else{
			this.fg_layer.selectAll('.' + class_name_base + '_text').data([1])
								.enter()
								.append("text")
								.attr("class",class_name_base + '_text')
								.attr("x",x_pos)
								.attr("y",this.label_y_position)
								.attr("font-family","Helvetica Neue")
								.attr("font-size","14pt")
								.attr("fill","#BDBDBD")
								.text(model_text);
		}
	},

	/**
	 * utility function to break a long summary string into a multiline and draw it at the desired location
	 * @param  {object} options  describes the options for drawing a string to the screen
	 * arguments for options:
	 * @param {string} summary_string  the string to be displayed, defaults to ""
	 * @param {right}  right           the x position to place the right edge of text, defaults to
	 *                                 this.width
	 * @param {left}   left            the x position to place the left edge of text, defaults to
	 *                                 this.width - 500
	 * @param {top}    top             the y position to place the **top** edge of text, defaults to 0
	 * @param {bottom} bottom          the y position to place the **bottom** edge of text, defaults to
	 *                                 100
	 */
	render_summary: function(options){
		var self = this;

		// default arguments if they are not present
		summary_string = this.model.get("pert_summary");
		top_edge = (options.top !== undefined) ? options.top : 0;
		bottom_edge = (options.bottom !== undefined) ? options.bottom : 100;
		right_edge = (options.right !== undefined) ? options.right : this.width;
		left_edge = (options.left !== undefined) ? options.left : this.width - 500;

		// clear existing summary
		this.clear_summary();

		// compute the number of lines we have room for
		this.line_height = 15;
		this.num_lines_allowed = Math.floor((bottom_edge - top_edge) / this.line_height);

		// compute the number of characters per line we will allow and how
		// many lines the summary would need if we rendered all of it
		this.line_width = right_edge - left_edge;
		this.num_char = Math.floor(this.line_width / 13 / .75);
		this.num_char = (this.num_char > 60) ? 60 : this.num_char;
		this.num_lines = Math.ceil(summary_string.length / this.num_char);

		// compute the line splits to display in the wiki summary
		this.lines = [];
		for (var i=0; i<this.num_lines; i++){
			if (i < this.num_lines_allowed - 1){
				var l = (summary_string.slice(i*this.num_char,(i+1)*this.num_char).slice(-1) != " " && summary_string.slice(i*this.num_char,(i+1)*this.num_char).slice(this.num_char-1,this.num_char) != "") ? summary_string.slice(i*this.num_char,(i+1)*this.num_char)  + '-': summary_string.slice(i*this.num_char,(i+1)*this.num_char);
				this.lines.push(l);
			}else{
				var l = summary_string.slice(i*this.num_char,(i+1)*this.num_char - 3) + '...';
				this.lines.push(l);
				break;
			}
		}

		// draw lines
		self.fg_layer.selectAll('.' + self.div_string + 'summary_text' + i).data(this.lines)
				.enter()
				.append("text")
				.attr("class",self.div_string + "summary_text")
				.attr("x",left_edge)
				.attr("y",function(d,i){return top_edge + 13 + i*15;})
				.attr("font-family","Helvetica Neue")
				.attr("font-size","13pt")
				.attr("fill","#BDBDBD")
				// .attr("text-anchor", "middle")
				.text(function(d){return d;});
	},

	/**
	 * utility to open or close the view
	 */
	toggle_panel_state: function(){
		var self = this;
		var h;
		if (this.panel_open){
			h = this.options.plot_height;
			$("#" + this.div_string).animate({height:h},500);
			this.panel_open = false;
			this.controls_layer.selectAll(".cevron_icon").attr("xlink:href", '//coreyflynn.github.io/Bellhop/img/down_arrow_select.png')
			this.controls_layer.selectAll('.cevron_icon').transition().duration(500).attr("y",h - 20);
		}else{
			h = this.open_height
			$("#" + this.div_string).animate({height:h},500);
			this.panel_open = true;
			this.controls_layer.selectAll(".cevron_icon").attr("xlink:href", '//coreyflynn.github.io/Bellhop/img/up_arrow_select.png')
			this.controls_layer.selectAll('.cevron_icon').transition().duration(500).attr("y",h - 15);
		}
		this.controls_layer.selectAll("." + this.div_string + "more_button").transition().duration(500).attr("y",h - 15);
		this.controls_layer.selectAll("." + this.div_string + "wiki_link").transition().duration(500).attr("y",h - 20);
		this.controls_layer.selectAll("." + this.div_string + "pubchem_link").transition().duration(500).attr("y",h - 20);
		this.controls_layer.selectAll("." + this.div_string + "png_export").transition().duration(500).attr("y",h - 20);
		this.vis.transition().duration(500).attr("height",h);
	},

	/**
	 * utility function to draw tags given an array
	 * @param  {string} class_name_base  base of the class name of the attribute
	 * @param  {string} label_text       visible text that labels the element on screen
	 * @param  {array}  data             array of data
	 * @param  {string} fg_color         fill color of label
	 * @param  {string} tag_color        color for background layer of tags 
	 */
	draw_tags: function(class_name_base, label_text, data, fg_color, tag_color){
		var x_offsets = [10];
		var row_number = 0;
		var y_offsets = [];
		var lengths = [];
		var tags = [];
		var self = this;
		var EmSize = Barista.getEmSizeInPixels(this.div_string);

		// draw the foreground text of all the tags
		this.fg_layer.selectAll('.' + class_name_base + 'tag_list_text').data([]).exit().remove();
		this.fg_layer.selectAll('.' + class_name_base + 'tag_list_text').data(data).enter().append('text')
			.attr("class", class_name_base + "tag_list_text")
			.text(function(d){return d;})
			.attr("x",function(d,i){
				lengths.push(this.getComputedTextLength() + 15);
				var current_x_offset = x_offsets[i];
				if (current_x_offset + lengths[i] > self.width){
					x_offsets[i] = 5;
					x_offsets.push(lengths[i] + x_offsets[i]);
					row_number += 1;
				}else{
					x_offsets.push(lengths[i] + x_offsets[i]);
				}
				y_offsets.push((row_number * 1.5 + 1));
				return x_offsets[i];
			})
			.attr("y",function(d,i){return self.label_y_position + y_offsets[i] * EmSize;})
			.attr("opacity",1)
			.attr("fill",fg_color)

		// draw the background of all the tags
		this.bg_layer.selectAll('.' + class_name_base + 'tag_list_rect').data([]).exit().remove();
		this.bg_layer.selectAll('.' + class_name_base + 'tag_list_rect').data(data).enter().append('rect')
			.attr("class", class_name_base + "tag_list_rect")
			.attr("x",function(d,i){return x_offsets[i] - 5;})
			.attr("y",function(d,i){return self.label_y_position + (y_offsets[i] - 1) * EmSize;})
			.attr("rx",4)
			.attr("ry",4)
			.attr('width',function(d,i){return lengths[i] - 4;})
			.attr('height','1.2em')
			.attr("opacity",1)
			.attr("fill",tag_color);

		// update the label_y_position
		this.label_y_position += 10 + y_offsets.slice(-1)[0] * EmSize;

		// update the open_height to the total height of all that we have drawn
		this.open_height = (this.options.plot_height > this.label_y_position + 40) ? this.options.plot_height : this.label_y_position + 40;

		return this
	},

	/**
	 * utility function to clear the pert summary
	 */
	clear_summary: function(){
		this.fg_layer.selectAll('.summary_text').data([]).exit().remove();
	},


	/**
	 * override the base views save_png_pre method to clear out the image so we can render the png properly
	 */
	save_png_pre: function(){
		// remove the static index reagent icon
		this.fg_layer.selectAll('.index_text_icon').data([]).exit().remove();

		// scoot the inde text to the left
		this.fg_layer.selectAll('.index_text')
			.attr('x',10)
	},

	/**
	 * override the base views save_png_post method to restore the image after saving
	 */
	save_png_post: function(){
		// draw the static index reagent icon
		this.fg_layer.selectAll('.index_text_icon').data([]).exit().remove();
		this.fg_layer.selectAll('.index_text_icon').data([1])
							.enter().append("svg:image")
							.attr("class","index_text_icon")
			                .attr("xlink:href", "//coreyflynn.github.io/Bellhop/img/CP.png")
							.attr("x",10)
							.attr("y",0)
							.attr("height",40)
							.attr("width",40);

		// scoot the inde text to the right
		this.fg_layer.selectAll('.index_text')
			.attr('x',60)
	}
});

/**
 * A Backbone.View that exposes a custom search bar.  The search bar provides autocomplete
 * functionality for Connectivity Map pert\_inames and cell\_ids.  When the user types in the
 * search view's input, a "search:DidType" event is fired.
 * @class PertSearchBar
 * @constructor
 * @extends Backbone.View
*/
Barista.Views.CompoundSearchBar = Backbone.View.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "CompoundSearchBar",
/**
 * overrides the default Backbone.View initialize method
 */
	initialize: function(){
		var self = this;
		this.render();

		// once the view is rendered, bind a change event to trigger a "search:DidType" event from the view
		var change_callback = function () {
			var val  = $("#search",self.el).val();
			var type = "";
			/**
			 * Fired when the text in the view's search box changes
			 * @event search:DidType
			 * @param {Object} [msg={val:"",type:""}] an object containing the message of the event
			 * @param {String} [msg.val=""] the string val of the views search bar at the time of the event
			 * @param {String} [msg.type=""] the type of message being passed, either "" or "cell". "cell" is passed, if the string matches a cell line and match\_cell\_lines is set
			 */

			self.trigger("search:DidType",{val: val,type: type});
		};

		$("#search",self.el).bind('input propertychange change', _.throttle(change_callback,500));

		// bind a search:DidType event to the typeahead events coming out of typeahead.js
		$(".typeahead",self.el).bind('typeahead:selected typeahead:autocompleted', function (obj,datum) {
			var val = datum.value;
			var type = "single";
			self.trigger("search:DidType",{val: val,type: type});
		});

	},


	/**
	 * Gets the current text entered in the view's search bar
    */
	get_val: function(){
		return $("#search",this.el).val();
	},

	/**
	 * fills the view's search bar with a random pert_iname and triggers a "search:DidType" event
    */    
	random_val: function(){
		var self = this;
		skip = Math.round(Math.random()*40000);
		var pertinfo = Barista.APIURL + '/a2/pertinfo?callback=?';
		params = {q: '{"pert_type":"trt_cp"}',
					f:'{"pert_iname":1}',
										l:1,
										sk:skip};
		$.getJSON(pertinfo,params,function(res){
			var val = res[0].pert_iname;
			$("#search",this.el).val(val);
			self.trigger("search:DidType",{val: val,type: 'single'});
		});
	},
/**
 * triggers a "search:DidType" event for the given search value
 * @param {string} new_val  value to search for
 */
	set_val: function(new_val){
		$("#search",this.el).val(new_val);
		this.trigger("search:DidType",{val: new_val,type: 'single'});
	},

	/**
	 * renders the view
    */
	render: function(){
		var self = this;
		// load the template into the view's el tag
		this.$el.append(BaristaTemplates.CMapPertSearchBar());

		$('#search',this.$el).typeahead([{
			// only return 4 items at a time in the autocomplete dropdown
			limit: 2,

			// provide a name for the default typeahead data source
			name: 'Reagents',

			// the template to render for all results
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use pertinfo with custom query params
				url: [Barista.APIURL + '/a2/pertinfo?',
					  'q={"pert_iname":{"$regex":"%QUERY", "$options":"i"}, "pert_type":"trt_cp"}',
					  '&f={"pert_iname":1,"pert_type":1}',
					  '&l=100',
					  '&s={"pert_iname":1}'].join(''),
				
				dataType: 'jsonp',

				/**
				 * returns the processed list of data for the autocomplete
				 * @param {array} response  array of data to extract cell id from
				 */
				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its pert_iname and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.pert_iname);
						object_map[element.pert_iname] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						};
						if (object_map[item].pert_type === 'trt_cp' ){
							_.extend(datum,{
								type: 'Chemical Reagent',
								color: '#E69F00',
							});
							datum_list.push(datum);
							return datum_list;
						}else{
							_.extend(datum,{
								type: object_map[item].pert_type,
								color: '#999',
							});
							datum_list.push(datum);
							return datum_list;
						}
					});

					// return the processed list of daums for the autocomplete
					return datum_list;
				}

			}
		}]);
	}
});
Barista.Views.FlatTreeMapView = Backbone.View.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "FlatTreeMapView",

		model: new Barista.Models.PertCellBreakdownModel(),

		/**
		 * overrides the default Backbone.View initialize method
		 */

		initialize: function(){
		// set up color options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : "#d9d9d9";
		this.well_color = (this.options.well_color !== undefined) ? this.options.well_color : "#bdbdbd";
		this.fg_color = (this.options.fg_color !== undefined) ? this.options.fg_color : "#1b9e77";

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "span4";

		// set up the default height for the plot
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 300;

		// allow for the drawing of arbitrary html in treemap cells rather than counts
		this.category_html = (this.options.category_html !== undefined) ? this.options.category_html : null;

		// allow for construction inside of a shadow DOM
		this.shadow_el = (this.options.shadow_el !== undefined) ? this.options.shadow_el : null;
		this.shadow_root = (this.options.shadow_root !== undefined) ? this.options.shadow_root : null;

		// bind render to model changes
		this.listenTo(this.model,'change', this.update_vis);

		// compile the default template for the view
		this.compile_template();

		// set up a $div selector that can find the target div even if it is in a
		// shadow DOM
		if (this.shadow_el && this.shadow_root){
			this.$div = $(this.shadow_root).children(this.shadow_el).children("#" + this.div_string);
		}else{
			this.$div = $("#" + this.div_string);
		}

		// define the location where d3 will build its plot
		this.width = this.$div.width();
		this.height = this.$div.outerHeight();
		this.top_svg = d3.select(this.$div[0]).append("svg")
						.attr("width",this.width)
						.attr("height",this.height)
		this.vis = this.top_svg.append("g");
		// this.vis_overlay = this.top_svg.append("g");

		// render the vis
		this.render();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.render();} );
	},

	/**
	 * use Handlebars to compile the template for the view
	 */
	compile_template: function(){
		this.div_string = 'd3_target' + new Date().getTime();
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},
/**
 * renders the view
 */
	render: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the panel's width and height
		this.width = this.$div.width();
		this.height = this.$div.outerHeight();

		// rescale the width of the vis
		this.top_svg.transition().duration(1).attr("width",this.width);

		// define the treemap layout
		this.treemap = d3.layout.treemap()
						.size([this.width,this.height])
						.sticky(false)
						.round(true)
						.sort(function(a,b) { return a.count - b.count; })
						.value(function(d) {return d.count;});

		// grab the data from the model and plot the state of the treemap
		this.data = this.model.get('tree_object');

		// if there are no children in the tree_object, dim the view
		if (_.isEmpty(this.data.children)){
			this.top_svg.transition().duration(1).attr("opacity",0);
		}else{
			this.top_svg.transition().duration(500).attr("opacity",1);
		}

		// set up an alpha scaling
		this.min_count = _.min(_.pluck(this.data.children,'count'));
		this.max_count = _.max(_.pluck(this.data.children,'count'));
		this.opacity_map = d3.scale.linear()
							.domain([this.min_count,this.max_count,this.max_count+1])
							.range([1,1,0]);

		this.vis.data([this.data]).selectAll("rect").data([]).exit().remove();
		this.vis.data([this.data]).selectAll("rect").data(this.treemap.nodes)
			.enter().append("rect")
			.attr("class",this.div_string + "_cell")
			.attr("fill",this.fg_color)
			.attr("opacity",function(d){return self.opacity_map(d.value);})
			.attr("x", function(d) {return d.x;})
			.attr("y", function(d) {return d.y;})
			.attr("_id", function(d) {return d._id;})
			.attr("count", function(d) {return d.count;})
			.attr("width", function(d) {return d.dx;})
			.attr("height", function(d) {return d.dy;})
			.attr("stroke", "white")
			.attr("stroke-width", 2);

		if (this.category_html){
			self.draw_foreignObject();
		}else{
			self.draw_text();
			self.add_tooltips();
		}

		// add a png export overlay
		this.top_svg.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.top_svg.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export")
			.attr("x",10)
			.attr("y",this.height - 10)
			.attr("opacity",0.25)
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1);})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25);})
			.on("click",function(){self.savePng();});
	},
/**
 * updates the visibility of the element
 */
	update_vis: function(){
		var self = this;
		// grab the data from the model and plot the state of the treemap
		this.data = this.model.get('tree_object');

		// if there are no children in the tree_object, dim the view
		if (_.isEmpty(this.data.children)){
			this.top_svg.transition().duration(1).attr("opacity",0);
		}else{
			this.top_svg.transition().duration(500).attr("opacity",1);
		}

		// set up an alpha scaling
		this.min_count = _.min(_.pluck(this.data.children,'count'));
		this.max_count = _.max(_.pluck(this.data.children,'count'));
		this.opacity_map = d3.scale.linear().domain([this.min_count,this.max_count,this.max_count+1])
						.range([1,1,0]);

		//add new data if it is there
		this.vis.data([this.data]).selectAll("rect").data(this.treemap.nodes)
			.enter().append("rect")
			.attr("class",this.div_string + "_cell")
			.attr("fill",this.fg_color)
			.attr("opacity",function(d){return self.opacity_map(d.value);})
			.attr("x", function(d) {return d.x;})
			.attr("y", function(d) {return d.y;})
			.attr("_id", function(d) {return d._id;})
			.attr("count", function(d) {return d.count;})
			.attr("width", function(d) {return d.dx;})
			.attr("height", function(d) {return d.dy;})
			.attr("stroke", "white")
			.attr("stroke-width", 2);

		// transition elements
		this.vis.data([this.data]).selectAll("rect")
			.transition().ease("cubic out").duration(500)
			.attr("opacity",function(d){return self.opacity_map(d.value);})
			.attr("x", function(d) {return d.x;})
			.attr("y", function(d) {return d.y;})
			.attr("_id", function(d) {return d._id;})
			.attr("count", function(d) {return d.count;})
			.attr("width", function(d) {return d.dx;})
			.attr("height", function(d) {return d.dy;});

		// exit old elements
		this.vis.data([this.data]).selectAll("rect").data(this.treemap.nodes).exit().remove();

		// // add tooltips
		// this.add_tooltips();

		// draw_text on the elements that have room for it
		this.clear_text();
		if (this.category_html){
			setTimeout(function(){self.draw_foreignObject();},500);
		}else{
			setTimeout(function(){self.draw_text(); self.add_tooltips();},500);
		}

	},
/**
 * inserts tooltips that display the cell id and count for non-empty datasets
 */
	add_tooltips: function(){
		// make a selection of all cells in the treemap
		var cell_selection = $('.' + this.div_string + '_cell');

		// remove existing tooltips so we don't confuse the labels
		cell_selection.each(function(){
			$(this).tooltip('destroy');
		});

		// add new tooltips if there is more than just the base cell in
		// in the treemap (i.e. it is a non-empty dataset)
		if (cell_selection.length > 1){
			cell_selection.each(function(){
				$(this).tooltip({
					placement: 'top',
					container: 'body',
					trigger: 'hover focus',
					title: $(this).attr('_id') + ' : ' + Math.round($(this).attr('count'))
				});
			});
		}
	},
/**
 * clear visible text in fields
 */
	clear_text: function(){
		this.vis.data([this.data]).selectAll("text.name").data([]).exit().remove();
		this.vis.data([this.data]).selectAll("text.count").data([]).exit().remove();
		this.vis.data([this.data]).selectAll(".foreign").data([]).exit().remove();
	},

	/**
	 * add a foreignObject DOM snippet for each cell in the treemap based on an input mapping of DOM
	 * snippets
	 */
	draw_foreignObject: function(){
		var self = this;
		this.vis.data([this.data]).selectAll(".foreign").data([]).exit().remove();
		this.vis.data([this.data]).selectAll(".foreign").data(this.treemap.nodes)
			.enter().append("foreignObject")
			.attr("class","foreign")
			.attr("x",function(d){return d.x;})
			.attr("y",function(d){return d.y;})
			.attr("height",function(d){return d.dy;})
			.attr("width",function(d){return d.dx;})
			.attr("opacity",function(d) {
				if (d.dy < 50 || d.dx < 50){
					return 0;
				}else{
					return 1;
				}
			})
			.append("xhtml:body")
			.style("background-color","rgba(0,0,0,0)")
			.style("height","100%")
			.style("width","100%")
			.style("display","flex")
			.style("display", "-webkit-box")
  			.style("display", "-webkit-flex")
			.style("display", "-ms-flexbox")
			.html(function(d){
				if (d.children === undefined){
					return self.category_html[d._id];
				}else{
					return "";
				}
			})
	},
/**
 * draws text to the screen based on treemap data
 */
	draw_text: function(){
		this.vis.data([this.data]).selectAll("text.name").data([]).exit().remove();
		this.vis.data([this.data]).selectAll("text.name").data(this.treemap.nodes)
			.enter().append("text")
			.attr("class","name")
			.text(function(d) {
				if (d.dy < 20 || d.dx < 80){
					return null;
				}else{
					return d.children ? null : d._id;
				}
			})
			.attr("text-anchor", "middle")
			.attr("x", function(d) {return d.x + d.dx/2;})
			.attr("y", function(d) {return d.y + d.dy/2;})
			.attr("font-family","'Helvetica Neue',Helvetica,Arial,sans-serif")
			.attr("font-weight","normal")
			.attr("font-size","12pt")
			.attr("fill","white")
			.attr("opacity",0)
			.style("pointer-events","none")
			.transition().duration(500).attr("opacity",1);

		this.vis.data([this.data]).selectAll("text.count").data([]).exit().remove();
		this.vis.data([this.data]).selectAll("text.count").data(this.treemap.nodes)
			.enter().append("text")
			.attr("class","name")
			.text(function(d) {
				if (d.dy < 40 || d.dx < 80){
					return null;
				}else{
					return d.children ? null : Barista.numberWithCommas(d.count);
				}
			})
			.attr("text-anchor", "middle")
			.attr("x", function(d) {return d.x + d.dx/2;})
			.attr("y", function(d) {return d.y + d.dy/2 + 20;})
			.attr("font-family","'Helvetica Neue',Helvetica,Arial,sans-serif")
			.attr("font-weight","normal")
			.attr("font-size","12pt")
			.attr("fill","black")
			.attr("opacity",0)
			.style("pointer-events","none")
			.transition().duration(500).attr("opacity",1);
	},
/**
 * saves the target svg on the screen to a png file
 */
	savePng: function(){
		//set the animate the div containing the view by applying and then removing
		// css classes that defined the transitions we want
		var $div = this.$div;
		$div.addClass("barista-base-view");
		$div.toggleClass("exporting");
		setTimeout(function(){$div.toggleClass("exporting");},500);

		// build a canvas element to store the image temporarily while we save it
		var width = this.top_svg.attr("width");
		var height = this.top_svg.attr("height");
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.top_svg.selectAll("." + this.div_string + "png_export").data([1]);
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.top_svg.node().parentNode.innerHTML;
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = "cmapTreeMap" + new Date().getTime() + ".png";
		if (canvas.toBlob){canvas.toBlob(function(blob){saveAs(blob,filename);})};
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);
	}
});

/**
 * a view that supports a single label and a single count *
 */

Barista.Views.GenericCountView = Barista.Views.BaristaBaseView.extend({
  /**
   * give the view a name to be used throughout the View's functions when
   * it needs to know what its class name is
   * @type {String}
   */
  name: "GenericCountView",

  /**
   * set up the view's default model
   * @type {Barista.Models.GenericCoutModel}
   */
  model: new Barista.Models.PertCountModel(),

  /**
   * overide the default Backbone.View initialize method to handle
   * optional arguments, compile the view template, bind model changes
   * to view updates and render the view
   * @return {Barista.Views.GenericCountView} a reference to this
   */
  initialize: function(){
    // set up label, default if not specified
    this.label = (this.options.label !== undefined) ? this.options.label : 'Signatures';

    // set the animation duration for count.
    this.duration = (this.options.duration != undefined) ? this.options.duration : 500;

    // set up the top bar color, default to gray if not specified
    this.top_bar_color = (this.options.top_bar_color !== undefined) ? this.options.top_bar_color : 'white';

    // call the the base view initialize function
    this.base_initialize();

    // bind window resize events to redraw.
    var self = this;
    $(window).resize(function() {self.update();} );

    return this;
  },

  /**
   * completely re-render the view
   * @return {Barista.Views.GenericCountView} a reference to this
   */
  render: function() {
    this.base_render()
      .renderTopBar()
      .renderLabel()
      .renderCount();

    return this;
  },

  /**
   * update only the dynamic portions of the view
   * @return {Barista.Views.GenericCountView} a reference to this
   */
  update: function() {
    this.updateCount();
  },

  /**
   * draw the top bar of the view
   * @return {Barista.Views.GenericCountView} a reference to this
   */
  renderTopBar: function() {
    this.fg_layer.selectAll('.genericCountViewTopBar').data([]).exit().remove();
    this.fg_layer.selectAll('.genericCountViewTopBar').data([1])
    .enter().append("rect")
    .attr("class","genericCountViewTopBar")
    .attr("height",'2px')
    .attr("width",this.width)
    .attr("fill",this.top_bar_color);

    return this;
  },

  /**
   * draw the static label at the top of the view
   * @return {Barista.Views.GenericCountView} a reference to this
   */
  renderLabel: function() {
    this.fg_layer.selectAll('.genericCountViewLabel').data([]).exit().remove();
    this.fg_layer.selectAll('.genericCountViewLabel').data([1])
      .enter().append("text")
      .attr("class","genericCountViewLabel")
      .attr("y",25)
      .attr("font-family","'Open Sans")
      .attr("font-weight","300")
      .attr("font-size","16px")
      .attr("fill",'#444444')
      .text(this.label);

    return this;
  },

  /**
   * draw the count from scratch
   * @return {Barista.Views.GenericCountView} a reference to this
   */
  renderCount: function() {
    // get the count from the model. If it is undefined, assume it is 0
    var count = this.model.get('count');
    if (typeof(count) !== 'number'){
      count = 0;
    }

    // draw the count
    this.fg_layer.selectAll('.genericCountViewCount').data([]).exit().remove();
    this.fg_layer.selectAll('.genericCountViewCount').data([1])
      .enter().append("text")
      .attr("class","genericCountViewCount")
      .attr("y",60)
      .attr("font-family","'Open Sans")
      .attr("font-weight","500")
      .attr("font-size","37px")
      .attr("fill",this.fg_color)
      .text(Barista.numberWithCommas(count));

    return this;
  },

  /**
   * update the count from the model. If if is undefined, assume it is 0
   * @return {Barista.Views.GenericCountView} a reference to this
   */
  updateCount: function() {
    // get the count from the model. If it is undefined, assume it is 0
    var count = this.model.get('count');
    if (typeof(count) !== 'number'){
      count = 0;
    }


    // transition the count to the new value
    this.fg_layer.selectAll('.genericCountViewCount').data([1])
      .transition().duration(this.duration)
      .tween("text", function() {
          var i = d3.interpolate(this.textContent.replace(",",""), count);
          return function(t) {
            this.textContent = Barista.numberWithCommas(Math.round(i(t)));
          };
      });

    return this;
  }

});

Barista.Views.GridView = Backbone.View.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "GridView",
/**
 * overrides the default Backbone.View initialize method
 */
	initialize: function(){
		var self = this;
		// default search value
		this.search_val = "";
		this.search_type = "single";

		// set up grid options
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "col_lg_12";
		this.legend = (this.options.legend !== undefined) ? this.options.legend :null;
		this.no_download = (this.options.no_download !== undefined) ? this.options.no_download :null;
		this.no_slice = (this.options.no_slice !== undefined) ? this.options.no_slice :null;
		this.no_legend = (this.options.no_legend !== undefined) ? this.options.no_legend :null;
		this.edit = (this.options.edit !== undefined) ? this.options.edit : false;
		this.limit = (this.options.limit !== undefined) ? this.options.limit : 30;



		// set up a default collection and column definition for the grid to operate on
		this.collection = (this.options.collection !== undefined) ? this.options.collection : new Barista.Collections.PertCollection();
		this.columns = (this.options.columns !== undefined) ? this.options.columns : [{name: "pert_iname", label: "Reagent Name", cell: "string", editable: false},
																						{name: "pert_type_label", label: "Pert Type", cell: Barista.HTMLCell, editable: false},
																						{name: "num_inst", label: "Experiments", cell: "integer", editable: false}];

		// build the template
		this.compile_template();

		// build the grid on the template using a clickable row.  If a row is clicked, a grid:RowClick event
		// is fired with the row's model as the passed data.
		// build the clickable row
		var ClickableRow = Backgrid.Row.extend({
			events: {
				"click": "onClick"
			},
			/**
			 *  build the grid on the template using a clickable row
			 *  If a row is clicked, a grid:RowClick event is fired with the row's model as the passed data
			 */
			onClick: function () {
				self.trigger("grid:RowClick", this.model);
			},
			/**
			 * overide Backgrid.Row's native render method
			 */
			render: function () {
				this.$el.empty();
				var fragment = document.createDocumentFragment();
				for (var i = 0; i < this.cells.length; i++) {
					fragment.appendChild(this.cells[i].render().el);
				}
				this.el.appendChild(fragment);
				this.delegateEvents();

				this.$el.css("opacity",0);
				this.$el.animate({"opacity":1},1000);

				return this;
			},

			/**
			 * overide Backgrid.Row's native remove method
			 */
			remove: function () {
				this.$el.addClass("cmap-active-grid-row");
				this.$el.animate({"opacity":0},1000);
				var self = this;
				setTimeout(function(){
					for (var i = 0; i < self.cells.length; i++) {
						var cell = self.cells[i];
						cell.remove.apply(cell, arguments);
					}
					return Backbone.View.prototype.remove.apply(self, arguments);
				},1000);
			}
		});

		// build the grid
		this.grid = new Backgrid.Grid({
			row: ClickableRow,
			columns: this.columns,
			collection: this.collection
		});
		$("#" + this.div_string).append(this.grid.render().$el);

		// add a button to scroll to the top of the grid once it is scroll down
		this.add_scroll_to_top_button();

		//bind the table to a function to check for scroll boundaries
		$("#" + this.div_string,this.el).scroll(function(){self.checkscroll();});

		// bind the download text to a function to download the data in the table
		$("#" + this.div_string + "_download",this.el).click(function(){self.download_table();});

		// bind the edit text to a function to edit the data in the table
		$("#" + this.div_string + "_edit",this.el).click(function(){self.open_edit_table();});

		// bind the download text to a function to slice the data in the table out of the
		// Connectivity Map database.
		self.change_slice_button_state("slice");
	},

	checkscroll: _.debounce(function(){
		if ($("#" + this.div_string).scrollTop() > 30) {
			this.show_scroll_to_top_button();
		}else{
			this.hide_scroll_to_top_button();
		}

		var triggerPoint = 100;
		var pos = $("#" + this.div_string).scrollTop() + $("#" + this.div_string).height() + triggerPoint;
		if (!this.collection.isLoading && pos > $("#" + this.div_string)[0].scrollHeight){
			this.collection.skip += this.limit;
			this.update_collection(this.search_val,this.search_type,this.limit);
		}
	},100),

	/**
	 * adds a UI control to scroll the top of the grid
	 */
	add_scroll_to_top_button: function(){
		var self = this;
		this.scroll_to_top_button_id = this.div_string + 'scroll_button';
		this.$el.append('<button id="' + this.scroll_to_top_button_id + '" class="cmap_grid_to_top_button">Scroll to Top</button>');
		$("#" + this.scroll_to_top_button_id).click(function(){self.scroll_to_top();});
		this.hide_scroll_to_top_button();
	},

	/**
	 * scrolls the grid to the top of its container
	 * @param  {number} duration  the duration of the scroll animation in ms, defaults to 500
	 */
	scroll_to_top: function(duration){
		duration = (duration !== undefined) ? duration : 500;
		$("#" + this.div_string).animate({scrollTop:0},duration);
		this.hide_scroll_to_top_button();
	},

	/**
	 * scrolls the grid to the bottom of its container
	 * @param  {number} duration  the duration of the scroll animation in ms, defaults to 500
	 */
	show_scroll_to_top_button: function(duration){
		duration = (duration !== undefined) ? duration : 500;
		$("#" + this.scroll_to_top_button_id).clearQueue();
		$("#" + this.scroll_to_top_button_id).animate({opacity:1},duration);
	},

	/**
	 * hides the scroll to top button
	 * @param  {number} duration  the duration of the scroll animation in ms, defaults to 500
	 */
	hide_scroll_to_top_button: function(duration){
		var self= this;
		duration = (duration !== undefined) ? duration : 500;
		$("#" + this.scroll_to_top_button_id).clearQueue();
		$("#" + this.scroll_to_top_button_id).animate({opacity:0},duration);
	},

/**
 * changes the visible collection data and rejects the slice
 * @param  {string} search_val   the value to search for
 * @param  {string} search_type  the type of search that will be performed by getData
 * @param  {number} limit        the number of models to be fetched
 */
	replace_collection: function(search_val,search_type,limit){
		var getData_promise;
		var self = this;
		this.search_val = (search_val !== undefined) ? search_val : this.search_val;
		this.search_type = (search_type !== undefined) ? search_type : this.search_type;
		this.limit = (limit !== undefined) ? limit : this.limit;
		$("#" + this.div_string).show();
		$("#" + this.div_string).animate({opacity:1},500);
		this.collection.reset();
		this.collection.skip = 0;
		self.collection.maxCount = Infinity;
		getData_promise =  this.collection.getData(this.search_val,this.search_type,this.limit);
		this.listenToOnce(this.collection,"add", function(){
			this.trigger("grid:ReplaceCollection");
			this.trigger("grid:Add");
			this.resize_div();
			// reset the slice all data button and reject the slice
			// deferred if it is present
			self.change_slice_button_state("slice");
			if (self.slice_defer){
				self.slice_defer.reject();
			}
		});
		return getData_promise;
	},
/**
 * changes the visible collection data
 * @param  {string} search_val   the value to search for
 * @param  {string} search_type  the type of search that will be performed by getData
 * @param  {number} limit        the number of models to be fetched
 */
	update_collection: function(search_val,search_type,limit){
		var getData_promise;
		if (this.collection.models.length < this.collection.maxCount){
			var self = this;
			this.search_val = (search_val !== undefined) ? search_val : this.search_val;
			this.search_type = (search_type !== undefined) ? search_type : this.search_type;
			this.limit = (limit !== undefined) ? limit : this.limit;
			$("#" + this.div_string).show();
			$("#" + this.div_string).animate({opacity:1},500);
			getData_promise = this.collection.getData(this.search_val,this.search_type,this.limit);
			this.resize_div();
			this.listenToOnce(this.collection,"add", function(){
				this.trigger("grid:UpdateCollection");
				this.trigger("grid:Add");
			});
			return getData_promise;
		}
	},
/**
 * hides the visible data and rejects the slice
 */
	clear_collection: function(){
		var self = this;
		this.collection.skip = 0;
		$("#" + this.div_string).animate({opacity:0},500);
		window.setTimeout(function(){
			self.collection.reset();
			self.collection.maxCount = Infinity;
			$("#" + this.div_string).hide();

			// reset the slice all data button and reject the slice
			// deferred if it is present
			self.change_slice_button_state("slice");
			if (self.slice_defer){
				self.slice_defer.reject();
			}

		},500);
	},
/**
 * changes the height of the grid based on the number of elements it holds
 */
	resize_div: function(){
		var self = this;
		var container_height =  $("#" + this.div_string).height();
		setTimeout(function(){
			var data_height = self.collection.length * 30 + 40;
			var target_height = (data_height > 300) ? 300 : data_height;

			$("#" + self.div_string).stop();
			$("#" + self.div_string).animate({height:target_height},500);
		},500);
	},
	/**
	 * use Handlebars to compile the template for the view
	 */
	compile_template: function(){
		this.div_string = 'backgrid_target' + new Date().getTime();;
		this.$el.append(BaristaTemplates.CMapBaseGrid({div_string: this.div_string,
													   span_class: this.span_class,
													   legend: this.legend,
													   no_download: this.no_download,
													   no_slice: this.no_slice,
													   no_legend: this.no_legend,
													   edit: this.edit,
													}));
	},
/**
 * attempts to return data from a slice, and returns the slice button to its previous state if a failure
 * is detected
 */
	slice_all_table_data: function(){
		var self = this;
		// change the button state to progress
		this.change_slice_button_state("progress");

		// create a Deferred on the object to handle interaction with the slicing
		// operation.  This allows us to resolve the Deffered later in another
		// method before the ajax call returns if we need to
		this.slice_defer = $.Deferred();

		// If the Deferred resolves successfully, leave the button alone and let other the ajax call
		// below manipulate it.  If it is rejected, set the button back up to its original state.
		this.slice_defer.fail(function() {
				self.change_slice_button_state("slice");
			}
		);

		// grab the API 'q' query parameter from the grid's collection and send it
		// to sig_slice API.  if the slice job completes, check the return for a
		// file_url attribute and change the link in the slice button to expose the
		// link.  If it does not exist, the slice failed and we display a failure
		// message asking the user to try again
		sig_slice = '//prefix:8080/a2/sigslice?callback=?';
		$.ajax({
			dataType: 'json',
			url: sig_slice,
			data: {q: self.collection.q_param,l: 1000},
			
			success: function(res){
				if (res.file_url){
					self.change_slice_button_state("link",res.file_url);
				}else{
					self.change_slice_button_state("fail");
				}
			},

			error: function(){
				self.change_slice_button_state("fail");
			}
		});

		// if 60s pass, we assume that is too long and we
		// update the button with an error message and
		// resolve the deferred to indicate we finished the
		// ajax call normally.  This is a hack to emulate a 404 error in jsonp
		this.slice_timeout = setTimeout(function(){
			self.change_slice_button_state("fail");
		},60000);
	},
/**
 * changes the state of the slice button based on the current state
 * @param  {string} state  current state of the slice button (i.e. slice, progress, or link)
 * @param  {string} link   link to the slice
 */
	change_slice_button_state: function (state,link){
		var self = this;
		// unbind any handlers on the button
		$("#" + self.div_string + "_slice",self.el).unbind();

		// handle the re-binding of handlers and update the button text and icon
		switch (state){
			case "slice":
				// update the slice button to show an available data slice
				$("#" + self.div_string + "_slice",self.el).html('<font color="#0072B2"><i class="icon-cogs"></i> slice all data</font>');

				// rebind the click event and clear a timeout if present
				$("#" + this.div_string + "_slice",this.el).click(function(){self.slice_all_table_data();});
				clearTimeout(self.slice_timeout);
				break;

			case "progress":
				// indicate that we are making a data slice
				$("#" + this.div_string + "_slice",this.el).html('<font color="#0072B2"><i class="icon-cog icon-spin"></i> slicing</font>');

				// unbind all handlers so that we can't click the while while we are slicing
				$("#" + this.div_string + "_slice",this.el).unbind();
				break;

			case "link":
				// construct an html string to expose the link
				var html_string = ['<a href="',
								   link,
								   '" class="cmap-link">',
								   '<font color="#0072B2"><i class="icon-download"></i> download slice</font></a>'].join('');

				// update the button and resolve the deferred to
				// indicate we finished the ajax call normally
				$("#" + self.div_string + "_slice",self.el).html(html_string);
				self.slice_defer.resolve();
				clearTimeout(self.slice_timeout);
				break;

			case "fail":
				// update the button with an error message,
				// resolve the deferred and clear the Timeout
				$("#" + self.div_string + "_slice",self.el).html('<font color="#D55E00"><i class="icon-exclamation"></i> slice failed. try again?</font>');
				$("#" + self.div_string + "_slice",self.el).click(function(){self.slice_all_table_data();});
				self.slice_defer.resolve();
				clearTimeout(self.slice_timeout);
				break;
		}

	},
	/**
	 * download the backing data that matches the current model state
	 */
	download_table: function(){
		var self = this;
		// indicate we are downloading something
		$("#" + this.div_string + "_download",this.el).html('<font color="#0072B2"><i class="icon-refresh icon-spin"></i> exporting</font>');

		// set up api call parameters
		var url = this.collection.url;
		var params = {q: this.collection.q_param,
            l:0,
            s:this.collection.s_param};

        // grab column header names
        var headers = _.pluck(this.columns,'label').join('\t');

        // grab column data names
        var names = _.pluck(this.columns,'name');

        // make a JSON API call to grab data for the table
		$.getJSON(url,params,function(res){
			var lines = [headers];
			res.forEach(function(r){
				var line_data = [];
				// for each data name in the table, grab the data. translate html
				// content to plain text where required
				names.forEach(function(n){
					switch (n){
					case "pert_type_label":
						line_data.push(Barista.CMapPertTypeAlias(r["pert_type"]).acronym);
						break;
					case "view_result_link":
						line_data.push(r["standard_result"]);
						break;
					case "rpt":
						line_data.push(r.params.rpt);
						break;
					case "tool_id":
						line_data.push(r.params.tool_id);
						break;
					case "date":
						line_data.push(String(new Date(parseInt(r["_id"].substring(0,8), 16)*1000)));
						break
					default:
						line_data.push(String(r[n]));
					}
				});
				line_string = line_data.join('\t');
				lines.push(line_string);
			});
			var lines_string = lines.join("\n");
			var blob = new Blob([lines_string], {type: "text/plain;charset=utf-8"});
			var timestamp = new Date().getTime();
			saveAs(blob, "CMapTable" + timestamp + ".txt");
			$("#" + self.div_string + "_download",self.el).html('<font color="#0072B2"><i class="icon-share"></i> export table</font>');
		});
	},

	/**
	 * open up a column to show editing buttons
	 */
	open_edit_table: function(){
		var self = this;
		console.log("opening edit");
		this.grid.columns.unshift(({name: "edit", label: "Edit", cell: Barista.HTMLCell, editable: false}));
		$("#" + this.div_string + "_edit",this.el).html('<font color="#e51c23"><i class="fa fa-times-circle"></i> done editing </font>');
		$("#" + this.div_string + "_edit",this.el).unbind();
		$("#" + this.div_string + "_edit",this.el).click(function(){self.close_edit_table();});
	},

	/**
	 * close column showing editing buttons
	 */
	close_edit_table: function(){
		var self = this;
		var idCol = this.grid.columns.where({ name: "edit" });
		this.grid.removeColumn(idCol);
		$("#" + this.div_string + "_edit",this.el).html('<font color="#e51c23"><i class="fa fa-times-circle"></i> edit </font>');
		$("#" + this.div_string + "_edit",this.el).unbind();
		$("#" + this.div_string + "_edit",this.el).click(function(){self.open_edit_table();});
	},

	/**
	 * hides the view by dimming the opacity and hiding it in the DOM
	 * @param  {number}  duration  the time in ms for the hide animation. defualts to 500
	 * pert_detail_view.hide(duration);
	 */
	hide: function(duration){
		var self = this;
		this.$el.animate({opacity:0},duration);
		setTimeout(function(){self.$el.hide();},duration);
	},

	/**
	 * shows the view by brightening the opacity and showing it in the DOM
	 * @param  {number}  duration  the time in ms for the hide animation. defualts to 500
	 * pert_detail_view.show(duration);
	 */
	show: function(duration){
		this.$el.show();
		this.$el.animate({opacity:1},duration);
	}
});

/**
 * a Backgrid extension that supports display of html content in Backgrid tables
 * HTMLCellView defines both a Backgrid.Cell subclass (HTMLCell) and Backgrid.CellFormatter subclass
 * (HTMLFormatter) to use with it
 * These two components are used together to integrate with Backgrid's existing cell definitions in order
 * to use HTMLCell and HTMLFormatter, specify the cell parameter of a Backgrid column definition as
 * HTMLCell
 * as an example:
 *    // set up a default collection and column definition for the grid to operate on
     this.collection = new PertCollection();
     this.columns = [{name: "pert_type_label", label: "Pert Type", cell: HTMLCell, editable: false}];
 
     // build the template
     this.compile_template();
 
     // build the grid on the template
     this.grid = new Backgrid.Grid({
       columns: this.columns,
       collection: this.collection
     });
 */


/**
 * A formatter that extends Backgrid.CellFormatter to return exactly the raw input value as opposed to the
 * string version of the raw input
 */
Barista.HTMLFormatter = Backgrid.HTMLFormatter = function () {};
Barista.HTMLFormatter.prototype = new Backgrid.CellFormatter();
_.extend(Barista.HTMLFormatter.prototype, {
  /**
   * returns the raw input value
   * @param  {string} rawValue  string version of raw input
   */
  fromRaw: function (rawValue) {
    if (_.isUndefined(rawValue) || _.isNull(rawValue)) return '';
    return rawValue;
  }
});

/**
 * An extension of Backgrid.Cell to render raw html content into the target element of the cell
 */
Barista.HTMLCell = Backgrid.HTMLCell = Backgrid.Cell.extend({
  className: "html-cell",
  formatter: new Barista.HTMLFormatter(),
  /**
   * renders the view
   */
  render: function () {
    this.$el.html(this.formatter.fromRaw(this.model.get(this.column.get("name"))));
    return this;
  }
});
/**
 * heatmap_view = new HeatmapView({el: $("target_selector"),
												model: new HeatmapModel(),
												template: BaristaTemplates.d3_target,
												bg_color: "#ffffff",
												low_color: "#0000ff",
												high_color: "#ff0000",
												color_scale: undefined,
												annot_color_scale: undefined,
												plot_height: 300,
												span_class: "span12"
												});
 *
 * A Backbone.View that displays a simple heatmap
 * The view is normally paired with a HeatmapModel, but works with any model that provides data, rid, cid,
 * and title attributes
 * optional arguments:
 * @param {string}   template           The handlebars template to use. Defaults to
 *                                      BaristaTemplates.d3_target
 * @param {string}   bg_color           the hex color code to use as the backgound of the view, defaults to
 *                                      #ffffff
 * @param {string}   low_color          the hex color code to use as lowest value color in the heatmap,
 *                                      defaults to #0000ff
 * @param {string}   high_color         the hex color code to use as highest value color in the heatmap,
 *                                      defaults to #ff0000
 * @param {d3.scale} color_scale        custom color scale to use in the heatmap.  If supplied, low_color
 *                                      and high_color are ignored, defaults to undefined
 * @param {d3.scale} annot_color_scale  custom color scale to use in the heatmap annotations. defaults to
 *                                      undefined and causes the annotations to be rendered with a
 *                                      standard color scale
 * @param {number}   plot_height        the height of the heatmap to generate in pixels, defaults to 300
 * @param {string}   span_class         a bootstrap span class to size the width of the view, defaults to
 *                                      "span12"
 * example usage:
 */

Barista.Views.HeatmapView = Backbone.View.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "HeatMapView",

	/**
	 * set up the view's default model
	 * @type {Barista}
	 */
	model: new Barista.Models.HeatmapModel(),

	/**
	 * overide the defualt Backbone.View initialize method to bind the view to model changes, bind window
	 * resize events to view re-draws, compile the template, and render the view
	 */
	initialize: function(){
		// set up color options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : "#ffffff";
		this.low_color = (this.options.low_color !== undefined) ? this.options.low_color : "#0000ff";
		this.high_color = (this.options.high_color !== undefined) ? this.options.high_color : "#ff0000";
		this.color_scale = (this.options.color_scale !== undefined) ? this.options.color_scale : undefined;
		this.annot_color_scale = (this.options.annot_color_scale !== undefined) ? this.options.annot_color_scale : undefined;

		// set up the defualt plot height
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 300;
		// set up the default template
		this.template = (this.options.template !== undefined) ? this.options.template : BaristaTemplates.d3_target;

		// set up the default span class
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "#span12";

		// bind render to model changes
		this.listenTo(this.model,'change', this.render);

		// compile the default template for the view and draw it for the first time
		this.compile_template();

		// define the location where d3 will build its plot
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		// render the view for the first time
		this.redraw();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.redraw();} );
	},

	/**
	 * use Handlebars to compile the template for the view
	 */
	compile_template: function(){
		var self = this;
		this.div_string = 'd3_target' + new Date().getTime();;
		this.$el.append(this.template({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	/**
	 * completely redraw the view. Updates both static and dynamic content in the view.
	 */
	redraw: function(){
		this.init_panel();
		this.render();
	},

	/**
	 * initialize the static parts of the view's panel
	 */
	init_panel: function(){
		// stuff this into a variable for later use
		var self = this;

		// check to see if the container is visible, if not, make it visible, but transparent so we draw it with
		// the proper dimensions
		if (this.$el.is(":hidden")){
			this.$el.animate({opacity:0},1);
			this.$el.show();
		}

		// set up the margin
		this.margin = 50;

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		// set up the panel's width and height
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();

		// rescale the width of the vis
		this.vis.transition().attr("width",this.width);
		this.vis.transition().attr("height",this.height);

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// determine the height and width of cells in the heatmap
		if (this.height < this.width){
			this.cell_height = (this.height - this.margin*2) / this.model.get('data').length;
			this.cell_width = (this.height - this.margin*2) / this.model.get('data')[0].length;
		}else{
			this.cell_height = (this.width - this.margin*2) / this.model.get('data').length;
			this.cell_width = (this.width - this.margin*2) / this.model.get('data')[0].length;
		}

		// determine the plot offset to center the plot in its container
		this.x_center = this.width / 2;
		this.x_offset = this.x_center - (this.cell_width * this.model.get('data')[0].length / 2);

		// map the data into a flattened array of objects with array indices and value as attributes
		this.unraveled_data = this.unravel_data(this.model.get('data'));

		// set up the color scale
		if (this.color_scale === undefined){
			var values = _.pluck(this.unraveled_data,'value');
			data_min = _.min(values);
			data_max = _.max(values);
			this.color = d3.scale.linear().domain([data_min,data_max]).range([this.low_color, this.high_color]);
		}else{
			this.color = this.color_scale;
		}

		// set up the annotation color scale
		if (this.annot_color_scale === undefined){
			var values = _.uniq(this.model.get('annots'))
			this.annot_color = d3.scale.category10().domain(values)
		}else{
			this.annot_color = this.annot_color_scale;
		}

		// draw the heatmap cells
		this.fg_layer.selectAll('.heatmap_cell').data([]).exit().remove();
		this.fg_layer.selectAll('.heatmap_cell').data(this.unraveled_data).enter().append('rect')
			.attr('class','heatmap_cell')
			.attr('x',function(d){return self.cell_width*d.i + self.x_offset;})
			.attr('y',function(d){return self.cell_height*d.j + self.margin;})
			.attr('width',this.cell_width)
			.attr('height',this.cell_height)
			.attr('value',function(d){return d.value;})
			.attr('stroke','white')
			.attr('stroke-width',1)
			.attr('fill',function(d){return self.color(d.value);});

		// draw the row labels
		this.fg_layer.selectAll('.heatmap_rid').data([]).exit().remove();
		this.fg_layer.selectAll('.heatmap_rid').data(this.model.get('rid')).enter().append('text')
			.attr('class','heatmap_rid')
			.attr('x',this.x_offset)
			.attr('y',function(d,i){return self.cell_height*i + self.cell_height/2 + self.margin;})
			.attr('text-anchor','end')
			.attr('dx','-.2em')
			.text(function(d){return d;});

		// draw the column labels
		this.fg_layer.selectAll('.heatmap_cid').data([]).exit().remove();
		this.fg_layer.selectAll('.heatmap_cid').data(this.model.get('cid')).enter().append('text')
			.attr('class','heatmap_cid')
			.attr('y',this.margin)
			.attr('x',function(d,i){return self.cell_width*i + self.cell_width/2 + self.x_offset;})
			.attr('text-anchor','middle')
			.attr('dy','-.2em')
			.text(function(d){return d;});

		// draw the annotation categories if they are present
		if (this.model.get('annots') !== undefined){
			this.fg_layer.selectAll('.heatmap_annots').data([]).exit().remove();
			this.fg_layer.selectAll('.heatmap_annots').data(this.model.get('annots')).enter().append('rect')
				.attr('class','heatmap_annots')
				.attr('x',function(d,i){return self.cell_width*i + self.x_offset;})
				.attr('y',function(d){return self.cell_height*(self.model.get('data').length) + self.cell_height/4 + self.margin;})
				.attr('width',this.cell_width)
				.attr('height',this.cell_height/4)
				.attr('value',function(d){return d;})
				.attr('stroke','white')
				.attr('stroke-width',1)
				.attr('fill',function(d){return self.annot_color(d);});

			if (this.model.get('annots_label') !== undefined){
				// draw the annot label if it is there
				this.fg_layer.selectAll('.heatmap_annots_label').data([]).exit().remove();
				this.fg_layer.selectAll('.heatmap_annots_label').data([this.model.get('annots_label')]).append('text')
					.attr('class','heatmap_annots_label')
					.attr('x',this.x_offset)
					.attr('y',function(d){return self.cell_height*(self.model.get('data').length) + self.cell_height/2 + self.margin;})
					.attr('opacity',1)
					.attr('text-anchor','end')
					.attr('dx','-.2em')
					.text(function(d){return d;});
			}
		}

		// set up the y scale
		this.set_scale();

		// build Axis
		this.build_axis();

		// add an axis
		this.fg_layer.append("g")
			.attr("class", "axis y-axis")
			.attr("transform", "translate(" + (this.width - this.margin/2) + ",0)")
			.call(this.yAxis);

		// style the axis
		this.style_axes();

		// add the cells for the look up table
		this.add_lookup_table();

		// add a png export overlay
		this.fg_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.fg_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",this.x_offset)
			.attr("y",this.height - 10)
			.attr("opacity",0.25)
			.attr('text-anchor','end')
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});
	},

	/**
	 * adds a simple color lookup table based on the heatmap's color_scale
	 */
	add_lookup_table: function(){
		var self, data, scale_range, scale_domain, scale_unit, domain_unit;
		self = this;
		data = d3.range(50);
		scale_range = this.y_scale.range();
		scale_domain = this.y_scale.domain();
		scale_unit = (scale_range[1] - scale_range[0]) / data.length;
		domain_unit = (scale_domain[0] - scale_domain[1]) / data.length;

		this.fg_layer.selectAll('.lut_cell').data(data).enter().append('rect')
			.attr('class','lut_cell')
			.attr('x',self.width - self.margin/2 - 10)
			.attr('y',function(d,i){return i*scale_unit + self.margin;})
			.attr('width',10)
			.attr('height',scale_unit)
			.attr('fill',function(d,i){return self.color(scale_domain[0] - i*domain_unit);});

	},

	/**
	 * utility function used to get the y scale used in the plot
	 */
	set_scale: function(){
			var domain, range_min, range_max, range;
			// get the current data domain from this.color
			domain = this.color.domain();

			// calculate the range for the scale
			range_min = this.margin;
			range_max = this.height - this.margin;
			range = [range_min,range_max];

			// set the y_scale
			this.y_scale=d3.scale.linear().domain([domain[domain.length-1],domain[0]]).range(range);
	},

	/**
	 * utility function used to build y axis for the look up table
	 */
	build_axis: function(){
		this.yAxis = d3.svg.axis()
			.scale(this.y_scale)
			.orient("right");
	},

	/**
	 * utility function to apply custom styles to axis components
	 */
	style_axes: function(){
		this.vis.selectAll('.axis').selectAll("path")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("line")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("text")
			.style("font-family","sans-serif")
			.style("font-size","11px");
	},

	/**
	 * update the dynamic potions of the view
	 */
	render: function(){
		var self = this;
		// determine the height and width of cells in the heatmap
		if (this.height < this.width){
			this.cell_height = (this.height - this.margin*2) / this.model.get('data').length;
			this.cell_width = (this.height - this.margin*2) / this.model.get('data')[0].length;
		}else{
			this.cell_height = (this.width - this.margin*2) / this.model.get('data').length;
			this.cell_width = (this.width - this.margin*2) / this.model.get('data')[0].length;
		}

		// determine the plot offset to center the plot in its container
		this.x_center = this.width / 2;
		this.x_offset = this.x_center - (this.cell_width * this.model.get('data')[0].length / 2);

		// map the data into a flattened array of objects with array indices and value as attributes
		this.unraveled_data = this.unravel_data(this.model.get('data'));

		// set up the color scale
		if (this.color_scale === undefined){
			var values = _.pluck(this.unraveled_data,'value');
			data_min = _.min(values);
			data_max = _.max(values);
			this.color = d3.scale.linear().domain([data_min,data_max]).range([this.low_color, this.high_color]);
		}else{
			this.color = this.color_scale;
		}

		// set up the annotation color scale
		if (this.annot_color_scale === undefined){
			var values = _.uniq(this.model.get('annots'))
			this.annot_color = d3.scale.category10().domain(values)
		}else{
			this.annot_color = this.annot_color_scale;
		}

		// draw the heatmap cells
		var cell_selection = this.fg_layer.selectAll('.heatmap_cell').data(this.unraveled_data);
		cell_selection.enter().append('rect')
			.attr('class','heatmap_cell')
			.attr('x',this.x_center)
			.attr('y',(this.height - this.margin)/2)
			.attr('width',0)
			.attr('height',0)
			.attr('opacity',0)
			.attr('value',function(d){return d.value;})
			.attr('stroke','white')
			.attr('stroke-width',1)
			.attr('fill',function(d){return self.color(d.value);});

		cell_selection.transition().duration(500)
			.attr('x',function(d){return self.cell_width*d.i + self.x_offset;})
			.attr('y',function(d){return self.cell_height*d.j + self.margin;})
			.attr('width',this.cell_width)
			.attr('height',this.cell_height)
			.attr('opacity',1)
			.attr('fill',function(d){return self.color(d.value);});

		cell_selection.exit().remove();

		// draw the row labels
		rid_selection = this.fg_layer.selectAll('.heatmap_rid').data(this.model.get('rid'));
		rid_selection.enter().append('text')
			.attr('class','heatmap_rid')
			.attr('x',this.x_offset)
			.attr('y',(this.height - this.margin)/2)
			.attr('opacity',0)
			.attr('text-anchor','end')
			.attr('dx','-.2em')
			.text(function(d){return d;});

		rid_selection.transition().duration(500)
			.attr('opacity',1)
			.attr('y',function(d,i){return self.cell_height*i + self.cell_height/2 + self.margin;})
			.text(function(d){return d;});

		rid_selection.exit().remove();

		// draw the column labels
		cid_selection = this.fg_layer.selectAll('.heatmap_cid').data(this.model.get('cid'));
		cid_selection.enter().append('text')
			.attr('class','heatmap_cid')
			.attr('y',this.margin)
			.attr('x',this.x_center)
			.attr('opacity',0)
			.attr('text-anchor','middle')
			.attr('dy','-.2em')
			.text(function(d){return d;});

		cid_selection.transition().duration(500)
			.attr('opacity',1)
			.attr('x',function(d,i){return self.cell_width*i + self.cell_width/2 + self.x_offset;})
			.text(function(d){return d;});

		cid_selection.exit().remove();

		// draw the annotation categories if they are present
		if (this.model.get('annots') !== undefined){
			var label_selection = this.fg_layer.selectAll('.heatmap_annots').data(this.model.get('annots'));
			label_selection.enter().append('rect')
				.attr('class','heatmap_annots')
				.attr('x',this.x_center)
				.attr('y',(this.height - this.margin)/2)
				.attr('width',0)
				.attr('height',0)
				.attr('opacity',0)
				.attr('value',function(d){return d;})
				.attr('stroke','white')
				.attr('stroke-width',1)
				.attr('fill',function(d){return self.annot_color(d);});

			label_selection.transition().duration(500)
				.attr('x',function(d,i){return self.cell_width*i + self.x_offset;})
				.attr('y',function(d){return self.cell_height*(self.model.get('data').length) + self.cell_height/4 + self.margin;})
				.attr('width',this.cell_width)
				.attr('height',this.cell_height/4)
				.attr('opacity',1)
				.attr('fill',function(d){return self.annot_color(d);});

			label_selection.exit().remove();

			if (this.model.get('annots_label') !== undefined){
				// draw the annot label if it is there
				label_text_selection = this.fg_layer.selectAll('.heatmap_annots_label').data([this.model.get('annots_label')]);
				label_text_selection.enter().append('text')
					.attr('class','heatmap_annots_label')
					.attr('x',this.x_offset)
					.attr('y',(this.height - this.margin)/2)
					.attr('opacity',0)
					.attr('text-anchor','end')
					.attr('dx','-.2em')
					.text(function(d){return d;});

				label_text_selection.transition().duration(500)
					.attr('opacity',1)
					.attr('y',function(d){return self.cell_height*(self.model.get('data').length) + self.cell_height/2 + self.margin;})
					.text(function(d){return d;});

				label_text_selection.exit().remove();
			}
		}
	},

	/**
	 * internal utility function to express 2D array data as a flat data array of objects with array
	 * coordinates and data value as attributes
	 * @param {array} data  2D array of data
	 */
	unravel_data: function(data){
		unraveled_data = [];
		data.forEach(function(i_e,i){
			i_e.forEach(function(j_e,j){
				unraveled_data.push({i:j, j:i, value:j_e});
			});
		});
		return unraveled_data;
	},

	/**
	 * save the current state of the view into a png image
	 */
	save_png: function(){
		// build a canvas element to store the image temporarily while we save it
		var width = this.width;
		var height = this.height;
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.vis.selectAll(".no_png_export");
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.vis.node().parentNode.innerHTML;
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = "cmapHeatmapView" + new Date().getTime() + ".png";
		if (canvas.toBlob){canvas.toBlob(function(blob){saveAs(blob,filename);});}
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);
	}
});
/**
 * A Backbone.View that displays a simple LDMap
 * The view is normally paired with a HeatMapModel, but works with any model that provides *data*,*cid*,
 * and title attributes
 * example usage:
 * LDMap_view = new LDMapView({el: $("target_selector"),
												model: new HeatmapModel(),
												template: BaristaTemplates.d3_target,
												bg_color: "#ffffff",
												low_color: "#0000ff",
												high_color: "#ff0000",
												color_scale: undefined,
												plot_height: 300,
												span_class: "span12"
												});
 *
 * optional arguments:
 * @param {string}   tenplate     The handlebars template to use. Defaults to BaristaTemplates.d3_target
 * @param {string}   bg_color     the hex color code to use as the backgound of the view, defaults to
 *                                #ffffff
 * @param {string}   low_color    the hex color code to use as lowest value color in the LDMap, defaults to
 *                                #0000ff
 * @param {string}   high_color   the hex color code to use as highest value color in the LDMap, defaults
 *                                to #ff0000
 * @param {d3.scale} color_scale  custom color scale to use in the LDMap.  If supplied, low_color and
 *                                high_color are ignored, defaults to undefined
 * @param {number}   plot_height  the height of the LDMap to generate in pixels, defaults to 300
 * @param {string}   span_class   a bootstrap span class to size the width of the view, defaults to
 *                                "span12"
 */

Barista.Views.LDMapView = Backbone.View.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "LDMapView",

	/**
	 * set up the view's default model
	 * @type {Barista}
	 */
	model: new Barista.Models.HeatmapModel(),

	/**
	 * overide the defualt Backbone.View initialize method to bind the view to model changes, bind window
	 * resize events to view re-draws, compile the template, and render the view
	 */
	initialize: function(){
		// set up color options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : "#ffffff";
		this.low_color = (this.options.low_color !== undefined) ? this.options.low_color : "#0000ff";
		this.high_color = (this.options.high_color !== undefined) ? this.options.high_color : "#ff0000";
		this.color_scale = (this.options.color_scale !== undefined) ? this.options.color_scale : undefined;

		// set up the defualt plot height
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 300;
		// set up the default template
		this.template = (this.options.template !== undefined) ? this.options.template : BaristaTemplates.d3_target;

		// set up the default span class
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "#span12";

		// bind render to model changes
		this.listenTo(this.model,'change', this.render);

		// compile the default template for the view and draw it for the first time
		this.compile_template();

		// define the location where d3 will build its plot
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		// render the view for the first time
		this.redraw();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.redraw();} );
	},

	/**
	 * use Handlebars to compile the template for the view
	 */
	compile_template: function(){
		var self = this;
		this.div_string = 'd3_target' + new Date().getTime();;
		this.$el.append(this.template({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	/**
	 * completely redraw the view. Updates both static and dynamic content in the view
	 */
	redraw: function(){
		this.init_panel();
		this.render();
	},

	/**
	 * initialize the static parts of the view's panel
	 */
	init_panel: function(){
		// stuff this into a variable for later use
		var self = this;

		// check to see if the container is visible, if not, make it visible, but transparent so we draw it with
		// the proper dimensions
		if (this.$el.is(":hidden")){
			this.$el.animate({opacity:0},1);
			this.$el.show();
		}

		// set up the margin
		this.margin = 50;

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.ld_cell_layer').data([]).exit().remove();
		this.ld_cell_layer = this.vis.append("g").attr("class", "ld_cell_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		// set up the panel's width and height
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();

		// rescale the width of the vis
		this.vis.transition().attr("width",this.width);
		this.vis.transition().attr("height",this.height);

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// determine the height and width of cells in the heatmap
		if (this.height < this.width){
			this.cell_height = (this.height - this.margin) / this.model.get('data').length;
			this.cell_width = (this.height - this.margin) / this.model.get('data')[0].length;
		}else{
			this.cell_height = (this.width - this.margin) / this.model.get('data').length;
			this.cell_width = (this.width - this.margin) / this.model.get('data')[0].length;
		}

		// determine the plot offset to center the plot in its container
		this.x_center = this.width / 2;
		this.x_offset = this.x_center - (this.cell_width * this.model.get('data')[0].length / 2);

		// map the data into a flattened array of objects with array indices and value as attributes
		this.unraveled_data = this.unravel_data(this.model.get('data'));

		// set up the color scale
		if (this.color_scale === undefined){
			var values = _.pluck(this.unraveled_data,'value');
			data_min = _.min(values);
			data_max = _.max(values);
			this.color = d3.scale.linear().domain([data_min,data_max]).range([this.low_color, this.high_color]);
		}else{
			this.color = this.color_scale;
		}

		// draw the LDMap cells
		this.ld_cell_layer.selectAll('.heatmap_cell').data([]).exit().remove();
		this.ld_cell_layer.selectAll('.heatmap_cell').data(this.unraveled_data).enter().append('rect')
			.attr('class','heatmap_cell')
			.attr('x',function(d){return self.cell_width*d.i + self.x_offset;})
			.attr('y',function(d){return self.cell_height*d.j + self.margin;})
			.attr('transform',function(d){
				var x = self.cell_width + self.x_offset;
				var y = self.cell_height + self.margin;
				return 'rotate(45,' + x + ',' + y + ')';
			})
			.attr('width',this.cell_width)
			.attr('height',this.cell_height)
			.attr('value',function(d){return d.value;})
			.attr('stroke','white')
			.attr('stroke-width',1)
			.attr('fill',function(d){return self.color(d.value);});

		// draw the row labels
		this.fg_layer.selectAll('.heatmap_rid').data([]).exit().remove();
		this.fg_layer.selectAll('.heatmap_rid').data(this.model.get('rid')).enter().append('text')
			.attr('class','heatmap_rid')
			.attr('x',this.x_offset)
			.attr('y',function(d,i){return self.diamond_height*i + self.diamond_height/2 + self.margin;})
			.attr('text-anchor','end')
			.attr('dx','-.2em')
			.text(function(d){return d;});

		// add a png export overlay
		this.fg_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.fg_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",this.x_offset)
			.attr("y",this.height - 10)
			.attr("opacity",0.25)
			.attr('text-anchor','end')
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});
	},

	/**
	 * update the dynamic potions of the view
	 */
	render: function(){
		var self = this;
		// determine the height and width of cells in the heatmap
		var usable_height = this.height - this.margin;
		this.diamond_height = usable_height / this.model.get('data').length;
		this.cell_height = this.cell_width = Math.sqrt(Math.pow(this.diamond_height,2) / 2);

		// determine the plot offset to center the plot in its container
		this.x_center = this.width / 2;
		this.x_offset = this.x_center - (this.cell_width * this.model.get('data')[0].length / 2);

		// map the data into a flattened array of objects with array indices and value as attributes
		this.unraveled_data = this.unravel_data(this.model.get('data'));

		// set up the color scale
		if (this.color_scale === undefined){
			var values = _.pluck(this.unraveled_data,'value');
			data_min = _.min(values);
			data_max = _.max(values);
			this.color = d3.scale.linear().domain([data_min,data_max]).range([this.low_color, this.high_color]);
		}else{
			this.color = this.color_scale;
		}

		// draw the heatmap cells
		var cell_selection = this.ld_cell_layer.selectAll('.heatmap_cell').data(this.unraveled_data);
		cell_selection.enter().append('rect')
			.attr('class','heatmap_cell')
			.attr('x',this.x_center)
			.attr('y',(this.height - this.margin)/2)
			.attr('width',0)
			.attr('height',0)
			.attr('opacity',0)
			.attr('value',function(d){return d.value;})
			.attr('stroke','white')
			.attr('stroke-width',1)
			.attr('fill',function(d){return self.color(d.value);});

		cell_selection.transition().duration(500)
			.attr('x',function(d){return self.cell_width*d.i + self.x_offset;})
			.attr('y',function(d){return self.cell_height*d.j + self.margin;})
			.attr('transform',function(d){
				var x = self.cell_width + self.x_offset;
				var y = self.cell_height + self.margin;
				return 'rotate(45,' + x + ',' + y + ')';
			})
			.attr('width',this.cell_width)
			.attr('height',this.cell_height)
			.attr('opacity',1)
			.attr('fill',function(d){return self.color(d.value);});

		cell_selection.exit().remove();

		// draw the row labels
		rid_selection = this.fg_layer.selectAll('.heatmap_rid').data(this.model.get('rid'));
		rid_selection.enter().append('text')
			.attr('class','heatmap_rid')
			.attr('x',this.x_offset)
			.attr('y',(this.height - this.margin)/2)
			.attr('opacity',0)
			.attr('text-anchor','end')
			.attr('dy','-.5em')
			.text(function(d){return d;});

		rid_selection.transition().duration(500)
			.attr('opacity',1)
			.attr('x',this.cell_width + this.x_offset)
			.attr('y',function(d,i){return self.diamond_height*i + self.diamond_height/2 + self.margin;})
			.text(function(d){return d;});

		rid_selection.exit().remove();
	},

	/**
	 * internal utility function to express 2D array data as a flat data array of objects with array
	 * coordinates and data value as attributes
	 * @param {array} data  2D array of data
	 */
	unravel_data: function(data){
		unraveled_data = [];
		data.forEach(function(i_e,i){
			i_e.forEach(function(j_e,j){
				if (i < j){
					unraveled_data.push({i:j, j:i, value:j_e});
				}
			});
		});
		return unraveled_data;
	},

	/**
	 * save the current state of the view into a png image
	 */
	save_png: function(){
		// build a canvas element to store the image temporarily while we save it
		var width = this.width;
		var height = this.height;
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.vis.selectAll(".no_png_export");
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.vis.node().parentNode.innerHTML;
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = "cmapHeatmapView" + new Date().getTime() + ".png";
		if (canvas.toBlob){canvas.toBlob(function(blob){saveAs(blob,filename);});}
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);
	}
});
/**
 * count_view = new PertCountView({bg_color:"#ffffff",
									well_color: "#bdbdbd",
									fg_color: "#1b9e77",
									span_class: "span4",
									static_text: "Reagents",
									categories: []});
 *
 * A Backbone.View that shows that number of perturbagens matching a given query
 * Optionally, sub-category counts are give for the type of perturbagen queried for
 * This view is frequently paired with a PertCountModel or CellCountModel
 * basic use:
 * count_view = new PertCountView();
 * optional arguments:
 * @param {string} bg_color     the hex color code to use as the backgound of the view, defaults to
 *                              #ffffff
 * @param {string} well_color   the hex color code to use as the backgound of the wells, defaults to
 *                              #bdbdbd
 * @param {string} fg_color     the hex color code to use as the foreground color of the view, defaults
 *                              to #1b9e77
 * @param {string} span_class   a bootstrap span class to size the width of the view, defaults to
 *                              "col-lg-4"
 * @param {string} static_text  the static text header to use in the view, defaults to "Reagents"
 * @param {array}  categories   an array of objects to use as categories to display, defaults to []
 */

Barista.Views.PertCountView = Backbone.View.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "PertCountView",

	/**
	 * set up the view's default model
	 * @type {Barista}
	 */
	model: new Barista.Models.PertCountModel(),

	/**
	 * overide the default Backbone.View initialize method to handle optional arguments, compile the view
	 * template, bind model changes to view updates, and render the view
	 */
	initialize: function(){
		// set up color options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : "#ffffff";
		this.well_color = (this.options.well_color !== undefined) ? this.options.well_color : "#bdbdbd";
		this.fg_color = (this.options.fg_color !== undefined) ? this.options.fg_color : "#1b9e77";

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "col-lg-4";

		// set up static text, default if not specified
		this.static_text = (this.options.static_text !== undefined) ? this.options.static_text : "Reagents";

		// set up the default plot height
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 120;

		// allow for construction inside of a shadow DOM
		this.shadow_el = (this.options.shadow_el !== undefined) ? this.options.shadow_el : null;
		this.shadow_root = (this.options.shadow_root !== undefined) ? this.options.shadow_root : null;

		// set up default categories to display
		this.categories = (this.options.categories !== undefined) ? this.options.categories : [];
		this.category_ids = _.pluck(this.categories,'_id');

		// get categories from model and determine the maximum category count
		// this.categories = this.model.get('pert_types');
		this.max_category_count = _.max(_.pluck(this.categories,'count'));

		// bind render to model changes
		this.listenTo(this.model,'change', this.render);

		// compile the default template for the view
		this.compile_template();

		// set up a $div selector that can find the target div even if it is in a
		// shadow DOM
		if (this.shadow_el && this.shadow_root){
			this.$div = $(this.shadow_root).children(this.shadow_el).children("#" + this.div_string);
		}else{
			this.$div = $("#" + this.div_string);
		}

		// define the location where d3 will build its plot
		this.width = this.$div.width();
		this.height = this.$div.outerHeight();
		this.vis = d3.select(this.$div[0]).append("svg")
						.attr("width",this.width)
						.attr("height",this.height)

		// render the vis
		this.redraw();

		// bind window resize events to redraw.
		var self = this;
		$(window).resize(function() {self.redraw();} );
	},

	/**
	 * use Handlebars to compile the template for the view
	 */
	compile_template: function(){
		this.div_string = 'd3_target' + new Date().getTime();
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	/**
	 * completely redraw the view
	 */
	redraw: function(){
		this.init_panel();
		this.render();
	},

	/**
	 * initialize the static parts of the view's panel
	 */
	init_panel: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the panel's width and height
		this.width = this.$div.width();
		this.height = this.$div.outerHeight();

		// rescale the width of the vis
		this.vis.transition().duration(1).attr("width",this.width);

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		this.vis.selectAll('.controls_layer').data([]).exit().remove();
		this.controls_layer = this.vis.append("g").attr("class", "controls_layer");

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// draw the static Text
		this.fg_layer.selectAll('.static_text').data([]).exit().remove();
		this.fg_layer.selectAll('.static_text').data([1])
							.enter().append("text")
							.attr("class","static_text")
							.attr("x",10)
							.attr("y",14)
							.attr("font-family","'Helvetica Neue',Helvetica,Arial,sans-serif")
							.attr("font-weight","bold")
							.attr("font-size","13pt")
							.attr("fill",this.fg_color)
							.text(this.static_text.toUpperCase());
		// draw the pert count info
		var count = this.model.get('count');
		if (typeof(count) !== 'number'){
			count = 0;
		}
		var count_text = this.fg_layer.selectAll('.count').data([]).exit().remove();
		count_text = this.fg_layer.selectAll('.count').data([1])
							.enter().append("text")
							.attr("class","count")
							.attr("x",10)
							.attr("y",55)
							.attr("font-family","'Helvetica Neue',Helvetica,Arial,sans-serif")
							.attr("font-weight","bold")
							.attr("font-size","36pt")
							.text(count);

		// for each sub-category, draw a bar graph well
		this.category_rect_selection = this.fg_layer.selectAll('.category_rect_well');
		this.category_rect_selection.data([]).exit().remove();
		this.category_rect_selection.data(this.categories).enter().append('rect')
			.attr("class","category_rect_well")
			.attr("x",10)
			.attr("y",function(d,i){return i*35 + 80;})
			.attr("height",10)
			.attr("width",function(d){return (self.width - 20);})
			.attr("fill",this.well_color);

		// for each sub-category, draw a bar graph
		this.category_rect_selection = this.fg_layer.selectAll('.category_rect');
		this.category_rect_selection.data([]).exit().remove();
		this.category_rect_selection.data(this.categories).enter().append('rect')
			.attr("class","category_rect")
			.attr("x",10)
			.attr("y",function(d,i){return i*35 + 80;})
			.attr("height",10)
			.attr("width",function(d){return (self.width - 20) * (d.count / self.max_category_count);})
			.attr("fill",this.fg_color);

		// for each sub-category, add a name
		this.fg_layer.selectAll('.category_name').data([]).exit().remove();
		this.fg_layer.selectAll('.category_name').data(this.categories).enter().append("text")
			.attr("class","category_name")
			.attr("x",10)
			.attr("y",function(d,i){return i*35 + 105;})
			.attr("font-family","'Helvetica Neue',Helvetica,Arial,sans-serif")
			.attr("font-weight","normal")
			.attr("font-size","12pt")
			.text(function(d){return Barista.CMapPertTypeAlias(d._id).name;});

		// for each sub-category, add a value
		this.fg_layer.selectAll('.category_value').data([]).exit().remove();
		this.fg_layer.selectAll('.category_value').data(this.categories).enter().append("text")
			.attr("class","category_value")
			.attr("x",this.width - 10)
			.attr("y",function(d,i){return i*35 + 105;})
			.attr("font-family","'Helvetica Neue',Helvetica,Arial,sans-serif")
			.attr("font-weight","normal")
			.attr("font-size","12pt")
			.attr("text-anchor","end")
			.text("xhtml:div")
			.text(function(d){return d.count.toFixed(0);});

		// add a png export overlay
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",10)
			.attr("y",this.height - 10)
			.attr("opacity",0.25)
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});
	},
	/**
	 * update the dynamic potions of the view
	 */
	render: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the panel's width and height
		this.width = this.$div.width();
		this.height = this.$div.outerHeight();

		// draw the pert count info
		var count = this.model.get('count');
		if (typeof(count) !== 'number'){
			count = 0;
		}
		this.vis.selectAll('.count').data([1])
			.transition().duration(500)
			.tween("text", function() {
			    var i = d3.interpolate(this.textContent.replace(",",""), count);
			    return function(t) {
			      this.textContent = Barista.numberWithCommas(Math.round(i(t)))	;
			    };
			});

		// transition the updated bars
		count = this.model.get('count');
		this.pert_types = this.model.get("pert_types");
		this.pert_types = _.filter(this.pert_types,function(o){return self.category_ids.indexOf(o._id) != -1;});
		var category_counts = _.pluck(this.pert_types,'count');
		var category_sum = _.reduce(category_counts, function(memo, num){ return memo + num; }, 0);
		this.pert_types.push({_id:'other', count:count - category_sum});
		this.categories.forEach(function(e,i,l){
			var ids = _.pluck(self.pert_types,'_id');
			var index = ids.indexOf(e._id);
			if (index != -1){
				self.categories[i].count = self.pert_types[index].count;
			}else{
				self.categories[i].count = 0.00001;
			}
		});
		this.max_category_count = _.max(_.pluck(this.categories,'count'));
		this.max_category_count = (this.max_category_count < 1) ? 1 : this.max_category_count;
		var category_update_selection = this.fg_layer.selectAll('.category_rect').data(this.categories);
		category_update_selection.transition().duration(500)
			.attr("width",function(d){return (self.width - 20) * (d.count / self.max_category_count);});

		// transition the updated category labels
		this.fg_layer.selectAll('.category_value').data(this.categories)
			.transition().duration(500)
			.tween("text", function(d,i) {
				var count = d.count.toFixed(0);
			    var i = d3.interpolate(this.textContent.replace(",",""), count);
			    return function(t) {
			      this.textContent = Barista.numberWithCommas(Math.round(i(t)));
			    };
			});
	},

	/**
	 * save the current state of the view into a png image
	 */
	save_png: function(){
		//set the animate the div containing the view by applying and then removing
		// css classes that defined the transitions we want
		var $div = this.$div;
		$div.addClass("barista-base-view");
		$div.toggleClass("exporting");
		setTimeout(function(){$div.toggleClass("exporting");},500);

		// build a canvas element to store the image temporarily while we save it
		var width = this.width;
		var height = this.height;
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.vis.selectAll(".no_png_export");
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.vis.node().parentNode.innerHTML;
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = "BaristaPertCountView" + new Date().getTime() + ".png";
		if (canvas.toBlob){
			canvas.toBlob(function(blob){
				saveAs(blob,filename);
				});
		}
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);
	}
});

/**
 * pert_detail_view = new PertDetailView({el: $("target_selector"),
 												model: PertDetailModel,
 												bg_color: "#ffffff",
 												span_class: "col-lg-12"});
 *
 * A Backbone.View that shows information about a small molecule compound or gene
 * This view is frequently paired with a PertDetailModel
 * pert_detail_view = new PertDetailView({el: $("target_selector")});
 * optional arguments:
 * @param {string} bg_color    the hex color code to use as the backgound of the view, defaults to
 *                             #ffffff
 * @param {string} span_class  a bootstrap span class to size the width of the view, defaults to
 *                             "col-lg-12"                            
 */
Barista.Views.PertDetailView = Barista.Views.BaristaBaseView.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "PertDetailView",

	/**
	 * set up the view's default model
	 * @type {Barista}
	 */
	model: new Barista.Models.PertDetailModel(),

	/**
	 * overide the defualt Backbone.View initialize method to bind the view to model changes, bind window
	 * resize events to view re-draws, compile the template, and render the view
	 */
	initialize: function(){
		var self = this;
		// set up the plot height
		this.options.plot_height = 260;

		// set up the open and closed state heights
		this.open_height = this.options.plot_height;
		this.closed_height = this.options.plot_height;
		this.panel_open = false;

		//populate the model with an initial compound and then render the view
		this.model.fetch("war","compound").then(function(){
			console.log(self.model.attibutes);
			self.base_initialize();
		});

	},

	/**
	 * completely render the view
	 * Updates both static and dynamic content in the view
	 */
	render: function(){
		// keep track of our scope at this level
		var self = this;

		// render the base view components
		this.base_render();

		// (re)draw the pert_iname text
		this.fg_layer.selectAll('.pert_iname_text').data([]).exit().remove();
		this.fg_layer.selectAll('.pert_iname_text').data([1])
							.enter().append("text")
							.attr("class","pert_iname_text")
							.attr("x",10)
							.attr("y",75)
							.attr("font-family","Helvetica Neue")
							.attr("font-weight","bold")
							.attr("font-size","36pt")
							.text(this.model.get('pert_iname'));

		// (re)draw the pert_summary or clear it if there pert_summary is null
		if (this.model.get('pert_summary')){
			this.render_summary({summary_string: this.model.get('pert_summary'),
								top: 45,
								bottom: 100,
								left: this.fg_layer.selectAll('.pert_iname_text').node().getComputedTextLength() + 30});
		}else{
			this.clear_summary();
		}

		// add a png export overlay
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",10)
			.attr("y",this.height - 20)
			.attr("opacity",0.25)
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});

		// render an image that will to indicate that the user can click the content to unfold the panel
		this.cevron_image_link = (this.panel_open) ? '//coreyflynn.github.io/Bellhop/img/up_arrow_select.png' : '//coreyflynn.github.io/Bellhop/img/down_arrow_select.png';

		this.controls_layer.selectAll('.cevron_icon').data([]).exit().remove();
		this.controls_layer.selectAll('.cevron_icon').data([1])
			.enter().append("svg:image")
			.attr("class","cevron_icon")
			.attr("xlink:href", this.cevron_image_link)
			.attr("x",this.width/2 - 9)
			.attr("y",function(){
				if (self.panel_open){
					return self.height - 15;
				}else{
					return self.height - 20;
				}
			})
			.attr("height",20)
			.attr("width", 18)
			.attr("transform", "rotate(0)")
			.style("cursor","pointer")
			.on("click", function(){self.toggle_panel_state()});

		// render a button to allow the user to expand the view to show its full content
		this.controls_layer.selectAll("." + this.div_string + "more_button").data([]).exit().remove();
		this.controls_layer.selectAll("." + this.div_string + "more_button").data([1]).enter()
			.append("rect")
			.attr("x",0)
			.attr("y",this.height - 15)
			.attr("class",this.div_string + "more_button")
			.attr("height",15)
			.attr("width",this.width)
			.attr("opacity",0)
			.style("cursor","pointer")
			.attr("fill","#BDBDBD")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",0.25);})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0);})
			.on("click", function(){self.toggle_panel_state()})

		// render the compound or gene specfic portion of the view
		switch (this.model.get("pert_type")){
		case "trt_cp":
			this.render_compound();
			break;
		case "gene":
			this.render_gene();
			break;
		};

		return this;
	},

	/**
	 * utility to render the compound specific parts of the view
	 */
	render_compound: function(){
		this.clear_label_and_text();
		var self = this;
		// (re)draw the pert_id text
		this.fg_layer.selectAll('.pert_id_text').data([]).exit().remove();
		this.fg_layer.selectAll('.pert_id_text').data([1])
							.enter()
							.append("text")
							.attr("class","pert_id_text")
							.attr("x",10)
							.attr("y",100)
							.attr("font-family","Helvetica Neue")
							.attr("font-size","14pt")
							.text(this.model.get('pert_id'));

		// draw compound structure if there is one
		if (this.model.get("structure_url")){
			this.fg_layer.selectAll('.index_text_icon').data([]).exit().remove();
			this.fg_layer.selectAll('.index_text_icon').data([1])
								.enter().append("svg:image")
								.attr("class","index_text_icon")
								.attr("xlink:href", this.model.get("structure_url"))
								.attr("x",10)
								.attr("y",100)
								.attr("height",150)
								.attr("width",300)
								.style("cursor","pointer")
								.on("click", function(){window.location = self.model.get('structure_url')});
		}

		// draw the static index reagent text
		this.fg_layer.selectAll('.index_text').data([]).exit().remove();
		this.fg_layer.selectAll('.index_text').data([1])
							.enter().append("text")
							.attr("class","index_text")
							.attr("x",10)
							.attr("y",30)
							.attr("fill","#E69F00")
							.attr("font-family","Helvetica Neue")
							.attr("font-size","20pt")
							.text('Small Molecule Compound');

		// render additional labels
		this.label_y_position = 100;

		// (re)draw the in_summly annotation
		this.render_label_and_value('collection', 'Collection', 'pert_icollection', false, 320);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('num_sig', 'Signatures', 'num_sig', false, 320);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('gold_sig', 'Gold Signatures', 'num_gold', false, 320);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('num_inst', 'Experiments', 'num_inst', false, 320);

		// (re)draw the in_summly annotation
		this.render_label_and_value('summly', 'In Summly', 'in_summly', false, 320);


		// set the y position to be below the fold
		this.label_y_position = 260;

		// (re)draw the weight label and weight
		this.render_label_and_value('weight', 'Weight', 'molecular_wt');

		// (re)draw the formula and label
		this.render_label_and_value('formula', 'Formula', Barista.NumbersToSubscript(this.model.get('molecular_formula')),true);

		// (re)draw the logp and label
		this.render_label_and_value('logp', 'LogP', 'logp');

		// (re)draw the formula and label
		this.render_label_and_value('vendor', 'Vendor', 'pert_vendor');

		// (re)draw the pubchem_cid and label
		this.render_label_and_value('pubchem_cid', 'PubChem CID', 'pubchem_cid', false, 10, "//pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?cid=" + self.model.get('pubchem_cid'));

		// (re)draw the InChIKey label and InChIKey
		if(this.model.get("inchi_key")){
			this.render_label_and_value('inchi_key', 'InChIKey', this.model.get("inchi_key").split("InChIKey=")[1], true);
		}

		// (re)draw the InChI string
		// this.render_label_and_value('inchi_string', 'InChI String', this.model.get("inchi_string").split("InChI=")[1], true);

		// (re)draw the SMILES
		this.render_label_and_value('smiles', 'SMILES', 'canonical_smiles');

		// draw alternate names
		this.label_y_position += 20;
		if (this.model.get('alt_name')){
			this.render_label_and_value('alt_name_label', 'Alternate Names', '', true);
			this.label_y_position += 5;
			this.draw_tags('alt_name', 'Alternate Names', this.model.get('alt_name'), 'white', '#BDBDBD');
		}

		// draw the cell lines that the compound has been profiled in
		if (this.model.get('cell_id')){
			this.render_label_and_value('cell_id_label', 'Cell Lines', '', true);
			this.label_y_position += 5;
			this.draw_tags('cell_id', 'Cell Lines', this.model.get('cell_id'), 'white', '#CC79A7');
		}

		// draw the signatures for the compound
		if (this.model.get('sig_id')){
			this.render_label_and_value('sig_id_label', 'Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('sig_id', 'Signature IDs', this.model.get('sig_id'), 'white', '#BDBDBD');
		}

		// draw the gold signatures for the compound
		if (this.model.get('sig_id_gold')){
			this.render_label_and_value('gold_sig_id_label', 'Gold Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('gold_sig_id', 'Gold Signature IDs', this.model.get('sig_id_gold'), 'white', '#BDBDBD');
		}

		// check to see if there is a pubchem id and draw a link for it if there
		// is one
		this.controls_layer.selectAll("." + this.div_string + "pubchem_link").data([]).exit().remove();
		if (this.model.get('pubchem_cid')){
			this.controls_layer.selectAll("." + this.div_string + "pubchem_link").data([1]).enter().append("text")
				.attr("class", this.div_string + "pubchem_link no_png_export")
				.attr("x",this.width - 10)
				.attr("y",this.height - 20)
				.attr("opacity",0.25)
				.attr("text-anchor","end")
				.style("cursor","pointer")
				.text("PubChem")
				.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
				.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
				.on("click", function(){window.location = "//pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?cid=" + self.model.get('pubchem_cid')});
		}

		// check to see if there is a wikipedia url and draw a link for it if there
		// is one
		this.controls_layer.selectAll("." + this.div_string + "wiki_link").data([]).exit().remove();
		if (this.model.get('wiki_url')){
			this.controls_layer.selectAll("." + this.div_string + "wiki_link").data([1]).enter().append("text")
				.attr("class", this.div_string + "wiki_link no_png_export")
				.attr("x",this.width - 80)
				.attr("y",this.height - 20)
				.attr("opacity",0.25)
				.attr("text-anchor","end")
				.style("cursor","pointer")
				.text("Wiki")
				.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
				.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
				.on("click", function(){window.location = self.model.get('wiki_url')});
		}
	},

	/**
	 * utility to render the gene specific parts of the view
	 */
	render_gene: function(){
		this.clear_label_and_text();
		var self = this;
		// draw the static index reagent text
		this.fg_layer.selectAll('.index_text').data([]).exit().remove();
		this.fg_layer.selectAll('.index_text').data([1])
							.enter().append("text")
							.attr("class","index_text")
							.attr("x",10)
							.attr("y",30)
							.attr("fill","#0072B2")
							.attr("font-family","Helvetica Neue")
							.attr("font-size","20pt")
							.text('Gene');

		// (re)draw the static knockdown text
		this.fg_layer.selectAll('.pert_id_text').data([]).exit().remove();
		var static_text_enter = this.fg_layer.selectAll('.pert_id_text').data([1]).enter();
		if (this.model.get("has_kd")){
			this.fg_layer.selectAll('.kd_pert_id_text').data([]).exit().remove();
			this.fg_layer.selectAll('.kd_pert_id_text').data([1])
								.enter()
								.append("text")
								.attr("class","kd_pert_id_text pert_id_text")
								.attr("x",10)
								.attr("y",100)
								.attr("fill","#56B4E8")
								.attr("font-family","Helvetica Neue")
								.attr("font-size","14pt")
								.text("Knockdown");
		}

		// (re)draw the static overexpression text
		if (this.model.get("has_oe")){
			this.fg_layer.selectAll('.oe_pert_id_text').data([]).exit().remove();
			this.fg_layer.selectAll('.oe_pert_id_text').data([1])
								.enter()
								.append("text")
								.attr("class","oe_pert_id_text pert_id_text")
								.attr("x",350)
								.attr("y",100)
								.attr("fill","#D55E00")
								.attr("font-family","Helvetica Neue")
								.attr("font-size","14pt")
								.text("Over Expression");
		}

		// render additional labels
		this.label_y_position = 100;

		// (re)draw the pert_id annotation
		this.render_label_and_value('trt_sh_pert_id', 'ID', 'trt_sh_pert_id');
		this.render_label_and_value('trt_oe_pert_id', 'ID', 'trt_oe_pert_id', false, 350, null,false);

		// (re)draw the signatures annotation
		this.render_label_and_value('trt_sh_num_sig', 'Signatures', 'trt_sh_num_sig');
		this.render_label_and_value('trt_oe_num_sig', 'Signatures', 'trt_oe_num_sig', false, 350, null,false);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('trt_sh_num_gold', 'Gold Signatures', 'trt_sh_num_gold');
		this.render_label_and_value('trt_oe_num_gold', 'Gold Signatures', 'trt_oe_num_gold', false, 350, null,false);

		// (re)draw the experiments annotation
		this.render_label_and_value('trt_sh_num_inst', 'Experiments', 'trt_sh_num_inst');
		this.render_label_and_value('trt_oe_num_inst', 'Experiments', 'trt_oe_num_inst', false, 350, null,false);


		// set the y position to be below the fold
		this.label_y_position = 260;

		// (re)draw the vector_id annotation
		this.render_label_and_value('trt_sh_vector_id', 'Knockdown Vector', 'trt_sh_vector_id');

		// (re)draw the target region annotation
		this.render_label_and_value('trt_sh_target_region', 'Knockdown Target Region', 'trt_sh_target_region');

		// (re)draw the 6 base seed annotation
		this.render_label_and_value('trt_sh_seed_seq6', 'Knockdown 6 Base Seed Sequence', 'trt_sh_seed_seq6');

		// (re)draw the 7 base seed annotation
		this.render_label_and_value('trt_sh_seed_seq7', 'Knockdown 7 Base Seed Sequence', 'trt_sh_seed_seq7');

		// (re)draw the target sequence annotation
		this.render_label_and_value('trt_sh_target_seq', 'Knockdown Target Sequence', 'trt_sh_target_seq');

		// (re)draw the oligo sequence annotation
		this.render_label_and_value('trt_sh_oligo_seq', 'Knockdown Oligo Sequence', 'trt_sh_oligo_seq');

		// draw the cell lines that the knockdown has been profiled in
		this.label_y_position += 20;
		if (this.model.get('trt_sh_cell_id')){
			this.render_label_and_value('trt_sh_cell_id_label', 'Knockdown Cell Lines', '', true);
			this.label_y_position += 5;
			this.draw_tags('trt_sh_cell_id', 'Cell Lines', this.model.get('trt_sh_cell_id'), 'white', '#CC79A7');
		}

		// draw the signatures for the knockknockdown
		if (this.model.get('trt_sh_sig_id')){
			this.render_label_and_value('trt_sh_sig_id_label', 'Knockdown Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('trt_sh_sig_id', 'Signature IDs', this.model.get('trt_sh_sig_id'), 'white', '#BDBDBD');
		}

		// draw the gold signatures for the knockdown
		if (this.model.get('trt_sh_sig_id_gold')){
			this.render_label_and_value('trt_sh_sig_id_gold_label', 'Gold Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('trt_sh_sig_id_gold', 'Knockdown Gold Signature IDs', this.model.get('trt_sh_sig_id_gold'), 'white', '#BDBDBD');
		}

		// draw the cell lines that the over expression has been profiled in
		this.label_y_position += 20;
		if (this.model.get('trt_oe_cell_id')){
			this.render_label_and_value('trt_oe_cell_id_label', 'Over Expression Cell Lines', '', true);
			this.label_y_position += 5;
			this.draw_tags('trt_oe_cell_id', 'Cell Lines', this.model.get('trt_oe_cell_id'), 'white', '#CC79A7');
		}

		// draw the signatures for the over expression
		if (this.model.get('trt_oe_sig_id')){
			this.render_label_and_value('trt_oe_sig_id_label', 'Over Expression Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('trt_oe_sig_id', 'Signature IDs', this.model.get('trt_oe_sig_id'), 'white', '#BDBDBD');
		}

		// draw the gold signatures for the over expression
		if (this.model.get('trt_oe_sig_id_gold')){
			this.render_label_and_value('trt_oe_sig_id_gold_label', 'Gold Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('trt_oe_sig_id_gold', 'Over Expression Gold Signature IDs', this.model.get('trt_oe_sig_id_gold'), 'white', '#BDBDBD');
		}


		return this;
	},

	/**
	 * update the dynamic potions of the view
	 */
	update: function(){
		this.render();
		return this;
	},

	/**
	* utility function to draw a standard label and value for that label under the main pert_iname and
	* pert_id text
	* If pass_model_field_as_text is true, pass the value in model_field as text instead of serching for
	* it in the model
	* @param  {string}  class_name_base           base of the class name of the attribute
	* @param  {string}  label_text                visible text that labels the element on screen
	* @param  {string}  model_field               text to appear in the model field
	* @param  {boolean} pass_model_field_as_text  determines whether the value in model_field will appear
	*                                             as text (true) or if the value must be obtained by
	*                                             searching (false)
	* @param  {number}  x_pos_base                base position for the x_label set
	* @param  {string}  value_link                if supplied, used as a link on the visible text
*/
	render_label_and_value: function(class_name_base, label_text, model_field, pass_model_field_as_text, x_pos_base, value_link,increment_y){
		// set up a local variable to keep our scope straight
		var self = this;

		// make sure that we have a label_y_position set
		this.label_y_position = (this.label_y_position !== undefined) ? this.label_y_position: 100;
		if (increment_y === undefined){
			increment_y = true;
		}
		if (increment_y){
			this.label_y_position += 25;
		}


		// make sure that there is a base position for the x_label set
		var x_pos_base = (x_pos_base !== undefined) ? x_pos_base: 10;

		// update the open_height to the total height of all that we have drawn
		this.open_height = (this.options.plot_height > this.label_y_position + 40) ? this.options.plot_height : this.label_y_position + 40;

		// (re)draw the label
		this.fg_layer.selectAll('.' + class_name_base + '_label_text').data([]).exit().remove();
		this.fg_layer.selectAll('.' + class_name_base + '_label_text').data([1])
							.enter()
							.append("text")
							.attr("class",class_name_base + '_label_text label_and_text')
							.attr("x",x_pos_base)
							.attr("y",this.label_y_position)
							.attr("font-family","Helvetica Neue")
							.attr("font-size","14pt")
							.text(label_text + ':');

		// (re)draw the text
		this.fg_layer.selectAll('.' + class_name_base + '_text').data([]).exit().remove();
		var model_text = '';
		if (pass_model_field_as_text){
			model_text = model_field;
		}else{
			model_text = this.model.get(model_field);
		}
		var x_pos = x_pos_base + this.fg_layer.selectAll('.' + class_name_base + '_label_text').node().getComputedTextLength() + 10;

		// if there is a value link supplied, use it as a link on the text, otherwise, render plain text
		if (value_link){
			this.fg_layer.selectAll('.' + class_name_base + '_text').data([1])
								.enter()
								.append("text")
								.attr("class",class_name_base + '_text label_and_text')
								.attr("x",x_pos)
								.attr("y",this.label_y_position)
								.attr("font-family","Helvetica Neue")
								.attr("font-size","14pt")
								.attr("fill","#BDBDBD")
								.style("cursor","pointer")
								.on("mouseover",function(){d3.select(this).transition().duration(500).attr("fill","#56B4E9");})
								.on("mouseout",function(){d3.select(this).transition().duration(500).attr("fill","#BDBDBD");})
								.on("click", function(){window.location = value_link})
								.text(model_text);
		}else{
			this.fg_layer.selectAll('.' + class_name_base + '_text').data([1])
								.enter()
								.append("text")
								.attr("class",class_name_base + '_text label_and_text')
								.attr("x",x_pos)
								.attr("y",this.label_y_position)
								.attr("font-family","Helvetica Neue")
								.attr("font-size","14pt")
								.attr("fill","#BDBDBD")
								.text(model_text);
		}
	},

	/**
	 * utility function to break a long summary string into a multiline and draw it at the desired location
	 * @param  {object} options  describes the options for drawing a string to the screen
	 * arguments for options:
	 * @param {string} summary_string  the string to be displayed, defaults to ""
	 * @param {right}  right           the x position to place the right edge of text, defaults to
	 *                                 this.width
	 * @param {left}   left            the x position to place the left edge of text, defaults to
	 *                                 this.width - 500
	 * @param {top}    top             the y position to place the top edge of text, defaults to 0
	 * @param {bottom} bottom          the y position to place the bottom edge of text, defaults to
	 *                                 100
	 */
	render_summary: function(options){
		var self = this;

		// default arguments if they are not present
		summary_string = this.model.get("pert_summary");
		top_edge = (options.top !== undefined) ? options.top : 0;
		bottom_edge = (options.bottom !== undefined) ? options.bottom : 100;
		right_edge = (options.right !== undefined) ? options.right : this.width;
		left_edge = (options.left !== undefined) ? options.left : this.width - 500;

		// clear existing summary
		this.clear_summary();

		// compute the number of lines we have room for
		this.line_height = 15;
		this.num_lines_allowed = Math.floor((bottom_edge - top_edge) / this.line_height);

		// compute the number of characters per line we will allow and how
		// many lines the summary would need if we rendered all of it
		this.line_width = right_edge - left_edge;
		this.num_char = Math.floor(this.line_width / 13 / .75);
		this.num_char = (this.num_char > 60) ? 60 : this.num_char;
		this.num_lines = Math.ceil(summary_string.length / this.num_char);

		// compute the line splits to display in the summary
		this.lines = [];
		for (var i=0; i<this.num_lines; i++){
			if (i < this.num_lines_allowed - 1){
				var l = (summary_string.slice(i*this.num_char,(i+1)*this.num_char).slice(-1) != " " && summary_string.slice(i*this.num_char,(i+1)*this.num_char).slice(this.num_char-1,this.num_char) != "") ? summary_string.slice(i*this.num_char,(i+1)*this.num_char)  + '-': summary_string.slice(i*this.num_char,(i+1)*this.num_char);
				this.lines.push(l);
			}else{
				var l = summary_string.slice(i*this.num_char,(i+1)*this.num_char - 3) + '...';
				this.lines.push(l);
				break;
			}
		}

		// draw lines
		self.fg_layer.selectAll('.' + self.div_string + 'summary_text' + i).data(this.lines)
				.enter()
				.append("text")
				.attr("class",self.div_string + "summary_text")
				.attr("x",left_edge)
				.attr("y",function(d,i){return top_edge + 13 + i*15;})
				.attr("font-family","Helvetica Neue")
				.attr("font-size","13pt")
				.attr("fill","#BDBDBD")
				// .attr("text-anchor", "middle")
				.text(function(d){return d;});
	},

	/**
	 * utility to open or close the view
	 */
	toggle_panel_state: function(){
		var self = this;
		var h;
		if (this.panel_open){
			h = this.options.plot_height;
			$("#" + this.div_string).animate({height:h},500);
			this.panel_open = false;
			this.controls_layer.selectAll(".cevron_icon").attr("xlink:href", '//coreyflynn.github.io/Bellhop/img/down_arrow_select.png')
			this.controls_layer.selectAll('.cevron_icon').transition().duration(500).attr("y",h - 20);
		}else{
			h = this.open_height
			$("#" + this.div_string).animate({height:h},500);
			this.panel_open = true;
			this.controls_layer.selectAll(".cevron_icon").attr("xlink:href", '//coreyflynn.github.io/Bellhop/img/up_arrow_select.png')
			this.controls_layer.selectAll('.cevron_icon').transition().duration(500).attr("y",h - 15);
		}
		this.controls_layer.selectAll("." + this.div_string + "more_button").transition().duration(500).attr("y",h - 15);
		this.controls_layer.selectAll("." + this.div_string + "wiki_link").transition().duration(500).attr("y",h - 20);
		this.controls_layer.selectAll("." + this.div_string + "pubchem_link").transition().duration(500).attr("y",h - 20);
		this.controls_layer.selectAll("." + this.div_string + "png_export").transition().duration(500).attr("y",h - 20);
		this.vis.transition().duration(500).attr("height",h);
	},

	/**
	 * utility function to draw tags given an array
	 * @param  {string} class_name_base  base of the class name of the attribute
	 * @param  {string} label_text       visible text that labels the element on screen
	 * @param  {array}  data             array of data
	 * @param  {string} fg_color         fill color of label
	 * @param  {string} tag_color        color for background layer of tags 
	 */
	draw_tags: function(class_name_base, label_text, data, fg_color, tag_color){
		var x_offsets = [10];
		var row_number = 0;
		var y_offsets = [];
		var lengths = [];
		var tags = [];
		var self = this;
		var EmSize = Barista.getEmSizeInPixels(this.div_string);

		// draw the foreground text of all the tags
		this.fg_layer.selectAll('.' + class_name_base + 'tag_list_text').data([]).exit().remove();
		this.fg_layer.selectAll('.' + class_name_base + 'tag_list_text').data(data).enter().append('text')
			.attr("class", class_name_base + "tag_list_text")
			.text(function(d){return d;})
			.attr("x",function(d,i){
				lengths.push(this.getComputedTextLength() + 15);
				var current_x_offset = x_offsets[i];
				if (current_x_offset + lengths[i] > self.width){
					x_offsets[i] = 5;
					x_offsets.push(lengths[i] + x_offsets[i]);
					row_number += 1;
				}else{
					x_offsets.push(lengths[i] + x_offsets[i]);
				}
				y_offsets.push((row_number * 1.5 + 1));
				return x_offsets[i];
			})
			.attr("y",function(d,i){return self.label_y_position + y_offsets[i] * EmSize;})
			.attr("opacity",1)
			.attr("fill",fg_color)

		// draw the background of all the tags
		this.bg_layer.selectAll('.' + class_name_base + 'tag_list_rect').data([]).exit().remove();
		this.bg_layer.selectAll('.' + class_name_base + 'tag_list_rect').data(data).enter().append('rect')
			.attr("class", class_name_base + "tag_list_rect")
			.attr("x",function(d,i){return x_offsets[i] - 5;})
			.attr("y",function(d,i){return self.label_y_position + (y_offsets[i] - 1) * EmSize;})
			.attr("rx",4)
			.attr("ry",4)
			.attr('width',function(d,i){return lengths[i] - 4;})
			.attr('height','1.2em')
			.attr("opacity",1)
			.attr("fill",tag_color);

		// update the label_y_position
		this.label_y_position += 10 + y_offsets.slice(-1)[0] * EmSize;

		// update the open_height to the total height of all that we have drawn
		this.open_height = (this.options.plot_height > this.label_y_position + 40) ? this.options.plot_height : this.label_y_position + 40;

		return this
	},

	/**
	 * utility function to clear the pert summary
	 */
	clear_summary: function(){
		this.fg_layer.selectAll('.summary_text').data([]).exit().remove();
	},

	/*
	 * utility function to clear all of the labels and text generated with the render_label_and_value
	 * function
	 */
	clear_label_and_text: function(){
		this.fg_layer.selectAll('.label_and_text').data([]).exit().remove();
	}
});

/**
A Backbone.View that exposes a custom search bar.  The search bar provides autocomplete
functionality for Connectivity Map pert_inames and cell_ids.  When the user types in the
search view's input, a "search:DidType" event is fired.

@class PertSearchBar
@constructor
@extends Backbone.View
**/
Barista.Views.PertSearchBar = Backbone.View.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "PertSearchBar",
/**
 * overide the default Backbone.View initialize method
 */
	initialize: function(){
		var self = this;


		/**
		determines wether or not the search view will match cell lines for autocomplete
		@property match_cell_lines
		@default true
		@type Boolean
		*/

		// set up custom Datasets if they are passed in the constructor
		this.datasets = (this.options.datasets !== undefined) ? this.options.datasets : [Barista.Datasets.CellID,Barista.Datasets.PertIName];

		// determine wether or not we will match cell line strings in the autocomplete
		this.match_cell_lines = (this.options.match_cell_lines !== undefined) ? this.options.match_cell_lines : true;

		// custom placeholder
		this.placeholder = (this.options.placeholder !== undefined) ? this.options.placeholder : 'search gene, compound or cell type name';

		// grab cell_ids and store them as an atribute of the view
		var cellinfo = Barista.APIURL + '/a2/cellinfo?callback=?';
		var params = {q:'{"cell_id":{"$regex":""}}',d:"cell_id"};
		$.getJSON(cellinfo,params,function(res){
			self.cell_lines = res;
			self.render();

			// once the view is rendered, bind a change event to trigger a "search:DidType" event from the view
			var change_callback = function () {
				// get the value from the search bar. If the first character is '*',
				// replace it with '.*' so we use the wildcard as expected in API
				// saerches
				var val  = $("#search",self.el).val();
				val = (val[0] === '*') ? val.replace('*','.*') : val;

				var type = "";
				if (self.cell_lines.indexOf(val) != -1 && self.match_cell_lines){
					type = "cell";
				}

				/**
				Fired when the text in the view's search box changes

				@event search:DidType
				@param {Object} [msg={val:"",type:""}] an object containing the message of the event
				@param {String} [msg.val=""] the string val of the views search bar at the time of the event
				@param {String} [msg.type=""] the type of message being passed, either "" or "cell". "cell" is passed, if the string matches a cell line and match\_cell\_lines is set
				*/
				self.trigger("search:DidType",{val: val,type: type});
			};

			$("#search",self.el).bind('input propertychange change', _.throttle(change_callback,250));

			// bind a search:DidType event to the typeahead events coming out of typeahead.js
			$(".typeahead",self.el).bind('typeahead:selected typeahead:autocompleted', function (obj,datum) {
				var val = datum.value;
				self.trigger("search:DidType",{val: val,type: datum.type});
			});
		});

	},

	/**
	 * Gets the current text entered in the view's search bar
    */
	get_val: function(){
		return $("#search",this.el).val();
	},

	/**
	 * fills the view's search bar with a random pert_iname and triggers a "search:DidType" event
    */
	random_val: function(){
		var self = this;
		skip = Math.round(Math.random()*40000);
		var pertinfo = Barista.APIURL + '/a2/pertinfo?callback=?';
		params = {q: '{"pert_type":{"$in":["trt_cp","trt_sh"]}}',
					f:'{"pert_iname":1}',
										l:1,
										sk:skip};
		$.getJSON(pertinfo,params,function(res){
			var val = res[0].pert_iname;
			$("#search",this.el).val(val);
			self.trigger("search:DidType",{val: val,type: 'single'});
		});
	},
/**
 * triggers a "search:DidType" event for the given search value
 * @param {string} new_val   value to search for
 * @param {string} new_type  type of value
 */
	set_val: function(new_val,new_type){
		new_type = (new_type !== undefined) ? new_type : "single";
		$("#search",this.el).val(new_val);
		this.trigger("search:DidType",{val: new_val,type: new_type});
	},

	/**
	 * renders the view
    */
	render: function(){
		var self = this;
		// load the template into the view's el tag
		this.$el.append(BaristaTemplates.CMapPertSearchBar({placeholder: self.placeholder}));

		$('#search',this.$el).typeahead(self.datasets);
	}
});

/**
 * A Backbone.View that shows a quick view card used to display the available data on lincscloud.org for
 * a given platform
 * he widget displays a count of the available experiments on the platform, a description of the platform,
 * a widget to extract a listing of the data available, and a link to a platform specific app for viewing
 * the contents of the available data on that platform
 * This view is frequently paired with a PlatformSummaryModel
 * basic use:
 * platform_summary_view = new PlatformSummaryView();
 * optional arguments:
 * ...
		platform_summary_view = new PlatformSummaryView({ 
									... });
 */
Barista.Views.PlatformSummaryView = Backbone.View.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "PlatformSummaryView",

	/**
	 * set up the view's default model
	 * @type {Barista}
	 */
	model: new Barista.Models.GenericCountModel(),

	/**
	 * overide the default Backbone.View initialize method to handle optional arguments, compile the view
	 * template, bind model changes to view updates, and render the view
	 */
	initialize: function(){
		// set up color and font defaults
		this.white_color = "#ffffff";
		this.black_color = "#000000";
		this.orange_color = "#e69f00";
		this.sky_blue_color = "#56b4e9";
		this.bluish_green_color = "#009e73";
		this.yellow_color = "#f0e442";
		this.blue_color = "#0072b2";
		this.vermillion_color = "#d55e00";
		this.reddish_purple_color = "#cc79a7";
		this.opaque_opacity = 1;
		this.semi_opacity = 0.25;
	  this.text_font_family = "'Helvetica Neue',Helvetica,Arial,sans-serif";
	  this.brand_font_family = "'Memphis LT Std',Times,serif";
	  this.navigation_font_family = "Tahoma,Verdana,sans-serif";
	  this.bold_font_weight = "bold";
	  this.medium_font_weight = "medium";
	  this.regular_font_weight = "normal";
	  this.lowercase_font_transform = "lowercase";
	  this.uppercase_font_transform = "uppercase";
	  this.sentence_font_transform = "none";
	  this.normal_letter_spacing = "normal";
	  this.wide_letter_spacing = "2pt";
	  this.fonts_default = {
  	  brand: {
  	  	family: this.brand_font_family,
  	  	weight: this.bold_font_weight,
  	  	size: "13pt",
  	  	transform: this.uppercase_font_transform,
  	  	spacing: this.wide_letter_spacing,
  	  	color: this.black_color
  	  },
  	  control: {
  	  	family: this.text_font_family,
  	  	weight: this.regular_font_weight,
  	  	size: "12pt",
  		  transform: this.lowercase_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.sky_blue_color
  	  },
  	  count: {
  	  	family: this.text_font_family,
  	  	weight: this.bold_font_weight,
  	  	size: "36pt",
  		  transform: this.sentence_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.black_color
  	  },
  	  header: {
  	  	family: this.text_font_family,
  	  	weight: this.bold_font_weight,
  	  	size: "13pt",
  	  	transform: this.uppercase_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.black_color
  	  },
  	  navigation: {
  	  	family: this.navigation_font_family,
  	  	weight: this.regular_font_weight,
  	  	size: "9pt",
  	  	transform: this.sentence_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.black_color
  	  },
  	  paragraph: {
  	  	family: this.text_font_family,
  	  	weight: this.regular_font_weight,
  	  	size: "12pt",
  		  transform: this.sentence_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.black_color
  	  },
  	  subhead: {
  	  	family: this.text_font_family,
  	  	weight: this.medium_font_weight,
  	  	size: "14pt",
  		  transform: this.sentence_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.black_color
  	  },
  	  title: {
  	  	family: this.text_font_family,
  	  	weight: this.bold_font_weight,
  	  	size: "36pt",
  		  transform: this.sentence_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.black_color
  	  }
	  };

		// set up color and font appearance options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : this.white_color;
		this.fg_color = (this.options.fg_color !== undefined) ? this.options.fg_color : this.orange_color;
		this.fonts = this.fonts_default;

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "col-lg-4";

		// set up static banner text, default if not specified
		this.banner_text = (this.options.banner_text !== undefined) ? this.options.banner_text : "Platform";

		// set up static description text, default if not specified
		this.description_text = (this.options.description_text !== undefined) ? this.options.description_text : "Platform description";

		// set up static experiments text, default if not specified
		this.experiments_text = (this.options.experiments_text !== undefined) ? this.options.experiments_text : "Experiments";

		// set up the default plot height
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 305;

		// set up the platform icon
		this.platform_icon = (this.options.platform_icon !== undefined) ? this.options.platform_icon : '//coreyflynn.github.io/Bellhop/img/cmap_logo_small.png';

		// set up static export table, default if not specified
		this.export_text = (this.options.export_text !== undefined) ? this.options.export_text : "download table";
		this.exporting_text = (this.options.exporting_text !== undefined) ? this.options.exporting_text : "Exporting";

		// set up static view details, default if not specified
		this.details_text = (this.options.details_text !== undefined) ? this.options.details_text : "view details";
		this.details_url = (this.options.details_url !== undefined) ? this.options.details_url : "//apps.lincscloud.org";
		this.details_target = (this.options.details_target !== undefined) ? this.options.details_target : "_self";

		// set up default categories to display
		this.categories = (this.options.categories !== undefined) ? this.options.categories : [];
		this.category_ids = _.pluck(this.categories,'_id');

		// get categories from model and determine the maximum category count
		// this.categories = this.model.get('platform_types');
		this.max_category_count = _.max(_.pluck(this.categories,'count'));
		
		// bind render to model changes
		this.listenTo(this.model,'change', this.render);

		// compile the default template for the view
		this.compile_template();

		// define the location where d3 will build its plot
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		// render the vis
		this.redraw();

		// bind window resize events to redraw.
		var self = this;
		$(window).resize(function() {self.redraw();} );
	},

	/**
	 * use Handlebars to compile the template for the view
	 */
	compile_template: function(){
		this.div_string = 'd3_target' + new Date().getTime();
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	/**
	 * completely redraw the view
	 */
	redraw: function(){
		this.init_panel();
		this.render();
	},
	
	/**
	 * applies the given font to the text at the given target
	 * @param  {font}   font    font to apply
	 * @param  {string} target  text target to apply font to
	 */
	apply_font: function(font, target) {
		return target.attr("font-family", font.family)
			.attr("font-weight", font.weight)
			.attr("font-size", font.size)
			.attr("style", "text-transform: " + font.transform +";")
			.attr("letter-spacing", font.spacing)
			.attr("fill", font.color);
	},
	/**
	 * converts the attributes of a font object to a string of css text
	 * @param  {font} font  font object
	 */
	font_to_css_style: function(font) {
		return "font:"+ font.weight +" " + font.size + " " + font.family + "; "
			+ "color:" + font.color + "; " 
			+ "text-transform:" + font.transform + "; " 
			+ "letter-spacing:" + font.spacing + "; ";
	},

	/**
	 * initialize the static parts of the view's panel
	 */
	init_panel: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the panel's width and height
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();
		
		// set up component row positioning
		this.hrule0 = 60;
		this.hrule1 = this.hrule0 + 30;
		this.hrule2 = this.hrule1 + 30;
		this.hrule3 = this.hrule2 + 120;
		this.hrule4 = this.hrule3 + 30;
		this.hrule5 = this.hrule4 + 25;

		// rescale the width of the vis
		this.vis.transition().duration(1).attr("width",this.width);

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		this.vis.selectAll('.controls_layer').data([]).exit().remove();
		this.controls_layer = this.vis.append("g").attr("class", "controls_layer");

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// draw the banner
		this.fg_layer.selectAll('.banner').data([]).exit().remove();
		var banner = this.fg_layer.append("g").attr("class", "banner");
		banner.selectAll('.banner_rect').data([]).exit().remove();
		banner.append("rect").attr("class", "banner_rect")
			.attr("width", this.width)
			.attr("height", this.hrule1)
			.attr("fill", this.fg_color);
		banner.selectAll('.banner_text').data([]).exit().remove();
		var bt = this.apply_font(this.fonts.title, banner.selectAll('.banner_text').data([1])
							.enter().append("text")
							.attr("class","banner_text")
							.attr("y",this.hrule0)
							.text(this.banner_text));
    // center the banner text
		bt.each(function() {
			var text_width = this.getBBox().width;
			var start_pos = (self.width - text_width) / 2;
			bt.attr("x", start_pos);
		});

		// draw the description text
		this.render_description({
			description_string: this.description_text,
			left: 150,
			top: this.hrule2,
			bottom: this.height,
			node_class: 'description_text'
		});
		
		// draw the generic count info
		var count = this.model.get('count');
		if (count === undefined){
			count = 0;
		}
		var count_text = this.fg_layer.selectAll('.count').data([]).exit().remove();
		count_text = this.apply_font(this.fonts.count, this.fg_layer.selectAll('.count').data([1])
							.enter().append("text")
							.attr("class","count")
							.attr("x",40)
							.attr("y",this.hrule3)
							.text(count));
		
		// draw the experiments text
		this.fg_layer.selectAll('.experiments_text').data([]).exit().remove();
		this.apply_font(this.fonts.header, this.fg_layer.selectAll('.experiments_text').data([1])
							.enter().append("text")
							.attr("class","experiments_text")
							.attr("x",40)
							.attr("y",this.hrule4)
							.text(this.experiments_text));

		// draw the static platform icon
		this.fg_layer.selectAll('.platform_icon').data([]).exit().remove();
		this.fg_layer.selectAll('.platform_icon').data([1])
							.enter().append("svg:image")
							.attr("class","platform_icon")
			        .attr("xlink:href", this.platform_icon)
							.attr("x",40)
							.attr("y",this.hrule2)
							.attr("height",60)
							.attr("width",60);

		// add a png export overlay
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
		.attr("class", this.div_string + "png_export no_png_export")
		.attr("x",40)
		.attr("y",this.hrule5)
		.attr("opacity",self.semi_opacity)
		.style("cursor","pointer")
		.text("png")
		.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",self.opaque_opacity).attr("fill",self.sky_blue_color);})
		.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",self.semi_opacity).attr("fill",self.black_color);})
		.on("click",function(){self.save_png();});

		// css inline styling, this value can have single quotes in it, so use double-quotes to apply it
		this.control_css_style = "text-decoration:none; "+this.font_to_css_style(this.fonts.control);
		
		// determine control positioning based on display size
		this.details_x = this.width - 135;
		this.details_y = this.hrule4 - 15; // 15 is a hack adjusting for line height
		this.export_x = this.width - 270;
		this.export_y = this.details_y;
		if (this.export_x < 180) {
			// move the export above the details
			this.export_x = this.details_x;
			this.export_y = this.details_y - 30;
		}
		
		// add the export table control
		this.render_export_control(this.export_text, "icon-download", function(){self.download_table();});

		// add the view details control
		this.controls_layer.selectAll('.details_text').data([]).exit().remove();
		this.controls_layer.selectAll('.details_text').data([1])
							.enter().append("foreignObject")
							.attr("class","details_text")
							.attr("width", 110)
							.attr("height", 110)
							.attr("x", this.details_x)
							.attr("y", this.details_y)
							.style("cursor","pointer")
							.append("xhtml:body")
							.style("background-color", this.bg_color)
							.html("<a href='"+this.details_url+"' target='"+this.details_target+"' style=\"" + this.control_css_style + "\"><i class='icon-chevron-sign-right'></i> "+this.details_text+"</a>");
	},
	/**
	 * creates the render control object and draws it to the screen
	 * @param  {string}   message     visible text
	 * @param  {string}   icon_class  value of the class attribute
	 * @param  {function} handler     function associated with click
	 */
	render_export_control: function(message, icon_class, handler) {
		this.controls_layer.selectAll('.export_text').data([]).exit().remove();
		return this.controls_layer.selectAll('.export_text').data([1])
							.enter().append("foreignObject")
							.attr("class","export_text")
							.attr("width", 130)
							.attr("height", 100)
							.attr("x", this.export_x)
							.attr("y", this.export_y)
							.style("cursor","pointer")
							.on("click",handler)
							.append("xhtml:body")
							.style("background-color", this.bg_color)
							.html("<span style=\"" + this.control_css_style + "\"><i class='" + icon_class + "' style='margin-right:2px;'></i>" + message + "</span>");
	},

	/**
	 * download the backing data that matches the current model state
	 */
	download_table: function() {
		var self = this;

		// indicate that we are downloading something
		this.render_export_control(this.exporting_text, "icon-refresh icon-spin", null);
		

		// set up api call parameters
		var url = this.model.get("url");
		var params = {q: '{"' + this.model.get("search_field") + '":{"$regex":"' + this.model.get("search_string") + '","$options":"i"}}',
            l:0};

        // make a JSON API call to grab data for the table
		$.getJSON(url,params,function(res){
			// get the headers for the table we are going to write out
			var headers = _.keys(res[0]);

			// We are going to write a one line in the table for each object returned by the API
			// call.  Start by putting the headers in and then write each object to the table
			var lines = [headers.join('\t')];
			res.forEach(function(r){
				var line_data = [];
				// for each data name in the table, grab the data. translate html
				// content to plain text where required
				headers.forEach(function(h){
						line_data.push(String(r[h]));
				});
				line_string = line_data.join('\t');
				lines.push(line_string);
			});
			var lines_string = lines.join("\n");
			var blob = new Blob([lines_string], {type: "text/plain;charset=utf-8"});
			var timestamp = new Date().getTime();
			saveAs(blob, "CMapTable" + timestamp + ".txt");

			// indicate that we are done
			self.render_export_control(self.export_text, "icon-download", function(){self.download_table();});
		});
	},
	/**
	 * renders the view
	 */
	render: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the panel's width and height
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();

		// draw the pert count info
		var count = this.model.get('count');
		if (count === undefined){
			count = 0;
		}
		this.vis.selectAll('.count').data([1])
			.transition().duration(500)
			.tween("text", function() {
			    var i = d3.interpolate(this.textContent.replace(",",""), count);
			    return function(t) {
			      this.textContent = Barista.numberWithCommas(Math.round(i(t)))	;
			    };
			});

	},

	/**
	 * utility function to break a long description string into a multiline and draw it at the desired
	 * location
	 * @param  {object} options  describes the options for drawing a string to the screen
	 * arguments for options:
	 * @param {string}     description_string  the string to be displayed, defaults to ""
	 * @param {right}      right               the x position to place the right edge of text, defaults
	 *                                         to this.width
	 * @param {left}       left                the x position to place the left edge of text, defaults
	 *                                         to this.width - 500
	 * @param {top}        top                 the y position to place the top edge of text, defaults to 0
	 * @param {bottom}     bottom              the y position to place the **bottom** edge of text,
	 *                                         defaults to 100
	 * @param {node_class} node_class          the class used for locating the text node within fg_layer,
	 *                                         defaults to ""
	 */
	render_description: function(options){
		var self = this;

		// default arguments if they are not present
		description_string = (options.description_string !== undefined) ? options.description_string : "";
		top_edge = (options.top !== undefined) ? options.top : 0;
		bottom_edge = (options.bottom !== undefined) ? options.bottom : 100;
		right_edge = (options.right !== undefined) ? options.right : this.width;
		left_edge = (options.left !== undefined) ? options.left : this.width - 500;
		node_class = (options.node_class != undefined) ? options.node_class : "";
    node_class_selector = '.' + node_class;
    
		// clear existing description
		this.fg_layer.selectAll(node_class_selector).data([]).exit().remove();

		// compute the number of lines we have room for
		this.line_height = 15;
		// if the layout is small we can't have more than 5 lines or descriptions collide with the count
		this.num_lines_allowed = Math.min(5, Math.floor((bottom_edge - top_edge) / this.line_height));

		// compute the number of characters per line we will allow and how
		// many lines the description would need if we rendered all of it
		this.line_width = right_edge - left_edge;
		// 12 pt font
		this.num_char = Math.floor(this.line_width / 12 / .65);
		this.num_lines = Math.ceil(description_string.length / this.num_char);

		// compute the line splits to display in the description
		this.lines = [];
		for (var i=0; i<this.num_lines; i++){
			if (i < this.num_lines_allowed - 1){
				var l = (description_string.slice(i*this.num_char,(i+1)*this.num_char).slice(-1) != " " && description_string.slice(i*this.num_char,(i+1)*this.num_char).slice(this.num_char-1,this.num_char) != "") ? description_string.slice(i*this.num_char,(i+1)*this.num_char)  + '-': description_string.slice(i*this.num_char,(i+1)*this.num_char);
				this.lines.push(l);
			} else {
				var l = description_string.slice(i*this.num_char,(i+1)*this.num_char - 3) + '...';
				this.lines.push(l);
				// note: the class that had the original line-splitting code does not have this break, and that may be a bug
				break;
			}
		}

		// draw lines
		this.apply_font(this.fonts.paragraph, self.fg_layer.selectAll(node_class_selector).data(this.lines)
				.enter()
				.append("text")
				.attr("class",node_class)
				.attr("x",left_edge)
				.attr("y",function(d,i){return top_edge + 13 + i*15;})
				// .attr("text-anchor", "middle")
				.text(function(d){return d;}));
	},
	
	/**
	 * save the current state of the view into a png image
	 */
	save_png: function(){
		// build a canvas element to store the image temporarily while we save it
		var width = this.width;
		var height = this.height;
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.vis.selectAll(".no_png_export");
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// temporarily fix content to work around canvg rendering problems
		this.fg_layer.selectAll('.platform_icon').data([]).exit().remove();
		this.render_description({
			description_string: this.description_text,
			left: 40,
			top: this.hrule2,
			bottom: this.height,
			node_class: 'description_text'
		});
		
		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.vis.node().parentNode.innerHTML;
		
		// restore content
		this.fg_layer.selectAll('.platform_icon').data([1])
			.enter().append("svg:image")
			.attr("class","platform_icon")
	    .attr("xlink:href", this.platform_icon)
			.attr("x",40)
			.attr("y",this.hrule2)
			.attr("height",60)
			.attr("width",60);
		this.render_description({
			description_string: this.description_text,
			left: 150,
			top: this.hrule2,
			bottom: this.height,
			node_class: 'description_text'
		});

		// render to the canvas
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = "BaristaPlatformSummaryView" + new Date().getTime() + ".png";
		if (canvas.toBlob){
			canvas.toBlob(function(blob){
				saveAs(blob,filename);
				});
		}
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);
	}
});

/**
 * scatter_plot_view = new ScatterPlotView({el: $("target_selector",
									bg_color:"#ffffff",
									fg_color: "#1b9e77",
									span_class: "span4",
									scale_by: undefined,
									x_range: undefined,
									y_range: undefined,
									x_log: false,
									y_log: false,
									x_min_lock: undefined,
									y_min_lock: undefined,
									x_max_lock: undefined,
									y_max_lock: undefined,
									x_min_expand: false,
									y_min_expand: false,
									x_max_expand: false,
									y_max_expand: false,
									plot_height: 120});
 *
 * A Backbone.View that displays a scatter plot
 * the view's model is assumed to have the same defaults as specified in ScatterPlotModel
 * basic use:
 * scatter_plot_view = new ScatterPlotView();
 * optional arguments:
 * @param {string}  bg_color      the hex color code to use as the backgound of the view, defaults to
 *                                #ffffff
 * @param {string}  fg_color      the hex color code to use as the foreground color of the view, defaults
 *                                to #1b9e77
 * @param {string}  span_class    a bootstrap span class to size the width of the view, defaults to
 *                                "span12"
 * @param {string}  scale_by      an attribute in the model's meta data object to scale points by, defaults
 *                                to undefined
 * @param {array}   x_range       a two element array specifying the x plotting bounds of the plot,
 *                                defaults to [min(x_data),max(x_data)]
 * @param {array}   y_range       a two element array specifying the y plotting bounds of the plot,
 *                                defaults to [min(y_data),max(y_data)]
 * @param {boolean} x_log         if set to true, plots the x axis on a log scale, defaults to false
 * @param {boolean} y_log         if set to true, plots the y axis on a log scale, defaults to false
 * @param {number}  x_min_lock    if set, locks the minimum of the x_range at the given value. Ignored if
 *                                x_range is set. defaults to undefined
 * @param {number}  y_min_lock    if set, locks the minimum of the y_range at the given value. Ignored if
 *                                y_range is set. defaults to undefined
 * @param {number}  x_max_lock    if set, locks the maximum of the x_range at the given value. Ignored if
 *                                x_range is set. defaults to undefined
 * @param {number}  y_max_lock    if set, locks the maximum of the y_range at the given value. Ignored if
 *                                y_range is set. defaults to undefined
 * @param {boolean} x_min_expand  if set, allows the minimum of the x_range to expand if data is found
 *                                below it. defaults to false
 * @param {boolean} y_min_expand  if set, allows the minimum of the y_range to expand if data is found
 *                                below it. defaults to false
 * @param {boolean} x_max_expand  if set, allows the maximum of the x_range to expand if data is found
 *                                above it. defaults to false
 * @param {boolean} y_max_expand  if set, allows the maximum of the y_range to expand if data is found
 *                                above it. defaults to false
 * @param {number}  plot_height   the height of the plot in pixels, defaults to 120
 */

Barista.Views.ScatterPlotView = Barista.Views.BaristaBaseView.extend({
	/**
	 * set up the view's default model
	 * @type {Barista}
	 */
	model: new Barista.Models.ScatterPlotModel(),

	/**
	 * override the default Backbone.View initialize method to handle optional arguments, compile the view
	 * template, bind model changes to view updates, and render the view
	 */
	initialize: function(){
		// set up x and y range and determine if are going to draw the axes dynamically
		this.x_range = (this.options.x_range !== undefined) ? this.options.x_range : undefined;
		this.y_range = (this.options.y_range !== undefined) ? this.options.y_range : undefined;
		this.dynamic_x_range = (this.x_range === undefined) ? true : false;
		this.dynamic_y_range = (this.y_range === undefined) ? true : false;

		// set up axis expansion and lock features
		this.x_min_lock = (this.options.x_min_lock !== undefined) ? this.options.x_min_lock : undefined;
		this.y_min_lock = (this.options.y_min_lock !== undefined) ? this.options.y_min_lock : undefined;
		this.x_max_lock = (this.options.x_max_lock !== undefined) ? this.options.x_max_lock : undefined;
		this.y_max_lock = (this.options.y_max_lock !== undefined) ? this.options.y_max_lock : undefined;

		this.x_min_expand = (this.options.x_min_expand !== undefined) ? this.options.x_min_expand : undefined;
		this.y_min_expand = (this.options.y_min_expand !== undefined) ? this.options.y_min_expand : undefined;
		this.x_max_expand = (this.options.x_max_expand !== undefined) ? this.options.x_max_expand : undefined;
		this.y_max_expand = (this.options.y_max_expand !== undefined) ? this.options.y_max_expand : undefined;

		// set up x and y log flags
		this.x_log = (this.options.x_log !== undefined) ? this.options.x_log : false;
		this.y_log = (this.options.y_log !== undefined) ? this.options.y_log : false;

		// set up the scale_by parameter
		this.scale_by = (this.options.scale_by !== undefined) ? this.options.scale_by : undefined;

		// set up the margin
		this.margin = 50;

		// set up x and y ranges
		this.set_ranges();

		// set up x and y scaling
		this.set_scales();

		// build Axes
		this.build_axes();

		// run BaristaBaseView's base_initialize method to handle boilerplate view construction
		// and initial view rendering
		this.base_initialize();
	},

	/**
	 * completely redraw the view
	 * Updates both static and dynamic content in the view
	 */
	render: function(){
		this.base_render();
		this.init_plot();
		this.update();
	},

	/**
	 * initialize the static parts of the view's panel
	 */
	init_plot: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up x and y ranges
		this.set_ranges();

		// set up x and y scaling
		this.set_scales();

		// build Axes
		this.build_axes();

		// plot the axes
		this.bg_layer.selectAll('.axis').data([]).exit().remove();
		this.bg_layer.append("g")
			.attr("class", "axis x-axis")
			.attr("transform", "translate(0," + (this.height - this.margin) + ")")
			.call(this.xAxis);

		this.bg_layer.append("g")
			.attr("class", "axis y-axis")
			.attr("transform", "translate(" + this.margin + ",0)")
			.call(this.yAxis);

		// style the axes
		this.vis.selectAll('.axis').selectAll("path")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("line")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("text")
			.style("font-family","sans-serif")
			.style("font-size","11px")
			.style("font","11px Open Sans");

		// build a scaling function
		this.set_scaling_function();

		// plot the data points
		this.x_data = this.model.get('x_data');
		this.y_data = this.model.get('y_data');
		this.bg_layer.selectAll('.data_point').data([]).exit().remove();
		this.bg_layer.selectAll('.data_point').data(this.x_data).enter().append('circle')
			.attr("class","data_point")
			.attr("cx",this.x_scale(0))
			.attr("cy",this.y_scale(0))
			.attr("opacity",0.5)
			.attr("r",0)
			.attr("fill",this.fg_color);

		// plot the x axis title
		this.bg_layer.selectAll('.x_axis_label').data([]).exit().remove();
		this.bg_layer.selectAll('.x_axis_label').data([1]).enter().append('text')
			.attr("class","x_axis_label axis_label")
			.attr("x",this.width/2)
			.attr("y",this.height-10)
			.attr("font-family","Open Sans")
      .attr("font-weight","300")
      .attr("font-size","14px")
			.text(this.model.get('x_axis_title'));

		// plot the y axis label
		this.bg_layer.selectAll('.y_axis_label').data([]).exit().remove();
		this.bg_layer.selectAll('.y_axis_label').data([1]).enter().append('text')
			.attr("class","y_axis_label axis_label")
			// .attr("transform", "rotate(-90)")
			.attr("y", 40)
			.attr("x", this.margin + 2)
			.attr("dy","1em")
			.attr("font-family","Open Sans")
      .attr("font-weight","300")
      .attr("font-size","14px")
			.text(this.model.get('y_axis_title'));

		// plot the title
		this.bg_layer.selectAll('.title').data([]).exit().remove();
		this.bg_layer.selectAll('.title').data([1]).enter().append('text')
			.attr("class","title")
			.attr("x",0)
			.attr("y",this.margin/2)
			.attr("font-family","Open Sans")
      .attr("font-weight","300")
      .attr("font-size","16px")
			.text(this.model.get('title'));
	},

	/**
	 * update the dynamic potions of the view
	 */
	update: function(){
	var self = this;

	// get model data
	this.x_data = this.model.get('x_data');
	this.y_data = this.model.get('y_data');

	// set up x and y ranges
	this.set_ranges();

	// set up x and y scaling
	this.set_scales();

	// build Axes
	this.build_axes();

	// build a scaling function
	this.set_scaling_function();

	// plot the data points, appending where required
	this.points_selection = this.bg_layer.selectAll('.data_point').data(this.x_data);
	this.points_selection.enter().append('circle')
		.attr("class","data_point")
		.attr("cx",this.x_scale(0))
		.attr("cy",this.y_scale(0))
		.attr("opacity",0.5)
		.attr("r",0)
		.attr("fill",this.fg_color);

	// transition points
	this.points_selection.transition().duration(500)
		.attr("cx",this.x_scale)
		.attr("cy",function(d,i){return self.y_scale(self.y_data[i]);})
		.attr("r",function(d,i){
		if (self.scale_by === undefined){
			return 10;
		}else{
			return self.dot_scaler(self.scale_data[i]);
		}});

	// remove excess points
	this.points_selection.exit().remove();

	// transition the axes
	this.vis.selectAll('.x-axis').transition().duration(500).call(this.xAxis);
	this.vis.selectAll('.y-axis').transition().duration(500).call(this.yAxis);
	this.style_axes();
	},

	/**
	 * utility function used to get the x and y ranges used in the plot
	 */
	set_ranges: function(){
		var x_data,y_data,min,max;
		// calculate the x_range. If we need to caluclate it dynamically, check the lock and expand
		// parameters for the axis
		if (this.dynamic_x_range === true){
			x_data = this.model.get('x_data');

			// if the data is of length larger than 1, calculate the range, otherwise set the range to [0,0]
			if (x_data.length > 0 ){
				// check the min lock and expand flags and report the min of the range accordingly
				if (this.x_min_lock === undefined){
					min = _.min(x_data);
				}else{
					if (this.x_min_expand){
						data_min = _.min(x_data);
						min = (this.x_min_lock > data_min) ? data_min : this.x_min_lock;
					}else{
						min = this.x_min_lock;
					}
				}

				// check the max lock and expand flags and report the max of the range accordingly
				if (this.x_max_lock === undefined){
					max = _.max(x_data);
				}else{
					if (this.x_max_expand){
						data_max = _.max(x_data);
						max = (this.x_max_lock < data_max) ? data_max : this.x_max_lock;
					}else{
						max = this.x_max_lock;
					}
				}
				this.x_range = [min,max];
			}else{
				this.x_range = [0,0];
			}
		}

		// calculate the y_range. If we need to caluclate it dynamically, check the lock and expand
		// parameters for the axis
		if (this.dynamic_y_range === true){
			y_data = this.model.get('y_data');

			// if the data is of length larger than 1, calculate the range, otherwise set the range to [0,0]
			if (y_data.length > 0 ){
				// check the min lock and expand flags and report the min of the range accordingly
				if (this.y_min_lock === undefined){
					min = _.min(y_data);
				}else{
					if (this.y_min_expand){
						data_min = _.min(y_data);
						min = (this.y_min_lock > data_min) ? data_min : this.y_min_lock;
					}else{
						min = this.y_min_lock;
					}
				}

				// check the max lock and expand flags and report the max of the range accordingly
				if (this.y_max_lock === undefined){
					max = _.max(y_data);
				}else{
					if (this.y_max_expand){
						data_max = _.max(y_data);
						max = (this.y_max_lock < data_max) ? data_max : this.y_max_lock;
					}else{
						max = this.y_max_lock;
					}
				}
				this.y_range = [min,max];
			}else{
				this.y_range = [0,0];
			}
		}
	},

	/**
	 * utility function used to get the x and y scales used in the plot
	 */
	set_scales: function(){
		if (this.x_log){
			this.x_scale=d3.scale.log().domain([this.x_range[0],this.x_range[1]]).range([this.margin, this.width - this.margin]);
		}else{
			this.x_scale=d3.scale.linear().domain([this.x_range[0],this.x_range[1]]).range([this.margin, this.width - this.margin]);
		}
		if (this.y_log){
			this.y_scale=d3.scale.log().domain([this.y_range[1],this.y_range[0]]).range([this.margin, this.height - this.margin]);
		}else{
			this.y_scale=d3.scale.linear().domain([this.y_range[1],this.y_range[0]]).range([this.margin, this.height - this.margin]);
		}
	},

	/**
	 * utility function used to build x and y axes
	 */
	build_axes: function(){
		this.xAxis = d3.svg.axis()
			.scale(this.x_scale)
			.orient("bottom");
		this.yAxis = d3.svg.axis()
			.scale(this.y_scale)
			.orient("left");
	},

	/**
	 * utility function to compute a radius scaling funciton to use in plots
	 */
	set_scaling_function: function(){
		var self = this;
		if (this.scale_by !== undefined){
			this.scale_data = this.model.get('meta_data')[this.scale_by];
			var size_min = Math.sqrt(_.min(this.scale_data)/Math.PI);
			var size_max = Math.sqrt(_.max(this.scale_data)/Math.PI);
			this.size_scale=d3.scale.linear().domain([size_min,size_max]).range([5, 20]);
			this.dot_scaler = function(val){
				r = Math.sqrt(val/Math.PI);
				return self.size_scale(r);
			};
		}
	},

	/**
	 * utility function to apply custom styles to axis components
	 */
	style_axes: function(){
		this.vis.selectAll('.axis').selectAll("path")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("line")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("text")
			.style("font-family","sans-serif")
			.style("font","14px Open Sans");
	}
});

/**
 * tag_list_view = new TagListView({el: $("target_selector",
									bg_color:"#ffffff", 
									fg_color: "white",
									tag_color: "gray",
									span_class: "col-lg-12",
									plot_height: 120,
									display_attribute: "cid"});
 *
 * A Backbone.View that displays a list of objects in a collection as tags
 * The tags are drawn as rounded rectangles with text inside
 * The text corresponds to the cid attributes in the collection by defaul, but can be customized to display
 * other fields if required
 * basic use:
 * tag_list_view = new TagListView();
 * optional arguments:
 * @param {string} bg_color       the hex color code to use as the backgound of the view, defaults to
 *                                #ffffff
 * @param {string} fg_color       the hex color code to use as the foreground color of the view, defaults
 *                                to white
 * @param {string} tag_color      the hex color code to use as the tag color of the view, defaults to gray
 * @param {string} span_class     a bootstrap span class to size the width of the view, defaults to
 *                                "col-lg-12"
 * @param {number} plot_height    the height of the plot in pixels, defaults to 120
 * @param {string} display_field  the model attribute to display for each model in the view's colleciton.
 *                                defualts to 'cid'
 */

Barista.Views.TagListView = Barista.Views.BaristaBaseView.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "TagListView",

	/**
	 * set of the default model for the view
	 * @type {Backbone}
	 */
	model: new Backbone.Model(),

	/**
	 * set up a default collection for the view to work with
	 * @type {Backbone}
	 */
	collection: new Backbone.Collection(),

	/**
	 * overide the default Backbone.View initialize method to handle optional arguments, compile the view
	 * template, bind model changes to view updates, and render the view
	 */
	initialize: function(){
		// initialize the base view
		this.base_initialize();

		// set up a display attribute
		this.display_attribute = (this.options.display_attribute !== undefined) ? this.options.display_attribute : 'cid';

		// set up a tag color to use
		this.tag_color = (this.options.tag_color !== undefined) ? this.options.tag_color : 'black';

		// look for custom listeners
		this.listener = (this.options.listener !== undefined) ? this.options.listener : undefined;

		this.listener = (this.options.listener !== undefined) ? this.options.listener : undefined;

		// clear built in listeners
		this.stopListening();

		// add listeners for the collection and trigger an update when it changes
		if (this.listener !== undefined){
			this.listenTo(this.collection,this.listener, this.update);
		}else{
			this.listenTo(this.collection,'add', this.update);
			this.listenTo(this.collection,'remove', this.update);
			this.listenTo(this.collection,'reset', this.update);
			this.listenTo(this.collection,'sort', this.update);
		}
	},

	/**
	 * completely render the view
	 * Updates both static and dynamic content in the view
	 */
	render: function(){
		var self = this;
		// call BaristaBaseView's render function first so we can layer on top of it
		this.base_render();

		// add a text element for each unique item in the collection
		this.x_offsets = [5];
		this.row_number = 0;
		this.y_offsets = [];
		this.lengths = [];
		this.tags = [];
		this.collection.models.forEach(function(model){
			self.tags.push(model.get(self.display_attribute));
		});
		this.tags = _.unique(this.tags);
		this.draw_tags();

		return this;
	},

	/**
	 * update the dynamic potions of the view
	 */
	update: function(){
		var self = this;
		// call BaristaBaseView's render function first so we can layer on top of it
		this.base_render();

		// add a text element for each unique item in the collection
		this.x_offsets = [5];
		this.row_number = 0;
		this.y_offsets = [];
		this.lengths = [];
		this.tags = [];
		this.collection.models.forEach(function(model){
			self.tags.push(model.get(self.display_attribute));
		});
		this.tags = _.unique(this.tags);
		this.draw_tags();

		return this;
	},

	/**
	 * fits the view height to the height taken by the tags displayed
	 */
	fit_height: function(){
		// set the view's height attribute based on the number of rows in the
		// vis
		var EmSize = Barista.getEmSizeInPixels(this.div_string);
		this.height = (this.row_number * 1.5 + 3.5) * EmSize;

		// rescale the height of the vis
		$("#" + this.div_string).animate({height:this.height},500);
		this.vis.transition().attr("height",this.height);
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([1])
			.transition(500)
			.attr("y",this.height - 10);

	},

	/**
	 * utility function to draw tags diven a data set
	 */
	draw_tags: function(){
		var self = this;
		// draw the foreground text of all the tags
		this.fg_layer.selectAll('.tag_list_text').data([]).exit().remove();
		this.fg_layer.selectAll('.tag_list_text').data(this.tags).enter().append('text')
			.attr("class","tag_list_text")
			.text(function(d){return d;})
			.attr("x",function(d,i){
				self.lengths.push(this.getComputedTextLength() + 15);
				var current_x_offset = self.x_offsets[i];
				if (current_x_offset + self.lengths[i] > self.width){
					self.x_offsets[i] = 5;
					self.x_offsets.push(self.lengths[i] + self.x_offsets[i]);
					self.row_number += 1;
				}else{
					self.x_offsets.push(self.lengths[i] + self.x_offsets[i]);
				}
				self.y_offsets.push((self.row_number * 1.5 + 1));
				return self.x_offsets[i];
			})
			.attr("y",function(d,i){return self.y_offsets[i] + 'em';})
			.attr("opacity",1)
			.attr("fill",this.fg_color)
			.style("cursor","pointer")
			.on("click",function(d){self.trigger("TagListView:DidSelect",{val: d});});

		// draw the background of all the tags
		this.bg_layer.selectAll('.tag_list_rect').data([]).exit().remove();
		this.bg_layer.selectAll('.tag_list_rect').data(this.tags).enter().append('rect')
			.attr("class","tag_list_rect")
			.attr("x",function(d,i){return self.x_offsets[i] - 5;})
			.attr("y",function(d,i){return (self.y_offsets[i] - 1) + 'em';})
			.attr("rx",4)
			.attr("ry",4)
			.attr('width',function(d,i){return self.lengths[i] - 4;})
			.attr('height','1.2em')
			.attr("opacity",1)
			.attr("fill",this.tag_color);
		this.fit_height();

		return this
	}
});

/**
 * tick_view = new TickView({el: $("target_selector"),
												model: new CMapTickModel({data:{PC3: [.23,-.28], MCF7: [-0.6]}, title: "example data"}),
												template: "../templates/d3_target.handlebars",
												bg_color: "#bdbdbd",
												span_class: "span12"
												});
 *
 * A Backbone.View that displays a Connectivity Map tick view
 * The view is must be paired with a CMapTickModel that describes the rows to display in the tick view and
 * the scores of the ticks to show for each row
 * An example input data object from a CMapTickModel might looks like this:
 * {PC3: [.23,-.28], MCF7: [-0.6]}
 * The view will render a row for each key in the data object and a tick for each entry in the array values
 * for each row
 * The view also renders a title based on the model's title attribute
 * optional arguments:
 * @param {string} template    The path to a handlebars template to use. Defaults to
 *                             ../templates/d3_target.handlebars
 * @param {string} bg_color    the hex color code to use as the backgound of the view, defaults to
 *                             #bdbdbd
 * @param {string} span_class  a bootstrap span class to size the width of the view, defaults to "span12"
 * example usage:
 */

Barista.Views.TickView = Backbone.View.extend({
	/**
	 * give the view a name to be used throughout the View's functions when it needs to know what its class
	 * name is
	 * @type {String}
	 */
	name: "TickView",

	/**
	 * set up the view's default model
	 * @type {Barista}
	 */
	model: new Barista.Models.TickModel(),

	/**
	 * overide the defualt Backbone.View initialize method to bind the view to model changes, bind window
	 * resize events to view re-draws, compile the template, and render the view
	 */
	initialize: function(){
		// set up color options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : "#eeeeee";
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "#span12";
		this.template = (this.options.template !== undefined) ? this.options.template : "../templates/d3_target.handlebars";

		// bind render to model changes
		this.listenTo(this.model,'change', this.redraw);

		// compile the default template for the view and draw it for the first time
		this.compile_template_and_draw();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.redraw();} );
	},

	/**
	 * use Handlebars to compile the template for the view and draw it for the first time
	 * tick_view.compile_template_and_draw();
	 */
	compile_template_and_draw: function(){
		var self = this;
		this.isCompiling = true;
		this.div_string = 'd3_target' + new Date().getTime();;
		this.compiled_template = BaristaTemplates.d3_target;
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class}));

		// define the location where d3 will build its plot
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		this.isCompiling = false;
		// draw the plot for the first time
		this.redraw();
	},

	/**
	 * perform a full redraw of the view, including wiping out all d3 drawn components in the view and 
	 * initializing them again from scratch
	 * tick_view.redraw();
	 */
	redraw: function(){
		var self = this;
		// set up the panel's width and height via animation
		this.width = $("#" + this.div_string).width();
		$("#" + this.div_string).animate({height:_.keys(this.model.get('data_object')).length*18 + 50},500);

		// once the height is determined, render the view
		setTimeout(function(){
			self.height = $("#" + self.div_string).outerHeight();
			self.init_view();
			self.render();
		},501);
	},

	/**
	 * set up the view from scratch
	 * Draw a background panel and place all dynamic content on that panel with defualt values
	 * tick_view.init_view();
	 */
	init_view: function(){
		// stuff "this" into a variable for use inside of scoped funcitons
		var self = this;

		// check to see if the container is visible, if not, make it visible, but transparent so we draw it with
		// the proper dimensions
		if (this.$el.is(":hidden")){
			this.$el.animate({opacity:0},1);
			this.$el.show();
		}

		// rescale the width of the vis
		this.vis.attr("width",this.width);

		// rescale the height of the vis
		this.vis.attr("height",this.height);

		// set up scaling and margin parameters for the vis
		this.margin = 25;
		this.well_offset = 80;
		this.x_scale=d3.scale.linear().domain([-1,1]).range([this.well_offset + this.margin, this.width - this.margin]);

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// build an xAxis
		var xAxis = d3.svg.axis()
			.scale(this.x_scale)
			.orient("bottom");

		// plot the x axis
		this.vis.selectAll('.axis').data([]).exit().remove();
		this.vis.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(0," + (this.height - this.margin) + ")")
			.call(xAxis);

		// style the axis
		this.vis.select('.axis').selectAll("path")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.select('.axis').selectAll("line")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.select('.axis').selectAll("text")
			.style("font-family","sans-serif")
			.style("font-size","11px");

		// grab data from the model and sort it according to the values in the object
		var data_array = _.pairs(this.model.get('data_object'));
		data_array = data_array.sort(function(a,b){
			if (Barista.arrayAverage(a[1]) < Barista.arrayAverage(b[1])) return 1;
			if (Barista.arrayAverage(a[1]) > Barista.arrayAverage(b[1])) return -1;
			return 0;
		});
		var keys = [];
		var values = [];
		data_array.forEach(function(category){
			keys.push(category[0]);
			values.push(category[1]);
		});

		// draw the static index reagent text
		this.fg_layer.selectAll('.title_text').data([]).exit().remove();
		this.fg_layer.selectAll('.title_text').data([1])
							.enter().append("text")
							.attr("class","title_text")
							.attr("x",this.width/2)
							.attr("y",17)
							.attr("fill","#56B4E9")
							.attr("font-family","Helvetica Neue")
							.attr("font-size","14pt")
							.attr("text-anchor","middle")
							.text(this.model.get('title'));

		// draw the static category wells
		this.fg_layer.selectAll('.category_well').data([]).exit().remove();
		this.fg_layer.selectAll('.category_well').data(keys)
							.enter().append("rect")
							.attr("class","category_well")
							.attr("x",this.margin + this.well_offset)
							.attr("y",function(d,i){return 18*i + 23;})
							.attr("height",17)
							.attr("width",this.width - this.margin*2 - this.well_offset)
							.attr("fill", function(d,i){
								if (i%2 == 0){
									return "#bdbdbd";
								}else{
									return "#999999";
								}
							});
		// draw the ticks
		values.forEach(function(value_array,i){
			tick_class = keys[i] + 'tick'
			self.fg_layer.selectAll('.' + tick_class).data([]).exit().remove();
			self.fg_layer.selectAll('.' + tick_class).data(value_array)
								.enter().append("rect")
								.attr("class","tick " + tick_class)
								.attr("x",self.x_scale)
								.attr("y",18*i + 23)
								.attr("height",17)
								.attr("width",3)
								.attr("fill", "#ff0000");
		});

		

		// add a png export overlay
		this.fg_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.fg_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",10)
			.attr("y",this.height - 10)
			.attr("opacity",0.25)
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});
	},

	/**
	 * render the dynamic content of the view based on the current state of the view's data model
	 * tick_view.render();
	 */
	render: function(){
		// grab data from the model and sort it according to the values in the object
		var data_array = _.pairs(this.model.get('data_object'));
		data_array = data_array.sort(function(a,b){
			if (Barista.arrayAverage(a[1]) < Barista.arrayAverage(b[1])) return 1;
			if (Barista.arrayAverage(a[1]) > Barista.arrayAverage(b[1])) return -1;
			return 0;
		});
		var keys = [];
		var values = [];
		data_array.forEach(function(category){
			keys.push(category[0]);
			values.push(category[1]);
		});

		// draw the static category text
		this.fg_layer.selectAll('.category_text').data([]).exit().remove();
		this.category_text_selection = this.fg_layer.selectAll('.category_text').data(keys);
		this.category_text_selection.enter().append("text")
							.attr("class","category_text")
							.attr("x",this.margin)
							.attr("y",function(d,i){return 18*i + 40;})
							.attr("font-family","Helvetica Neue")
							.attr("font-size","14pt")
							.text(function(d){return d;});

		this.category_text_selection.exit().remove();

	},

	/**
	 * pert_detail_view.hide(duration);
	 * 
	 * hides the view by dimming the opacity and hiding it in the DOM
	 * @param  {number} duration  the time in ms for the hide animation. defualts to 1
	 */
	hide: function(duration){
		duration = (duration !== undefined) ? duration : 1;
		var self = this;
		this.$el.animate({opacity:0},duration);
		var check_interval = setInterval(check_for_compiled_template(),1);
		function check_for_compiled_template(){
			if (!self.isCompiling){
				clearInterval(check_interval);
				self.width = $("#" + self.div_string).width();
				setTimeout(function(){self.$el.hide();},duration);
			}
		}
	},

	/**
	 * pert_detail_view.show(duration);
	 * 
	 * shows the view by brightening the opacity and showing it in the DOM
	 * @param  {number} duration  the time in ms for the show animation. defualts to 1
	 */
	show: function(duration){
		duration = (duration !== undefined) ? duration : 1;
		this.$el.show();
		this.$el.animate({opacity:1},duration);
	},

	/**
	 * save the current state of the view into a png image
	 */
	save_png: function(){
		// build a canvas element to store the image temporarily while we save it
		var width = this.vis.attr("width");
		var height = this.vis.attr("height");
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.vis.selectAll(".no_png_export");
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.vis.node().parentNode.innerHTML;
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = "cmapTickView" + new Date().getTime() + ".png";
		if (canvas.toBlob){canvas.toBlob(function(blob){saveAs(blob,filename);})};
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);
	}

});

/**
 * violin_plot_view = new ViolinPlotView({el: $("target_selector",
									bg_color:"#ffffff", 
									fg_color: "#1b9e77",
									span_class: "span4",
									scale_by: undefined,
									x_range: undefined,
									y_range: undefined,
									x_log: false,
									y_log: false,
									plot_height: 120});
 *
 * A Backbone.View that displays a single scatter plot
 * the view's model is assumed to have the same defaults as specified in ScatterPlotModel
 * basic use:
 * violin_plot_view = new ViolinPlotView();
 * optional arguments:
 * @param {string}  bg_color     the hex color code to use as the backgound of the view, defaults to
 *                               #ffffff
 * @param {string}  fg_color     the hex color code to use as the foreground color of the view, defaults
 *                               to #1b9e77
 * @param {string}  span_class   a bootstrap span class to size the width of the view, defaults to
 *                               "span12"
 * @param {array}   x_range      a two element array specifying the x plotting bounds of the plot,
 *                               defaults to [min(x_data),max(x_data)]
 * @param {array}   y_range      a two element array specifying the y plotting bounds of the plot,
 *                               defaults to [min(y_data),max(y_data)]
 * @param {boolean} x_log        if set to true, plots the x axis on a log scale, defaults to false
 * @param {boolean} y_log        if set to true, plots the y axis on a log scale, defaults to false
 * @param {number}  plot_height  the height of the plot in pixels, defaults to 120
 */
Barista.Views.ViolinPlotView = Barista.Views.BaristaBaseView.extend({
	/**
	 * set up the view's default model
	 * @type {Barista}
	 */
	model: new Barista.Models.ScatterPlotModel(),

	/**
	 * overide the default Backbone.View initialize method to handle optional arguments, compile the view 
	 * template, bind model changes to view updates, and render the view
	 */
	initialize: function(){
		// set up x and y range
		this.x_range = (this.options.x_range !== undefined) ? this.options.x_range : undefined;
		this.y_range = (this.options.y_range !== undefined) ? this.options.y_range : undefined;

		// set up x and y log flags
		this.x_log = (this.options.x_log !== undefined) ? this.options.x_log : false;
		this.y_log = (this.options.y_log !== undefined) ? this.options.y_log : false;

		// set up the scale_by parameter
		this.scale_by = (this.options.scale_by !== undefined) ? this.options.scale_by : undefined;

		// run BaristaBaseView's base_initialize method to handle boilerplate view construction
		// and initial view rendering
		this.base_initialize();

		// set up the default height for the plot
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : undefined;

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "span12";

		// bind render to model changes
		this.listenTo(this.model,'change', this.update);

		// compile the default template for the view
		this.compile_template();

		// define the location where d3 will build its plot
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		// render the vis
		this.render();

		// bind window resize events to render
		var self = this;
		$(window).resize(function() {self.render();} );
	},

	/**
	 * use Handlebars to compile the template for the view
	 */
	compile_template: function(){
		var self = this;
		this.div_string = 'd3_target' + new Date().getTime();;
		this.compiled_template = BaristaTemplates.d3_target;
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	/**
	 * completely render the view
	 * Updates both static and dynamic content in the view
	 */
	render: function(){
		this.base_render();
		this.init_plot();
		this.update();
	},

	/**
	 * initialize the static parts of the view's panel
	 */
	init_plot: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the margin
		this.margin = 50;

		// set up x and y ranges
		if (this.x_range === undefined){
			this.x_range = [_.min(this.model.get('x_data')),_.max(this.model.get('x_data'))];
		}
		if (this.y_range === undefined){
			this.y_range = [_.min(this.model.get('y_data')),_.max(this.model.get('y_data'))];
		}

		// set up scaling
		if (this.x_log){
			this.x_scale=d3.scale.log().domain([this.x_range[0],this.x_range[1]]).range([this.margin, this.width - this.margin]);
		}else{
			this.x_scale=d3.scale.linear().domain([this.x_range[0],this.x_range[1]]).range([this.margin, this.width - this.margin]);
		}
		if (this.y_log){
			this.y_scale=d3.scale.log().domain([this.y_range[1],this.y_range[0]]).range([this.margin, this.height - this.margin]);
		}else{
			this.y_scale=d3.scale.linear().domain([this.y_range[1],this.y_range[0]]).range([this.margin, this.height - this.margin]);
		}

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		// set up the panel's width and height
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();

		// rescale the width of the vis
		this.vis.transition().attr("width",this.width);
		this.vis.transition().attr("height",this.height);

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// build an Axes
		var xAxis = d3.svg.axis()
			.scale(this.x_scale)
			.orient("bottom");
		var yAxis = d3.svg.axis()
			.scale(this.y_scale)
			.orient("left");

		// plot the axes
		this.bg_layer.selectAll('.axis').data([]).exit().remove();
		this.bg_layer.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(0," + (this.height - this.margin) + ")")
			.call(xAxis);

		// style the axes
		this.vis.selectAll('.axis').selectAll("path")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("line")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("text")
			.style("font-family","sans-serif")
			.style("font-size","11px");

		// define an area generator for use in plotting data
		this.upper_area_generator = d3.svg.area()
			.x(function(d) { return self.x_scale(d.x); })
			.y0(this.y_scale(0))
			.y1(function(d) { return self.y_scale(d.y); })
			.interpolate('basis');
		this.lower_area_generator = d3.svg.area()
			.x(function(d) { return self.x_scale(d.x); })
			.y0(this.y_scale(0))
			.y1(function(d) { return self.y_scale(d.y * -1); })
			.interpolate('basis');

		// grab data from the model and package it such that we can iterate over it
		// and generate an area. The packaged data will be sorted by the x_data attribute
		this.x_data = this.model.get('x_data');
		this.y_data = this.model.get('y_data');
		this.path_data = [];
		this.x_data.forEach(function(x,i){ self.path_data.push({x: x, y: self.y_data[i]});});
		this.path_data.sort(this.path_data_sorter);

		// plot the data
		this.bg_layer.selectAll('.upper_violin').data([]).exit().remove();
		this.bg_layer.selectAll('.upper_violin').data([1]).enter().append('path')
			.attr("class","upper_violin")
			.attr("opacity",0.5)
			.attr("fill",this.fg_color)
			.attr('d',this.upper_area_generator(this.path_data));
		this.bg_layer.selectAll('.lower_violin').data([]).exit().remove();
		this.bg_layer.selectAll('.lower_violin').data([1]).enter().append('path')
			.attr("class","lower_violin")
			.attr("opacity",0.5)
			.attr("fill",this.fg_color)
			.attr('d',this.lower_area_generator(this.path_data));


		// plot the x axis title
		this.bg_layer.selectAll('.x_axis_label').data([]).exit().remove();
		this.bg_layer.selectAll('.x_axis_label').data([1]).enter().append('text')
			.attr("class","x_axis_label axis_label")
			.attr("x",this.width/2)
			.attr("y",this.height-10)
			.style("text-anchor","middle")
			.text(this.model.get('x_axis_title'));

		// plot the title
		this.bg_layer.selectAll('.title').data([]).exit().remove();
		this.bg_layer.selectAll('.title').data([1]).enter().append('text')
			.attr("class","title title")
			.attr("x",this.width/2)
			.attr("y",this.margin/2)
			.style("text-anchor","middle")
			.text(this.model.get('title'));

	},

	/**
	 * update the dynamic potions of the view
	 */
	update: function(){
		var self = this;
		// grab data from the model and package it such that we can iterate over it
		// and generate an area. The packaged data will be sorted by the x_data attribute
		this.x_data = this.model.get('x_data');
		this.y_data = this.model.get('y_data');
		this.path_data = [];
		this.x_data.forEach(function(x,i){ self.path_data.push({x: x, y: self.y_data[i]});});
		this.path_data.sort(this.path_data_sorter);

		// transition the data
		var upper = this.bg_layer.selectAll('.upper_violin');
		upper.transition().duration(500).attr('d',this.upper_area_generator(this.path_data));

		var lower = this.bg_layer.selectAll('.lower_violin');
		lower.transition().duration(500).attr('d',this.lower_area_generator(this.path_data));
	},

	/**
	 * internal method used to sort path_data list elements by the x attribute
	 * @param  {object} a  first element to compare
	 * @param  {object} b  second element to compare
	 */
	path_data_sorter: function(a,b) {
		if (a.x < b.x){
			return -1;
		}else{
			return 1;
		}
	}
});

/**
 * A view the displays both sequence structure and modifications
 */

Barista.Views.SequenceView = Barista.Views.BaristaBaseView.extend({
  /**
   * give the view a name to be used throughout the View's functions when it needs to know what its class
   * name is
   * @type {String}
   */
  name: "SequenceView",

  /**
   * the default model for the view
   * @type {backbone.Model}
   */
  model: new Barista.Models.SequenceModel(),

  /**
   * Overide the default Backbone.View initialize method to handle optional arguments, compile the view
   * template, bind model changes to view updates, and render the view
   */
  initialize: function(){
    // set up modification colors
    this.modificationColors = (this.options.modificationColors !== undefined) ? this.options.modificationColors : undefined;
    if (this.modificationColors === undefined) {
      this.modificationColors = {
        'ac': '#ff9933',
        'ox': '#00ccff'
      }
    }

    //set up default sequenceUnitSize
    this.sequenceUnitSize = (this.options.sequenceUnitSize !== undefined) ? this.options.sequenceUnitSize : 5;

    // initialize the base view
    this.base_initialize();

    // add a class to denote the widget type
    var $div = $("#" + this.div_string);
    $div.addClass("barista-sequence-view");
  },

  /**
   * completely render the view
   * Updates both static and dynamic content in the view
   * @return {SequenceView} A reference to this to support chaining
   */
  render: function(){
    var self = this;
    // call BaristaBaseView's render function first so we can layer on top of it
    this.base_render();

    // render a sequence line
    this.renderSequenceLine();

    // render modifications
    this.renderModifications();

    // render modifications text
    // this.renderModificationsText();

    // configure zooming
    this.setupZoom();

    return this;
  },

  /**
   * update the dynamic potions of the view
   * @return {SequenceView} A reference to this to support chaining
   */
  update: function(){
    this.render();

    return this;
  },

  /**
   * calculate the length of the sequence in pixels
   * @return {float} the length in pixels of the sequence to render
   */
  getRenderLength: function() {
    if (this.sequenceUnitSize * this.model.get('displaySequence').length > this.width - 20) {
      return this.width -20;
    }
    return this.sequenceUnitSize * this.model.get('displaySequence').length;

  },

  /**
   * render the line depicting the base sequence
   * @return {SequenceView} A reference to this to support chaining
   */
  renderSequenceLine: function() {
    var renderLength = this.getRenderLength();
    this.fg_layer.selectAll('.sequenceLine').data([]).exit().remove();
    this.fg_layer.selectAll('.sequenceLine').data([1]).enter()
      .append('rect')
      .attr("class","sequenceLine")
      .attr("height", 2)
      .attr("width",renderLength)
      .attr("x",5)
      .attr("y",this.height / 2 - 2)
      .attr("fill","#BFBFBF");

    return this;
  },

  /**
   * render the modifications on the sequence
   */
  renderModifications: function() {
    var self = this,
        renderLength = this.getRenderLength();

    this.fg_layer.selectAll('.sequenceModification').data([]).exit().remove();
    this.fg_layer.selectAll('.sequenceModification')
      .data(this.model.get('modifications').models).enter()
      .append('g')
      .each(function(d) {

        d3.select(this)
        .append('circle')
        .attr("class","sequenceModification")
        .attr('r', 10)
        .attr('fill', function(d) {
          var color = self.modificationColors[d.get('modification')];
          if (color === undefined) {
            return '#BDBDBD';
          } else {
            return color;
          }
        })
        .attr('cx', function(d) {
          var totalLength = self.model.get('displaySequence').length,
              positionPct = d.get('index') / totalLength;
          return positionPct * (renderLength) + 10;
        })
        .attr("cy",self.height / 2);

        d3.select(this)
        .append('text')
        .attr("class","sequenceModificationText")
        .attr('x', function(d) {
          var totalLength = self.model.get('displaySequence').length,
              positionPct = d.get('index') / totalLength;
          switch (self.model.get('displaySequence')[d.get('index') - 1]) {
            case 'M':
              return positionPct * (renderLength) + 4;
              break;
            default:
              return positionPct * (renderLength) + 5;
          }

        })
        .attr("y",self.height / 2 + 5)
        .text(function (d) {
          return self.model.get('displaySequence')[d.get('index') - 1];
        })
        .attr('fill','white')
        .attr('font-family','Open Sans')
        .attr('font-weight', 'bold');

      });
  },

  /**
   * renders text overlays for modifications
   */
  renderModificationsText: function() {
    var self = this,
        renderLength = this.getRenderLength();

    this.fg_layer.selectAll('.sequenceModificationText').data([]).exit().remove();
    this.fg_layer.selectAll('.sequenceModificationText')
      .data(this.model.get('modifications').models).enter()
      .append('text')
      .attr("class","sequenceModificationText")
      .attr('x', function(d) {
        var totalLength = self.model.get('displaySequence').length,
            positionPct = d.get('index') / totalLength;
        switch (self.model.get('displaySequence')[d.get('index') - 1]) {
          case 'M':
            return positionPct * (renderLength) + 4;
            break;
          default:
            return positionPct * (renderLength) + 5;
        }

      })
      .attr("y",this.height / 2 + 5)
      .text(function (d) {
        return self.model.get('displaySequence')[d.get('index') - 1];
      })
      .attr('fill','white')
      .attr('font-family','Open Sans')
      .attr('font-weight', 'bold');
  },

  /**
   * configure zoom behavior
   */
  setupZoom: function () {
    var self = this;
    // create the zoom listener
    var zoomListener = d3.behavior.zoom()
      .scaleExtent([1, 3])
      .on("zoom", zoomHandler);

    // function for handling zoom event
    function zoomHandler() {
      self.fg_layer.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }

    // apply the zoom behavior to the svg image
    zoomListener(this.vis);
  }

});

/**
Tile constructor
@param {object} [options={}] options object to set properties
@classdesc A Tile that displays simple information and serves as a front door to the an underlying app.  The 
tile is composted of a square div element that can be small, medium, or wide.  The height of the tile is 150px
for small and 300px for large tiles.  The width is expressed as bootstrap span units of 3(small), 6(medium), or
12(wide).  This base class provides mechanisms for injecting html into the DOM and showing or hiding the tile as
well as default styling
@class Tile
@constructor
@param {string}  [options.div_target] the div id into which to inject html, defaults to "body"
@param {string}  [options.div_id] the div id for generated html, defaults to "Tile" plus a random number
@param {string}  [options.style]  inline style specification, defaults to "#bdbdbd"
@param {string}  [options.color]  the background color of the tile, defuaults to 
@param {string}  [options.tile_type]  tile type, can be "small", "medium", or "wide", defaults to "medium"
@param {bool}  [options.display]  true to render the tile on object creation, false not to, defaults to true

**/
function Tile(options){
	options = (options !== undefined) ? options : {};
	this.div_target = (options.div_target !== undefined) ? options.div_target : "body";
	this.div_id = (options.div_id !== undefined) ? options.div_id : "Tile" + Math.floor(Math.random()*1000000000);
	this.link = (options.link !== undefined) ? options.link : "";
	this.style = (options.style !== undefined) ? options.style : "";
	this.color = (options.color !== undefined) ? options.color : "#bdbdbd";
	this.tile_type = (options.tile_type !== undefined) ? options.tile_type : "medium";
	this.display = (options.display !== undefined) ? options.display : true;

	// initialize the tile
	this.init_state = false;
	if (this.display){
		this.init();
	}
}

/**
Initializes Tile by building the appropriate html and injecting it into the DOM
@memberof Tile
@method init 
**/
Tile.prototype.init = function() {
	// build the html to inject into the DOM
	this.build_html();

	// inject the html into the target div
	this.inject();

	//draw the background of the tile
	this.draw_bg();

	// set the initialization flag to true
	this.init_state = true;

	// bind the tile to redraw when the window resizes
	var self = this;
	$(window).resize(function() {self.draw_bg();} );
};

/**
Builds the html for the tile based on the tile_type given in the constructor
@memberof Tile
@method build_html 
**/
Tile.prototype.build_html = function() {
	if (this.tile_type == "small"){
		this.html = '<div id="' + this.div_id + '" class="span3" style="height:150px ' + this.style + '"></div>';
	}
	if (this.tile_type == "medium"){
		this.html = '<div id="' + this.div_id + '" class="span6" style="height:300px ' + this.style + '"></div>';
	}
	if (this.tile_type == "wide"){
		this.html = '<div id="' + this.div_id + '" class="span12" style="height:300px ' + this.style + '"></div>';
	}
};

/**
Injects the Tile's html into the DOM at the target id given in the constructor
@memberof Tile
@method inject
**/
Tile.prototype.inject = function() {
	$(this.div_target).append(this.html);
};

/**
draws the tiles background using d3.js
@memberof Tile
@method draw_bg 
**/
Tile.prototype.draw_bg = function() {
	// get the correct height and width to draw
	this.width = $("#" + this.div_id).outerWidth();
	if (this.tile_type == "small"){
		this.height = 150;
	}else{
		this.height = 300;
	}

	// set up a top level svg selection if the tile needs to be initialized
	if (!this.init_state){
		this.svg=d3.select("#" + this.div_id).append("svg")
			.attr("class",this.div_id + "_tile_svg")
			.attr("width",this.width)
			.attr("height",this.height);

		// add a group to drawing elements
		this.svg.append("g").attr("class", "draw_layer");

		// add a group to link elements
		this.svg.append("g").attr("class", "link_layer");

		// add the link
		this.link_selection = this.svg.select('.link_layer').selectAll("rect.link_rect").data([1]);
		this.link_selection.enter().append("a")
			.attr("xlink:href",this.link)
			.append("rect")
			.attr("x",0)
			.attr("y",0)
			.attr("rx",20)
			.attr("ry",20)
			.attr("class","link_rect")
			.attr("height", this.height)
			.attr("width", this.width)
			.attr("fill", this.color)
			.attr("opacity",0);
	}

	// (re)draw the background
	this.svg.select('.draw_layer').selectAll("rect.bg").data([]).exit().remove();
	this.svg.select('.draw_layer').selectAll("rect.bg").data([1])
			.enter().append("rect")
			.attr("x",0)
			.attr("y",0)
			.attr("rx",20)
			.attr("ry",20)
			.attr("class","bg")
			.attr("height", this.height)
			.attr("width", this.width)
			.attr("fill", this.color);
};

/**
hides the tile
@param {object} [duration=0] the duration of a fade out animation applied before hiding the tile
@memberof Tile
@method hide 
**/
Tile.prototype.hide = function(duration) {
	duration = (duration !== undefined) ? duration : 0;
	$("#" + this.div_id).animate({opacity:0,width:0,height:0},duration);
	var self = this;
	setTimeout(function(){$("#" + self.div_id).hide();},duration);
};

/**
shows the tile
@param {object} [duration=0] the duration of a fade out animation applied after showing the tile
@memberof Tile
@method show 
**/
Tile.prototype.show = function(duration) {
	duration = (duration !== undefined) ? duration : 0;
	$("#" + this.div_id).show();
	$("#" + this.div_id).animate({opacity:1,width:this.width,height:this.height},duration);
};

/**
ImageTile constructor
@param {object} [options={}] options object to set properties
@classdesc A Tile that extends the base Tile to add an image in the center of the tile
@class ImageTile
@constructor
@extends Tile
@param {string}  [options.image] the url to use as the image,defaults to "../Bellhop/img.two_circles.png"
@param {string}  [options.div_target] the div id into which to inject html, defaults to "body"
@param {string}  [options.div_id] the div id for generated html, defaults to "Tile" plus a random number
@param {string}  [options.style] inline style specification, defaults to "#f0f0f0"
@param {string}  [options.color] the background color of the tile, defuaults to 
@param {string}  [options.tile_type] tile type, can be "small", "medium", or "wide", defaults to "medium"

**/
function ImageTile(options){
	this.image = (options.image !== undefined) ? options.image : "../Bellhop/img/CMap_Logo_gray.png";
	Tile.apply(this,arguments);
	var self = this;
	$(window).resize(function() {self.draw();} );
	this.draw();
}
ImageTile.prototype = new Tile({display:false});
ImageTile.prototype.constructor = ImageTile;

/**
top level draw wrapper around draw\_bg and draw\_image
@memberof ImageTile
@method draw 
**/
ImageTile.prototype.draw = function() {
	this.draw_bg();
	this.draw_image();
};

/**
draws the tile's image using d3.js
@memberof ImageTile
@method draw_image 
**/
ImageTile.prototype.draw_image = function() {
	// get the correct height and width to draw
	this.width = $("#" + this.div_id).outerWidth();
	if (this.tile_type == "small"){
		this.height = 150;
	}else{
		this.height = 300;
	}

	// set up a top level svg selection if the tile needs to be initialized
	if (!this.init_state){
		this.svg=d3.select("#" + this.div_id).append("svg")
			.attr("class",this.div_id + "_tile_svg")
			.attr("width",this.width)
			.attr("height",this.height);
	}

	// (re)draw the image
	this.image_size = this.height - 50;
	this.svg.select('.draw_layer').selectAll("image." + this.div_id).data([]).exit().remove();
	this.image_selection = this.svg.select('.draw_layer').selectAll("image." + this.div_id).data([1])
		.enter().append("image")
		.attr("xlink:href",this.image)
		.attr("class",this.div_id)
		.attr("x",this.width/2 - this.image_size/2)
		.attr("y",this.height/2 - this.image_size/2)
		.attr("height",this.image_size)
		.attr("width",this.image_size);
};

/**
AnimatedImageTextTile constructor
@param {object} [options={}] options object to set properties
@classdesc A Tile that extends the base Tile to add an image in the center of the tile
@class AnimatedImageTile
@constructor
@extends Tile
@param {string}  [options.image] the url to use as the image,defaults to "../Bellhop/img.two_circles.png"
@param {string}  [options.div_target] the div id into which to inject html, defaults to "body"
@param {string}  [options.div_id] the div id for generated html, defaults to "Tile" plus a random number
@param {string}  [options.style] inline style specification, defaults to "#f0f0f0"
@param {string}  [options.color] the background color of the tile, defuaults to 
@param {string}  [options.tile_type] tile type, can be "small", "medium", or "wide", defaults to "medium"

**/
function AnimatedImageTile(options){
	this.image = (options.image !== undefined) ? options.image : "../Bellhop/img/CMap_Logo_gray.png";
	Tile.apply(this,arguments);
	var self = this;
	$(window).resize(function() {self.draw();} );
	this.draw();
	this.start_animation();
}
AnimatedImageTile.prototype = new ImageTile({display:false});
AnimatedImageTile.prototype.constructor = AnimatedImageTile;

/**
top level draw wrapper around draw\_bg and draw\_image
@memberof AnimatedImageTile
@method draw 
**/
AnimatedImageTile.prototype.draw = function() {
	this.draw_bg();
	this.draw_image();
};

/**
starts periodic animation of the Image on the Tile
@memberof AnimatedImageTile
@method start_animation 
@param {int}  [duration=2000] duration the length of the animation in milliseconds
@param {int}  [frequency= 10000 to 20000] frequency the frequency of the animation in milliseconds
**/
AnimatedImageTile.prototype.start_animation = function(duration,frequency) {
	duration = (duration !== undefined) ? duration : 2000;
	frequency = (frequency !== undefined) ? frequency : 10000 + Math.random() * 10000;
	var self = this;
	setInterval(function(){
		self.image_selection.transition().duration(duration/2)
			.attr("y",-self.image_size - 10)
			.transition().duration(1)
			.attr("y",self.height + self.image_size + 10)
			.transition().duration(duration/2)
			.attr("y",self.height/2 - self.image_size/2);
	},frequency);
};


/**
ImageTextTile constructor
@param {object} [options={}] options object to set properties
@classdesc A Tile that extends ImageTile to add text 
@class ImageTextTile
@constructor
@extends ImageTile
@param {string}  [options.image] the url to use as the image,defaults to "../Bellhop/img.two_circles.png"
@param {string}  [options.div_target] the div id into which to inject html, defaults to "body"
@param {string}  [options.div_id] the div id for generated html, defaults to "Tile" plus a random number
@param {string}  [options.text] the text to display on the panel, defaults to "Title"
@param {string}  [options.style] inline style specification, defaults to "#f0f0f0"
@param {string}  [options.color] the background color of the tile, defuaults to 
@param {string}  [options.tile_type] tile type, can be "small", "medium", or "wide", defaults to "medium"

**/
function ImageTextTile(options){
	this.title = (options.title !== undefined) ? options.title : "Title";
	ImageTile.apply(this,arguments);
	var self = this;
	$(window).resize(function() {self.draw();} );
	this.draw();
}
ImageTextTile.prototype = new ImageTile({display:false});
ImageTextTile.prototype.constructor = ImageTextTile;

/**
top level draw wrapper around draw\_bg and draw\_image and draw\_text
@memberof ImageTextTile
@method draw 
**/
ImageTextTile.prototype.draw = function() {
	this.draw_bg();
	this.draw_image();
	this.draw_text();
};

/**
draws the tile's text using d3.js
@memberof ImageTextTile
@method draw_text 
**/
ImageTextTile.prototype.draw_text = function() {
	// get the correct height and width to draw
	this.width = $("#" + this.div_id).outerWidth();
	if (this.tile_type == "small"){
		this.height = 150;
	}else{
		this.height = 300;
	}

	// set up a top level svg selection if the tile needs to be initialized
	if (!this.init_state){
		this.svg=d3.select("#" + this.div_id).append("svg")
			.attr("class",this.div_id + "_tile_svg")
			.attr("width",this.width)
			.attr("height",this.height);
	}

	// (re)draw the text
	if (this.tile_type == "wide" || this.tile_type == "medium"){
		var x,y,height,width,html;
		if (this.tile_type == "wide"){
			x = this.width/3*2;
			y = this.height/10*5;
			height = this.height/10 * 5;
			width = this.width/3 - 20;
			html = '<h2>' + this.title + '</h2>';
		}
		if (this.tile_type == "medium"){
			x = 20;
			y = this.height/10*8.5;
			height = this.height/10 * 1.5;
			width = this.width - 40;
			html = '<h3>' + this.title + '</h3>';
		}
		this.svg.select('.draw_layer').selectAll('.tile_text').data([]).exit().remove();
		this.svg.select('.draw_layer').selectAll('.tile_text').data([this.title])
			.enter().append("foreignObject")
			.attr("class","tile_text")
			.attr("x",x)
			.attr("y",y)
			.attr("height",height)
			.attr("width",width)
			.append("xhtml:div")
			.style("background-color",this.color)
			.html(html);
	}

};

/**
AnimatedImageTextTile constructor
@param {object} [options={}] options object to set properties
@classdesc A Tile that extends ImageTile to add text that animates on mouseover
@class AnimatedImageTextTile
@constructor
@extends ImageTile
@param {string}  [options.image] the url to use as the image,defaults to "../Bellhop/img.two_circles.png"
@param {string}  [options.div_target] the div id into which to inject html, defaults to "body"
@param {string}  [options.div_id] the div id for generated html, defaults to "Tile" plus a random number
@param {string}  [options.text] the text to display on the panel, defaults to "Title"
@param {string}  [options.style] inline style specification, defaults to "#f0f0f0"
@param {string}  [options.color] the background color of the tile, defuaults to 
@param {string}  [options.tile_type] tile type, can be "small", "medium", or "wide", defaults to "medium"

**/
function AnimatedImageTextTile(options){
	this.title = (options.title !== undefined) ? options.title : "Title";
	ImageTile.apply(this,arguments);
	var self = this;
	$(window).resize(function() {self.draw();} );
	this.draw();
	this.TextIsAnimatingIn = false;
	this.TextIsAnimatingOut = false;
}
AnimatedImageTextTile.prototype = new ImageTile({display:false});
AnimatedImageTextTile.prototype.constructor = AnimatedImageTextTile;

/**
top level draw wrapper around draw\_bg and draw\_image and draw\_text
@memberof AnimatedImageTextTile
@method draw 
**/
AnimatedImageTextTile.prototype.draw = function() {
	this.draw_bg();
	this.draw_image();
	this.draw_text();
	//add callbacks to expose the display of the animated text
	var self = this;
	this.link_selection.on('mouseover',function(){self.show_text();});
	this.link_selection.on('mouseout',function(){self.hide_text();});
};

/**
show the text in the Tile
@memberof AnimatedImageTextTile
@method show_text
**/
AnimatedImageTextTile.prototype.show_text = function() {
	if (!this.TextIsAnimating){
		$("#" + this.div_id + "_tile_text").animate({opacity:1},500);
	}
	this.TextIsAnimating = true;
	var self = this;
	setTimeout(function(){self.TextIsAnimatingIn = false;},500);
};

/**
hide the text in the Tile
@memberof AnimatedImageTextTile
@method hide_text 
**/
AnimatedImageTextTile.prototype.hide_text = function() {
	if (!this.TextIsAnimating){
		$("#" + this.div_id + "_tile_text").animate({opacity:0},500);
	}
	this.TextIsAnimating = true;
	var self = this;
	setTimeout(function(){self.TextIsAnimatingOut = false;},500);
};

/**
draws the tile's text using d3.js
@memberof AnimatedImageTextTile
@method draw_text 
**/
AnimatedImageTextTile.prototype.draw_text = function() {
	// get the correct height and width to draw
	this.width = $("#" + this.div_id).outerWidth();
	if (this.tile_type == "small"){
		this.height = 150;
	}else{
		this.height = 300;
	}

	// set up a top level svg selection if the tile needs to be initialized
	if (!this.init_state){
		this.svg=d3.select("#" + this.div_id).append("svg")
			.attr("class",this.div_id + "_tile_svg")
			.attr("width",this.width)
			.attr("height",this.height);
	}

	// (re)draw the text
	var x,y,height,width,html;
	x = 0;
	y = 20;
	height = this.height - 40;
	width = this.width;
	if (this.tile_type == "wide"){
		html = '<h2>' + this.title + '</h2>';
	}
	if (this.tile_type == "medium" || this.tile_type == "small"){
		html = '<h3>' + this.title + '</h3>';
	}
	this.svg.select('.draw_layer').selectAll('.tile_text').data([]).exit().remove();
	this.svg.select('.draw_layer').selectAll('.tile_text').data([this.title])
		.enter().append("foreignObject")
		.attr("class","tile_text")
		.attr("x",x)
		.attr("y",y)
		.attr("height",height)
		.attr("width",width)
		.style("pointer-events","none")
		.append("xhtml:div")
		.attr("id",this.div_id + "_tile_text")
		.style("opacity",0)
		.style("background-color","#ffffff")
		.html(html);

};

/**
FullAnimatedImageTextTile constructor
@param {object} [options={}] options object to set properties
@classdesc A Tile that extends AnimatedImageTile to add text that animates on mouseover
@class FullAnimatedImageTextTile
@constructor
@extends ImageTile
@param {string}  [options.image] the url to use as the image,defaults to "../Bellhop/img.two_circles.png"
@param {string}  [options.div_target] the div id into which to inject html, defaults to "body"
@param {string}  [options.div_id] the div id for generated html, defaults to "Tile" plus a random number
@param {string}  [options.text] the text to display on the panel, defaults to "Title"
@param {string}  [options.style] inline style specification, defaults to "#f0f0f0"
@param {string}  [options.color] the background color of the tile, defuaults to 
@param {string}  [options.tile_type] tile type, can be "small", "medium", or "wide", defaults to "medium"

**/
function FullAnimatedImageTextTile(options){
	this.title = (options.title !== undefined) ? options.title : "Title";
	ImageTile.apply(this,arguments);
	var self = this;
	$(window).resize(function() {self.draw();} );
	this.draw();
	this.start_animation();
	this.TextIsAnimatingIn = false;
	this.TextIsAnimatingOut = false;
}
FullAnimatedImageTextTile.prototype = new AnimatedImageTile({display:false});
FullAnimatedImageTextTile.prototype.constructor = FullAnimatedImageTextTile;

/**
top level draw wrapper around draw\_bg and draw\_image and draw\_text
@memberof FullAnimatedImageTextTile
@method draw 
**/
FullAnimatedImageTextTile.prototype.draw = function() {
	this.draw_bg();
	this.draw_image();
	this.draw_text();
	//add callbacks to expose the display of the animated text
	var self = this;
	this.link_selection.on('mouseover',function(){self.show_text();});
	this.link_selection.on('mouseout',function(){self.hide_text();});
};

/**
show the text in the Tile
@memberof FullAnimatedImageTextTile
@method show_text
**/
FullAnimatedImageTextTile.prototype.show_text = function() {
	if (!this.TextIsAnimatingIn){
		$("#" + this.div_id + "_tile_text").animate({opacity:1},500);
	}
	this.TextIsAnimating = true;
	var self = this;
	setTimeout(function(){self.TextIsAnimatingIn = false;},500);
};

/**
hide the text in the Tile
@memberof FullAnimatedImageTextTile
@method hide_text 
**/
FullAnimatedImageTextTile.prototype.hide_text = function() {
	if (!this.TextIsAnimatingOut){
		$("#" + this.div_id + "_tile_text").animate({opacity:0},500);
	}
	this.TextIsAnimating = true;
	var self = this;
	setTimeout(function(){self.TextIsAnimatingOut = false;},500);
};

/**
draws the tile's text using d3.js
@memberof FullAnimatedImageTextTile
@method draw_text 
**/
FullAnimatedImageTextTile.prototype.draw_text = function() {
	// get the correct height and width to draw
	this.width = $("#" + this.div_id).outerWidth();
	if (this.tile_type == "small"){
		this.height = 150;
	}else{
		this.height = 300;
	}

	// set up a top level svg selection if the tile needs to be initialized
	if (!this.init_state){
		this.svg=d3.select("#" + this.div_id).append("svg")
			.attr("class",this.div_id + "_tile_svg")
			.attr("width",this.width)
			.attr("height",this.height);
	}

	// (re)draw the text
	var x,y,height,width,html;
	x = 0;
	y = 20;
	height = this.height - 40;
	width = this.width;
	if (this.tile_type == "wide"){
		html = '<h2>' + this.title + '</h2>';
	}
	if (this.tile_type == "medium" || this.tile_type == "small"){
		html = '<h3>' + this.title + '</h3>';
	}
	this.svg.select('.draw_layer').selectAll('.tile_text').data([]).exit().remove();
	this.svg.select('.draw_layer').selectAll('.tile_text').data([this.title])
		.enter().append("foreignObject")
		.attr("class","tile_text")
		.attr("x",x)
		.attr("y",y)
		.attr("height",height)
		.attr("width",width)
		.style("pointer-events","none")
		.append("xhtml:body")
		.attr("id",this.div_id + "_tile_text")
		.attr("height",height)
		.attr("width",width)
		.style("background-color","#ffffff")
		.style("opacity",0)
		.html(html);

};


//wrap all of our afterword code so we keep the global namespace clean.  All 'global' variables
//will be exposed in the Barista object
(function (){

    //set the user_key from a local file called barista_config if it is present
    //at either /public or /
    if (!Barista.setUserKey('/public/barista_config.json')){
      Barista.setUserKey('/barista_config.json');
    };

    //find all of the barista_target div elements on the page
    var all_divs = $('div');
    var barista_targets = [];
    Barista.generatedViews = {};
    all_divs.each(function () {
        var data_attrs = $(this).data();
        if (_.keys(data_attrs).indexOf('baristaView') !== -1){
            barista_targets.push(this);
        }
    });

    //for each barista target element, instantiate the view and attempt to call the
    //fetch method of its model. For some views this will not work, but many will.
    //The idea is that we want to populate the views with data when we can on page load
    //since the user is not instantiating the view via javascript.  For each target
    //Element we will also try to bind it to any views that it asks to be bound to. The
    //binding is assumed to be a binding between the any events coming out of the source view.
    //the event's 'val' attribute is fed to the view's model.fetch method
    barista_targets.forEach(function(target){
        //grab the view type and make sure it has a unique view name
        var view_num = 0;
        var view_type = $(target).data().baristaView;
        var view_name;
        if ($(target).attr('id')){
            view_name = $(target).attr('id');
        }else{
            view_name = view_type;
        }
        while (_.keys(Barista.generatedViews).indexOf(view_name) !== -1){
            view_num += 1;
            view_name = view_type + view_num;
        }

        //    instantiate the view and register it to the generatedViews object in
        //    Barista
        var view_params = _.extend({el: target},$(target).data());
        Barista.generatedViews[view_name] = new Barista.Views[view_type](view_params);

        //    try to call the view's fetch method and ignore errors that come up since
        //    we expect them for views that don't have models supporting a fetch
        //    operation
        try {
            Barista.generatedViews[view_name].model.fetch('');
        }catch(err){
        }

        //    try to bind views that are specified
        if (_.keys($(target).data()).indexOf('bind') !== -1){
            var bind_target = $(target).data().bind;
            Barista.generatedViews[view_name].listenTo(Barista.generatedViews[bind_target],'all',function(event_name, e){
                Barista.generatedViews[view_name].model.fetch(e.val);
            });
        }
    });
}());
