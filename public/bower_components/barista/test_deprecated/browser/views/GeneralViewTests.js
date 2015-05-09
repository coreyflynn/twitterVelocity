// general tests of common view parameters
var views = [];
for (i in Barista.Views){
	views.push(i);
}

views.forEach(function(current_view){
	// make sure the view instantiates itself as a standalone with no
	// arguments without error
	describe(current_view,function(){
		it('should instantiate a new instance with no arguments',function(){
			eval('var o = new Barista.Views.' + current_view + '()');
		});

	// make sure that all views have a name attribute
		it('should have a name attribute',function(){
			eval('var o = new Barista.Views.' + current_view + '()');
			expect(o.name).to.not.equal(undefined);
		});

	// make sure that all views have a div_string attribute
		it('should have a div_string attribute',function(){
			eval('var o = new Barista.Views.' + current_view + '()');
			expect(o.div_string).to.not.equal(undefined);
		});

	// make sure all views inherit from a primitive view
		it('should inherit from from a view primitive',function(){
			var primitives = ['BaristaBaseView',
							  'CMapFooterView',
							  'CMapHeaderView',
							  'GridView'
							  ];
			eval('var o = new Barista.Views.' + current_view + '()');
			expect(primitives).to.include.members([o.__proto__.name]);
		});
	});
});