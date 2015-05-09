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

