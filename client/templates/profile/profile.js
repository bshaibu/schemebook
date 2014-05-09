Template.editProfile.events({
    'click #save':function(evt,tmpl){
        var email = tmpl.find('#account-email').value,
            old_password = tmpl.find('#account-old-password').value,
            password = tmpl.find('#account-password').value,
            confirmation = tmpl.find('#account-confirm-password').value,
            username = tmpl.find('#account-user-name').value,
            name = tmpl.find('#account-full-name').value,
            pic_url = tmpl.find('#account-pic-url').value;
        if (password == confirmation) {
            Accounts.changePassword(old_password, password, function(err) {
                if (err) {
                    console.log("err");
                }
                else {
                    console.log("succsess");
                }
            });
            Meteor.users.update({_id:Meteor.user()._id},
                {$set:{ "profile.name":name,
                        "profile.pic_url":pic_url,
                        "profile.email":email
            }});
        }
        else {
            console.log("pass off");
        }
        Session.set('editingProfile', false);
        Router.go('profile');
    },
    'click #cancel':function(evt,tmpl){
        Session.set('editingProfile', false);
        Router.go('profile');
    }
});

Template.profile.events({
    "click #editProfileButton": function(){
        Router.go("editProfile");
        Session.set('editingProfile', true);
    },
});