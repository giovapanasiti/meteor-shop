Meteor.methods({
  'Product.insert': function(product){
    return Product.insert(product);
  },
  'Product.remove':function(id){
    return Product.remove({_id: id});
  },
  'Product.updateHighRating':function(){
    Product.update(
      {rating:{ $gt:3}},
      {$set: {rating:5}}
    )
  }
});
