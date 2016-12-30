Template.registerHelper('avatar', function(){
    if(Meteor.user() && Meteor.user().profile.avatar){
        return Meteor.user().profile.avatar;
    } else{
        return 'defaultImagePath/image.png'
    }
});
// When you make Template.registerHelper you are making the helper available globally
Template.registerHelper('ratings', function(comp, val){
    return val >= comp ? 'price-text-color' : ''
    // if value is greater than comp return price-text... otherwise nothing
    // I'm using it in product.html --> <i class="fa fa-star {{ratings 1 rating}}"></i>
});