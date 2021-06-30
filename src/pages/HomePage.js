import React, { useEffect } from 'react'
import styled from 'styled-components'

import clanMemberService from '../services/clanMemberService'
import useUser from '../hooks/useUser'

import ClanMemberList from '../components/ClanMemberList'
import Container from '../components/common/Container'

const HomeContainer = styled.div`
    display: flex;
    padding: 24px;
`

const HomePage = () => {
    const user = useUser()

    useEffect(async () => {
        const clanMembers = await clanMemberService.getClanMembers()
        user ? console.log(user.displayName) : null
    }, [])

    return (
        <HomeContainer className='home'>
            <Container style={{ width: 100 }}>
                <ClanMemberList />
            </Container>
        </HomeContainer>
    )
}

export default HomePage
