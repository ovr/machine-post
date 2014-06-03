ns('App.views.blocks.PositionPanel', Backbone.View.extend({
    events: {
        'click .left button': 'onLeftButtonClick',
        'click .right button': 'onRightButtonClick',
        'click .memory div': 'onMemoryCellClick'
    },
    currentPosition: 10,
    maxPosition: 19,
    initialize: function (opts) {
        this.$el = opts.$el;
        this.render();
    },
    render: function() {
        var html = '' +

        '<div class="positionTracker mb20">' +
            '<div class="left">' +
                '<button class="btn btn-primary">Влево</button>' +
            '</div>' +
            '<div id="inputMemoryBlock"></div>' +
            '<div class="right">'+
                '<button class="btn btn-primary">Вправо</button>' +
            '</div>' +
        '</div>';

        this.$el = this.$el.prepend(html);

        this.$memoryPanel = new App.views.blocks.MemoryPanel({$el: $('#inputMemoryBlock')});
        this.$memoryPanel.render();

        this.setCurrentByPosition(this.currentPosition);
    },
    onMemoryCellClick: function(event) {
        var $currentTarger = this.$(event.currentTarget);

        if (!$currentTarger.hasClass('active')) {
            $currentTarger.addClass('active');
        } else {
            $currentTarger.removeClass('active');
        }
    },
    onLeftButtonClick: function() {
        console.log('Left position click');

        if (this.currentPosition-1 >= 0) {
            this.currentPosition--;
            this.setCurrentByPosition(this.currentPosition);
        }
    },
    onRightButtonClick: function() {
        console.log('Right position click');

        if (this.currentPosition+1 <= this.maxPosition) {
            this.currentPosition++;
            this.setCurrentByPosition(this.currentPosition);
        }
    },
    setCurrentByPosition: function(positionId) {
        this.$memoryPanel.$el.find('.memory div.current').removeClass('current');
        this.$memoryPanel.$el.find('.memory div:eq('+(positionId)+')').addClass('current')
    }
}));