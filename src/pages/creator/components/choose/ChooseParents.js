import React, { useEffect, useState } from 'react'

const ChooseParents = ({
    label,
    value,
    valueList,
    changeHandle,
    id,
    ...props
}) => {
    const prevHandle = (e) => {
        if (value - 1 >= 0) {
            id ? changeHandle(id, value - 1) : changeHandle(value - 1)
            // console.log(valueList[value-1]);
        }
    }
    const nextHandle = (e) => {
        // console.log(value);

        if (value + 1 < valueList.length) {
            id ? changeHandle(id, value + 1) : changeHandle(value + 1)
            // console.log(valueList[value+1]);
        }
    }

    return (
        <div className="creator-step-choose">
            <label className="creator-step-choose__label">{label}</label>

            <div className="creator-step-choose__wrap">
                <button
                    className="creator-step-choose__prev"
                    onClick={prevHandle}
                >
                    <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 13L1 7L7 1"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <span className="creator-step-choose__value">
                    {valueList[value].name}
                </span>
                <button
                    className="creator-step-choose__next"
                    onClick={nextHandle}
                >
                    <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 13L7 7L1 1"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default ChooseParents
