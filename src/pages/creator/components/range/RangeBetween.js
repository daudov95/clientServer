import React from 'react'
import { Slider } from 'rsuite'

const RangeBetween = ({
    id,
    value,
    label,
    title,
    step,
    range,
    onChangeHandle,
    ...props
}) => {
    // console.log(id);

    return (
        <div className="creator-step-range">
            <label htmlFor="" className="creator-step-range__label">
                {label}
            </label>

            <div className="creator-step-range__title">
                <span>{title[0]}</span>
                <span>{title[1]}</span>
            </div>
            <div className="creator-step-range__wrap">
                <Slider
                    step={step ? step : 1}
                    min={range ? range[0] : 0}
                    max={range ? range[1] : 100}
                    tooltip={false}
                    defaultValue={value}
                    onChange={(value) => {
                        onChangeHandle(id, value.toFixed(1))
                    }}
                />
            </div>
        </div>
    )
}

export default RangeBetween
