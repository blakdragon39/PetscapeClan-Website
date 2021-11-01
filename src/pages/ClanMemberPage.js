import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import clanMemberService from '../services/clanMemberService'

const ClanMemberPage = () => {
    const { runescapeName } = useParams()
    const [clanMember, setClanMember] = useState()

    useEffect(async () => {
        const result = await clanMemberService.getClanMember(runescapeName)
        setClanMember(result)
        console.log(result)
    }, [])

    return (
        <div>

        </div>
    )
}

export default ClanMemberPage
