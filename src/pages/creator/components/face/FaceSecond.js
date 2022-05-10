import React from 'react'
import { useDispatch } from 'react-redux'
import { setHairValue } from '../../../../features/creator/creatorSlice'

const FaceSecond = ({ data, img, label, active, onClickHandle, ...props }) => {
    const dispatch = useDispatch()

    const classes = ['player-creator-face-item-second']
    if (active === data.id) {
        classes.push('active')
    }

    const clickHandle = (e) => {
        // console.log(e.currentTarget.dataset.id)
        dispatch(onClickHandle(+e.currentTarget.dataset.id))
    }

    return (
        <div
            className={classes.join(' ')}
            onClick={clickHandle}
            data-id={data.id}
        >
            <div className="player-creator-face-item__icon">
                <img src={data.img} alt="img" />
            </div>
        </div>
    )
}

export default FaceSecond
