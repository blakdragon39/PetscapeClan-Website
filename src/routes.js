const home = '/'
const login = '/login'
const signUp = '/sign-up'

const clanMember = '/clanMember/:runescapeName'
const buildClanMember = (runescapeName) => `/clanMember/${runescapeName}`

const routes = {
    home,
    login,
    signUp,
    clanMember,
    buildClanMember
}

export default routes
