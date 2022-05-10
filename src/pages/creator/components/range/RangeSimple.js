import React from 'react'
import { Slider } from 'rsuite'

const RangeSimple = ({
    value,
    label,
    title,
    step,
    range,
    onChange,
    ...props
}) => {
    return (
        <div className="creator-step-range">
            <label className="creator-step-choose__label">{label}</label>

            <div className="creator-step-range__wrap">
                <Slider
                    progress
                    step={step ? step : 1}
                    min={range ? range[0] : 0}
                    max={range ? range[1] : 100}
                    tooltip={false}
                    defaultValue={value}
                    onChange={(value) => {
                        // console.log(value.toFixed(1));
                        onChange(value)
                    }}
                />
            </div>
        </div>
    )
}

export default RangeSimple
