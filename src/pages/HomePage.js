import React  from 'react'
import styled from 'styled-components'

import ClanListFilters from '../components/ClanListFilters'
import ClanListSort from '../components/ClanListSort'
import ClanMemberList from '../components/ClanMemberList'
import VerticalSpace from '../components/common/VerticalSpace'

const HomeContainer = styled.div`
    display: flex;
    padding: 32px;
`

const HomePage = () => {
    return (
        <HomeContainer>
            <ClanMemberList />
            <div style={{ marginLeft: 16 }}>
                <ClanListSort />
                <VerticalSpace height={16} />
                <ClanListFilters />
            </div>
        </HomeContainer>
    )
}

export default HomePage
