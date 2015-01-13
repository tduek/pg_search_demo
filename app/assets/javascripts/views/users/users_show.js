BackboneAuthDemo.Views.UsersShow = Backbone.View.extend({

  initialize: function(options){
		this.model.posts().fetch();
    this.listenTo(this.model, "sync change", this.render);
		this.listenTo(this.model.posts(), "sync", this.render);
  },

  template: JST['users/show'],

  render: function(){
    var html = this.template({ user: this.model });		
		this.$el.html(html);
    this.renderPosts();
		
    return this;
  },
	
	renderPosts: function () {
		var that = this;
		
		this.model.posts().each(function (post) {
			var postContent = JST["posts/list_item"]({model: post});
			that.$("ul.posts").append(postContent);
		});
	}
	
	

});
