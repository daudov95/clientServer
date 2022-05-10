import React, { useState, useRef, useEffect } from 'react'
import ChooseParents from '../choose/ChooseParents'
import { useDispatch, useSelector } from 'react-redux'
import {
    setGender,
    setMother,
    setFather,
} from '../../../../features/creator/creatorSlice'
import { useRange } from '../../../../hooks/range/useRange'

// FAMILY ARRAY
const motherInfo = [
    { name: 'Ханна', img: require('@img/creator/parents/21.png'), id: 21 },
    { name: 'Одри', img: require('@img/creator/parents/22.png'), id: 22 },
    { name: 'Жасмин', img: require('@img/creator/parents/23.png'), id: 23 },
    { name: 'Жизель', img: require('@img/creator/parents/24.png'), id: 24 },
    { name: 'Амелия', img: require('@img/creator/parents/25.png'), id: 25 },
    { name: 'Изабелла', img: require('@img/creator/parents/26.png'), id: 26 },
    { name: 'Зоуи', img: require('@img/creator/parents/27.png'), id: 27 },
    { name: 'Ава', img: require('@img/creator/parents/28.png'), id: 28 },
    { name: 'Камила', img: require('@img/creator/parents/29.png'), id: 29 },
    { name: 'Виолетта', img: require('@img/creator/parents/30.png'), id: 30 },
    { name: 'Софая', img: require('@img/creator/parents/31.png'), id: 31 },
    { name: 'Эвелин', img: require('@img/creator/parents/32.png'), id: 32 },
    { name: 'Николь', img: require('@img/creator/parents/33.png'), id: 33 },
    { name: 'Эшли', img: require('@img/creator/parents/34.png'), id: 34 },
    { name: 'Грейс', img: require('@img/creator/parents/35.png'), id: 35 },
    { name: 'Брианна', img: require('@img/creator/parents/36.png'), id: 36 },
    { name: 'Натали', img: require('@img/creator/parents/37.png'), id: 37 },
    { name: 'Оливия', img: require('@img/creator/parents/38.png'), id: 38 },
    { name: 'Елизаветта', img: require('@img/creator/parents/39.png'), id: 39 },
    { name: 'Шарлотта', img: require('@img/creator/parents/40.png'), id: 40 },
    { name: 'Эмма', img: require('@img/creator/parents/41.png'), id: 41 },
    { name: 'Мисти', img: require('@img/creator/parents/45.png'), id: 45 },
]

const fatherInfo = [
    { name: 'Бенджамен', img: require('@img/creator/parents/0.png'), id: 0 },
    { name: 'Даниель', img: require('@img/creator/parents/1.png'), id: 1 },
    { name: 'Джошуа', img: require('@img/creator/parents/2.png'), id: 2 },
    { name: 'Ноа', img: require('@img/creator/parents/3.png'), id: 3 },
    { name: 'Эндрю', img: require('@img/creator/parents/4.png'), id: 4 },
    { name: 'Хуан', img: require('@img/creator/parents/5.png'), id: 5 },
    { name: 'Алекс', img: require('@img/creator/parents/6.png'), id: 6 },
    { name: 'Айзек', img: require('@img/creator/parents/7.png'), id: 7 },
    { name: 'Эван', img: require('@img/creator/parents/8.png'), id: 8 },
    { name: 'Итан', img: require('@img/creator/parents/9.png'), id: 9 },
    { name: 'Винсент', img: require('@img/creator/parents/10.png'), id: 10 },
    { name: 'Энджел', img: require('@img/creator/parents/11.png'), id: 11 },
    { name: 'Диего', img: require('@img/creator/parents/12.png'), id: 12 },
    { name: 'Эйдриен', img: require('@img/creator/parents/13.png'), id: 13 },
    { name: 'Габриель', img: require('@img/creator/parents/14.png'), id: 14 },
    { name: 'Майкл', img: require('@img/creator/parents/15.png'), id: 15 },
    { name: 'Сантьяго', img: require('@img/creator/parents/16.png'), id: 16 },
    { name: 'Кевин', img: require('@img/creator/parents/17.png'), id: 17 },
    { name: 'Луи', img: require('@img/creator/parents/18.png'), id: 18 },
    { name: 'Самюэль', img: require('@img/creator/parents/19.png'), id: 19 },
    { name: 'Энтони', img: require('@img/creator/parents/20.png'), id: 20 },
    { name: 'Клод', img: require('@img/creator/parents/42.png'), id: 42 },
    { name: 'Нико', img: require('@img/creator/parents/43.png'), id: 43 },
    { name: 'Джон', img: require('@img/creator/parents/44.png'), id: 44 },
]

