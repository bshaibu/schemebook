Session.setDefault("selected_unit",1);
Session.setDefault("lesson_item_selected",false);
Session.setDefault("lesson_item_selected_id",null);
Session.setDefault("lesson_item_selected_num",null);
//Session.setDefault("lesson_of_selected_checkbok",null);

var checked_lessons=[];

Template.class.rendered=function() {
    //This makes sure that every time the template is rendered the variables are reset
    Session.set("lesson_item_selected",false);
    Session.set("lesson_item_selected_id",null);
    Session.set("lesson_item_selected_num",null);
    //Session.set("lesson_of_selected_checkbok",null);
    checked_lessons=[];//////

};

Template.class.units=function() {
    return Units.find({});
};


Template.class.events({
    'click #create_lesson_btn':function() {
        Router.go("/class/newlesson");
    },

//<<<<<<< HEAD
	'click #delete_lesson_btn':function() {
		//lesson_doc=Session.get("lesson_of_selected_checkbok");//document to be deletede
		for(var i=0;i<checked_lessons.length;i++){
			Lessons.remove(checked_lessons[i]._id);
		}

		if(checked_lessons.length==0){
			$('#select-all-checkboxes').prop('checked', true);
		}
	},

	'change #select-all-checkboxes':function(evt) {
		if(evt.currentTarget.checked){
			$('.checkbox').prop('checked', true);
			numOfSelectedUnit=Session.get("selected_unit");

			checked_lessons=Lessons.find({
				unit:numOfSelectedUnit},
				{_id:1}).map(function(item){
				 return item;
				});

	    }

	    else{
	    	$('.checkbox').prop('checked', false);
	    	checked_lessons=[];
	    }
	}

});

Template.selected_unit.lesson=function() {
    return Lessons.find({unit:Session.get("selected_unit")});
};

Template.selected_unit_lesson.events({
    'click .lesson-name-td':function() {////////
        console.log(this.number,this.name,this.objective,this._id);
        Session.set("lesson_item_selected",true);
        Session.set("lesson_item_selected_id",this._id);
        Session.set("lesson_item_selected_num",this.number);
        Router.go("/class/"+this.unit+"/"+this.number);
    },


	'change .checkbox' :function(evt){
		console.log("hosa");
		if(evt.currentTarget.checked){
  			//Session.set("lesson_of_selected_checkbok",this);
  			checked_lessons.push(this);
  			numOfSelectedUnit=Session.get("selected_unit");
  			lessonsInSelectedUnit=Lessons.find({unit:numOfSelectedUnit}).count();
            
            console.log(lessonsInSelectedUnit);
            console.log(checked_lessons.length);
  			if(checked_lessons.length==lessonsInSelectedUnit){
  				$('#select-all-checkboxes').prop('checked', true);
  			}
		}

        else{
            index=checked_lessons.indexOf(this);
            if(index>-1){
                checked_lessons.splice(index,1);
            }
            $('#select-all-checkboxes').prop('checked', false);
            //Session.set("lesson_of_selected_checkbok",null);
        }
        
    },

    'change .check-progress' :function(evt) {
    	if(evt.currentTarget.checked){////////
    		Lessons.update({_id:this._id},{$set: {checked: true}});
    	}

    	else{
			Lessons.update({_id:this._id},{$set: {checked: false}});
    	}
    }
})

Template.unit.events({
    'click':function() {
        console.log(this.name);
        console.log(this.number);
        Session.set("selected_unit",this.number);
    }
});

Template.unitTwo.events({
    'click':function() {
        console.log(this.name);
        console.log(this.number);
        Session.set("selected_unit",this.number);
    }
});


Template.class.unitNumGreaterThanNine=function(value) {
	console.log("hehhe");
	if(value>10){
		return true;
	}
	return false;
};

Template.class.unitsGreaterThanNine=function() {
	console.log("nine");
	return Units.find({}).count()>10;
};