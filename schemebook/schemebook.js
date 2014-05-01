// Declare Collections
Classes = new Meteor.Collection("classes");
Units  = new Meteor.Collection("units");
Lessons  = new Meteor.Collection("lessons");

/*	Database Schema
Class: name, teacher, school, units
Unit: name, number, class, lessons
Lesson: number, name, unit, objective, reading, lecture_notes, quiz, comments, scheduled_date
User: name, username, school, password,classes
*/


if (Meteor.isClient) {
	Template.classes.classes = function(){
		return Classes.find({});
  	};

}

if (Meteor.isServer) {
  Meteor.startup(function () {
  	if (Classes.find().count() === 0){
  		Classes.insert({name:"ui", teacher:"Phu" , school:"MIT",units:"Cells and tissues"});
  	}
  });
}
