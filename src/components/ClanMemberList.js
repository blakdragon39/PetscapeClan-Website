import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import clanMemberService from '../services/clanMemberService'
import filters from '../utils/filters'
import { getRankImage } from '../models/Rank'
import { findSorter } from '../utils/sortTypes'

import Container from './common/Container'
import theme from '../theme'

const ClanMemberList = () => {
    const [clanMembers, setClanMembers] = useState([])
    const [sortedFilteredClanMembers, setSortedFilteredClanMembers] = useState([])
    const sortType = useSelector(store => store.sortType.value)
    const filterNeedsRankUp = useSelector(store => store.filters.needsRankUp)
    const filterNotSeenToday = useSelector(store => store.filters.notSeenToday)
    const filterSearch = useSelector(store => store.filters.search)

    useEffect(async () => {
        const result = await clanMemberService.getClanMembers()
        setClanMembers(result)
    }, [])

    useEffect(() => {
        let result = clanMembers.slice(0)

        if (filterNotSeenToday) {
            result = result.filter(filters.notSeenToday.filter)
        }

        if (filterNeedsRankUp) {
            result = result.filter(filters.needsRankUp.filter)
        }

        if (filterSearch) {
            result = result.filter(clanMember => clanMember.filterSearch(filterSearch))
        }

        result = result.sort(findSorter(sortType))

        setSortedFilteredClanMembers(result)
    }, [clanMembers, sortType, filterNeedsRankUp, filterNotSeenToday, filterSearch])

    return (
        <Container style={{ width: 400 }}>
            {
                sortedFilteredClanMembers
                    .map(
                        clanMember =>
                            <ClanMember
                                key={clanMember.id}
                                clanMember={clanMember} />
                    )
            }
        </Container>
    )
}

const ClanMemberContainer = styled.div`
    padding: 8px;
    border-radius: 8px;
    
    &:hover {
        background-color: ${theme.hoverOverlay}
    }
`

const RunescapeNameContainer = styled.div`
    display: flex;
`

const AltsContainer = styled.div`
    font-size: 14px;
    margin-left: 8px;
`

const RunescapeName = styled.span`
    flex-grow: 1;
`

const RankIcon = styled.img`
    height: 22px;
    width: 22px;
`

const ClanMember = ({ clanMember }) => {
    return (
        <ClanMemberContainer>
            <RunescapeNameContainer>
                <RunescapeName>{ clanMember.runescapeName }</RunescapeName> <RankIcon src={getRankImage(clanMember.rank)}/>
            </RunescapeNameContainer>
            {
                clanMember.alts.map(alt =>
                    <AltsContainer key={alt}>{ alt }</AltsContainer>
                )
            }
        </ClanMemberContainer>
    )
}

ClanMember.propTypes = {
    clanMember: PropTypes.object.isRequired
}

export default ClanMemberList
