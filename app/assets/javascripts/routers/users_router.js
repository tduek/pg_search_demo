BackboneAuthDemo.Routers.Users = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = new BackboneAuthDemo.Collections.Users();
    this.collection.fetch();
  },

  routes: {
    "": "index",
    "users/new": "new",
    "users/:id": "show",
    "session/new": "signIn",
		"posts/new": "newPost",
		"posts/:id": "showPost",
		"search": "search"
  },
	
	search: function () {
		var searchView = new BackboneAuthDemo.Views.Search();
		this._swapView(searchView);
	},
	
	newPost: function () {
		var callback = this.newPost.bind(this);
		if (!this._requireSignedIn(callback)) { return; }
		
		var newPost = new (BackboneAuthDemo.currentUser.posts().model)();
		var newPostView = new BackboneAuthDemo.Views.PostForm({
			model: newPost
		});
		this._swapView(newPostView);
	},
	
	showPost: function (postId) {
		var post;
		
		for (var user, i = 0; i < this.collection.length; i++) {
			user = this.collection.at(i);
			if (post = user.posts().get(postId)) { break; }
		}
		
		if (!post) {
			post = new BackboneAuthDemo.Models.Post({id: postId});
		}
		post.fetch();
		
		var showPostView = new BackboneAuthDemo.Views.PostShow({
			model: post
		});
		this._swapView(showPostView);
	},

  index: function(){
    var callback = this.index.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var indexView = new BackboneAuthDemo.Views.UsersIndex({
      collection: this.collection
    });
    this._swapView(indexView);
  },

  new: function(){
    if (!this._requireSignedOut()) { return; }

    var model = new this.collection.model();
    var formView = new BackboneAuthDemo.Views.UsersForm({
      collection: this.collection,
      model: model
    });
    this._swapView(formView);
  },

  show: function(id){
    var callback = this.show.bind(this, id);
    if (!this._requireSignedIn(callback)) { return; }

    var model = this.collection.getOrFetch(id);
    var showView = new BackboneAuthDemo.Views.UsersShow({
      model: model
    });
    this._swapView(showView);
  },

  signIn: function(callback){
    if (!this._requireSignedOut(callback)) { return; }

    var signInView = new BackboneAuthDemo.Views.SignIn({
      callback: callback
    });
    this._swapView(signInView);
  },

  _requireSignedIn: function(callback){
    if (!BackboneAuthDemo.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      this.signIn(callback);
      return false;
    }

    return true;
  },

  _requireSignedOut: function(callback){
    if (BackboneAuthDemo.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      callback();
      return false;
    }

    return true;
  },

  _goHome: function(){
    Backbone.history.navigate("", { trigger: true });
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
