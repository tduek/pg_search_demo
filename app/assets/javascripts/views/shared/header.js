BackboneAuthDemo.Views.Header = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(BackboneAuthDemo.currentUser, "sync change", this.render);
    this.render();
  },

  events: {
    "click #sign-out-link": "signOut",
    "submit #sign-in-form": "signIn"
  },

  template: JST['shared/header'],

  render: function(){
    var html = this.template({ currentUser: BackboneAuthDemo.currentUser });
    this.$el.html(html);

    return this;
  },

  signIn: function(event){
    event.preventDefault();
    var $form = $(event.currentTarget);
    var formData = $form.serializeJSON().user;

    BackboneAuthDemo.currentUser.signIn(
      formData.email,
      formData.password,
      function(){
        alert("Wrong username/password combination. Please try again.");
      });
  },

  signOut: function(event){
    event.preventDefault();
    BackboneAuthDemo.currentUser.signOut();
  }

});
