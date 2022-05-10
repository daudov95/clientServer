import React, { useState } from 'react'
import Face from '../face/Face'
import Tab from '../tab/Tab'
import { useSelector } from 'react-redux'
import { useRange } from '../../../../hooks/range/useRange'
import { useColorPicker } from '../../../../hooks/color/useColorPicker'

const stepFaceInfo = [
    { id: 1, label: 'Лоб', img: require('@img/creator/icons/face_1.svg') },
    { id: 2, label: 'Скулы', img: require('@img/creator/icons/face_2.svg') },
    { id: 3, label: 'Глаза', img: require('@img/creator/icons/face_3.svg') },
    { id: 4, label: 'Челюсть', img: require('@img/creator/icons/face_4.svg') },
    { id: 5, label: 'Губы', img: require('@img/creator/icons/face_5.svg') },
    { id: 6, label: 'Щеки', img: require('@img/creator/icons/face_6.svg') },
    { id: 7, label: 'Шея', img: require('@img/creator/icons/face_7.svg') },
    { id: 8, label: 'Нос', img: require('@img/creator/icons/face_8.svg') },
    {
        id: 9,
        label: 'Подбородок',
        img: require('@img/creator/icons/face_8_1.svg'),
    },
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
]

const initTabValues = {
    tabFirst: [
        {
            id: 2,
            value: 1,
            label: 'Лоб',
            title: ['Низкий', 'Высокий'],
            step: 0.01,
            range: [-1, 1],
        },
        {
            id: 3,
            value: 0,
            label: 'Лоб',
            title: ['Плоский', 'Широкий'],
            step: 0.01,
            range: [-1, 1],
        },
    ],
    tabSecond: [
        {
            id: 4,
            value: 0.3,
            label: 'Скулы',
            title: ['Низкие', 'Высокие'],
            step: 0.01,
            range: [-1, 1],
        },
        {
            id: 5,
            value: 0,
            label: 'Скулы',
            title: ['Маленькие', 'Большие'],
            step: 0.01,
            range: [-1, 1],
        },
    ],
    tabThird: [
        {
            id: 6,
            value: 0,
            label: 'Глаза',
            title: ['Узкие', 'Широкие'],
            step: 0.01,
            range: [-1, 1],
        },
        {
            id: 7,
            value: 0,
            label: 'Цвет глаз',
            isColor: true,
            colors: stepColors,
        },
    ],
    tabFourth: [
        {
            id: 8,
            value: 0,
            label: 'Челюсть',
            title: ['Узкая', 'Широкая'],
            step: 0.01,
            range: [-1, 1],
        },
        {
            id: 9,
            value: 0,
            label: 'Челюсть',
            title: ['Квадратная', 'Круглая'],
            step: 0.01,
            range: [-1, 1],
        },
    ],
    tabFifth: [
        {
            id: 10,
            value: -1,
            label: 'Губы',
            title: ['Маленькие', 'Большие'],
            step: 0.01,
            range: [-1, 1],
        },
    ],
    tabSixth: [
        {
            id: 11,
            value: 0,
            label: 'Щеки',
            title: ['Впалые', 'Толстые'],
            step: 0.01,
            range: [-1, 1],
        },
    ],
    tabSeventh: [
        {
            id: 12,
            value: 0,
            label: 'Шея',
            title: ['Узкая', 'Широкая'],
            step: 0.01,
            range: [-1, 1],
        },
    ],
    tabEighth: [
        {
            id: 13,
            value: 0,
            label: 'Профиль носа',
            title: ['Высокий', 'Низкий'],
            step: 0.01,
            range: [-1, 1],
        },
        {
            id: 14,
            value: 0,
            label: 'Профиль носа',
            title: ['Плоский', 'Широкий'],
            step: 0.01,
            range: [-1, 1],
        },
        {
            id: 15,
            value: 0,
            label: 'Глубина моста носа',
            title: ['Наружу', 'Внутрь'],
            step: 0.01,
            range: [-1, 1],
        },
        {
            id: 16,
            value: 0,
            label: 'Поломаность носа',
            title: ['Влево', 'Вправо'],
            step: 0.01,
            range: [-1, 1],
        },
        {
            id: 17,
            value: 0,
            label: 'Кончик носа',
            title: ['Длиннее', 'Короче'],
            step: 0.01,
            range: [-1, 1],
        },
        {
            id: 18,
            value: 0,
            label: 'Высота кончика носа',
            title: ['Выше', 'Ниже'],
            step: 0.01,
            range: [-1, 1],
        },
    ],
    tabNinth: [
        {
            id: 19,
            value: 0,
            label: 'Профиль подборотка',
            title: ['Низкий', 'Высокий'],
            step: 0.01,
            range: [-1, 1],
        },
        {
            id: 20,
            value: 0,
            label: 'Профиль подборотка',
            title: ['Маленький', 'Большой'],
            step: 0.01,
            range: [-1, 1],
        },
        {
            id: 21,
            value: 0,
            label: 'Форма подборотка',
            title: ['С ямочкой', 'Квадратный'],
            step: 0.01,
            range: [-1, 1],
        },
        {
            id: 22,
            value: 0,
            label: 'Форма подборотка',
            title: ['Круглый', 'Заостренный'],
            step: 0.01,
            range: [-1, 1],
        },
    ],
}

