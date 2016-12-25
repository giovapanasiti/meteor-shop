FlowRouter.route(['/', '/home'], {
  subscriptions: function(){
    Meteor.subscribe('category');
  },
  action: function(){
    FlowLayout.render('layout',{
      sidebar:'sidebar',
      main: 'home',
      cart: 'cart'
    });
  }
});

FlowRouter.route('/category/:categoryName', {
  subscriptions:function(params){
    console.log("SUBSCRIBE", params);
    // make sure subscriptions exist
    Meteor.subscribe('category');
  },
  triggersEnter: function(params){
    console.log("Enter", params);
    // check that user is logged in
  },
  triggersExit: function(params){
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

FlowRouter.route('/admin', {
  subscriptions: function(){
    Meteor.subscribe('category');
  },
  action: function(){
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      FlowLayout.render('layout',{
        sidebar:'',
        main: 'admin',
        cart: ''
      });
    } else {
      FlowLayout.render('layout',{
        sidebar:'',
        main: 'unauthorized',
        cart: ''
      });
    }
  }
});

FlowRouter.route('/profile', {
  action: function(){
    FlowLayout.render('layout',{
      sidebar:'',
      main: 'profile',
      cart: ''
    });
  }
})

FlowRouter.route('/signout', {
  action: function(){
    Meteor.logout(function(err){
      if(!err){
        FlowRouter.go('/signin');
      } else {
        console.log(err);
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
