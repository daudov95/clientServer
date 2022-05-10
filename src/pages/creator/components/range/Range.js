import React from 'react'
import { useDispatch } from 'react-redux'
import { Slider } from 'rsuite'

const Range = ({ ageValue, setAgeValue, ...props }) => {
    const dispatch = useDispatch()
    return (
        <div className="player-creator-menu-step-range">
            <Slider
                progress
                defaultValue={ageValue}
                min={16}
                max={70}
                tooltip={false}
                onChange={(value) => {
                    dispatch(setAgeValue(value))
                }}
            />

            <span className="player-creator-menu-step-range__value">
                {ageValue}
            </span>
        </div>
    )
}

export default Range
