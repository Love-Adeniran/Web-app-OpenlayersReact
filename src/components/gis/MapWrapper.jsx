import React, { useEffect } from 'react'
import Map from 'ol/Map.js'
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js'
import 'react-openlayers/dist/index.css'
import { OSM, XYZ } from 'ol/source.js'
import '../../styles/map.css'
import 'ol/ol.css';


const MyMap = () => {
    
    useEffect(() => {
        const map = new Map({
            target: 'map',
            
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
                    })
                  }),
            ],
            view: new View({
                center: [6.56195, 3.37000],
                zoom: 5,
            }),
        });
    }, [])

    return (
        <>
        <div className='map-container'>
            <div id='map' className='map'></div>
        </div>
        </>
    )
}

export default MyMap