const Third = () => {
    const creatorData = useSelector((state) => state.creator.face)

    // console.log(creatorData)

    // Tab 1 ranges
    const range1 = useRange(initTabValues.tabFirst[0])
    const range2 = useRange(initTabValues.tabFirst[1])

    // Tab 2 ranges
    const range3 = useRange(initTabValues.tabSecond[0])
    const range4 = useRange(initTabValues.tabSecond[1])

    // Tab 3 ranges
    const range5 = useRange(initTabValues.tabThird[0])
    const color1 = useColorPicker(initTabValues.tabThird[1], null, stepColors)

    // Tab 4 ranges
    const range7 = useRange(initTabValues.tabFourth[0])
    const range8 = useRange(initTabValues.tabFourth[1])

    // Tab 5 ranges
    const range9 = useRange(initTabValues.tabFifth[0])

    // Tab 6 ranges
    const range10 = useRange(initTabValues.tabSixth[0])

    // Tab 7 ranges
    const range11 = useRange(initTabValues.tabSeventh[0])

    // Tab 8 ranges
    const range12 = useRange(initTabValues.tabEighth[0])
    const range13 = useRange(initTabValues.tabEighth[1])
    const range14 = useRange(initTabValues.tabEighth[2])
    const range15 = useRange(initTabValues.tabEighth[3])
    const range16 = useRange(initTabValues.tabEighth[4])
    const range17 = useRange(initTabValues.tabEighth[5])

    // Tab 9 ranges
    const range18 = useRange(initTabValues.tabNinth[0])
    const range19 = useRange(initTabValues.tabNinth[1])
    const range20 = useRange(initTabValues.tabNinth[2])
    const range21 = useRange(initTabValues.tabNinth[3])

    // rangeChange()
    // console.log(rangeChange)

    // for (const key in initTabValues) {
    //     initTabValues[key].forEach((el) => {
    //         const item = creatorData.range.find((range) => range.id === el.id)
    //         el.value = item.value
    //     })
    // }

    // console.log(creatorData.range)

    const [defaultTab, setDefaultTab] = useState(1)

    const faceClickHandle = (e) => {
        const item = stepFaceInfo.find(
            (item) => item.id === +e.currentTarget.dataset.face
        )
        setDefaultTab(item.id)
    }

    return (
        <div className="player-creator-menu-step face-step step-third">
            <div className="player-creator-menu-step__row">
                <h2 className="player-creator-menu-step__title">Форма лица</h2>
                <span className="player-creator-menu-step__subtitle">
                    Форма лица
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
                <div className="player-creator-menu-step__row face-step-tab active">
                    <div className="player-creator-menu-step-form">
                        <div className="player-creator-menu-step-form__group player-creator-menu-step-form__group--full">
                            {range1.rangeElement()}
                            {range2.rangeElement()}
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab active={defaultTab} tab={2}>
                <div className="player-creator-menu-step__row face-step-tab active">
                    <div className="player-creator-menu-step-form">
                        <div className="player-creator-menu-step-form__group player-creator-menu-step-form__group--full">
                            {range3.rangeElement()}
                            {range4.rangeElement()}
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab active={defaultTab} tab={3}>
                <div className="player-creator-menu-step__row face-step-tab active">
                    <div className="player-creator-menu-step-form">
                        <div className="player-creator-menu-step-form__group player-creator-menu-step-form__group--full">
                            {range5.rangeElement()}
                            {color1.colorElement()}
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab active={defaultTab} tab={4}>
                <div className="player-creator-menu-step__row face-step-tab active">
                    <div className="player-creator-menu-step-form">
                        <div className="player-creator-menu-step-form__group player-creator-menu-step-form__group--full">
                            {range7.rangeElement()}
                            {range8.rangeElement()}
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab active={defaultTab} tab={5}>
                <div className="player-creator-menu-step__row face-step-tab active">
                    <div className="player-creator-menu-step-form">
                        <div className="player-creator-menu-step-form__group player-creator-menu-step-form__group--full">
                            {range9.rangeElement()}
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab active={defaultTab} tab={6}>
                <div className="player-creator-menu-step__row face-step-tab active">
                    <div className="player-creator-menu-step-form">
                        <div className="player-creator-menu-step-form__group player-creator-menu-step-form__group--full">
                            {range10.rangeElement()}
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab active={defaultTab} tab={7}>
                <div className="player-creator-menu-step__row face-step-tab active">
                    <div className="player-creator-menu-step-form">
                        <div className="player-creator-menu-step-form__group player-creator-menu-step-form__group--full">
                            {range11.rangeElement()}
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab active={defaultTab} tab={8}>
                <div className="player-creator-menu-step__row face-step-tab active">
                    <div className="player-creator-menu-step-form">
                        <div className="player-creator-menu-step-form__group player-creator-menu-step-form__group--full">
                            {range12.rangeElement()}
                            {range13.rangeElement()}
                            {range14.rangeElement()}
                            {range15.rangeElement()}
                            {range16.rangeElement()}
                            {range17.rangeElement()}
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab active={defaultTab} tab={9}>
                <div className="player-creator-menu-step__row face-step-tab active">
                    <div className="player-creator-menu-step-form">
                        <div className="player-creator-menu-step-form__group player-creator-menu-step-form__group--full">
                            {range18.rangeElement()}
                            {range19.rangeElement()}
                            {range20.rangeElement()}
                            {range21.rangeElement()}
                        </div>
                    </div>
                </div>
            </Tab>
        </div>
    )
}

export default Third
