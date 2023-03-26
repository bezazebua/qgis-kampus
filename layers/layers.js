var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_1 = new ol.layer.Tile({
            'title': 'Google Labels',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_2 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_INSTIPER_4 = new ol.format.GeoJSON();
var features_INSTIPER_4 = format_INSTIPER_4.readFeatures(json_INSTIPER_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INSTIPER_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INSTIPER_4.addFeatures(features_INSTIPER_4);
var lyr_INSTIPER_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INSTIPER_4, 
                style: style_INSTIPER_4,
                interactive: true,
                title: '<img src="styles/legend/INSTIPER_4.png" /> INSTIPER'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleLabels_1.setVisible(true);lyr_GoogleRoad_2.setVisible(true);lyr_GoogleSatellite_3.setVisible(true);lyr_INSTIPER_4.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_GoogleLabels_1,lyr_GoogleRoad_2,lyr_GoogleSatellite_3,lyr_INSTIPER_4];
lyr_INSTIPER_4.set('fieldAliases', {'id': 'id', 'KETERANGAN': 'KETERANGAN', });
lyr_INSTIPER_4.set('fieldImages', {'id': 'TextEdit', 'KETERANGAN': 'TextEdit', });
lyr_INSTIPER_4.set('fieldLabels', {'id': 'no label', 'KETERANGAN': 'no label', });
lyr_INSTIPER_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});