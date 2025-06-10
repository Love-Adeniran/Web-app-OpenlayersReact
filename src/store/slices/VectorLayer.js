import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Style, Stroke, Fill, Circle as CircleStyle } from 'ol/style';
import GeoJSON from 'ol/format/GeoJSON';

// Vector layer for roads
export const roadsLayer = new VectorLayer({
    source: new VectorSource({
        url: '/data/roads.geojson',
        format: new GeoJSON(),
    }),
    style: new Style({
        stroke: new Stroke({
            color: '#0077cc',
            width: 2,
        }),
    }),
});

// Vector layer for boundaries
export const boundariesLayer = new VectorLayer({
    source: new VectorSource({
        url: '/data/boundaries.geojson',
        format: new GeoJSON(),
    }),
    style: new Style({
        stroke: new Stroke({
            color: 'red',
            width: 1.5,
        }),
        fill: new Fill({
            color: 'rgba(255,0,0,0.1)',
        }),
    }),
});
