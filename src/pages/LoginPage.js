import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useControlledInput from '../hooks/useControlledInput'

import { login } from '../reducers/loginReducer'

import Busy from '../components/Busy'
import Button from '../components/Button'
import FormInput from '../components/FormInput'

const LoginPage = () => {
    const email = useControlledInput('text')
    const password = useControlledInput('password')
    const loginState = useSelector(store => store.loginState)

    const dispatch = useDispatch()

    const onSubmitLogin = async (e) => {
        e.preventDefault()

        const result = await dispatch(login({
            email: email.props.value,
            password: password.props.value
        }))
    }

    return (
        <div style={{ padding: 32 }}>
            <form onSubmit={onSubmitLogin}>
                <div>
                    <label>
                        Email: <FormInput { ...email.props } />
                    </label>
                </div>
                <div style={{ marginTop: 12 }}>
                    <label>
                        Password: <FormInput { ...password.props } />
                    </label>
                </div>
                <Button style={{ marginTop: 12 }} type='submit'>
                    {
                        loginState.pending ?
                            <Busy /> :
                            'Login'
                    }
                </Button>
            </form>
        </div>
    )
}

export default LoginPage
