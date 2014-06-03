$( document ).ready(function() {
    window.app = {
        layout: new App.views.Layout()
    };

    app.layout.$index.globalInit();
});