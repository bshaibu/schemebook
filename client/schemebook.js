if (Meteor.isClient) {
  //Routing
  Router.map(function() {
    this.route('home', {path: '/'});
    this.route('class');
    this.route('classes');
    this.route('lesson');
    this.route('profile');
    this.route('calendar');
  });
}