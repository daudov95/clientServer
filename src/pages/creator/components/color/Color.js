import React from 'react'

const Color = ({ label, active, onColorHandle, data, ...props }) => {
    return (
        <>
            <div className="player-creator-face player-creator-face-color">
                <label className="player-creator-face-color__label">
                    {label}
                </label>

                <div className="player-creator-face-color__wrap">
                    {data.map((item, i) => (
                        <div
                            key={item.id}
                            style={{ background: item.color }}
                            className={`player-creator-face-color__item`}
                            onClick={() => onColorHandle(item.id)}
                            data-color={item.id}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Color
