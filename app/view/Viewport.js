Ext.define('AppGal.view.Viewport', {
    extend: 'Ext.NavigationView',
    id: 'viewport',
    
    requires: [
        'AppGal.view.app.Index',
        'AppGal.view.app.Show'
    ],
    
    config: {
        fullscreen: true,
        
        items: [
            {
                xtype: 'appIndex'
            }
        ]
    }
});