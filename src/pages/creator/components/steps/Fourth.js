import React, { useEffect, useState } from 'react'
import RangeBetween from '../range/RangeBetween'
import Face from '../face/Face'
import FaceSecond from '../face/FaceSecond'
import Color from '../color/Color'
import Tab from '../tab/Tab'
import RangeSimple from '../range/RangeSimple'
import { useColorPicker } from '../../../../hooks/color/useColorPicker'
import { useSelector } from 'react-redux'
import {
    setBeardColor,
    setBeardColorSecond,
    setBeardOpacity,
    setBeardValue,
    setEyebrowColor,
    setEyebrowColorSecond,
    setEyebrowOpacity,
    setEyebrowValue,
    setHairColor,
    setHairColorSecond,
    setHairOpacity,
    setHairValue,
} from '../../../../features/creator/creatorSlice'
import { useRangeSimple } from '../../../../hooks/range/useRangeSimple'

const stepFaceInfo = [
    { id: 1, label: 'Волосы', img: require('@img/creator/icons/face_9.svg') },
    { id: 2, label: 'Брови', img: require('@img/creator/icons/face_10.svg') },
    { id: 3, label: 'Борода', img: require('@img/creator/icons/face_11.svg') },
]

const stepBeard = [
    {
        id: 1,
        label: 'Без бороды',
        img: require('@img/creator/icons/beard/0.png'),
    },
    { id: 2, label: 'Усы', img: require('@img/creator/icons/beard/1.png') },
    { id: 3, label: 'Усы', img: require('@img/creator/icons/beard/2.png') },
    { id: 4, label: 'Усы', img: require('@img/creator/icons/beard/3.png') },
    { id: 5, label: 'Усы', img: require('@img/creator/icons/beard/4.png') },
    { id: 6, label: 'Усы', img: require('@img/creator/icons/beard/5.png') },
    { id: 7, label: 'Усы', img: require('@img/creator/icons/beard/6.png') },
    { id: 8, label: 'Усы', img: require('@img/creator/icons/beard/7.png') },
    { id: 9, label: 'Усы', img: require('@img/creator/icons/beard/8.png') },
    { id: 10, label: 'Усы', img: require('@img/creator/icons/beard/9.png') },
    { id: 11, label: 'Усы', img: require('@img/creator/icons/beard/10.png') },
    { id: 12, label: 'Усы', img: require('@img/creator/icons/beard/11.png') },
    { id: 13, label: 'Усы', img: require('@img/creator/icons/beard/12.png') },
    { id: 14, label: 'Усы', img: require('@img/creator/icons/beard/13.png') },
    { id: 15, label: 'Усы', img: require('@img/creator/icons/beard/14.png') },
    { id: 16, label: 'Усы', img: require('@img/creator/icons/beard/14.png') },
    { id: 17, label: 'Усы', img: require('@img/creator/icons/beard/14.png') },
    { id: 18, label: 'Усы', img: require('@img/creator/icons/beard/14.png') },
    { id: 19, label: 'Усы', img: require('@img/creator/icons/beard/14.png') },
    { id: 20, label: 'Усы', img: require('@img/creator/icons/beard/14.png') },
]

