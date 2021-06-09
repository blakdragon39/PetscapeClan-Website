import axios from 'axios'
import baseUrl from './baseUrl'

const loginUrl = `${baseUrl}/login`

const login = async (email, password) => {
    const response = await axios.post(loginUrl, { email, password })
    return response.data
}

const loginGoogle = async (idToken) => {
    const response = await axios.post(`${loginUrl}/google`, { idToken })
    return response.data
}

const register = async (email, password, displayName) => {
    const response = await axios.post(`${loginUrl}/register`, { email, password, displayName })
    return response.data
}

const loginService = { login, loginGoogle, register }
export default loginService
