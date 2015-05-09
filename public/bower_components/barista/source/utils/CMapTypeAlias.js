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