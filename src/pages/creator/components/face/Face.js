import React from 'react'

const Face = ({data, img, label, active, clickHandle, ...props}) => {

    const classes = ["player-creator-face-item"];
    if(active === data.id){
        classes.push('active');
    }

    return (
        <div className={classes.join(" ")} onClick={clickHandle} data-face={data.id}>
            <div className="player-creator-face-item__icon">
                <img src={data.img} alt="img" />
            </div>
            <div className="player-creator-face-item__label">{data.label}</div>
        </div>
    )
}

export default Face