FlowRouter.route(['/', '/home'], {
  action: function(){
    FlowLayout.render('layout',{
      sidebar:'sidebar',
      main: 'home',
      cart: 'cart'
    });
  }
});

FlowRouter.route('/category/:categoryName', {
  subscription:function(){
    console.log("SUBSCRIBE", params);
    // make sure subscriptions exist
  },
  triggersEnter: function(){
    console.log("Enter", params);
    // check that user is logged in
  },
  triggersExit: function(){
    console.log("Exit", params);
    // check that there is no unsaved data on exit
  },
  action: function(){
    FlowLayout.render('layout',{
      sidebar:'sidebar',
      main: 'category',
      cart: 'cart'
    });
  }
});


FlowRouter.route('/register', {
  action: function(){
    FlowLayout.render('layout',{
      sidebar:'sidebar',
      main: 'register',
      cart: 'cart'
    });
  }
});

FlowRouter.route('/signin', {
  action: function(){
    FlowLayout.render('layout',{
      sidebar:'sidebar',
      main: 'signin',
      cart: 'cart'
    });
  }
});

FlowRouter.route('/signout', {
  action: function(){
    Meter.logout(function(err){
      if(!err){
        FlowRouter.go('/signin');
      }
    })
  }
});

FlowRouter.route('/checkout', {
  action: function(){
    FlowLayout.render('layout',{
      sidebar:'sidebar',
      main: 'checkout',
      cart: 'cart'
    });
  }
});
