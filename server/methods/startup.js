// this file will run when we start our application
Meteor.startup(function(){
  Accounts.onCreateUser(function(options, user){
    if (!user.profile) {
      user.profile={};
      // if user profile don't exist we create an empy object for the user.profile
    }

    user.profile.firstname = options.firstname;
    user.profile.lastname = options.lastname;
    // we then populate the user.profile

    return user;
    // if you dont return the user you get an error
  })
})
