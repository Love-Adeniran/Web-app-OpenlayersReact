import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeBasemap: 'osm',
    overlays: {
        roads: true,
        boundaries: false,
    },
};

const layersSlice = createSlice({
    name: 'layers',
    initialState,
    reducers: {
        setActiveBasemap(state, action) {
            state.activeBasemap = action.payload;
        },
        toggleOverlay(state, action) {
            const key = action.payload;
            state.overlays[key] = !state.overlays[key];
        },
    },
});

export const { setActiveBasemap, toggleOverlay } = layersSlice.actions;
export default layersSlice.reducer;