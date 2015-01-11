BackboneAuthDemo.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",

  fullName: function(){
    return this.escape("first_name") + " " + this.escape("last_name");
  },

  toJSON: function(){
    var json = { user: _.clone(this.attributes) };
    return json;
  }
});

BackboneAuthDemo.Models.CurrentUser = BackboneAuthDemo.Models.User.extend({

  url: "/api/session",

  initialize: function(options){

  },

  isSignedIn: function() {
    return !this.isNew();
  },

  signIn: function(email, password, errorCallback){
    var model = this;
    var credentials = {"user[email]": email, "user[password]": password};

    $.ajax({
      url: this.url,
      type: "POST",
      data: credentials,
      dataType: "json",
      success: function(data){
        model.set(data);
      },
      error: function(){
        errorCallback();
      }
    });
  },

  signOut: function(){
    var model = this;

    $.ajax({
      url: this.url,
      type: "DELETE",
      dataType: "json",
      success: function(data){
        model.clear();
      }
    });
  }

});
