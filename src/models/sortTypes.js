const sortTypes = [
    {
        label: 'Default',
        sorter: (c1, c2) => (c1.rank.order < c2.rank.order) ? 1 : -1
    },
    {
        label: 'Alphabetical',
        sorter: (c1, c2) => (c1.runescapeName > c2.runescapeName) ? 1 : -1
    }
]

export const findSorter = (label) => sortTypes.find(type => type.label === label).sorter

export default sortTypes
