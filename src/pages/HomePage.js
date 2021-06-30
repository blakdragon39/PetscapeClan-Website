import React  from 'react'
import styled from 'styled-components'

import ClanMemberList from '../components/ClanMemberList'
import Container from '../components/common/Container'

const HomeContainer = styled.div`
    display: flex;
    padding: 24px;
`

const HomePage = () => {
    return (
        <HomeContainer className='home'>
            <Container style={{ width: 400 }}>
                <ClanMemberList />
            </Container>
        </HomeContainer>
    )
}

export default HomePage
