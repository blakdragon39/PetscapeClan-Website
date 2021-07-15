import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import filters from '../utils/filters'
import { setNeedsRankUpOn, setNeedsRankUpOff, setNotSeenTodayOn, setNotSeenTodayOff } from '../reducers/filterSlice'

import Container from './common/Container'

const ClanListFilters = () => {
    const dispatch = useDispatch()

    const notSeenTodayChange = (event) => {
        dispatch(event.target.checked ? setNotSeenTodayOn() : setNotSeenTodayOff())
    }

    const needsRankUpChange = (event) => {
        dispatch(event.target.checked ? setNeedsRankUpOn() : setNeedsRankUpOff())
    }

    return (
        <Container>
            <div>Filters:</div>
            <Filter filter={filters.notSeenToday} onChange={notSeenTodayChange} />
            <Filter filter={filters.needsRankUp} onChange={needsRankUpChange} />
        </Container>
    )
}

const FilterContainer = styled.div`
    padding: 8px;
    text-color: black;
`

const Filter = ({ filter, onChange }) => {
    return (
        <FilterContainer>
            <input type='checkbox' onChange={onChange} /><label> { filter.label }</label>
        </FilterContainer>
    )
}

Filter.propTypes = {
    filter: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

export default ClanListFilters
