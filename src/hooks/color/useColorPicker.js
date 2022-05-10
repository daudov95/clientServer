import React from 'react'
import { useDispatch } from 'react-redux'
import { setFaceValue } from '../../features/creator/creatorSlice'
import Color from '../../pages/creator/components/color/Color'

export const useColorPicker = ({ id, label, active }, handle, colors) => {
    const dispatch = useDispatch()
    // console.log(id)
    const colorHandle = (value) => {
        console.log('handle', value)
        dispatch(
            handle ? handle(value) : setFaceValue({ id: id, value: value })
        )
    }

    const colorElement = () => (
        <Color
            label={label}
            active={1}
            onColorHandle={colorHandle}
            data={colors}
        />
    )

    return {
        colorElement,
    }
}
