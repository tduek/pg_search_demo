BackboneAuthDemo.Collections.Posts = Backbone.Collection.extend({
	
	initialize: function (models, opts) {
		this._user = opts.user;
	},
	
	user: function () {
		if (!this._user) {
			this._user = new BackboneAuthDemo.Models.User;
		}
		
		return this._user;
	},
	
	url: function () {
		return "api/users/" + this.user().id + "/posts"
	},
	
	model: BackboneAuthDemo.Models.Post
	
	
});