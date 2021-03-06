Ext.define("sencha-stackmob-2.view.Main", {
    extend: 'Ext.navigation.View',

    requires: ['sencha-stackmob-2.view.List'],

    id: 'mainView',

    config: {

        items: [{
            xclass: 'sencha-stackmob-2.view.List'
        }],

        navigationBar: {
            items: [{
                xtype: 'button',
                id: 'addButton',
                iconCls: 'add',
                iconMask: true,
                align: 'right'
            }]
        }
    }
});