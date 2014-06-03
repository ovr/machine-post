ns('App.view.Index', Backbone.View.extend({
    events: {
        'change .load': 'onLoadClick',
        'click .about': 'onAboutClick',
        'click #action': 'onActionClick',
        'click #addRow': 'onAddRowClick',
        'change #workBenchIntervalTime': 'onWorkBenchIntervalTimeChange'
    },
    /**
     * Флаг о работе
     * false - пауза
     * true - работает
     */
    status: false,
    /**
     * Текущая обрабатываемая строка
     */
    currentRow: 1,
    rowCounts: 1,
    lastNumber: 0,
    workBench: false,
    workBenchIntervalTime: 100,
    onWorkBenchIntervalTimeChange: function() {
        this.workBenchIntervalTime = $('#workBenchIntervalTime').val();
    },
    onAddRowClick: function() {
        this.$commands.table.addRow();
    },
    initialize: function() {
        this.onWorkBenchIntervalTimeChange();
        this.$inputPositionPanel = new App.views.blocks.PositionPanel({$el: this.$el.find('#inputPositionBlock'), actionButtons: true});
        this.$inputPositionPanel.setCurrentByPosition(this.$inputPositionPanel.currentPosition);

        this.$outputPositionPanel = new App.views.blocks.PositionPanel({$el: this.$el.find('#outputPositionBlock'), actionButtons: true});

        this.$commands = new App.Service.Commands({
            table: new App.views.blocks.CommandsTable({$el: $('#commands')})
        });
        this.recountRows();

        this.$actionButton = this.$('#action');
    },
    globalInit: function() {
        this.$commands.table.addRow();
        this.$commands.table.addRow();
    },
    onActionClick: function(e) {
        if (this.status) {
            this.pause();
        } else {
            this.start();
        }
    },
    workBenchProcess: function() {
        var $command = this.$commands.getCommandByRowId(this.currentRow);

        switch ($command.get('value')) {
            case 1:
                this.$outputPositionPanel.prev();
                break;
            case 2:
                this.$outputPositionPanel.next();
                break;
            case 3:
                this.$outputPositionPanel.$memoryPanel.active(this.$outputPositionPanel.currentPosition);
                break;
            case 4:
                this.$outputPositionPanel.$memoryPanel.removeActive(this.$outputPositionPanel.currentPosition);
                break;
            case 5:
                if ($command.get('toRow') == undefined || $command.get('toRow') == '') {
                    alert('Невозможный переход');
                    this.pause();
                }

                var inputArray = $command.get('toRow').split(',');

                var isActive = this.$outputPositionPanel.$memoryPanel.getCell(this.$outputPositionPanel.currentPosition).hasClass('active');
                if (inputArray.length == 2) {
                    if (isActive) {
                        this.currentRow = inputArray[1];
                    } else {
                        this.currentRow = inputArray[0];
                    }
                }

                return true;
                break;
            case 6:
                this.pause();
                break;
        }

        if ($command.get('toRow') != '') {
            console.log($command.get('toRow'));
            this.currentRow = $command.get('toRow');
        } else {
            this.currentRow++;
        }

        if (this.rowCounts < this.currentRow) {
            this.pause();
        }
    },
    recountRows: function() {
        /**
         * Убрать данный подсчет после дев версии
         * @type {number}
         */
        this.rowCounts = this.$commands.table.$el.find('tr').length-1;
    },
    syncMemoryPanels: function() {
        this.$outputPositionPanel.setCurrentByPosition(this.$inputPositionPanel.currentPosition);

        var $memoryPanel = this.$outputPositionPanel.$memoryPanel;
        $memoryPanel.unActive();

        $.each(this.$inputPositionPanel.$memoryPanel.$el.find('.cell'), function(index, element) {
            if ($(element).hasClass('active')) {
                $memoryPanel.active(index);
            }
        });
    },
    start: function() {
        this.status = true;

        this.$actionButton.html('Стоп');
        this.currentRow = 1;
        this.recountRows();
        this.syncMemoryPanels();
        this.workBench = setInterval($.proxy(this.workBenchProcess, this), this.workBenchIntervalTime);
    },
    pause: function() {
        this.status = false;

        this.$actionButton.html('Старт');
        clearInterval(this.workBench);
    },
    onAboutClick: function(e) {
        new App.view.AboutModal({el: this.$optionsModal});
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