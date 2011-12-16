Ext.define('AppGal.view.app.Show', {
    extend: 'Ext.Container',
    xtype: 'appShow',
    
    layout: 'vbox',
    
    config: {
        scrollable: 'vertical',
        items: [
            { 
                xtype: 'container',
                tpl: [
                    '<div class="appDetails">',
                        '<img src="{app-icon}" />',
                        '<div class="title">{title}</div>',
                        '<div class="developer">{[values.developer.replace(/\[[0-9]+\] /,"")]}</div>',
                        '<div class="description">{app-description}</div>',
                    '</div>'
                ]
            }
        ]
    },
    
    initialize: function() {        
        this.callParent(arguments);
        
        var data = this.getData();
        this.getAt(0).setData(data);
        
        var carousel = Ext.create('Ext.Carousel', {
            height: 350,
            margin: 10
        });
        
        Ext.Array.each(data.screenshots, function(screenshot) {
            carousel.add({
                tpl: [
                    '<img src="{app-screenshot}" style="max-width: 240px; max-height: 320px; margin: 0 auto; " />'
                ],
                data: screenshot
            })
        }, this);
        
        this.add(carousel);
    }
});
