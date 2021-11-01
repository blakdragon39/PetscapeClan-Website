import Achievement from './Achievement'
import Pet from './Pet'
import Rank from './Rank'

class ClanMember {
    constructor(json) {
        this.id = json.id

        this.alts = json.alts //list of strings
        this.bossKc = json.bossKc
        this.joinDate = json.joinDate
        this.lastSeen = json.lastSeen
        this.points = json.points
        this.rank = new Rank(json.rank)
        this.runescapeName = json.runescapeName
        this.possibleRank = new Rank(json.possibleRank)

        this.achievements = json.achievements.map(achievement => new Achievement(achievement))
        this.pets = json.pets.map(pet => new Pet(pet))
    }

    filterSearch(search) {
        return this.runescapeName.toLowerCase().includes(search) || this.alts.some(alt => alt.toLowerCase().includes(search))
    }
}

export default ClanMember

