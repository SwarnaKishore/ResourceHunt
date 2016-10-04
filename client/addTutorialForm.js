

Template.addResourceForm.events({

'submit form' : function(event,template)
{
event.preventDefault();

 
          var resourceNameVar= event.target.resourceName.value;
          var resourceUrlVar= event.target.resourceUrl.value;
          if (!resourceNameVar || !resourceUrlVar)
            return;
         
         
         

          Meteor.call('insertResourceData', resourceNameVar,resourceUrlVar);

          event.target.resourceName.value="";
          event.target.resourceUrl.value="";
          

          Meteor.setTimeout(function(){  
          window.scrollTo(0, document.body.scrollHeight);}, 1000);
         
      
        
  }

});






