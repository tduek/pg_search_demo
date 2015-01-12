# Backbone Auth Demo

This demo shows how to do a full session management in Backbone.js.

We attach a top level singleton currentUser object. Views can then listen to any `signIn` or `signOut` events on this object.

```
this.currentUser = new BackboneAuthDemo.Models.CurrentUser();
```

In the router we can use `_requireSignedIn` and `_requireSignedOut` functions to enforce the desired session state.

Files to check out:
- [backbone_auth_demo.js](./app/assets/javascripts/backbone_auth_demo.js)
- [user.js](./app/assets/javascripts/models/user.js)
- [sessions_controller.rb](./app/controllers/api/sessions_controller.rb)
- [users_router.js](./app/assets/javascripts/routers/users_router.js)
- [header.js](./app/assets/javascripts/views/shared/header.js)
- [sign_in.js](./app/assets/javascripts/views/shared/sign_in.js)