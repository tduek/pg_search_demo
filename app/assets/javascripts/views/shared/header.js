BackboneAuthDemo.Views.Header = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(BackboneAuthDemo.currentUser, "sync change", this.render);
    this.render();
  },

  events: {
    "click #sign-out-link": "signOut"
  },

  template: JST['shared/header'],

  render: function(){
    var html = this.template({ currentUser: BackboneAuthDemo.currentUser });
    this.$el.html(html);

    return this;
  },

  signOut: function(event){
    event.preventDefault();
    BackboneAuthDemo.currentUser.signOut({
      success: function(){
        Backbone.history.navigate("session/new", { trigger: true });
      }
    });
  }

});
