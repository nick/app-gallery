Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext': 'touch/src'
    }
});

Ext.setup({
    onReady: function() {
        Ext.create('Ext.app.Application', {
            name: 'AppGal',
            
            models: ['App'],
            views: ['app.Index'],
            controllers: ['Index'],
            stores: ['Apps'],
            
            launch: function() {
                Ext.create('AppGal.view.Viewport');
                AppGal.App = this;
                
                // setInterval(function(){
                //     Ext.DomQuery.select('link')[1].href = "resources/stylesheets/screen.css?" + Math.ceil(Math.random() * 100000000)
                // }, 1000);
            }
        });
    }
});
