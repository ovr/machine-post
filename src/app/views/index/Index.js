ns('App.view.Index', Backbone.View.extend({
    events: {
        'click .about': 'onOptionsClick'
    },
    initialize: function() {
        this.$optionsModal = this.$('.options');
    },
    onOptionsClick: function(e) {
        new App.view.AboutModal({el: this.$optionsModal});
    }
}));