import moment from 'moment'

const notSeenToday = {
    label: 'Not seen today',
    filter: (c) => {
        const lastSeen = moment(c.lastSeen, 'YYYY-MM-DD')
        const now = moment()

        return lastSeen.get('year') === now.get('year') &&
            lastSeen.get('month') === now.get('month') &&
            lastSeen.get('date') === now.get('date')
    }
}

const needsRankUp = {
    label: 'Needs rank up',
    filter: (c) => c.possibleRank.order > c.rank.order
}

const filters = {
    notSeenToday,
    needsRankUp
}

export default filters
