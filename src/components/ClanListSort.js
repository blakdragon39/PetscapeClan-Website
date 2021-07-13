import React from 'react'
import Container from './common/Container'
import Select from './common/Select'

import sortTypes from '../models/sortTypes'

import { useSelector, useDispatch } from 'react-redux'
import { setSortType } from '../reducers/sortSlice'

const ClanListSort = () => {
    const sortType = useSelector(store => store.sortType.value)
    const dispatch = useDispatch()

    const onSortSelected = (event) => {
        dispatch(setSortType(event.target.value))
    }

    return (
        <Container>
            Sorted by:
            <Select style={{ marginLeft: 8 }} onChange={onSortSelected}>
                {
                    sortTypes.map (type => <option value={type} key={type}> { type } </option>)
                }
            </Select>
        </Container>
    )
}

export default ClanListSort
