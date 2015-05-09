describe('HeatMapModel',function(){
	describe('should have default',function(){
		it('data equal to [[1,2],[3,4]]',function(){
			var o = new Barista.Models.HeatmapModel();
			expect(o.get("data")).toEqual([[1,2],[3,4]]);
		});
		it("rid equal to ['1','2']",function(){
			var o = new Barista.Models.HeatmapModel();
			expect(o.get("rid")).toEqual(['1','2']);
		});
		it("cid equal to ['1','2']",function(){
			var o = new Barista.Models.HeatmapModel();
			expect(o.get("cid")).toEqual(['1','2']);
		});
		it('title equal to ""',function(){
			var o = new Barista.Models.HeatmapModel();
			expect(o.get("title")).toEqual("");
		});
		it('last_update equal to (new Date()).getTime()',function(){
			var o = new Barista.Models.HeatmapModel();
			var diff = (new Date()).getTime() - o.get("last_update");
			expect(diff).toBeLessThan(100);
		});
	});
})