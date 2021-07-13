import { useSelector } from 'react-redux'

import User from '../models/User'

const useUser = () => useSelector(store => store.loginState.user ? new User(store.loginState.user) : null)

export default useUser
