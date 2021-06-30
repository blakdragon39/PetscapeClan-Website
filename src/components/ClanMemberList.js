import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import clanMemberService from '../services/clanMemberService'
import theme from '../theme'

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

const ClanMember = ({ clanMember }) => {
    return (
        <ClanMemberContainer>
            { clanMember.runescapeName }
        </ClanMemberContainer>
    )
}

ClanMember.propTypes = {
    clanMember: PropTypes.object.isRequired
}

export default ClanMemberList
