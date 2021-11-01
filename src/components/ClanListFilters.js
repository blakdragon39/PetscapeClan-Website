import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import filters from '../utils/filters'
import { setNeedsRankUpOn, setNeedsRankUpOff, setNotSeenTodayOn, setNotSeenTodayOff, setSearch } from '../reducers/filterSlice'

import Container from './common/Container'
import FormInput from './common/FormInput'
import search from '../assets/search.svg'

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
            <SearchBar/>
            <div style={{ marginTop: 8 }}>Filters:</div>
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

const SearchBarContainer = styled.div`
    display: flex;
`

const SearchBar = () => {
    const dispatch = useDispatch()

    const onSearchChange = (event) => {
        dispatch(setSearch(event.target.value))
    }

    return (
        <SearchBarContainer>
            <img src={search} alt='Search Icon' style={{paddingRight: 8}}/>
            <FormInput onChange={onSearchChange} />
        </SearchBarContainer>
    )
}

Filter.propTypes = {
    filter: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

export default ClanListFilters
