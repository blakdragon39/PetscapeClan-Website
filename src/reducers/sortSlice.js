import { createSlice } from '@reduxjs/toolkit'
import localStorage from '../services/localStorage'
import sortTypes from '../utils/sortTypes'

const sortSlice = createSlice({
    name: 'sort',
    initialState: {
        value: localStorage.getSortType() ? localStorage.getSortType() : sortTypes[0].label
    },
    reducers: {
        setSortType: (state, action) => {
            localStorage.setSortType(action.payload)
            state.value = action.payload
        }
    }
})

export const { setSortType } = sortSlice.actions

export default sortSlice.reducer
