import rankImages from '../assets/ranks/ranks'

const Rank = {
    Bronze: 'Bronze',
    Iron: 'Iron',
    Steel: 'Steel',
    Gold: 'Gold',
    Mithril: 'Mithril',
    Adamant: 'Adamant',
    Rune: 'Rune',
    Dragon: 'Dragon',
    Admin: 'Admin',
    DeputyOwner: 'DeputyOwner',
    Owner: 'Owner'
}

export const getRankImage = (rank) => {
    switch (rank) {
    case Rank.Bronze:
        return rankImages.bronze
    case Rank.Iron:
        return rankImages.iron
    case Rank.Steel:
        return rankImages.steel
    case Rank.Gold:
        return rankImages.gold
    case Rank.Mithril:
        return rankImages.mithril
    case Rank.Adamant:
        return rankImages.adamant
    case Rank.Rune:
        return rankImages.rune
    case Rank.Dragon:
        return rankImages.dragon
    case Rank.Admin:
        return rankImages.admin
    case Rank.DeputyOwner:
        return rankImages.deputy_owner
    case Rank.Owner:
        return rankImages.owner
    default:
        return null
    }
}

export default Rank
