import React from 'react'
import styled from 'styled-components'

import theme from './theme'
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
            <Button>SIGN-UP</Button>
            <Button style={{ marginLeft: 8 }}>LOGIN</Button>
        </ToolbarContainer>
    )
}

export default Toolbar
