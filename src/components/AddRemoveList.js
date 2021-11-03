import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import add from '../assets/add.svg'
import remove from '../assets/remove.svg'
import useControlledInput from '../hooks/useControlledInput'

import Container from './common/Container'
import FormInput from './common/FormInput'
import VerticalSpace from './common/VerticalSpace'

const AddRemoveList = ({ list, setList, width }) => {
    const removeItem = (item) => {
        setList(list.filter(listItem => listItem !== item))
    }

    const addItem = (item) => {
        setList(list.concat([item]))
    }

    return (
        <Container width={width}>
            { list.map(item => <RemovableItem item={item} removeItem={removeItem} key={item} />) }
            <AddItem addItem={addItem} />
        </Container>
    )
}

AddRemoveList.propTypes = {
    list: PropTypes.array.isRequired,
    setList: PropTypes.func.isRequired,
    width: PropTypes.number
}

const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const RemovableItem = ({ item, removeItem }) => {
    return (
        <div>
            <ItemContainer>
                { item }
                <img src={remove} alt='Delete item' onClick={() => removeItem(item)}/>
            </ItemContainer>
            <VerticalSpace height={12} />
        </div>
    )
}

RemovableItem.propTypes = {
    item: PropTypes.string.isRequired,
    removeItem: PropTypes.func.isRequired
}

const AddItem = ({ addItem }) => {
    const newItem = useControlledInput('text', '')
    const addNewItem = () => {
        const toAdd = newItem.props.value.trimStart().trimEnd()
        if (toAdd) {
            addItem(toAdd)
        }
        newItem.clear()
    }
    return (
        <ItemContainer>
            <FormInput { ...newItem.props }/>
            <img src={add} alt='Add Item' onClick={addNewItem} />
        </ItemContainer>
    )
}

AddItem.propTypes = {
    addItem: PropTypes.func.isRequired
}

export default AddRemoveList
