

Template.addTutorialForm.events({

'submit form' : function(event,template)
{
event.preventDefault();

 
          var tutorialNameVar= event.target.tutorialName.value;
          var tutorialUrlVar= event.target.tutorialUrl.value;
          if (!tutorialNameVar || !tutorialUrlVar)
            return;
         
         
         

          Meteor.call('insertTutorialData', tutorialNameVar,tutorialUrlVar);

          event.target.tutorialName.value="";
          event.target.tutorialUrl.value="";
          

          Meteor.setTimeout(function(){  
          window.scrollTo(0, document.body.scrollHeight);}, 1000);
         
      
        
  }

});






