if (Meteor.isClient) {
  //Routing
  Router.map(function() {
    this.route('home', {path: '/'});
    this.route('class');
    this.route('classes');
    //this.route('lesson');
    this.route('profile');
    this.route('calendar');
    this.route('login');
    this.route('register');

    //TZ 
    this.route('lesson',{
      path:'/class/:unitnumber/:lessonnumber',
      data:function(){
        unitnumber=parseInt(this.params.unitnumber);
        lessonnumber=parseInt(this.params.lessonnumber);
        lesson=Lessons.findOne({unit:unitnumber,number:lessonnumber});
        //Session.set("selected_unit",lessonnumber);
        return lesson;
      }
    })
  });
}