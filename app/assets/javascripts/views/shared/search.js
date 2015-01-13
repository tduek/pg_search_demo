BackboneAuthDemo.Views.Search = Backbone.View.extend({
	
	
	initialize: function () {
		this.searchResults = new BackboneAuthDemo.Collections.SearchResults();
		this.listenTo(this.searchResults, "sync", this.render);
	},
	
	events: {
		"click .search": "search",
		"click .next-page": "nextPage"
	},
	
	template: JST["shared/search"],
	
	render: function () {
		var content = this.template({collection: this.searchResults});	
		this.$el.html(content);
		
		this.renderSearchResults();
		
		return this;
	},
	
	renderSearchResults: function () {
		var container = this.$(".search-results");
		
		this.searchResults.each(function (model) {
			var template;
			if (model.constructor === BackboneAuthDemo.Models.User) {
				template = JST["users/list_item"]
			} else {
				template = JST["posts/list_item"]
			}
			
			container.append(template({model: model}));
		});
	},
	
	search: function (event) {
		event.preventDefault();
		this.searchResults._query = this.$(".query").val();
		this.searchResults.fetch({
			data: {query: this.searchResults._query}
		});
	},
	
	nextPage: function (event) {
		this.searchResults.fetch({
			data: {
				query: this.searchResults._query,
				page: (this.searchResults._page || 1) + 1
			}
		});
	}
	
});