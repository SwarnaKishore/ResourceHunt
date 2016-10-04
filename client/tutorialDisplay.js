Template.resourceDisplay.helpers({
upvotedClass: function() {
    var userId = Meteor.userId();
    var resource = resourceList.findOne(this._id);
    if (userId && !_.include(resource.upvoterIds, userId)) {
      return 'upvotable';
    } else if(userId)
    {
      return 'upvoted disabled';
    }
  },

 'resource': function(){
        return resourceList.find();
    }
});



Template.resourceDisplay.events({
 
    "click .url": function (event, template) {
    event.preventDefault();
    var resourceId = this._id;
    Session.set('selectedResource', resourceId);
    var selectedResource = Session.get('selectedResource');
    }

 });


