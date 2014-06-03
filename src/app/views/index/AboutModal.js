ns('App.view.OptionsModal', Backbone.View.extend({
	events: {
		'keypress input': 'optionsUpdate'
	},
	initialize: function(options) {
		$(this.el).modal('show');
	}
}));