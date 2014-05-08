if (Meteor.isClient) {
  //Routing
  Router.map(function() {
    this.route('home', {path: '/'});
    this.route('class');
    this.route('classes');
    this.route('lesson');
    this.route('profile');
    this.route('calendar');
    this.route('login');
    this.route('register');
    this.route('notFound', {path: "*"});
  });
}

/*

//Routing for Individual Classes

this.route('classDetail', { 
  path: '/class/:_id',
  data: function() { return Classes.findOne(this.params._id); }
});

//put last

Router.configure({
//layoutTemplate: 'layout',
notFoundTemplate: 'findesikke',
});

this.routte('notFound', {
  path: "*"
});

*/
