describe('PertCellBreakdownModel',function(){

	// test default values
	describe('should have default',function(){

		// filter
		it('filter equal to ""',function(){
			var o = new Barista.Models.PertCellBreakdownModel();
			expect(o.get('filter')).toEqual("");
		});

		// tree object
		it ('tree object equal to {children:{}}',function(){
			var o = new Barista.Models.PertCellBreakdownModel();
			expect(o.get('tree_object')).toEqual({children:[]});
		});

	});
});