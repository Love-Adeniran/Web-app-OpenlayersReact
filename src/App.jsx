import React, { useEffect, useState } from 'react';
import './App.css'
import MapWrapper from './components/gis/MapWrapper.jsx';
import LayerButtons from './components/gis/LayerButton.jsx';


function App() {
    const vectorLayersList = [
        {
            name: 'Test1',
            url:'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
            attributions: '© OpenStreetMap contributors'
        },
        {
            name: 'Test2',
            url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
            attributions:'© National map'
        },
        {
            name: 'Test3',
            url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSHydroCached/MapServer/tile/{z}/{y}/{x}',
            attributions: '© National map',
        }
    ];
    const [selectedUrl, setSelectedUrl] = useState(null);
    useEffect(() => {
        if (vectorLayersList.length > 0) {
            // console.log(vectorLayersList);
            setSelectedUrl(vectorLayersList[0].url);
        }
    }, []);
    return (
        <div className="p-4">
            <MapWrapper selectedLayerUrl={selectedUrl} />
            <LayerButtons layers={vectorLayersList} onSelect={setSelectedUrl} />
        </div>
    )
}

export default App
