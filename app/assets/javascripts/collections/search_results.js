BackboneAuthDemo.Collections.SearchResults = Backbone.Collection.extend({
	
	url: "api/search",
	
	model: function (attrs) {
		var type = attrs._type;
		delete attrs._type;
		
		if (type === "User") {
			return new BackboneAuthDemo.Models.User(attrs);
		} else {
			return new BackboneAuthDemo.Models.Post(attrs);
		}
	},
	
	parse: function (resp) {
		this._page = resp._page;
		
		return resp.results;
	}

});