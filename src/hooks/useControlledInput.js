import { useState, useEffect } from 'react'

const useControlledInput = (type, initialValue) => {
    const [value, setValue] = useState('')

    const onChange = (event) => setValue(event.target.value)

    const clear = () => setValue('')

    useEffect(() => {
        if (initialValue) setValue(initialValue)
    }, [])

    return {
        props: {
            type,
            value,
            onChange
        },
        clear
    }
}

export default useControlledInput
