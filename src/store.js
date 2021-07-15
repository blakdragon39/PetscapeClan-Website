import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './reducers/filterSlice'
import loginReducer from './reducers/loginSlice'
import sortReducer from './reducers/sortSlice'

export default configureStore({
    reducer: {
        loginState: loginReducer,
        sortType: sortReducer,
        filters: filterReducer
    }
})
