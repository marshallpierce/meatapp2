Ext.define('sencha-stackmob-2.store.Meats', {
    extend: 'Ext.data.Store',

    config: {
        model: 'sencha-stackmob-2.model.Meat',
        autoLoad: true,
        sorters: 'name',
        proxy: {
            type: 'rest',
            url: 'meats.json'
        }
    }
});