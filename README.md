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

# [PgSearch][pg_search] and ([Kaminari][kaminari])

[pg_search]: https://github.com/Casecommons/pg_search
[kaminari]: https://github.com/amatsuda/kaminari

Files to check out:

- [user.rb](./app/models/user.rb)
- [post.rb](./app/models/post.rb)
- [searches_controller.rb](./app/controllers/api/searches_controller.rb)
- [searches/index.json.jbuilder](./app/views/api/searches/index.json.jbuilder)
- [collections/search_results.js](./app/assets/javascripts/collections/search_results.js)
- [views/search.js](./app/assets/javascripts/views/shared/search.js)

