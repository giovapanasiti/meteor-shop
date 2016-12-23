FlowRouter.route('/', {
  action: function(){
    FlowLayout.render('layout',{
      sidebar:'sidebar',
      main: 'home',
      cart: 'cart'
    });
  }
});

FlowRouter.route('/category/:categoryName', {
  action: function(){
    FlowLayout.render('layout',{
      sidebar:'sidebar',
      main: 'category',
      cart: 'cart'
    });
  }
});
