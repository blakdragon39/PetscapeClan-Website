import rankImages from '../assets/ranks/ranks'

class Rank {
    constructor(json) {
        this.type = json.rank
        this.label = json.label
        this.order = json.order
        this.points = json.points
    }
}

export const rankTypes = [
    'Bronze',
    'Iron',
    'Steel',
    'Gold',
    'Mithril',
    'Adamant',
    'Rune',
    'Dragon',
    'Admin',
    'DeputyOwner',
    'Owner'
]

export const getRankImage = (rankType) => {
    switch (rankType) {
    case 'Bronze':
        return rankImages.bronze
    case 'Iron':
        return rankImages.iron
    case 'Steel':
        return rankImages.steel
    case 'Gold':
        return rankImages.gold
    case 'Mithril':
        return rankImages.mithril
    case 'Adamant':
        return rankImages.adamant
    case 'Rune':
        return rankImages.rune
    case 'Dragon':
        return rankImages.dragon
    case 'Admin':
        return rankImages.admin
    case 'DeputyOwner':
        return rankImages.deputy_owner
    case 'Owner':
        return rankImages.owner
    default:
        return null
    }
}

export default Rank
