import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        needsRankUp: false,
        notSeenToday: false
    },
    reducers: {
        setNeedsRankUpOn: (state) => state.needsRankUp = true,
        setNeedsRankUpOff: (state) => state.needsRankUp = false,
        setNotSeenTodayOn: (state) => state.notSeenToday = true,
        setNotSeenTodayOff: (state) => state.notSeenToday = false
    }
})

export const {
    setNeedsRankUpOn,
    setNeedsRankUpOff,
    setNotSeenTodayOn,
    setNotSeenTodayOff
} = filterSlice.actions

export default filterSlice.reducer
