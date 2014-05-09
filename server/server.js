if (Meteor.isServer) {

    //User: name, username, school, password, classes
    Meteor.startup(function () {
        // code to run on server at startup
        //Add Dummy Data
        if (Meteor.users.find().count() === 0) {
            console.log("no users buckaroo");
            Accounts.createUser({   username: "someUserName",
                                    email: "anemail@email.com",
                                    password : "password",
                                    profile: {  name: "Dummy User"}
            });
        }
        if (Classes.find().count() === 0) {
            Classes.insert({name: "6.813", teacher: "Rob Miller", school: "MIT", units:"1"});
        }
        if (Units.find().count() === 0) {
            Units.insert( { name: "Learnability", number: "1", class:"6.813", lessons: "{1,2,3}" } );
        }
        if (Lessons.find().count() === 0) {
            Lessons.insert({
                number:"1",
                name:"",
                unit:"Learnability",
                objective:"",
                reading:"",
                lecture_notes:"",
                quiz:"",
                comments: "",
                scheduled_date: ""
            });
        }
  });
}

Meteor.publish("klasses",function(xum){
	return Classes.find({},{limit:10,skip:xum});
});






Meteor.publish('classes', function () {
  //check(list_id, String);
  return Classes.find({});
});

Meteor.publish('units', function (class_id) {
  //check(list_id, String);
  return Units.find({class_id:class_id});
});

Meteor.publish('lessons', function () {
  //check(list_id, String);
  return Lessons.find({});
});

