import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import clanMemberService from '../services/clanMemberService'
import { getRankImage } from '../models/Rank'
import { findSorter } from '../models/sortTypes'

import Container from './common/Container'
import theme from '../theme'

const ClanMemberList = () => {
    const [clanMembers, setClanMembers] = useState([])
    const sortType = useSelector(store => store.sortType.value)

    useEffect(async () => {
        const clanMembersResult = await clanMemberService.getClanMembers()
        setClanMembers(clanMembersResult)
    }, [])

    return (
        <Container style={{ width: 400 }}>
            {
                clanMembers
                    .sort(findSorter(sortType))
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
