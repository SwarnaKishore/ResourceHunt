Template.tutorialDisplay.helpers({
upvotedClass: function() {
    var userId = Meteor.userId();
    var tutorial = tutorialList.findOne(this._id);
    if (userId && !_.include(tutorial.upvoterIds, userId)) {
      return 'upvotable';
    } else if(userId)
    {
      return 'upvoted disabled';
    }
  },

 'tutorial': function(){
        return tutorialList.find();
    }
});



Template.tutorialDisplay.events({
 
    "click .url": function (event, template) {
    event.preventDefault();
    var tutorialId = this._id;
    Session.set('selectedTutorial', tutorialId);
    var selectedTutorial = Session.get('selectedTutorial');
    }

 });


