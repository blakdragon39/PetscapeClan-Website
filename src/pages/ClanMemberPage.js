import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import clanMemberService from '../services/clanMemberService'
import Busy from '../components/common/Busy'
import theme from '../theme'
import RankIcon from '../components/RankIcon'
import Visibility from '../components/common/Visibility'
import VerticalSpace from '../components/common/VerticalSpace'
import HorizontalSpace from '../components/common/HorizontalSpace'

const ClanMemberPage = () => {
    const { runescapeName } = useParams()
    const [clanMember, setClanMember] = useState()

    useEffect(async () => {
        const result = await clanMemberService.getClanMember(runescapeName)
        setClanMember(result)
    }, [])

    return (
        clanMember ? <ClanMember clanMember={clanMember} /> : <Busy style={{ margin: 32 }}/>
    )
}

const ClanMemberContainer = styled.div`
    color: ${theme.colorOnPrimary};
    padding: 16px;
`

const ClanMemberHeader = styled.div`
    display: flex;
    font-size: 24px;
`

const ClanMember = ({ clanMember }) => {
    return (
        <ClanMemberContainer>
            <ClanMemberHeader>
                <b>{ clanMember.runescapeName }</b>
                <HorizontalSpace width={8} />
                <RankIcon rank={clanMember.rank} height={32} width={32} />
            </ClanMemberHeader>
            <VerticalSpace height={8} />
            <Alts clanMember={clanMember} />
            <Visibility isVisible={clanMember.alts}><VerticalSpace height={8} /></Visibility>
            <GeneralInfo clanMember={clanMember} />
        </ClanMemberContainer>
    )
}

ClanMember.propTypes = {
    clanMember: PropTypes.object.isRequired
}

const Alts = ({ clanMember }) => {
    return  (
        <Visibility isVisible={ clanMember.alts.length > 0 }>
            Alts: <br/>
            { clanMember.alts.map(alt => `• ${alt}`) }
        </Visibility>
    )
}

Alts.propTypes = {
    clanMember: PropTypes.object.isRequired
}

const GeneralInfo = ({ clanMember }) => {
    return (
        <div>
            <b>Boss KC:</b> { clanMember.bossKc }<br/>
            <b>Points: </b> { clanMember.points }<br/>
            <b>Possible Rank:</b> { clanMember.possibleRank.label }
        </div>
    )
}

GeneralInfo.propTypes = {
    clanMember: PropTypes.object.isRequired
}

export default ClanMemberPage
