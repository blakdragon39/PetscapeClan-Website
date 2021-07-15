const getUser = () => {
    const user = window.localStorage.getItem('user')
    return user ? JSON.parse(user) : null
}

const setUser = (user) => {
    if (user) {
        window.localStorage.setItem('user', JSON.stringify(user))
    } else {
        window.localStorage.removeItem('user')
    }
}

const getSortType = () => window.localStorage.getItem('sortType')
const setSortType = (sortType) => window.localStorage.setItem('sortType', sortType)

const localStorage = {
    getUser,
    setUser,

    getSortType,
    setSortType
}

export default localStorage
