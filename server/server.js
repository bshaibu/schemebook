if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
        //Add Dummy Data
        var option1 = { username: "user",
                        email: "user@mit.edu",
                        password : "password",
                        profile: {
                            name: "Mike Tyson",
                            email: "user@mit.edu",
                            pic_url: ''}
        };
        var option2 = { username: "user2",
                        email: "user2@mit.edu",
                        password : "password",
                        profile: {
                            name: "Justin Beiber",
                            email: "user2@mit.edu",
                            pic_url: ''}
        };
        if (Meteor.users.find().count() === 0) {
            console.log("no users buckaroo");
            Accounts.createUser(option1);
            Accounts.createUser(option2);
        }
        var class1  = { classname: "6.813",
                        teacher: "Rob Miller",
                        school: "MIT",
                        units: "1"};

        if (Classes.find().count() === 0) {
            Classes.insert(class1);
        }
        var unit1 = {   name: "Learnability", 
                        number: "1", 
                        class:"6.813", 
                        lessons: "{1,2,3}" };
        var unit2 = {   name: "Typography", 
                        number: "2", 
                        class:"6.813", 
                        lessons: "{1,2,3}" };
        if (Units.find().count() === 0) {
            Units.insert(unit1);
            Units.insert(unit2);
        }
        var lesson1 = { number:"1",
                        name:"",
                        unit:"Learnability",
                        objective:"",
                        reading:"",
                        lecture_notes:"",
                        quiz:"",
                        comments: "",
                        scheduled_date: ""
        };
        var lesson2 = { number:"2",
                        name:"",
                        unit:"Usability",
                        objective:"",
                        reading:"",
                        lecture_notes:"",
                        quiz:"",
                        comments: "",
                        scheduled_date: ""
        };
        var lesson3 = { number:"3",
                        name:"",
                        unit:"Efficiency",
                        objective:"",
                        reading:"",
                        lecture_notes:"",
                        quiz:"",
                        comments: "",
                        scheduled_date: ""
        };
        if (Lessons.find().count() === 0) {
            Lessons.insert(lesson1);
            Lessons.insert(lesson2);
            Lessons.insert(lesson3);
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

