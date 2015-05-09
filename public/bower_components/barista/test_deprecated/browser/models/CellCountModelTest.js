var expect = chai.expect;

describe('CellCountModel',function(){
	describe('should have default',function(){
		it('pert_count equal to 0',function(){
			var o = new Barista.Models.CellCountModel();
			expect(o.get("count")).to.equal(0);
		});
		it('pert_types equal to [{}]',function(){
			var o = new Barista.Models.CellCountModel();
			expect(o.get("pert_types")).to.equal([{}]);
		});
		it('last_update equal to (new Date()).getTime()',function(){
			var o = new Barista.Models.CellCountModel();
			var diff = (new Date()).getTime() - o.get("last_update");
			expect(diff).to.be.below(100);
		});
	});
})