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
                        grade: 15,
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
        var lesson1 = { number:1,
                        name:"Learnability",
                        unit:1,
                        objective:"okjkj",
                        reading:"stuff",
                        lecture_notes:"notes",
                        quiz:"",
                        comments: "good lesson",
                        schedule_date: {
                            month: "5",
                            day: "10",
                            year: "2014"
                        }
        };
        var lesson2 = { number:2,
                        name:"Usability",
                        unit:1,
                        objective:"usable for all",
                        reading:"ppt 15",
                        lecture_notes:"ppt15b",
                        quiz:"none",
                        comments: "ok lesson",
                        schedule_date: {
                            month: "5",
                            day: "13",
                            year: "2014"
                        }
        };
        var lesson3 = { number:"3",
                        name:"Efficiency",
                        unit:"1",
                        objective:"work fast",
                        reading:"lecture note 12",
                        lecture_notes:"chapter 12, pg 1-17",
                        quiz:"n/a",
                        comments: "bad lesson",
                        schedule_date: {
                            month: "5",
                            day: "20",
                            year: "2014"
                        }
        };
        if (Lessons.find().count() === 0) {
            Lessons.insert(lesson1);
            Lessons.insert(lesson2);
            Lessons.insert(lesson3);
            console.log(lesson1);
            console.log("added lessons");
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

Meteor.publish('units', function () {
  //check(list_id, String);
  return Units.find({});
});

Meteor.publish('lessons', function () {
  //check(list_id, String);
  return Lessons.find({});
});///////

