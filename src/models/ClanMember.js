import Achievement from './Achievement'
import Pet from './Pet'

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

        this.achievements = json.achievements.map(achievement => new Achievement(achievement))
        this.pets = json.pets.map(pet => new Pet(pet))
    }
}

export default ClanMember

