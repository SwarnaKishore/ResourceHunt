import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});
 Meteor.users.deny({
  update: function() {
    return true;
  }
});
   Meteor.users.deny({
  insert: function() {
    return true;
  }
});

  resourceList.allow({
  insert: function () {
    return false;
  }
});


  resourceList.allow({
  update: function () {
    return false;
  }
});

    

Meteor.methods({
'insertResourceData' : function(resourceNameVar,resourceUrlVar)
{
var currentUserId = Meteor.userId();
var createdAt = Meteor.user().createdAt;
resourceList.insert({
  name: resourceNameVar,
  url: resourceUrlVar,
  score: 0, 
  createdBy : currentUserId,
  createdAt : createdAt
});
}




});



