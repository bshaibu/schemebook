//This renders the template with lesson data if in edit mode
Template.lesson.rendered=function() {
/*<<<<<<< HEAD*/
	$('.datetimepicker').datetimepicker({
		 pickTime: false,
		 direction: 'up'
	});
	if(Session.get("lesson_item_selected")){
		
		var lessonInfo=Lessons.findOne({_id:Session.get("lesson_item_selected_id")})
		//console.log(lessonInfo.name,"lessonName");
    	//$("#lesson_name").val(lessonInfo.name);
    	$("#objective").val(lessonInfo.objective);
    	console.log(lessonInfo);
/*=======
    $('.datetimepicker').datetimepicker({
         pickTime: false
    });
    if(Session.get("lesson_item_selected")){
        
        var lessonInfo=Lessons.findOne({_id:Session.get("lesson_item_selected_id")})
        //console.log(lessonInfo.name,"lessonName");
        //$("#lesson_name").val(lessonInfo.name);
        $("#objective").val(lessonInfo.objective);
        console.log(lessonInfo);
>>>>>>> 885670a1e3ebc6e7d29cebfc751b3fa5903ba6bd*/

        var month=lessonInfo.schedule_date.month;
        var day=lessonInfo.schedule_date.day;
        var year=lessonInfo.schedule_date.year;

        $('#month_of_lesson option[value="'+month+'"]').attr('selected','selected');
        $('#day_of_lesson option[value="'+day+'"]').attr('selected','selected');
        $('#year_of_lesson option[value="'+year+'"]').attr('selected','selected');
    }
};


Template.lesson.ofUnit=function() {
    console.log(Session.get("selected_unit"));
    return Session.get("selected_unit");
};

Template.lesson.events({
    'click #save_new_lesson_btn':function() {

/*<<<<<<< HEAD*/
		var lessonName=$("#lesson_name").val();
		var objective=$("#objective").val();
		/*var lessonMonth=$("#month_of_lesson").val();
		var lessonDay=$("#day_of_lesson").val();
		var lessonYear=$("#year_of_lesson").val();
		var date=lessonMonth+"/"+lessonDay+"/"+lessonYear;*/
		var lessonNumber=Lessons.find({}).count();
        
		var dateString=$('#date-picker').val();
		var date=dateString.split("/");
		var unit=Session.get("selected_unit");

/*=======
        var lessonName=$("#lesson_name").val();
        var objective=$("#objective").val();
        var lessonMonth=$("#month_of_lesson").val();
        var lessonDay=$("#day_of_lesson").val();
        var lessonYear=$("#year_of_lesson").val();
        var date=lessonMonth+"/"+lessonDay+"/"+lessonYear;
        var lessonNumber=Lessons.find({}).count();
        var unit=Session.get("selected_unit");
        //console.log(lessonName,lessonMonth,lessonDay,lessonYear,objective);
>>>>>>> 885670a1e3ebc6e7d29cebfc751b3fa5903ba6bd*/

        if(Session.get("lesson_item_selected")){
            lessonNumber=Session.get("lesson_item_selected_num");
        }

        if(lessonName.length==0){
            alert("Provide Lesson Name");
            return;
        }
        
        if(lessonName[0].search("[a-zA-Z0-9]")==-1){
            alert("Provide at least one alpha-numeral");
            return;
        }

<<<<<<< HEAD
	    /*if(lessonMonth=="Month" || lessonDay=="Day" || lessonYear=="Year"){
	    	alert("Provide date of lession");
	    	return;
	    }*/

	    if(dateString.length!=10 || date.length!=3){
	    	alert("Provide date of lesson");
	    	return;
	    }

        




    	Lessons.update({_id:Session.get("lesson_item_selected_id")},
    	           {name:lessonName,
	    	           number:lessonNumber,
	    	           objective:objective,
	    	           schedule_date:{month:date[0],day:date[1],year:date[2]},
	    	           unit:unit},
    	           {upsert:true});
	    	Router.go("/"+Session.get("selected_class_id"));
	    
	    
	},

	'click #cancel_lesson_save_btn':function() {
		Router.go("/"+Session.get("selected_class_id"));
	}
})

Template.lesson.class_name=function() {
	console.log(Classes.findOne({_id:Session.get("selected_class_id")}));
	return Classes.findOne({_id:Session.get("selected_class_id")}).classname;
};
/*=======
        if(lessonMonth=="Month" || lessonDay=="Day" || lessonYear=="Year"){
            alert("Provide date of lession");
            return;
        }

        Lessons.update({_id:Session.get("lesson_item_selected_id")},
                   {name:lessonName,
                       number:lessonNumber,
                       objective:objective,
                       schedule_date:{month:lessonMonth,day:lessonDay,year:lessonYear},
                       unit:unit},
                   {upsert:true});
            Router.go("class");
    },

    'click #cancel_lesson_save_btn':function() {
        Router.go("class");
    }
});
>>>>>>> 885670a1e3ebc6e7d29cebfc751b3fa5903ba6bd*/
