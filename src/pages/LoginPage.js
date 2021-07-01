import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import useControlledInput from '../hooks/useControlledInput'

import { login, googleLogin } from '../reducers/loginReducer'
import routes from '../routes'

import Alert from '../components/common/Alert'
import Busy from '../components/common/Busy'
import Button from '../components/common/Button'
import FormInput from '../components/common/FormInput'
import GoogleLogin from 'react-google-login'
import VerticalSpace from '../components/common/VerticalSpace'

const LoginPage = () => {
    const email = useControlledInput('text')
    const password = useControlledInput('password')
    const [error, setError] = useState()
    const loginState = useSelector(store => store.loginState)

    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmitLogin = async (e) => {
        e.preventDefault()

        const result = await dispatch(login({
            email: email.props.value,
            password: password.props.value
        }))

        switch (result.type) {
        case login.fulfilled.toString():
            history.push(routes.home)
            break
        case login.rejected.toString():
            setError(result.payload)
            password.clear()
            break
        default:
            break
        }
    }

    const handleGoogleLogin = async (data) => {
        if (data.error) {
            //todo what are possible errors? (also SignUpPage)
            //popup_closed_by_user
            return
        }

        const result = await dispatch(googleLogin({
            idToken: data.tokenId
        }))

        switch (result.type) {
        case googleLogin.fulfilled.toString():
            history.push(routes.home)
            break
        case googleLogin.rejected.toString():
            setError(result.payload)
            break
        default:
            break
        }
    }

    return (
        <div style={{ padding: 32 }}>
            <form onSubmit={onSubmitLogin}>
                <label>
                    Email: <FormInput { ...email.props }  required />
                </label>
                <VerticalSpace height={12} />
                <label>
                    Password: <FormInput { ...password.props } required />
                </label>
                <VerticalSpace height={12} />
                <Button type='submit'>
                    {
                        loginState.pending ?
                            <Busy button/> :
                            'Login'
                    }
                </Button>
                <VerticalSpace height={12} />
                <GoogleLogin
                    clientId='285206861319-4rssk6blmo670m0o5itqqllmf9dvuj8s.apps.googleusercontent.com'
                    onSuccess={handleGoogleLogin}
                    onFailure={handleGoogleLogin} />
                <Alert style={{ marginTop: 12 }} message={error} />
            </form>
        </div>
    )
}

export default LoginPage
