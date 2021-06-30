import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import theme from '../../theme'

const AlertContainer = styled.div`
    background-color: ${theme.colorOnPrimary};
    padding: 16px;
    border-radius: 8px;
`

const Alert = ({ message, ...props }) => {
    return message ? (
        <AlertContainer {...props}>
            { message }
        </AlertContainer>
    ) : null
}

Alert.propTypes = {
    message: PropTypes.string
}

export default Alert
