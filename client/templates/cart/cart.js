Template.cart.helpers({
    cartitems:function(){
        var item = {
            img:'/images/apple.jpg',
            product:'Apple Cinnamon',
            qty: 2,
            price: 12,
            description: '<strong>Pesante come</strong> descrizione'
        };
        return [item];
    }
});