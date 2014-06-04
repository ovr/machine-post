ns('App.views.blocks.MemoryPanel', Backbone.View.extend({
    events: {
        'scroll .memory': 'memoryScroll'
    },
    totalCells: 40,
    initialize: function (opts) {
        this.$el = opts.$el;
        this.render();
    },
    render: function() {
        var index = (this.totalCells/2)*(-1);

        var html = '<div class="memory swiper-container">';

            while(index <= (this.totalCells/2)+1) {
                html += '<div class="cell"><span>'+index+'</span></div>';
                index++;
            }

            html += '</div>';

        this.$el.html(html);
        this.$el.find('.memory').css('width', ((this.totalCells+1)*this.totalCells) + 'px');
        this.$el.scrollLeft((((this.totalCells+1)*40)/4)+20);
    },
    memoryScroll: function(event) {

    },
    active: function(positionId) {
        this.getCell(positionId).addClass('active');
    },
    removeActive: function(positionId) {
        this.getCell(positionId).removeClass('active');
    },
    unActive: function() {
        this.$('.active').removeClass('active');
    },
    unCurrentAll: function() {
        this.$('.current').removeClass('current');
    },
    getCell: function(positionId) {
        return this.$el.find('.cell:eq('+(positionId)+')');
    }
}));