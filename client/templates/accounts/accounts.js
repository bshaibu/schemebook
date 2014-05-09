Template.login.events({
    'submit #login-form': function(evt, tmpl) {
        evt.preventDefault();
        // retrieve the input field values
        var email = tmpl.find('#login-email').value,
            password = tmpl.find('#login-password').value;

        // Trim and validate your fields here....
        email = trimInput(email);

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(email, password, function(err) {
            if (err) {
                // The user might not have been found, or their passwword
                // could be incorrect. Inform the user that their
                // login attempt has failed.
                console.log("failure");
            }
            else {
                // The user has been logged in.
                console.log("success!");
                Router.go('/');
            }
        });
        
        return false;
    }
});

Template.register.events({
    'submit #register-form' : function(evt, tmpl) {
        evt.preventDefault();
        // retrieve the input field values
        var email = tmpl.find('#account-email').value,
            password = tmpl.find('#account-password').value,
            confirmation = tmpl.find('#account-confirm-password').value,
            username = tmpl.find('#account-user-name').value,
            name = tmpl.find('#account-full-name').value;

        var createCallback = function(err) {
            if (err) {
                // Inform the user that account creation failed
                Session.set('displayMessage', 'Failed to Create');
            }
            else {
                // Success. Account has been created and the user
                // has logged in successfully. 
                console.log("success");
                Router.go('/');
            }
        };

        var accountOptions = {   username: username,
                                    email: email,
                                    password : password,
                                    profile: {
                                        name: name,
                                        email: email,
                                        pic_url: ''}
        };

        // Trim and validate the input
        email = trimInput(email);

        if ( isValidPassword(password) && areMatchingPasswords(password, confirmation) ) {
            Accounts.createUser(accountOptions, createCallback);
        }
        
        return false;
    }
  });

//Not Implementing Password Recovery

Meteor.autorun(function() {
    // Whenever this session variable changes, run this function.
    var message = Session.get('displayMessage');
    if (message) {
        messageAlert(message, "danger");
        console.log(message);
        Session.set('displayMessage', null);
    }
});

//Helper Functions
// Trim Helper
var trimInput = function(val) {
    return val.replace(/^\s*|\s*$/g, "");
};
//Check Valid Password
var isValidPassword = function(val) {
    if (val.length >= 6) {
        return true;
    }
    else {
        Session.set('displayMessage', 'Error: Too short.');
        return false;
    }
};
//Check Passwords Match
var areMatchingPasswords = function(pass, confirm) {
    if (pass == confirm) {
        return true;
    }
    else {
        Session.set('displayMessage', "Error: Passwords don't match.");
        return false;
    }
};
//Display A Bootstrap Error message
var messageAlert = function (message, type) {
    var types = {
        "success": '<div class="alert alert-success"></div>',
        "info": '<div class="alert alert-info">...</div>',
        "warning": '<div class="alert alert-warning">...</div>',
        "danger": '<div class="alert alert-danger">...</div>'
    };
    var dismissButton = '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>';
    var alert = $(types[type]);
    alert.append(dismissButton).append(message);
    $("#main").prepend(alert);
};