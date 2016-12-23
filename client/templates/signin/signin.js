Template.signin.events({
  'submit form': function(evt){
    evt.preventDefault();
    var email = evt.target.email.value;
    var password = evt.target.password.value;
    Meteor.loginWithPassword(email, password);
    // this meteor's function log the user and create the session
    FlowRouter.go('/');
  }
})
