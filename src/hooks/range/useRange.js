import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFaceValue } from '../../features/creator/creatorSlice'
import RangeBetween from '../../pages/creator/components/range/RangeBetween'

export const useRange = ({
    id,
    // value,
    label,
    title,
    onChange,
    step,
    range,
    ...props
}) => {
    const dispatch = useDispatch()

    const { value } = useSelector((state) => state.creator.face.range[id])

    const rangeChange = (id, value) => {
        dispatch(setFaceValue({ id: id, value: value }))
    }

    const rangeElement = () => {
        return (
            <RangeBetween
                // key={+id}
                value={value}
                id={+id}
                onChangeHandle={rangeChange}
                label={label}
                title={title}
                step={+step}
                range={[+range[0], +range[1]]}
            />
        )
    }

    return {
        rangeElement,
    }
}
