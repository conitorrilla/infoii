var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_poblacion_1 = new ol.format.GeoJSON();
var features_poblacion_1 = format_poblacion_1.readFeatures(json_poblacion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poblacion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poblacion_1.addFeatures(features_poblacion_1);
var lyr_poblacion_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poblacion_1, 
                style: style_poblacion_1,
                interactive: true,
    title: 'poblacion<br />\
    <img src="styles/legend/poblacion_1_0.png" /> 53 - 20049<br />\
    <img src="styles/legend/poblacion_1_1.png" /> 20049 - 53622<br />\
    <img src="styles/legend/poblacion_1_2.png" /> 53622 - 107733<br />\
    <img src="styles/legend/poblacion_1_3.png" /> 107733 - 222797<br />\
    <img src="styles/legend/poblacion_1_4.png" /> 222797 - 372616<br />'
        });
var format_Ferrocarril_2 = new ol.format.GeoJSON();
var features_Ferrocarril_2 = format_Ferrocarril_2.readFeatures(json_Ferrocarril_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ferrocarril_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferrocarril_2.addFeatures(features_Ferrocarril_2);
var lyr_Ferrocarril_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ferrocarril_2, 
                style: style_Ferrocarril_2,
                interactive: true,
                title: '<img src="styles/legend/Ferrocarril_2.png" /> Ferrocarril'
            });
var format_Rutas_3 = new ol.format.GeoJSON();
var features_Rutas_3 = format_Rutas_3.readFeatures(json_Rutas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rutas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rutas_3.addFeatures(features_Rutas_3);
var lyr_Rutas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rutas_3, 
                style: style_Rutas_3,
                interactive: true,
                title: '<img src="styles/legend/Rutas_3.png" /> Rutas'
            });
var format_cuerposdeagua_4 = new ol.format.GeoJSON();
var features_cuerposdeagua_4 = format_cuerposdeagua_4.readFeatures(json_cuerposdeagua_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cuerposdeagua_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cuerposdeagua_4.addFeatures(features_cuerposdeagua_4);
var lyr_cuerposdeagua_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cuerposdeagua_4, 
                style: style_cuerposdeagua_4,
                interactive: true,
                title: '<img src="styles/legend/cuerposdeagua_4.png" /> cuerpos de agua'
            });
var format_Aeropuertos_Venezuela_5 = new ol.format.GeoJSON();
var features_Aeropuertos_Venezuela_5 = format_Aeropuertos_Venezuela_5.readFeatures(json_Aeropuertos_Venezuela_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aeropuertos_Venezuela_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aeropuertos_Venezuela_5.addFeatures(features_Aeropuertos_Venezuela_5);
var lyr_Aeropuertos_Venezuela_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aeropuertos_Venezuela_5, 
                style: style_Aeropuertos_Venezuela_5,
                interactive: true,
                title: '<img src="styles/legend/Aeropuertos_Venezuela_5.png" /> Aeropuertos_Venezuela'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_poblacion_1.setVisible(true);lyr_Ferrocarril_2.setVisible(true);lyr_Rutas_3.setVisible(true);lyr_cuerposdeagua_4.setVisible(true);lyr_Aeropuertos_Venezuela_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_poblacion_1,lyr_Ferrocarril_2,lyr_Rutas_3,lyr_cuerposdeagua_4,lyr_Aeropuertos_Venezuela_5];
lyr_poblacion_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nombre_de_': 'Nombre_de_', 'Nombre_del': 'Nombre_del', 'Nombre_d_1': 'Nombre_d_1', 'Hombres': 'Hombres', 'Mujeres': 'Mujeres', 'PoblacionT': 'PoblacionT', '1': '1', 'area': 'area', 'pxkm2': 'pxkm2', });
lyr_Ferrocarril_2.set('fieldAliases', {'FID_rail_d': 'FID_rail_d', 'F_CODE_DES': 'F_CODE_DES', 'EXS_DESCRI': 'EXS_DESCRI', 'FCO_DESCRI': 'FCO_DESCRI', 'FID_countr': 'FID_countr', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', });
lyr_Rutas_3.set('fieldAliases', {'ID': 'ID', 'CODIGO': 'CODIGO', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', });
lyr_cuerposdeagua_4.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', });
lyr_Aeropuertos_Venezuela_5.set('fieldAliases', {'Ciudad': 'Ciudad', 'Tipo': 'Tipo', });
lyr_poblacion_1.set('fieldImages', {'OBJECTID': 'Range', 'Nombre_de_': 'TextEdit', 'Nombre_del': 'TextEdit', 'Nombre_d_1': 'TextEdit', 'Hombres': 'Range', 'Mujeres': 'Range', 'PoblacionT': 'Range', '1': 'Range', 'area': 'Range', 'pxkm2': 'Range', });
lyr_Ferrocarril_2.set('fieldImages', {'FID_rail_d': 'Range', 'F_CODE_DES': 'TextEdit', 'EXS_DESCRI': 'TextEdit', 'FCO_DESCRI': 'TextEdit', 'FID_countr': 'Range', 'ISO': 'TextEdit', 'ISOCOUNTRY': 'TextEdit', });
lyr_Rutas_3.set('fieldImages', {'ID': 'Range', 'CODIGO': 'Range', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_cuerposdeagua_4.set('fieldImages', {'ID': 'Range', 'NOMBRE': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_Aeropuertos_Venezuela_5.set('fieldImages', {'Ciudad': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_poblacion_1.set('fieldLabels', {'OBJECTID': 'no label', 'Nombre_de_': 'no label', 'Nombre_del': 'no label', 'Nombre_d_1': 'no label', 'Hombres': 'no label', 'Mujeres': 'no label', 'PoblacionT': 'no label', '1': 'no label', 'area': 'no label', 'pxkm2': 'no label', });
lyr_Ferrocarril_2.set('fieldLabels', {'FID_rail_d': 'no label', 'F_CODE_DES': 'no label', 'EXS_DESCRI': 'no label', 'FCO_DESCRI': 'no label', 'FID_countr': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', });
lyr_Rutas_3.set('fieldLabels', {'ID': 'no label', 'CODIGO': 'no label', 'TIPO': 'no label', 'NOMBRE': 'no label', });
lyr_cuerposdeagua_4.set('fieldLabels', {'ID': 'no label', 'NOMBRE': 'no label', 'TIPO': 'no label', });
lyr_Aeropuertos_Venezuela_5.set('fieldLabels', {'Ciudad': 'no label', 'Tipo': 'no label', });
lyr_Aeropuertos_Venezuela_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});