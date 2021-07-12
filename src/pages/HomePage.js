import React  from 'react'
import styled from 'styled-components'

import ClanMemberList from '../components/ClanMemberList'
import ClanListSort from '../components/ClanListSort'

const HomeContainer = styled.div`
    display: flex;
    padding: 24px;
`

const HomePage = () => {
    return (
        <HomeContainer>
            <ClanMemberList />
            <div style={{ marginLeft: 16 }}>
                <ClanListSort />
            </div>
        </HomeContainer>
    )
}

export default HomePage
