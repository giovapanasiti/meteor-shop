Meteor.publish('category', function(){
  return Category.find({});
  // If I specify some parameters here for example name: 'category 2'
  // the user won't be able to access the other contents from neother
  // the page nor the console.
  // If I limit searches with parameters in the helper instead
  // only the "view" is limited but a user can still access the
  // db from the console
})
