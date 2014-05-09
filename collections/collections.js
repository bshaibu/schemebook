//Collections
Classes = new Meteor.Collection('classes');
Units = new Meteor.Collection('units');
Lessons = new Meteor.Collection('lessons');
Mina = new Meteor.Collection("mina");

//Database Schema

    //Class: name, teacher, school, units
    //Unit: name, number, class, lessons
    //Lesson: number, name, unit, objective, reading, lecture_notes, quiz, comments, scheduled_date
    //User: name, username, school, password, classes
