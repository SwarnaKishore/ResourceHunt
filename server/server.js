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

  tutorialList.allow({
  insert: function () {
    return false;
  }
});


  tutorialList.allow({
  update: function () {
    return false;
  }
});

    

Meteor.methods({
'insertTutorialData' : function(tutorialNameVar,tutorialUrlVar)
{
var currentUserId = Meteor.userId();
var createdAt = Meteor.user().createdAt;
tutorialList.insert({
  name: tutorialNameVar,
  url: tutorialUrlVar,
  score: 0, 
  createdBy : currentUserId,
  createdAt : createdAt
});
}




});



