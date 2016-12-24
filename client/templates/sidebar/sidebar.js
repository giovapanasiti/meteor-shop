Template.sidebar.helpers({
  'categories':function(){
    return Category.find();
  }
  // because in the template we used the word "categories" in the #each cycle.
  // we now have to tell what that categories is
});
