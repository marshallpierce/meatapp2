Ext.define('sencha-stackmob-2.store.Meats', {
    extend: 'Ext.data.Store',

    requires: ['sencha-stackmob-2.data.proxy.StackMob'],

    config: {
        model: 'sencha-stackmob-2.model.Meat',
        autoLoad: true,
        sorters: 'name',
        proxy: {
            type: 'stackmob',
            url: 'meat'
        }
    }
});