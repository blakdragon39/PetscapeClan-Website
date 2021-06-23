import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import useControlledInput from '../hooks/useControlledInput'

import { register } from '../reducers/loginReducer'
import routes from '../routes'

import Alert from '../components/Alert'
import Busy from '../components/Busy'
import Button from '../components/Button'
import FormInput from '../components/FormInput'

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
        }
    }

    return (
        <div style={{ padding: 32 }}>
            <form onSubmit={onSubmitLogin}>
                <div>
                    <label>
                        DisplayName: <FormInput { ...displayName.props } required />
                    </label>
                </div>
                <div  style={{ marginTop: 12 }}>
                    <label>
                        Email: <FormInput { ...email.props }  required />
                    </label>
                </div>
                <div style={{ marginTop: 12 }}>
                    <label>
                        Password: <FormInput { ...password.props } required />
                    </label>
                </div>
                <div style={{ marginTop: 12 }}>
                    <label>
                        Confirm Password: <FormInput { ...confirmPassword.props } required />
                    </label>
                </div>
                <Button style={{ marginTop: 12 }} type='submit'>
                    {
                        loginState.pending ?
                            <Busy button/> :
                            'Sign Up'
                    }
                </Button>
                <Alert style={{ marginTop: 12 }} message={error} />
            </form>
        </div>
    )
}

export default SignUpPage
