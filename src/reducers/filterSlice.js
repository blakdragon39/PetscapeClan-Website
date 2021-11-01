import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        needsRankUp: false,
        notSeenToday: false,
        search: ''
    },
    reducers: {
        setNeedsRankUpOn: (state) => {
            state.needsRankUp = true
        },
        setNeedsRankUpOff: (state) => {
            state.needsRankUp = false
        },
        setNotSeenTodayOn: (state) => {
            state.notSeenToday = true
        },
        setNotSeenTodayOff: (state) => {
            state.notSeenToday = false
        },
        setSearch: (state, action) => {
            state.search = action.payload
        }
    }
})

export const {
    setNeedsRankUpOn,
    setNeedsRankUpOff,
    setNotSeenTodayOn,
    setNotSeenTodayOff,
    setSearch
} = filterSlice.actions

export default filterSlice.reducer
