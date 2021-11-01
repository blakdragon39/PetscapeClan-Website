import React from 'react'
import PropTypes from 'prop-types'

const HorizontalSpace = ({ width }) => <div style={{ width: width }} />

HorizontalSpace.propTypes = {
    width: PropTypes.number.isRequired
}

export default HorizontalSpace

