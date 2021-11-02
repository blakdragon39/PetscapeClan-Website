const home = '/'
const login = '/login'
const signUp = '/sign-up'
const addClanMember = '/addClanMember'

const clanMember = '/clanMember/:runescapeName'
const buildClanMember = (runescapeName) => `/clanMember/${runescapeName}`

const editClanMember = '/clanMember/:runescapeName/edit'
const buildEditClanMember = (runescapeName) => `/clanMember/${runescapeName}/edit`

const routes = {
    home,
    login,
    signUp,
    addClanMember,

    clanMember,
    buildClanMember,

    editClanMember,
    buildEditClanMember
}

export default routes
