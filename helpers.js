/*

//Official Way
Handlebars.registerHelper('my_helper', function() {
     // code
});

//Interesting Trick
for (var t in Template) {
    Template[t].say_foo = say_foo;
}

//Cool Trick
var say_foo = function() {
  alert('foo');
};

Template.foo.say_foo = say_foo;
Template.bar.say_foo = say_foo;

//Cooler Trick
Template.foo.say_foo = 
Template.bar.say_foo = function() { alert('foo'); };

*/