import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import sortTypes from '../models/sortTypes'
import { setSortType } from '../reducers/sortSlice'

import Container from './common/Container'
import Select from './common/Select'

const ClanListSort = () => {
    const sortType = useSelector(store => store.sortType.value)
    const dispatch = useDispatch()

    const onSortSelected = (event) => {
        dispatch(setSortType(event.target.value))
    }

    return (
        <Container>
            Sorted by:
            <Select
                value={sortType}
                onChange={onSortSelected}
                style={{ marginLeft: 8 }} >
                {
                    sortTypes
                        .map(type => type.label)
                        .map(type => <option value={type} key={type}>{ type }</option>)
                }
            </Select>
        </Container>
    )
}

export default ClanListSort