const stepEyebrow = [
    {
        id: 1,
        label: 'Без бороды',
        img: require('@img/creator/icons/eyebrow/0.png'),
    },
    { id: 2, label: 'Усы', img: require('@img/creator/icons/eyebrow/1.png') },
    { id: 3, label: 'Усы', img: require('@img/creator/icons/eyebrow/2.png') },
    { id: 4, label: 'Усы', img: require('@img/creator/icons/eyebrow/3.png') },
    { id: 5, label: 'Усы', img: require('@img/creator/icons/eyebrow/4.png') },
    { id: 6, label: 'Усы', img: require('@img/creator/icons/eyebrow/5.png') },
    { id: 7, label: 'Усы', img: require('@img/creator/icons/eyebrow/6.png') },
    { id: 8, label: 'Усы', img: require('@img/creator/icons/eyebrow/7.png') },
    { id: 9, label: 'Усы', img: require('@img/creator/icons/eyebrow/8.png') },
    { id: 10, label: 'Усы', img: require('@img/creator/icons/eyebrow/9.png') },
    { id: 11, label: 'Усы', img: require('@img/creator/icons/eyebrow/9.png') },
    { id: 12, label: 'Усы', img: require('@img/creator/icons/eyebrow/9.png') },
    { id: 13, label: 'Усы', img: require('@img/creator/icons/eyebrow/9.png') },
    { id: 14, label: 'Усы', img: require('@img/creator/icons/eyebrow/9.png') },
    { id: 15, label: 'Усы', img: require('@img/creator/icons/eyebrow/9.png') },
    { id: 16, label: 'Усы', img: require('@img/creator/icons/eyebrow/9.png') },
    { id: 17, label: 'Усы', img: require('@img/creator/icons/eyebrow/9.png') },
    { id: 18, label: 'Усы', img: require('@img/creator/icons/eyebrow/9.png') },
    { id: 19, label: 'Усы', img: require('@img/creator/icons/eyebrow/9.png') },
    { id: 20, label: 'Усы', img: require('@img/creator/icons/eyebrow/9.png') },
]

const stepHair = [
    {
        id: 1,
        label: 'Без волос',
        img: require('@img/creator/icons/hair/0.png'),
    },
    { id: 2, label: '', img: require('@img/creator/icons/hair/1.png') },
    { id: 3, label: '', img: require('@img/creator/icons/hair/2.png') },
    { id: 4, label: '', img: require('@img/creator/icons/hair/3.png') },
    { id: 5, label: '', img: require('@img/creator/icons/hair/4.png') },
    { id: 6, label: '', img: require('@img/creator/icons/hair/5.png') },
    { id: 7, label: '', img: require('@img/creator/icons/hair/6.png') },
    { id: 8, label: '', img: require('@img/creator/icons/hair/7.png') },
    { id: 9, label: '', img: require('@img/creator/icons/hair/8.png') },
    { id: 10, label: '', img: require('@img/creator/icons/hair/9.png') },
    { id: 11, label: '', img: require('@img/creator/icons/hair/10.png') },
    { id: 12, label: '', img: require('@img/creator/icons/hair/11.png') },
    { id: 13, label: '', img: require('@img/creator/icons/hair/12.png') },
    { id: 14, label: '', img: require('@img/creator/icons/hair/13.png') },
    { id: 15, label: '', img: require('@img/creator/icons/hair/14.png') },
    { id: 16, label: '', img: require('@img/creator/icons/hair/1.png') },
    { id: 17, label: '', img: require('@img/creator/icons/hair/4.png') },
    { id: 18, label: '', img: require('@img/creator/icons/hair/7.png') },
    { id: 19, label: '', img: require('@img/creator/icons/hair/3.png') },
    { id: 20, label: '', img: require('@img/creator/icons/hair/11.png') },
]

const stepColors = [
    { id: 1, color: '#4FE30D' },
    { id: 2, color: '#69BD60' },
    { id: 3, color: '#A3D2D0' },
    { id: 4, color: '#0DA392' },
    { id: 5, color: '#C65E40' },
    { id: 6, color: '#724536' },
    { id: 7, color: '#A86E2F' },
    { id: 8, color: '#A5A5A5' },
    { id: 9, color: '#CBCBCB' },
    { id: 10, color: '#E06DCF' },
    { id: 11, color: '#F2DB1F' },
    { id: 12, color: '#5F1497' },
]

// let values = {
//     tabFirst: { hair: 1, hairColor: 1, hairColorSecond: 7, opacity: 100 },
//     tabSecond: {
//         eyebrow: 1,
//         eyebrowColor: 1,
//         eyebrowColorSecond: 7,
//         opacity: 100,
//     },
//     tabThird: { beard: 5, beardColor: 1, beardColorSecond: 7, opacity: 100 },
// }

