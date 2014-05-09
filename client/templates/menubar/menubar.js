Template.menubar.events({
    'click #logout-button': function(evt, tmpl) {
        Meteor.logout(function(err) {
            //Failure
            if (err) {
                console.log("oops");
            }
            //Success
            else {
                console.log("success!");
                Router.go("login");
            }
        });
    }
});