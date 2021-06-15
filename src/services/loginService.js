import axios from 'axios'
import baseUrl from './baseUrl'

const loginUrl = `${baseUrl}/login`

//https://blog.prototypr.io/how-to-build-google-login-into-a-react-app-and-node-express-api-821d049ee670

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
