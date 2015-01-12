BackboneAuthDemo.Views.SignIn = Backbone.View.extend({

  initialize: function(options){
    this.callback = options.callback;
    this.listenTo(BackboneAuthDemo.currentUser, "sync change", this.checkSignedIn);
    this.checkSignedIn();
  },

  events: {
    "submit form": "submit"
  },

  template: JST['shared/sign_in'],

  render: function(){
    this.$el.html(this.template());

    return this;
  },

  submit: function(event){
    event.preventDefault();
    var $form = $(event.currentTarget);
    var formData = $form.serializeJSON().user;

    BackboneAuthDemo.currentUser.signIn({
      email: formData.email,
      password: formData.password,
      error: function(){
        alert("Wrong username/password combination. Please try again.");
      }
    });
  },

  checkSignedIn: function(event){
    if(BackboneAuthDemo.currentUser.isSignedIn()){
      if(this.callback) {
        this.callback();
      } else {
        Backbone.history.navigate("", { trigger: true });
      }
    }
  }

});
