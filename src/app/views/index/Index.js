ns('App.view.Index', Backbone.View.extend({
    events: {
        //'click .about': 'onOptionsClick',
        'change .load': 'onLoadClick'
    },
    initialize: function() {
        new App.views.blocks.PositionPanel({$el: this.$el});
        new App.views.blocks.MemoryPanel({$el: $('#outputMemoryPanel')}).render();
    },
    onOptionsClick: function(e) {
        //new App.view.AboutModal({el: this.$optionsModal});
    },
    onLoadClick: function(e) {
//        var currentTarger = e.currentTarget;
//
//        var reader = new FileReader();
//        var file = e.target.files[0];
//        var textContent = '';
//
//        reader.onloaded = function (event){
//            var reader = event.target;
//            var arrayBuffer = reader.result;
//
//            if(e.target.readyState == FileReader.DONE) {
//                textContent += e.target.result;
//            }
//        };
//
//        startByte = 0;
//        stopByte  = 193;
//
////        Для хрома
////        if (file.webkitSlice) {
//        blob = file.;
////            blob = file.slice(startByte, stopByte + 1);
////            Для лисы
////        } else if (file.mozSlice) {
////            blob = file.mozSlice(startByte, stopByte + 1);
////        }
//
//        // Считываем как бинарную строку
//        console.log(blob);
//        var result = reader.readAsBinaryString(blob);
//        console.log(result);
    }
}));