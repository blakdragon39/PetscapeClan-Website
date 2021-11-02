import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import clanMemberService from '../services/clanMemberService'
import theme from '../theme'
import useUser from '../hooks/useUser'
import usePendingState from '../hooks/usePendingState'
import routes from '../routes'
import { achievementTypes } from '../models/Achievement'
import { petTypes } from '../models/Pet'

import Alert from '../components/common/Alert'
import Busy from '../components/common/Busy'
import Container from '../components/common/Container'
import HorizontalSpace from '../components/common/HorizontalSpace'
import ListItem from '../components/common/ListItem'
import RankIcon from '../components/RankIcon'
import Visibility from '../components/common/Visibility'
import VerticalSpace from '../components/common/VerticalSpace'
import edit_icon from '../assets/edit.svg'

const ClanMemberContainer = styled.div`
    color: ${theme.colorOnPrimary};
    padding: 32px;
`

const ClanMemberPage = () => {
    const { runescapeName } = useParams()
    const clanMemberState = usePendingState(null, () => clanMemberService.getClanMember(runescapeName))

    let body = null
    if (clanMemberState.error) body = <Alert message={clanMemberState.error} />
    else if (clanMemberState.pending) body = <Busy />
    else if (clanMemberState.state) body = <ClanMember clanMember={clanMemberState.state} />

    return (
        <ClanMemberContainer>
            { body }
        </ClanMemberContainer>
    )
}

const ClanMember = ({ clanMember }) => {
    return (
        <div>
            <ClanMemberHeader clanMember={clanMember} />
            <VerticalSpace height={8} />
            <Alts clanMember={clanMember} />
            <Visibility isVisible={clanMember.alts}><VerticalSpace height={8} /></Visibility>
            <GeneralInfo clanMember={clanMember} />
            <VerticalSpace height={16} />
            <PetList clanMember={clanMember} />
            <VerticalSpace height={16} />
            <AchievementList clanMember={clanMember} />
        </div>
    )
}

ClanMember.propTypes = {
    clanMember: PropTypes.object.isRequired
}

const ClanMemberHeaderContainer = styled.div`
    display: flex;
    font-size: 24px;
`

const ClanMemberHeader = ({ clanMember }) => {
    const user = useUser()
    const history = useHistory()

    const onEditClick = () => {
        history.push(routes.buildEditClanMember(clanMember.runescapeName))
    }

    return (
        <ClanMemberHeaderContainer>
            <b>{ clanMember.runescapeName }</b>
            <HorizontalSpace width={8} />
            <RankIcon rank={clanMember.rank} height={32} width={32} />
            <HorizontalSpace width={8} />
            <Visibility isVisible={user && user.isAdmin}>
                <img
                    src={edit_icon}
                    alt='edit'
                    style={{ height: 32, width: 32}}
                    onClick={onEditClick} />
            </Visibility>
        </ClanMemberHeaderContainer>
    )
}

ClanMemberHeader.propTypes = {
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

const PetList = ({ clanMember }) => {
    return (
        <div>
            <b>Pets: </b> { clanMember.pets.length } / { petTypes.length }
            <VerticalSpace height={8} />
            <Container style={{ width: 400 }}>
                { clanMember.pets.map(pet => <ListItem label={pet.label} key={pet.type} /> )}
            </Container>
        </div>
    )
}

PetList.propTypes = {
    clanMember: PropTypes.object.isRequired
}

const AchievementList = ({ clanMember }) => {
    return (
        <div>
            <b>Achievements: </b> { clanMember.achievements.length } / { achievementTypes.length }
            <VerticalSpace height={8} />
            <Container style={{ width: 400 }}>
                { clanMember.achievements.map(achievement => <ListItem label={achievement.label} key={achievement.type} /> )}
            </Container>
        </div>
    )
}

AchievementList.propTypes = {
    clanMember: PropTypes.object.isRequired
}

export default ClanMemberPage
