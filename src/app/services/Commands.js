ns('App.Service.Commands', Backbone.View.extend({
    initialize: function (opts) {
        this.table = opts.table;
    },
    getCommands: function() {

    },
    getCommandByRowId: function(rowId) {
        var $row = this.table.getRow(rowId);

        console.log($row);
        var attributes = {
            id: $row.find('td:eq(0)').html(),
            value: parseInt($row.find('td select').val()),
            toRow: $row.find('input.toRow').val()
        };

        return new App.Model.Commands(attributes);
    }
}));