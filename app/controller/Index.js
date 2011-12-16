Ext.define('AppGal.controller.Index', {
    extend: 'Ext.app.Controller',
    
    config: {
        routes: {
            'app/:id': 'onItemTap'
        },
        
        refs: {
            appIndex: 'appIndex',
            viewport: '#viewport',
            backButton: '#viewport button[ui=back]'
        },
        
        control: {
            appIndex: {
                itemtap: 'onItemTap'
            },
            backButton: {
                tap: function() {
                    this.getViewport().pop();
                }
            }
        }
    },
    
    onItemTap: function(dataview, idx) {
        
        var app = dataview.getStore().getAt(idx).data;
        
        this.getViewport().setMask({
            message: 'Loading...'
        });
        
        Ext.data.JsonP.request({
            url: 'http://www.sencha.com/json',
            params: {
                channel: 'apps',
                entry_id: app.entry_id,
                fields: [
                    'title', 
                    'developer',
                    'app-icon',
                    'app-description',
                    'screenshots'
                ].join('|')
            },
            success: function(rows) {
                
                var app = rows[0];
                
                this.getViewport().setMask(false);
                this.getViewport().push({
                    title: app.title,
                    xtype: 'appShow',
                    data: app
                })
            },
            failure: function(response, opts) {
                
            },
            scope: this
        });
    }
});