const parentsSimilarity = [
    {
        id: 0,
        value: 0,
        label: 'Схожесть',
        title: ['Мать', 'Отец'],
        step: 0.01,
        range: [-1, 1],
        path: 'gender.range',
    },
    {
        id: 1,
        value: 1,
        label: 'Цвет кожи',
        title: ['Светлый', 'Темный'],
        step: 0.01,
        range: [-1, 1],
        path: 'gender.range',
    },
]

const Second = () => {
    const creatorData = useSelector((state) => state.creator.gender)
    const dispatch = useDispatch()

    const [motherImage, setMotherImage] = useState(
        motherInfo[creatorData.mother].img
    )
    const [fatherImage, setFatherImage] = useState(
        fatherInfo[creatorData.father].img
    )

    const range1 = useRange(parentsSimilarity[0])
    const range2 = useRange(parentsSimilarity[1])

    // console.log(range1)

    console.log(creatorData)

    const onChangeMother = (value) => {
        dispatch(setMother(+value))
        setMotherImage(motherInfo[+value].img)
    }

    const onChangeFather = (value) => {
        dispatch(setFather(+value))
        setFatherImage(fatherInfo[+value].img)
    }

    const genderHandle = (e) => {
        dispatch(setGender(+e.target.dataset.gender))
    }

    return (
        <div className="player-creator-menu-step">
            <div className="player-creator-menu-step__row">
                <h2 className="player-creator-menu-step__title">
                    Наследственность
                </h2>
                <span className="player-creator-menu-step__subtitle">
                    Наследственность
                </span>
            </div>

            <div className="player-creator-menu-step__row">
                <div className="creator-menu-step-form">
                    <div className="player-creator-menu-step-form">
                        <div className="player-creator-menu-step-form__group player-creator-menu-step-form__group--full">
                            <label className="player-creator-menu-step-form__label">
                                Пол
                            </label>

                            <div className="creator-step-gender">
                                <div
                                    className={
                                        creatorData.gender === 1
                                            ? 'creator-step__man active'
                                            : 'creator-step__man'
                                    }
                                    data-gender="1"
                                    onClick={genderHandle}
                                >
                                    Мужской
                                </div>
                                <div
                                    className={
                                        creatorData.gender === 2
                                            ? 'creator-step__woman active'
                                            : 'creator-step__woman'
                                    }
                                    data-gender="2"
                                    onClick={genderHandle}
                                >
                                    Женский
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="player-creator-menu-step__row">
                <div className="player-creator-menu-step-form">
                    <div className="creator-menu-step-form__group creator-menu-step-form__group--full">
                        <label className="player-creator-menu-step-form__label">
                            Родители
                        </label>

                        <div className="creator-step-parents">
                            <div className="creator-step-parents__mother">
                                <img src={motherImage} alt="Мать" />
                            </div>
                            <div className="creator-step-parents__father">
                                <img src={fatherImage} alt="Отец" />
                            </div>
                        </div>

                        <ChooseParents
                            label={'Мать'}
                            value={creatorData.mother}
                            valueList={motherInfo}
                            changeHandle={onChangeMother}
                        />
                        <ChooseParents
                            label={'Отец'}
                            value={creatorData.father}
                            valueList={fatherInfo}
                            changeHandle={onChangeFather}
                        />

                        {range1.rangeElement()}
                        {range2.rangeElement()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second
