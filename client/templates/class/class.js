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
    checked_lessons=[];

};

Template.class.units=function() {
    return Units.find({});
};


Template.class.events({
    'click #create_lesson_btn':function() {
        Router.go("/class/newlesson");
    },

    'click #delete_lesson_btn':function() {
        //lesson_doc=Session.get("lesson_of_selected_checkbok");//document to be deletede
        for(var i=0;i<checked_lessons.length;i++){
            Lessons.remove(checked_lessons[i]._id);
        }
    },

    'change #select-all-checkboxes':function(evt) {
        if(evt.currentTarget.checked){
            $('.checkbox').prop('checked', true);
        }

        else{
            $('.checkbox').prop('checked', false);
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
        //Router.go("lesson");///////////////////////////////////////////////////////////////////
        Router.go("/class/"+this.unit+"/"+this.number);
    },

    'change .checkbox' :function(evt){
        console.log("hosa");
        if(evt.currentTarget.checked){
            //Session.set("lesson_of_selected_checkbok",this);
            checked_lessons.push(this);
        }

        else{
            index=checked_lessons.indexOf(this);
            if(index>-1){
                checked_lessons.splice(index,1);
            }
            $('#select-all-checkboxes').prop('checked', false);
            //Session.set("lesson_of_selected_checkbok",null);
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