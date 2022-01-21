import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SelectableListItemContainer = styled.div`
    padding: 4px;
`

const SelectableListItem = ({ label }) => {
    return (
        <SelectableListItemContainer>
            { label }
        </SelectableListItemContainer>
    )
}

SelectableListItem.propTypes = {
    label: PropTypes.string.isRequired
}

export default SelectableListItem
