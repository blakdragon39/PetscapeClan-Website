import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { rankTypes } from '../models/Rank'
import theme from '../theme'

import RankIcon from './RankIcon'
import Visibility from './common/Visibility'
import HorizontalSpace from './common/HorizontalSpace'
import VerticalSpace from './common/VerticalSpace'

const RankPickerContainer = styled.div`
    display: flex;
    color: ${theme.colorPrimary}; 
    background-color: ${theme.colorOnPrimary};
    border-radius: 16px;
    padding: 12px;
`

const RankPickerExpandedContainer = styled.div`
    position: absolute;
    color: ${theme.colorPrimary}; 
    background-color: ${theme.colorOnPrimary};
    border-radius: 16px;
    padding: 12px;
`

const RankPicker = ({ rank, setRank }) => {
    const [expanded, setExpanded] = useState(false)

    const expandCollapse = () => {
        setExpanded(!expanded)
    }

    return (
        <RankPickerContainer onClick={expandCollapse}>
            <Rank
                rank={rank}
                setRank={setRank}
                isVisible={true}
                hasBottomPadding={false} />
            <Visibility isVisible={expanded}>
                <RankPickerExpandedContainer>
                    {
                        rankTypes.map((rankType, index) =>
                            <Rank
                                rank={rankType}
                                setRank={setRank}
                                isVisible={expanded || rank === rankType}
                                hasBottomPadding={index !== rankTypes.length - 1}
                                key={rankType} />
                        )
                    }
                </RankPickerExpandedContainer>
            </Visibility>
        </RankPickerContainer>
    )
}

RankPicker.propTypes = {
    rank: PropTypes.string.isRequired,
    setRank: PropTypes.func.isRequired
}

const RankContainer = styled.div`
    display: flex;
    align-items: center;
`

const Rank = ({ rank, setRank, hasBottomPadding }) => {
    //todo bottom padding isn't working
    //todo make hovering the text no show a cursor?
    const onRankClick = () => setRank(rank)

    const bottomPadding = hasBottomPadding ? <VerticalSpace height={8} /> : null

    return (
        <div onClick={onRankClick}>
            <RankContainer>
                <RankIcon rankType={rank} rankLabel={rank} height={24} width={24} />
                <HorizontalSpace width={8} />
                { rank }
                { bottomPadding }
            </RankContainer>
        </div>
    )
}

Rank.propTypes = {
    rank: PropTypes.string.isRequired,
    setRank: PropTypes.func.isRequired,
    hasBottomPadding: PropTypes.bool.isRequired
}

export default RankPicker
