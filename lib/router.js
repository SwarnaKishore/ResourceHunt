Router.configure({

  layoutTemplate: 'Layout'
});

Router.route('/', function () {
  this.render('list');
});


Router.route('1/:name', function () {
  this.render('resourceBoard', {
    data: function () {
      Session.set('resourceName', this.params.name);
    }
  });
});




Router.route('/resourceBoard',{
  path : '2/:name',
  template : 'resourceBoard',
  data : function(){
    Session.set('resourceName', this.params.name);
  }
});