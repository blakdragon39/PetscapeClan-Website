import axios from 'axios'
import baseUrl from './baseUrl'

import ClanMember from '../models/ClanMember'

const clanMemberUrl = `${baseUrl}/clanMembers`

const getClanMembers = async () => {
    const response = await axios.get(clanMemberUrl)
    return response.data.map(clanMember => new ClanMember(clanMember))
}

const clanMemberService = { getClanMembers }
export default clanMemberService
