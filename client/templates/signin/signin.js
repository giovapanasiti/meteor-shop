Template.signin.events({
  'submit form': function(evt){
    evt.preventDefault();
    var email = evt.target.email.value;
    var password = evt.target.password.value;
    Meteor.loginWithPassword(email, password, function(err){
      if (err) {
        console.log('login failed');
        console.log(err);
        // I could use flash messages here to communicate with the user.
    } else {
        console.log('login success');
        FlowRouter.go('/');
    }
    });
    // this meteor's function log the user and create the session
    // FlowRouter.go('/');
  }
})
