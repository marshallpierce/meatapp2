Ext.define('sencha-stackmob-2.view.List', {
    extend: 'Ext.List',

    id: 'meatList',

    config: {
        title: 'Meats',

        store: 'Meats',
        itemTpl: '{name}'
    }
});