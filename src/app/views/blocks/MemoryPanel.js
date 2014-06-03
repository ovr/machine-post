ns('App.views.blocks.MemoryPanel', Backbone.View.extend({
    initialize: function (opts) {
        this.$el = opts.$el;
        this.render();
    },
    render: function() {
        var html = '<div class="memory">' +
            '<div class="cell"></div>' +
            '<div class="cell"></div>' +
            '<div class="cell"></div>' +
            '<div class="cell"></div>' +
            '<div class="cell"></div>' +
            '<div class="cell"></div>' +
            '<div class="cell"></div>' +
            '<div class="cell"></div>' +
            '<div class="cell"></div>' +
            '<div class="cell"></div>' +
            '<div class="cell"></div>' +
            '<div class="cell"></div>' +
            '<div class="cell"></div>' +
            '<div class="cell"></div>' +
            '<div class="cell"></div>' +
            '<div class="cell"></div>' +
            '<div class="cell"></div>' +
            '<div class="cell"></div>' +
            '<div class="cell"></div>' +
            '<div class="cell"></div>' +
            '</div>';

        this.$el.html(html);
    },
    active: function(positionId) {
        this.$('.cell:eq(' + positionId + ')').addClass('active');
    },
    removeActive: function(positionId) {
        this.$('.cell:eq(' + positionId + ')').removeClass('active');
    },
    unActive: function() {
        this.$('.active').removeClass('active');
    },
    unCurrentAll: function() {
        this.$('.current').removeClass('current');
    }
}));