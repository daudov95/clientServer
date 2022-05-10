import React, { useState } from 'react'
import RangeBetween from '../range/RangeBetween'
import Face from '../face/Face'
import Color from '../color/Color'
import Tab from '../tab/Tab'
import ChooseParents from '../choose/ChooseParents'

const stepFaceInfo = [
    { id: 1, label: 'Кожа', img: require('@img/creator/icons/face_12.svg') },
    { id: 2, label: 'Родинки', img: require('@img/creator/icons/face_13.svg') },
    { id: 3, label: 'Макияж', img: require('@img/creator/icons/face_14.svg') },
    { id: 4, label: 'Волосы', img: require('@img/creator/icons/face_15.svg') },
    { id: 5, label: 'Помада', img: require('@img/creator/icons/face_16.svg') },
    { id: 6, label: 'Румяна', img: require('@img/creator/icons/face_17.svg') },
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

const valueList = {
    skin: {
        defect: [
            { id: 1, name: 'Шрам' },
            { id: 2, name: 'Фингал' },
            { id: 3, name: 'Порез' },
        ],
        aging: [
            { id: 1, name: 'Пожилой' },
            { id: 2, name: 'Пожилой 2' },
            { id: 3, name: 'Пожилой 3' },
        ],
        type: [
            { id: 1, name: 'Тип' },
            { id: 2, name: 'Тип 2' },
            { id: 3, name: 'Тип 3' },
        ],
        lesion: [
            { id: 1, name: 'Повреждение' },
            { id: 2, name: 'Повреждение 2' },
            { id: 3, name: 'Повреждение 3' },
        ],
    },
    mole: [
        { id: 11, name: 'Родинка' },
        { id: 12, name: 'Родинка 2' },
        { id: 13, name: 'Родинка 3' },
    ],
    makeup: [
        { id: 21, name: 'Макияж' },
        { id: 22, name: 'Макияж 2' },
        { id: 23, name: 'Макияж 3' },
    ],
    hair: [
        { id: 31, name: 'Волосы' },
        { id: 32, name: 'Волосы 2' },
        { id: 33, name: 'Волосы 3' },
    ],
    lipstick: [
        { id: 41, name: 'Помада' },
        { id: 42, name: 'Помада 2' },
        { id: 43, name: 'Помада 3' },
    ],
    blush: [
        { id: 51, name: 'Румяна' },
        { id: 52, name: 'Румяна 2' },
        { id: 53, name: 'Румяна 3' },
    ],
}

const initTabValues = {
    tabFirst: [
        {
            id: 51,
            isChoose: true,
            value: 0,
            label: 'Дефекты кожи',
            list: valueList.skin.defect,
        },
        {
            id: 52,
            value: 1,
            label: 'Дефекты кожи',
            title: ['Низкий', 'Высокий'],
            step: 0.01,
            range: [-1, 1],
        },
        {
            id: 53,
            isChoose: true,
            value: 2,
            label: 'Старение кожи',
            list: valueList.skin.aging,
        },
        {
            id: 54,
            value: 1,
            label: 'Старение кожи',
            title: ['Низкий', 'Высокий'],
            step: 0.01,
            range: [-1, 1],
        },
        {
            id: 55,
            isChoose: true,
            value: 0,
            label: 'Тип кожи',
            list: valueList.skin.type,
        },
        {
            id: 56,
            value: 1,
            label: 'Тип кожи',
            title: ['Низкий', 'Высокий'],
            step: 0.01,
            range: [-1, 1],
        },
        {
            id: 57,
            isChoose: true,
            value: 1,
            label: 'Повреждение кожи',
            list: valueList.skin.lesion,
        },
        {
            id: 58,
            value: 1,
            label: 'Повреждение кожи',
            title: ['Низкий', 'Высокий'],
            step: 0.01,
            range: [-1, 1],
        },
    ],
    tabSecond: [
        {
            id: 101,
            value: 0.3,
            label: 'Скулы',
            title: ['Низкие', 'Высокие'],
            step: 0.01,
            range: [-1, 1],
        },
        {
            id: 102,
            value: 0,
            label: 'Скулы',
            title: ['Маленькие', 'Большие'],
            step: 0.01,
            range: [-1, 1],
        },
    ],
    tabThird: [
        {
            id: 151,
            value: 0,
            label: 'Глаза',
            title: ['Узкие', 'Широкие'],
            step: 0.01,
            range: [-1, 1],
        },
        { id: 152, isColor: true, colors: stepColors },
    ],
    tabFourth: [
        {
            id: 201,
            value: 0,
            label: 'Челюсть',
            title: ['Узкая', 'Широкая'],
            step: 0.01,
            range: [-1, 1],
        },
        {
            id: 202,
            value: 0,
            label: 'Челюсть',
            title: ['Квадратная', 'Круглая'],
            step: 0.01,
            range: [-1, 1],
        },
    ],
    tabFifth: [
        {
            id: 251,
            value: -1,
            label: 'Губы',
            title: ['Маленькие', 'Большие'],
            step: 0.01,
            range: [-1, 1],
        },
    ],
    tabSixth: [
        {
            id: 301,
            value: 0,
            label: 'Щеки',
            title: ['Впалые', 'Толстые'],
            step: 0.01,
            range: [-1, 1],
        },
    ],
}

const Fifth = () => {
    const [defaultTab, setDefaultTab] = useState(1)

    const [tab, setTab] = useState(initTabValues)
    const key = Object.keys(tab)

    // console.log(tab);

    const faceClickHandle = (e) => {
        const current = e.currentTarget.dataset.face
        const item = stepFaceInfo.find((item) => item.id === +current)
        // console.log('click', item.id);
        setDefaultTab(item.id)
    }

    const onChangeHandle = (id, value) => {
        const item = tab[key[defaultTab - 1]].find((_item) => _item.id === +id)
        item.value = +value
        // console.log(item.value);
    }

    // console.log(tab[key[defaultTab-1]]);

    // const [defaultValues, setDefaultValues] = useState({
    //     skin: 0,
    //     skin: 0,
    //     skin: 0,
    //     skin: 0,
    // })

    // TODO: сделать правильный вывод выброного значения, попробовть сделать в одной функции.
    // FIXME: значение меняется в переменной, но текст не меняется.

    const onChangeChooseHandle = (id, value) => {
        // setVlk(+value)
        const item = tab[key[defaultTab - 1]].find((_item) => _item.id === +id)
        item.value = +value
        console.log(item)
    }

    // console.log(valueList);

    // console.log(valueList[Object.keys(valueList)[0]])

    const printChecker = (item, i) => {
        let data

        if (item.isColor) {
            data = <Color key={item.id} label={'Цвет глаз'} data={stepColors} />
        }

        if (item.isChoose) {
            data = (
                <ChooseParents
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    value={item.value}
                    valueList={item.list}
                    changeHandle={onChangeChooseHandle}
                />
            )
        }

        // data = <RangeSimple key={item.id} value={item.value} id={item.id} label={item.label} step={item.step} range={item.range} onChangeHandle={onChangeHandle} />

        return data
    }

    return (
        <div className="player-creator-menu-step face-step step-third">
            <div className="player-creator-menu-step__row">
                <h2 className="player-creator-menu-step__title">Особенности</h2>
                <span className="player-creator-menu-step__subtitle">
                    Особенности
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
                            {tab.tabFirst.map((item, i) =>
                                printChecker(item, i)
                            )}
                        </div>
                    </div>
                </div>
            </Tab>

            <Tab active={defaultTab} tab={2}>
                <div className="player-creator-menu-step__row face-step-tab active">
                    <div className="player-creator-menu-step-form">
                        <div className="player-creator-menu-step-form__group player-creator-menu-step-form__group--full">
                            {tab.tabSecond.map((item) =>
                                item.isColor ? (
                                    <Color
                                        key={item.id}
                                        label={'Цвет глаз'}
                                        data={stepColors}
                                    />
                                ) : (
                                    <RangeBetween
                                        key={item.id}
                                        value={item.value}
                                        id={item.id}
                                        onChangeHandle={onChangeHandle}
                                        label={item.label}
                                        title={item.title}
                                        step={item.step}
                                        range={item.range}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </Tab>

            <Tab active={defaultTab} tab={3}>
                <div className="player-creator-menu-step__row face-step-tab active">
                    <div className="player-creator-menu-step-form">
                        <div className="player-creator-menu-step-form__group player-creator-menu-step-form__group--full">
                            {tab.tabThird.map((item) =>
                                item.isColor ? (
                                    <Color
                                        key={item.id}
                                        label={'Цвет глаз'}
                                        data={stepColors}
                                    />
                                ) : (
                                    <RangeBetween
                                        key={item.id}
                                        value={item.value}
                                        id={item.id}
                                        onChangeHandle={onChangeHandle}
                                        label={item.label}
                                        title={item.title}
                                        step={item.step}
                                        range={item.range}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </Tab>

            <Tab active={defaultTab} tab={4}>
                <div className="player-creator-menu-step__row face-step-tab active">
                    <div className="player-creator-menu-step-form">
                        <div className="player-creator-menu-step-form__group player-creator-menu-step-form__group--full">
                            {tab.tabFourth.map((item) =>
                                item.isColor ? (
                                    <Color
                                        key={item.id}
                                        label={'Цвет глаз'}
                                        data={stepColors}
                                    />
                                ) : (
                                    <RangeBetween
                                        key={item.id}
                                        value={item.value}
                                        id={item.id}
                                        onChangeHandle={onChangeHandle}
                                        label={item.label}
                                        title={item.title}
                                        step={item.step}
                                        range={item.range}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </Tab>

            <Tab active={defaultTab} tab={5}>
                <div className="player-creator-menu-step__row face-step-tab active">
                    <div className="player-creator-menu-step-form">
                        <div className="player-creator-menu-step-form__group player-creator-menu-step-form__group--full">
                            {tab.tabFifth.map((item) =>
                                item.isColor ? (
                                    <Color
                                        key={item.id}
                                        label={'Цвет глаз'}
                                        data={stepColors}
                                    />
                                ) : (
                                    <RangeBetween
                                        key={item.id}
                                        value={item.value}
                                        id={item.id}
                                        onChangeHandle={onChangeHandle}
                                        label={item.label}
                                        title={item.title}
                                        step={item.step}
                                        range={item.range}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </Tab>

            <Tab active={defaultTab} tab={6}>
                <div className="player-creator-menu-step__row face-step-tab active">
                    <div className="player-creator-menu-step-form">
                        <div className="player-creator-menu-step-form__group player-creator-menu-step-form__group--full">
                            {tab.tabSixth.map((item) =>
                                item.isColor ? (
                                    <Color
                                        key={item.id}
                                        label={'Цвет глаз'}
                                        data={stepColors}
                                    />
                                ) : (
                                    <RangeBetween
                                        key={item.id}
                                        value={item.value}
                                        id={item.id}
                                        onChangeHandle={onChangeHandle}
                                        label={item.label}
                                        title={item.title}
                                        step={item.step}
                                        range={item.range}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </Tab>
        </div>
    )
}

export default Fifth
