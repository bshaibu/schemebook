Session.setDefault("selected_unit",1);

Template.class.units=function() {
	return Units.find({});
};
//name, number, class, lessons

Template.selected_unit