BackboneAuthDemo.Views.Search = Backbone.View.extend({
	
	
	initialize: function () {
		
	},
	
	events: {
		
	},
	
	template: JST["shared/search"],
	
	render: function () {
		var content = this.template();	
		this.$el.html(content);
		
		return this;
	}
	
});