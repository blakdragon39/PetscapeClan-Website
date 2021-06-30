class User {
    constructor(json) {
        this.id = json.id

        this.displayName = json.displayName
        this.isAdmin = json.isAdmin
        this.token = json.token
    }
}

export default User
