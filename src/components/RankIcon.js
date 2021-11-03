import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getRankImage } from '../models/Rank'

const RankIconContainer = styled.img`
    height: ${props => props.height || '40px'},
    width: ${props => props.width || '40px'}
`

const RankIcon = ({ rankType, rankLabel, height, width }) => {
    return (
        <RankIconContainer
            src={getRankImage(rankType)}
            alt={rankLabel}
            height={height}
            width={width}/>
    )
}

RankIcon.propTypes = {
    rankType: PropTypes.string.isRequired,
    rankLabel: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number
}

export default RankIcon
