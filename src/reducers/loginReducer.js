import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import loginService from '../services/loginService'
import localStorage from '../services/localStorage'

import User from '../models/User'

export const register = createAsyncThunk(
    'login/register',
    async ({ email, password, displayName}, { rejectWithValue }) => {
        try {
            const user = await loginService.register(email, password, displayName)
            localStorage.setUser(user)
            return user
        } catch (e) {
            return rejectWithValue(e.response.data.message)
        }
    }
)

export const login = createAsyncThunk(
    'login/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const user = await loginService.login(email, password)
            localStorage.setUser(user)
            return user
        } catch (e) {
            return rejectWithValue(e.response.data.message)
        }
    }
)

export const googleLogin = createAsyncThunk(
    'login/google',
    async ({ idToken }, { rejectWithValue }) => {
        try {
            const user = await loginService.loginGoogle(idToken)
            localStorage.setUser(user)
            return user
        } catch (e) {
            return rejectWithValue(e.response.data.message)
        }
    }
)

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: localStorage.getUser() ? new User(localStorage.getUser()) : null,
        pending: false
    },
    reducers: {
        logout: (state) => {
            localStorage.setUser(null)
            state.user = null
        }
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.pending = true
        },
        [login.fulfilled]: (state, action) => {
            state.user = action.payload
            state.pending = false
        },
        [login.rejected]: (state) => {
            state.user = null
            state.pending = false
        },
        [googleLogin.pending]: (state) => {
            state.pending = true
        },
        [googleLogin.fulfilled]: (state, action) => {
            state.user = action.payload
            state.pending = false
        },
        [googleLogin.rejected]: (state) => {
            state.user = null
            state.pending = false
        },
        [register.pending]: (state) => {
            state.pending = true
        },
        [register.fulfilled]: (state) => {
            state.pending = false
        },
        [register.rejected]: (state) => {
            state.pending = false
        }
    }
})


export const { logout } = loginSlice.actions

export default loginSlice.reducer
