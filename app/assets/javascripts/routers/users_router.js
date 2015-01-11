BackboneAuthDemo.Routers.Users = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.collection = new BackboneAuthDemo.Collections.Users();
    this.collection.fetch();
  },

  routes: {
    "": "index",
    "users/new": "new",
    "users/:id": "show"
  },

  index: function(){
    var indexView = new BackboneAuthDemo.Views.UsersIndex({
      collection: this.collection
    });
    this._swapView(indexView);
  },

  new: function(){
    var model = new this.collection.model();
    var formView = new BackboneAuthDemo.Views.UsersForm({
      collection: this.collection,
      model: model
    });
    this._swapView(formView);
  },

  show: function(id){
    var model = this.collection.getOrFetch(id);
    var showView = new BackboneAuthDemo.Views.UsersShow({
      model: model
    });
    this._swapView(showView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
