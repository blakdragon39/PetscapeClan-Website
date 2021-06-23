import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import useControlledInput from '../hooks/useControlledInput'

import { login } from '../reducers/loginReducer'
import routes from '../routes'

import Alert from '../components/Alert'
import Busy from '../components/Busy'
import Button from '../components/Button'
import FormInput from '../components/FormInput'

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
        }
    }

    return (
        <div style={{ padding: 32 }}>
            <form onSubmit={onSubmitLogin}>
                <div>
                    <label>
                        Email: <FormInput { ...email.props }  required />
                    </label>
                </div>
                <div style={{ marginTop: 12 }}>
                    <label>
                        Password: <FormInput { ...password.props } required />
                    </label>
                </div>
                <Button style={{ marginTop: 12 }} type='submit'>
                    {
                        loginState.pending ?
                            <Busy button/> :
                            'Login'
                    }
                </Button>
                <Alert style={{ marginTop: 12 }} message={error} />
            </form>
        </div>
    )
}

export default LoginPage
