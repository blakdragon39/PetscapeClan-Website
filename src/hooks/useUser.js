import { useSelector } from 'react-redux'

const useUser = () => useSelector(store => store.loginState.user)

export default useUser
