Ext.define('AppGal.view.app.Index', {
    extend: 'Ext.List',
    xtype: 'appIndex',
    title: 'Sencha App Gallery',
    
    config: {
        itemTpl: '<div class="appListItem"><img src="{app-icon}" /> {title}</div>',
        store: 'Apps'
    }
});
