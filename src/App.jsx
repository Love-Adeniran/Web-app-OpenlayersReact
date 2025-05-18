import { useEffect } from 'react';
import Map from 'ol/Map.js'
import View from 'ol/View.js';
import './App.css'
import { OSM } from 'ol/source.js'
import TileLayer from 'ol/layer/Tile.js'
import 'react-openlayers/dist/index.css'

function App() {
    useEffect(() => {
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
        });
    }, [])


    return (
        <>
            <div className='map'></div>
            <h1 className='text-blue-400'>ysdkjsfj8</h1>

        </>
    )
}

export default App
