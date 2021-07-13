import { createSlice } from '@reduxjs/toolkit'
import localStorage from '../services/localStorage'

const sortSlice = createSlice({
    name: 'sort',
    initialState: {
        value: localStorage.getSortType()
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
