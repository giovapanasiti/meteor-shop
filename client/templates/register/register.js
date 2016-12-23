Template.register.events({
  'submit form':function(evt){
    evt.preventDefault();
    // prevent the default action
    var email = evt.target.email.value;
    var firstname = evt.target.firstname.value;
    var lastname = evt.target.lastname.value;
    var password = evt.target.password.value;
    Accounts.createUser({
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname
    });
    FlowRouter.go('/');
    // this should create the user as they press the button
  }
})
