Category.allow({
  'insert': function(userId, doc){
    return userId;
    // If a userId is not present it will return a false statmente not allowing the client to inserti
  }
});
