import axios from 'axios'
import baseUrl from './baseUrl'

import ClanMember from '../models/ClanMember'

const clanMemberUrl = `${baseUrl}/clanMembers`

const getClanMembers = async () => {
    const response = await axios.get(clanMemberUrl)
    return response.data.map(clanMember => new ClanMember(clanMember))
}

const getClanMember = async (runescapeName) => {
    const params = { runescapeName: runescapeName }
    const response = await axios.get(`${clanMemberUrl}/runescapeName`, { params })
    return response.data
}

const clanMemberService = { getClanMembers, getClanMember }
export default clanMemberService
