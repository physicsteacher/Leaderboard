Template.register.events({
  "submit .form-signup": function(event){
    var email = event.target.email.value;
    var password = event.target.password.value;
    var password2 = event.target.password2.value;
    var first_name = event.target.first_name.value;
    var last_name = event.target.last_name.value;
    var corps = event.target.corps.value;


        Accounts.createUser({
        email: email,
        password: password,
        profile: {
          first_name: first_name,
          last_name: last_name,
          corps: corps
        }
      }, function(err){
        if(err){
          FlashMessages.sendError('There was an error with registration');
        } else {
          FlashMessages.sendSuccess('Account created! You are now logged in');
          Router.go('/home');
        }

    });

    //prevent submit
    return false;
  }
});

//validation
areValidPasswords = function(password, password2){
  if(password !== password2){
    FlashMessages.sendError("Password fields do not match")
    return false;
  }
  return; true
}
