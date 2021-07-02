import { useSelector } from 'react-redux'

import User from '../models/User'

const useUser = () => useSelector(store => new User(store.loginState.user))

export default useUser
