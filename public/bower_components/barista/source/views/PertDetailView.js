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
