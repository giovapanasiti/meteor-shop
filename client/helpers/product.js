Product.helpers({
  category:function(){
    return Category.findOne(this.categoryId);
  }
});


//this sallow us to cross find categories
