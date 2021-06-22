import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import theme from './theme'
import routes from './routes'
import Button from './components/Button'

const ToolbarContainer = styled.div`
    background-color: ${theme.colorPrimary};
    padding: 16px;
    
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Toolbar = () => {
    return(
        <ToolbarContainer>
            <Link to={routes.signUp}>
                <Button>SIGN-UP</Button>
            </Link>
            <Link to={routes.login}>
                <Button style={{ marginLeft: 8 }}>LOGIN</Button>
            </Link>
        </ToolbarContainer>
    )
}

export default Toolbar
