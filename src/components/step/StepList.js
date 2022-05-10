import React, { useRef } from 'react'

const StepList = ({ quantity, active }) => {
    // const stepRef = useRef(null)

    return (
        <div className="player-creator-menu-footer-info">
            <ul>
                {[...Array(quantity).keys()].map((li, i) => (
                    <li
                        key={i + 1}
                        data-step={i + 1}
                        className={i + 1 == active ? 'active' : ''}
                    ></li>
                ))}
            </ul>
        </div>
    )
}

export default StepList
