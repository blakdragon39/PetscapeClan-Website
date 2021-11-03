import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import clanMemberService from '../services/clanMemberService'
import theme from '../theme'
import useControlledInput from '../hooks/useControlledInput'
import usePendingState from '../hooks/usePendingState'
import useUser from '../hooks/useUser'
import { rankTypes } from '../models/Rank'

import AddRemoveList from '../components/AddRemoveList'
import Busy from '../components/common/Busy'
import FormInput from '../components/common/FormInput'
import HorizontalSpace from '../components/common/HorizontalSpace'
import RankPicker from '../components/RankPicker'
import NotAuthorizedPage from './NotAuthorizedPage'
import VerticalSpace from '../components/common/VerticalSpace'

const AddEditClanMemberContainer = styled.div`
    color: ${theme.colorOnPrimary};
    padding: 32px;
`

const AddEditClanMemberPage = () => {
    const user = useUser()
    const { runescapeName } = useParams()
    const clanMemberState = usePendingState(null, () => clanMemberService.getClanMember(runescapeName))

    let body
    if (!user || !user.isAdmin) body = <NotAuthorizedPage />
    else if (!runescapeName) body = <AddEditClanMember />
    else if (clanMemberState.pending) body = <Busy />
    else if (clanMemberState.state) body = <AddEditClanMember clanMember={clanMemberState.state} />

    return (
        <AddEditClanMemberContainer>
            { body }
        </AddEditClanMemberContainer>
    )
}

const AddEditClanMember = ({ clanMember }) => {
    const runescapeName = useControlledInput('text', clanMember.runescapeName)
    const [rank, setRank] = useState(clanMember ? clanMember.rank.type : rankTypes[0])
    const [joinDate, setJoinDate] = useState(clanMember ? clanMember.joinDate : Date.now())
    const [alts, setAlts] = useState(clanMember ? clanMember.alts : [])
    const [pets, setPets] = useState(clanMember ? clanMember.pets : [])
    const [achievements, setAchievements] = useState(clanMember ? clanMember.achievements : [])

    return (
        <div>
            <AddEditNameRank
                runescapeName={runescapeName}
                rank={rank}
                setRank={setRank} />
            <EditJoinDate joinDate={joinDate} setJoinDate={setJoinDate} />
            <VerticalSpace height={16} />
            <AddRemoveList list={alts} setList={setAlts} width={300} />
        </div>
    )
}

AddEditClanMember.propTypes = {
    clanMember: PropTypes.object
}

const AddEditNameRankContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const AddEditNameRank = ({ runescapeName, rank, setRank }) => {
    return (
        <AddEditNameRankContainer>
            <FormInput { ...runescapeName.props } />
            <HorizontalSpace width={16} />
            <RankPicker rank={rank} setRank={setRank} />
        </AddEditNameRankContainer>
    )
}

AddEditNameRank.propTypes = {
    runescapeName: PropTypes.object.isRequired,
    rank: PropTypes.string.isRequired,
    setRank: PropTypes.func.isRequired
}

const EditJoinDate = ({ joinDate, setJoinDate }) => {
    const onDateChange = (event) => {
        setJoinDate(event.target.value)
    }

    return (
        <FormInput
            type='date'
            value={joinDate}
            onChange={onDateChange}/>
    )
}

EditJoinDate.propTypes = {
    joinDate: PropTypes.string.isRequired,
    setJoinDate: PropTypes.func.isRequired
}

export default AddEditClanMemberPage
