import React from 'react';



const LayerButtons = ({ layers, onSelect }) => {
    return (
        <div className="flex gap-2 mb-4">
            {layers.map((layer) => (
                <button
                    key={layer.name}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => {
                        console.log(onSelect(layer.url));
                        
                    }}
                >
                    {layer.name}
                </button>
            ))}
        </div>
    );
};

export default LayerButtons;
