BackboneAuthDemo.Views.PostForm = Backbone.View.extend({
	
	template: JST["posts/form"],
	
	events: {
		"submit": "submit"
	},
	
	tagName: "form",
	
	render: function () {
		var content = this.template({post: this.model});
		this.$el.html(content);
		
		return this;
	},
	
	submit: function (event) {
		event.preventDefault();
		
		var formData = this.$el.serializeJSON();
		
		this.model.save(formData, {
			success: function (post) {
				console.log(post)
				Backbone.history.navigate("posts/" + post.id, { trigger: true });
			}
		});
	}
	
});