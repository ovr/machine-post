ns('App.Model.Commands', Backbone.Model.extend({
    getList: function() {
        return [
            {
                title: 'Выберите'
            },
            {
                title: '<-'
            },
            {
                title: '->'
            },
            {
                title: 'V Метка'
            },
            {
                title: 'X Удалить'
            },
            {
                title: '? Переход'
            },
            {
                title: '! Стоп'
            }
        ];
    }
}));