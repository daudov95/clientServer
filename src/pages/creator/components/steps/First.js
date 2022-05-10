import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    setAge,
    setFirstName,
    setLastName,
    setPromo,
} from '../../../../features/creator/creatorSlice'

import person from '@img/creator/man.png'
import Range from '../range/range'

const First = () => {
    // const [name, setName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [ageValue, setAgeValue] = useState(18)

    const creatorData = useSelector((state) => state.creator.info)
    const dispatch = useDispatch()

    return (
        <div className="player-creator-menu-step">
            <div className="player-creator-menu-step__row">
                <h2 className="player-creator-menu-step__title">
                    Персональные данные
                </h2>
                <span className="player-creator-menu-step__subtitle">
                    Персональные данные
                </span>
            </div>

            <div className="player-creator-menu-step__row">
                <div className="player-creator-menu-step-form">
                    <div className="player-creator-menu-step-form__group">
                        <label
                            htmlFor="characterName"
                            className="player-creator-menu-step-form__label"
                        >
                            Имя
                        </label>
                        <input
                            type="text"
                            id="characterName"
                            placeholder=""
                            onChange={(e) =>
                                dispatch(setFirstName(e.target.value))
                            }
                            value={creatorData.firstName}
                            className="player-creator-menu-step-form__input"
                        />
                    </div>
                    <div className="player-creator-menu-step-form__group">
                        <label
                            htmlFor="characterLastName"
                            className="player-creator-menu-step-form__label"
                        >
                            Фамилия
                        </label>
                        <input
                            type="text"
                            id="characterLastName"
                            placeholder=""
                            onChange={(e) =>
                                dispatch(setLastName(e.target.value))
                            }
                            value={creatorData.lastName}
                            className="player-creator-menu-step-form__input"
                        />
                    </div>
                </div>

                <div className="player-creator-menu-step-form">
                    <div className="player-creator-menu-step-form__group player-creator-menu-step-form__group--full">
                        <label className="player-creator-menu-step-form__label">
                            Возраст
                        </label>
                        <Range
                            ageValue={creatorData.age}
                            setAgeValue={setAge}
                        />
                    </div>
                </div>

                <div className="player-creator-menu-step-form">
                    <div className="player-creator-menu-step-form__group player-creator-menu-step-form__group--full">
                        <label
                            htmlFor="characterName"
                            className="player-creator-menu-step-form__label"
                            onChange={(e) => dispatch(setPromo(e.target.value))}
                        >
                            Промокод (Необязательно)
                        </label>
                        <input
                            type="text"
                            id="characterName"
                            placeholder=""
                            onChange={(e) => dispatch(setPromo(e.target.value))}
                            value={creatorData.promo}
                            className="player-creator-menu-step-form__input"
                        />
                    </div>
                </div>

                <div className="player-creator-menu-step-form">
                    <div className="player-creator-menu-step-form__group player-creator-menu-step-form__group--full">
                        <label
                            htmlFor="characterName"
                            className="player-creator-menu-step-form__label"
                        >
                            Карта
                        </label>

                        <div className="player-creator-menu-step-card">
                            <div className="player-creator-menu-step-card__img">
                                <img src={person} alt="Person" />
                            </div>
                            <div className="player-creator-menu-step-card__info">
                                <div className="player-creator-menu-step-card__name">
                                    <span>Имя:</span>
                                    <span>{creatorData.firstName}</span>
                                </div>
                                <div className="player-creator-menu-step-card__lastname">
                                    <span>Фамилие:</span>
                                    <span>{creatorData.lastName}</span>
                                </div>

                                <div className="player-creator-menu-step-card__age">
                                    <span>Возраст:</span>
                                    <span>{creatorData.age}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default First
