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
    prev: function() {
        this.onLeftButtonClick();
    },
    next: function() {
        this.onRightButtonClick();
    },
    render: function() {
        this.$memoryPanel = new App.views.blocks.MemoryPanel({$el: this.$('.memory-block')});
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
        this.$memoryPanel.unCurrentAll();
        this.currentPosition = positionId;
        this.$memoryPanel.$el.find('.memory div:eq('+(positionId)+')').addClass('current')
    }
}));