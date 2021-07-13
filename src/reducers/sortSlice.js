import { createSlice } from '@reduxjs/toolkit'
import sortTypes from '../models/sortTypes'

const sortSlice = createSlice({
    name: 'sort',
    initialState: {
        value: sortTypes[0] //todo localStorage
    },
    reducers: {
        setSortType: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setSortType } = sortSlice.actions

export default sortSlice.reducer
