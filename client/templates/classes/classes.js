Session.setDefault("record", 0);
Session.setDefault("selected_class_id",null);

Meteor.autorun(function(){
  Meteor.subscribe("klasses",Session.get("record"));
});


////////// Helpers for in-place editing //////////

// Returns an event map that handles the "escape" and "return" keys and
// "blur" events on a text input (given by selector) and interprets them
// as "ok" or "cancel".

var okCancelEvents = function (selector, callbacks) {
  var ok = callbacks.ok || function () {};
  var cancel = callbacks.cancel || function () {};

  var events = {};
  events['keyup '+selector+', keydown '+selector+', focusout '+selector] =
    function (evt) {
      if (evt.type === "keydown" && evt.which === 27) {
        // escape = cancel
        cancel.call(this, evt);

      } else if (evt.type === "keyup" && evt.which === 13 ||
                 evt.type === "focusout") {
        // blur/return/enter = ok/submit if non-empty
        var value = String(evt.target.value || "");
        if (value)
          ok.call(this, value, evt);
        else
          cancel.call(this, evt);
      }
    };

  return events;
};


//this functions returns the list of all classes
Template.classes.class=function(){
	return Classes.find({});
}

Template.classes.events({
 
     "click #save_data":function(){
    

      var classname=$("#classname").val();
      var gra=$("#grade").val();
      var sch=$("#school").val();     
      console.log("contents in the database"+Classes.find().count());
      
   
    var len=classname.length;
    if(len>0){      
      Classes.insert({classname:classname,grade:gra,school:sch});
    }
    clearValues();
    
      
   
    },
    "click #modal_toggler":function(){
      $("#modal-id").modal('show');
    },
    'click #pg_left':function(evt,tml){
   
      if(Number(Session.get('record'))>9){

        Session.set("record",Number(Session.get('record'))-10);
      }

    },
     'click #pg_right':function(evt,tml){
        
        Session.set("record",Number(Session.get('record'))+10);
      

    }

  
});


Template.the_class.events({
  'click':function(){
    console.log(this._id,this.classname,this.school);
    
    
    /////Router.go("class");
    Session.set("selected_class_id",this._id);
    Router.go("/"+this._id);///rep
  }
})

var clearValues=function(){
  
  $("#classname").val("");
  $("#grade").val("");
  $("#school").val("");  
  $("#modal-id").modal('hide');
  
}
