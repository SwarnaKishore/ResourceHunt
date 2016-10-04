Router.configure({

  layoutTemplate: 'Layout'
});

Router.route('/', function () {
  this.render('list');
});


Router.route('1/:name', function () {
  this.render('tutorialBoard', {
    data: function () {
      Session.set('tutorialName', this.params.name);
    }
  });
});




Router.route('/tutorialBoard',{
  path : '2/:name',
  template : 'tutorialBoard',
  data : function(){
    Session.set('tutorialName', this.params.name);
  }
});