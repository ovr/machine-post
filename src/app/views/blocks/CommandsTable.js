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
        return this.$el.find('tr.row_' + row);
    },
    setActiveRow: function(row) {
        this.$('.success').removeClass('success');
        this.getRow(row).addClass('success');
    },
    addRow: function() {
        window.app.layout.$index.lastNumber++;
        var id = window.app.layout.$index.lastNumber;

        var $select = $('<select/>').attr({class: 'form-control'});

        $.each(this.$commands.getList(), function(index, item) {
            $('<option/>', {
                val:  index,
                text: item.title
            }).appendTo($select);
        });

        window.app.layout.$index.rowCounts++;

        this.$el.append($('<tr/>').attr({class: 'row_' + id}).append(
            $('<td/>', {text: window.app.layout.$index.lastNumber}),
            $('<td/>').append($select),
            $('<td/>').append($('<input>').attr({type: 'text', class: 'form-control toRow'})),
            $('<td/>').append($('<input>').attr({type: 'text', class: 'form-control comment'})),
            $('<td/>').append($('<button>').attr({class: 'btn btn-danger delete'}).html('-'))
        ));
    }
}));