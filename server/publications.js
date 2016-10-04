Meteor.publish('theResources', function(){
 var currentUserId = this.userId;
 return resourceList.find();
});

Meteor.publish("userInformation", function() {
return Meteor.users.find();
});
