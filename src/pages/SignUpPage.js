import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import useControlledInput from '../hooks/useControlledInput'

import {googleLogin, register} from '../reducers/loginReducer'
import routes from '../routes'

import Alert from '../components/common/Alert'
import Busy from '../components/common/Busy'
import Button from '../components/common/Button'
import FormInput from '../components/common/FormInput'
import GoogleLogin from 'react-google-login'
import VerticalSpace from '../components/common/VerticalSpace'

const SignUpPage = () => {
    const email = useControlledInput('text')
    const password = useControlledInput('password')
    const confirmPassword = useControlledInput('password')
    const displayName = useControlledInput('text')
    const [error, setError] = useState()
    const loginState = useSelector(store => store.loginState)

    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmitLogin = async (e) => {
        e.preventDefault()

        //todo check passwords match
        const result = await dispatch(register({
            email: email.props.value,
            password: password.props.value,
            displayName: displayName.props.value
        }))

        switch (result.type) {
        case register.fulfilled.toString():
            history.push(routes.home)
            break
        case register.rejected.toString():
            setError(result.payload)
            password.clear()
            break
        default:
            break
        }
    }

    const handleGoogleLogin = async (data) => {
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
                    DisplayName: <FormInput { ...displayName.props } required />
                </label>
                <VerticalSpace height={12} />
                <label>
                    Email: <FormInput { ...email.props }  required />
                </label>
                <VerticalSpace height={12} />
                <label>
                    Password: <FormInput { ...password.props } required />
                </label>
                <VerticalSpace height={12} />
                <label>
                    Confirm Password: <FormInput { ...confirmPassword.props } required />
                </label>
                <VerticalSpace height={12} />
                <Button type='submit'>
                    {
                        loginState.pending ?
                            <Busy button/> :
                            'Sign Up'
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

export default SignUpPage
