window.BackboneAuthDemo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    this.currentUser = new BackboneAuthDemo.Models.CurrentUser();
    this.currentUser.fetch();

    this.header = new BackboneAuthDemo.Views.Header({ el: "#header" });
    this.router = new BackboneAuthDemo.Routers.Users({ $rootEl: $("#main") });

    Backbone.history.start();
  }
};
