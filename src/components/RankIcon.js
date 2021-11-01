import React from 'react'
import PropTypes from 'prop-types'

import { getRankImage } from '../models/Rank'

const RankIcon = ({ rank, height, width }) => {
    const style = {
        height: height ? height : 40,
        width: width ? width : 40
    }
    return (
        <img
            src={getRankImage(rank)}
            alt={rank.label}
            style={style}/>
    )
}

RankIcon.propTypes = {
    rank: PropTypes.object.isRequired,
    height: PropTypes.number,
    width: PropTypes.number
}

export default RankIcon
