ns('App.views.Layout', Backbone.View.extend({
	initialize: function() {
        new App.view.Index({el: $('#post-machine')});
	}
}));