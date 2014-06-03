ns('App.views.Layout', Backbone.View.extend({
	initialize: function() {
        this.$index = new App.view.Index({el: $('#post-machine')});
	}
}));