import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ListItemContainer = styled.div`
    padding: 4px;
`

const ListItem = ({ label }) => {
    return (
        <ListItemContainer>
            { label }
        </ListItemContainer>
    )
}

ListItem.propTypes = {
    label: PropTypes.string.isRequired
}

export default ListItem
