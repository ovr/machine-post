ns('App.views.blocks.CommandsTable', Backbone.View.extend({
    events: {
        'click .delete': 'onDeleteClick'
    },
    initialize: function (opts) {
        this.$el = opts.$el;

        this.$commands = new App.Model.Commands({});
    },
    onDeleteClick: function(event) {
        $(event.currentTarget).parent().parent().remove();
    },
    getRow: function(row) {
        return this.$el.find('tr:eq(' + row + ')');
    },
    addRow: function() {
        var $select = $('<select/>');

        $.each(this.$commands.getList(), function(index, item) {
            $('<option/>', {
                val:  index,
                text: item.title
            }).appendTo($select);
        });

        this.$el.append($('<tr/>').append(
            $('<td/>', {text: app.layout.$index.rowCounts}),
            $('<td/>').append($select),
            $('<td/>').append($('<input>').attr({type: 'text', class: 'toRow'})),
            $('<td/>').append($('<input>').attr({type: 'text'})),
            $('<td/>').append($('<button>').attr({class: 'btn btn-danger delete'}).html('-'))
        ));
    }
}));