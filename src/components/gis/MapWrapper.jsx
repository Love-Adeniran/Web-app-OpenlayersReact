import React, { useRef, useEffect, useState } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { Style, Stroke } from 'ol/style';
import Attribution from 'ol/control/Attribution';

const MapWrapper = ({ selectedLayerUrl }) => {
    const mapRef = useRef();
    const [map, setMap] = useState(null);
    const [vectorLayer, setVectorLayer] = useState(null);

    useEffect(() => {
        const initialMap = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
                        maxZoom: 20
                    }),
                }),

            ],
            view: new View({
                center: fromLonLat([3.3792, 6.5244]),
                zoom: 5,
            }),
            controls: [new Attribution({ collapsible: false })],
        });

        setMap(initialMap);

        return () => initialMap.setTarget(null);
    }, []);

    useEffect(() => {
        if (!map || !selectedLayerUrl) return;
            if (vectorLayer) {
                map.removeLayer(vectorLayer);
            }
        const newVectorLayer = new VectorLayer({
            source: new VectorSource({
                url: selectedLayerUrl,
                format: new GeoJSON(),
            }),
            style: new Style({
                stroke: new Stroke({
                    color: '#000',
                    width: 5,
                }),
            }),
        });

        map.addLayer(newVectorLayer);
        setVectorLayer(newVectorLayer);
    }, [selectedLayerUrl]);


    return <div ref={mapRef} style={{ width: '100%', height: '570px', border: '1px solid #ccc' }} />;
};
export default MapWrapper

