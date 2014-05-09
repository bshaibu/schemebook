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
            firstName = tmpl.find('#account-first-name').value,
            lastName = tmpl.find('#account-last-name').value;

        // Trim and validate the input
        email = trimInput(email);

        if ( isValidPassword(password) && areMatchingPasswords(password, confirm) ) {
            Accounts.createUser({   email: email,
                                    password : password,
                                    firstName: firstName,
                                    lastName: lastName},
                function(err){
                    if (err) {
                        // Inform the user that account creation failed
                        Session.set('displayMessage', 'Failed to Log In');
                    }
                    else {
                        // Success. Account has been created and the user
                        // has logged in successfully. 
                    }
            });
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