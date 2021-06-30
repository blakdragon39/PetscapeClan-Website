import React from 'react'
import styled from 'styled-components'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import routes from '../routes'
import theme from '../theme'
import useUser from '../hooks/useUser'
import { logout } from '../reducers/loginReducer'

import Button from './Button'
import Visibility from './Visibility'

const ToolbarContainer = styled.div`
    background-color: ${theme.colorPrimary};
    padding: 16px;
    
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Toolbar = () => {
    const user = useUser()

    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    const onLogout = () => {
        dispatch(logout())
        history.push(location.pathname)
    }

    return(
        <ToolbarContainer>
            <Visibility isVisible={!user}>
                <Link to={routes.signUp}>
                    <Button>SIGN-UP</Button>
                </Link>
                <Link to={routes.login}>
                    <Button style={{ marginLeft: 8 }}>LOGIN</Button>
                </Link>
            </Visibility>
            <Visibility isVisible={user}>
                <Button onClick={onLogout}>LOGOUT</Button>
            </Visibility>
        </ToolbarContainer>
    )
}

export default Toolbar
