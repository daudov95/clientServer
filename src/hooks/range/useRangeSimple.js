import React from 'react'
import { useDispatch } from 'react-redux'
import RangeSimple from '../../pages/creator/components/range/RangeSimple'

export const useRangeSimple = ({ label, step, range }, value, onChange) => {
    const dispatch = useDispatch()

    const rangeChange = (val) => {
        dispatch(onChange(val))
    }

    const defaultRange = range ? range : [0, 100]

    // console.log(value)

    const rangeElement = () => {
        return (
            <RangeSimple
                value={+value}
                label={label}
                step={step ? +step : 1}
                range={defaultRange}
                onChange={rangeChange}
            />
        )
    }

    return {
        rangeElement,
    }
}
