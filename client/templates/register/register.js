Template.register.events({
  'submit form':function(evt){
    evt.preventDefault();
    // prevent the default action
    var email = evt.target.email.value;
    var password = evt.target.password.value;
    Accounts.createUser({
      email: email,
      password: password
    });
    FlowRouter.go('/');
    // this should create the user as they press the button
  }
})
