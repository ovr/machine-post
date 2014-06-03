ns('App.views.blocks.MemoryPanel', Backbone.View.extend({
    initialize: function (opts) {
        this.$el = opts.$el;
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
    }
}));