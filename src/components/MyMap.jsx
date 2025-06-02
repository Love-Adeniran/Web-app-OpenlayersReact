import React, { useEffect } from 'react'
import Map from 'ol/Map.js'
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js'
import 'react-openlayers/dist/index.css'
import {OSM} from 'ol/source.js'
import '../App.css'

const MyMap = () => {
    useEffect(() => {
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({ source: new OSM(), }),
            ],
            view: new View({
                center: [6.56195, 3.37000],
                zoom: 5,
            }),
        });
    }, [])

  return (
    <>
        <div id='map' className='map'></div>
    </>
  )
}

export default MyMap