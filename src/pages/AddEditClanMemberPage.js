import React  from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import clanMemberService from '../services/clanMemberService'
import theme from '../theme'
import usePendingState from '../hooks/usePendingState'
import useUser from '../hooks/useUser'

import Busy from '../components/common/Busy'
import NotAuthorizedPage from './NotAuthorizedPage'

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
    return (
        <div>

        </div>
    )
}

AddEditClanMember.propTypes = {
    clanMember: PropTypes.object
}

export default AddEditClanMemberPage
