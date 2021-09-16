import {createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: 'Jeep',
        model: 'Subaru',
        year: 2011,
        color: 'Metallic'

    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const {chooseMake, chooseModel,} = rootSlice.actions;