const Fourth = () => {
    const [defaultTab, setDefaultTab] = useState(1)
    const hairData = useSelector((state) => state.creator.hair)

    // console.log(hairData)

    const hair = useSelector((state) => state.creator.hair.hair)
    const eyebrow = useSelector((state) => state.creator.hair.eyebrow)
    const beard = useSelector((state) => state.creator.hair.beard)

    const color1 = useColorPicker({ label: 'Цвет' }, setHairColor, stepColors)
    const color2 = useColorPicker(
        { label: 'Дополнительный цвет' },
        setHairColorSecond,
        stepColors
    )
    const range1 = useRangeSimple(
        { label: 'Густота' },
        hairData.hair.opacity,
        setHairOpacity
    )
    const range2 = useRangeSimple(
        { label: 'Густота' },
        hairData.eyebrow.opacity,
        setEyebrowOpacity
    )
    const range3 = useRangeSimple(
        { label: 'Густота' },
        hairData.beard.opacity,
        setBeardOpacity
    )

    const color3 = useColorPicker(
        { label: 'Цвет' },
        setEyebrowColor,
        stepColors
    )
    const color4 = useColorPicker(
        { label: 'Дополнительный цвет' },
        setEyebrowColorSecond,
        stepColors
    )

    const color5 = useColorPicker({ label: 'Цвет' }, setBeardColor, stepColors)
    const color6 = useColorPicker(
        { label: 'Дополнительный цвет' },
        setBeardColorSecond,
        stepColors
    )

    // console.log(hair)

    const faceClickHandle = (e) => {
        const current = e.currentTarget.dataset.face
        const item = stepFaceInfo.find((item) => item.id === +current)
        setDefaultTab(item.id)
    }

    // tab 1

    // tab 2

    // tab 3

    return (
        <div className="player-creator-menu-step face-step">
            <div className="player-creator-menu-step__row">
                <h2 className="player-creator-menu-step__title">Волосы</h2>
                <span className="player-creator-menu-step__subtitle">
                    Волосы
                </span>
            </div>

            <div className="player-creator-menu-step__row">
                <div className="player-creator-face">
                    {stepFaceInfo.map((item, i) => (
                        <Face
                            key={stepFaceInfo[i].id}
                            data={stepFaceInfo[i]}
                            clickHandle={faceClickHandle}
                            active={defaultTab}
                        />
                    ))}
                </div>
            </div>

            <Tab active={defaultTab} tab={1}>
                <div className="player-creator-menu-step__row player-creator-menu-step__row--mt">
                    <div className="player-creator-face player-creator-face--scroll">
                        {stepHair.map((item, i) => (
                            <FaceSecond
                                key={stepHair[i].id}
                                data={stepHair[i]}
                                active={hair.value}
                                onClickHandle={setHairValue}
                            />
                        ))}
                    </div>
                </div>

                <div className="player-creator-menu-step__row">
                    {color1.colorElement()}
                    {color2.colorElement()}
                </div>

                <div className="player-creator-menu-step__row mt-40">
                    {range1.rangeElement()}
                </div>
            </Tab>

            <Tab active={defaultTab} tab={2}>
                <div className="player-creator-menu-step__row player-creator-menu-step__row--mt">
                    <div className="player-creator-face player-creator-face--scroll">
                        {stepEyebrow.map((item, i) => (
                            <FaceSecond
                                key={stepEyebrow[i].id}
                                data={stepEyebrow[i]}
                                active={eyebrow.value}
                                onClickHandle={setEyebrowValue}
                            />
                        ))}
                    </div>
                </div>

                <div className="player-creator-menu-step__row">
                    {color3.colorElement()}
                    {color4.colorElement()}
                </div>

                <div className="player-creator-menu-step__row mt-40">
                    {range2.rangeElement()}
                </div>
            </Tab>

            <Tab active={defaultTab} tab={3}>
                <div className="player-creator-menu-step__row player-creator-menu-step__row--mt">
                    <div className="player-creator-face player-creator-face--scroll">
                        {stepBeard.map((item, i) => (
                            <FaceSecond
                                key={stepBeard[i].id}
                                data={stepBeard[i]}
                                active={beard.value}
                                onClickHandle={setBeardValue}
                            />
                        ))}
                    </div>
                </div>

                <div className="player-creator-menu-step__row">
                    {color5.colorElement()}
                    {color6.colorElement()}
                </div>

                <div className="player-creator-menu-step__row mt-40">
                    {range3.rangeElement()}
                </div>
            </Tab>
        </div>
    )
}

export default Fourth
