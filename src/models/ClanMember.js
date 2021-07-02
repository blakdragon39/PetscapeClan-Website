class ClanMember {
    constructor(json) {
        this.id = json.id

        this.alts = json.alts //list of strings
        this.bossKc = json.bossKc
        this.joinDate = json.joinDate
        this.lastSeen = json.lastSeen
        this.points = json.points
        this.rank = json.rank
        this.runescapeName = json.runescapeName

        this.achievements = json.achievements //todo define
        this.pets = json.pets //todo define
    }
}

export default ClanMember

