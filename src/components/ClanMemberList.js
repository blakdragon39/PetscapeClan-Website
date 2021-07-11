import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import clanMemberService from '../services/clanMemberService'
import theme from '../theme'
import { getRankImage } from '../models/Rank'

const ClanMemberList = () => {
    const [clanMembers, setClanMembers] = useState([])

    useEffect(async () => {
        const clanMembersResult = await clanMemberService.getClanMembers()
        setClanMembers(clanMembersResult)
    }, [])

    return (
        <div>
            {
                clanMembers
                    .sort((c1, c2) => (c1.runescapeName.toLowerCase() > c2.runescapeName.toLowerCase()) ? 1 : -1)
                    .map(
                        clanMember =>
                            <ClanMember
                                key={clanMember.id}
                                clanMember={clanMember} />
                    )
            }
        </div>
    )
}

const ClanMemberContainer = styled.div`
    padding: 8px;
    
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
    console.log(clanMember.alts)
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
