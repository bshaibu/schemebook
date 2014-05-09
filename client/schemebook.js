if (Meteor.isClient) {
    //Routing
    Router.map(function() {
        //Routes to Home
        this.route('home', {path: 'home'});
        this.route('home', {path: 'index'});
        this.route('home', {path: '/'});

        //this.route('class');
        this.route('classes');
        this.route('profile');
        this.route('calendar');

        this.route('classes');
         
        this.route('login');
        this.route('register');

        //TZ 
        this.route('class',{
            path: '/:class_id',
            data: function() {
                console.log(this.params.class_id,"test");
                console.log(Classes.findOne({_id:this.params.class_id}));
                return Classes.findOne({_id:this.params.class_id});
            }
        });


        this.route('lesson',{
            path: '/class/:unitnumber/:lessonnumber',
            data: function(){
                var unitnumber = parseInt(this.params.unitnumber);
                var lessonnumber = parseInt(this.params.lessonnumber);
                var lesson = Lessons.findOne({unit:unitnumber,number:lessonnumber});
                //Session.set("selected_unit",lessonnumber);
                return lesson;
            }
        });

        this.route('createlesson',{
          path:'/class/newlesson',
          action:function(){
            this.render('lesson');
          }
        });

        //Missing Path
        this.route('notFound', {path: "*"});
    });

    //Session Variables
    Session.setDefault('displayMessage', null);

    //Start Up Functions
    Meteor.startup(function () {
      //pass
    });
}

//Utilities
// Credit to cmather, https://github.com/EventedMind/iron-router/issues/82
//Credit to CodeWall, https://coderwall.com/p/ahlrua
// Determine if current link should be active
Handlebars.registerHelper('active', function(path) {
    var currentRoute = Router && Router.current() && Router.current().path;
    console.log("currentRoute: "+currentRoute);
    //console.log("path: "+ path);
    //console.log("dog");
    return currentRoute == path ? 'active' : '';
});

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