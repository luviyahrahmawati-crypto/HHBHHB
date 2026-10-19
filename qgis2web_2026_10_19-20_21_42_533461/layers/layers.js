var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINDASCOMAL_1 = new ol.format.GeoJSON();
var features_ADMINDASCOMAL_1 = format_ADMINDASCOMAL_1.readFeatures(json_ADMINDASCOMAL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINDASCOMAL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINDASCOMAL_1.addFeatures(features_ADMINDASCOMAL_1);
var lyr_ADMINDASCOMAL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINDASCOMAL_1, 
                style: style_ADMINDASCOMAL_1,
                popuplayertitle: 'ADMIN DAS COMAL',
                interactive: true,
                title: '<img src="styles/legend/ADMINDASCOMAL_1.png" /> ADMIN DAS COMAL'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_ADMINDASCOMAL_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_ADMINDASCOMAL_1];
lyr_ADMINDASCOMAL_1.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Luas_Ha': 'Luas_Ha', 'FOTO': 'FOTO', });
lyr_ADMINDASCOMAL_1.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Luas_Ha': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_ADMINDASCOMAL_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'Luas_Ha': 'inline label - always visible', 'FOTO': 'inline label - always visible', });
lyr_ADMINDASCOMAL_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});