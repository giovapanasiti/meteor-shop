Template.category.helpers({
  categoryName: function(){
    return FlowRouter.getParam('categoryName')
  }
});
// this takes the parameter from the end of the URL

Template.categoryAdmin.events({
  'click .addCategory':function(event, template){
    event.preventDefault();
    var category = {};
    category.name = template.find('#categoryName').value;
    Meteor.call('addCategory', category, function(){
      $('#addCategoryForm')[0].reset();
    });
    // addCategory method is defined in server/methods/category.js
  }
});
