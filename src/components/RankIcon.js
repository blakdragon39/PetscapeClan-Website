import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getRankImage } from '../models/Rank'

const RankIconContainer = styled.img`
    height: ${props => props.height || '40px'},
    width: ${props => props.width || '40px'}
`

const RankIcon = ({ rank, height, width }) => {
    return (
        <RankIconContainer
            src={getRankImage(rank)}
            alt={rank.label}
            height={height}
            width={width}/>
    )
}

RankIcon.propTypes = {
    rank: PropTypes.object.isRequired,
    height: PropTypes.number,
    width: PropTypes.number
}

export default RankIcon
