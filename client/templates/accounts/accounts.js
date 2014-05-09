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
            }
            else {
                // The user has been logged in.
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
            password = tmpl.find('#account-password').value;

        // Trim and validate the input
        email = trimInput(email);

        if ( isValidPassword(password) ) {
            Accounts.createUser({email: email, password : password}, function(err){
                if (err) {
                    // Inform the user that account creation failed
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

//Helper Functions
// Trim Helper
var trimInput = function(val) {
    return val.replace(/^\s*|\s*$/g, "");
};
//Check Valid Password
var isValidPassword = function(val) {
    return val.length >= 6 ? true : false;
};