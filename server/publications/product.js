Meteor.startup(function(){
  Product._ensureIndex({"categoryId":1});
  // It should be faster to search for product after this
});

Meteor.publish('products', function(){
  return Product.find();
});

Meteor.publish('categoryProducts', function(categoryname){
  var categoryId = Category.findOne({name:categoryname})._id;
  return Product.find({categoryId:categoryId});
});
