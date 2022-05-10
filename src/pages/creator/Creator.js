import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import StepList from '../../components/step/StepList'
import { withWrap } from '../../hoc'
import Step from './components/Step'

const maxStep = 5
const prevBtn = ['Выйти', 'Назад']
const nextBtn = ['Дальше', 'Завершить']

const Creator = () => {
    const [step, setStep] = useState(4)
    const backButton = useRef(null)

    // const cratorData = useSelector((state) => state.creator)

    const prevHandle = () => {
        if (step > 1) {
            setStep(step - 1)
        }
    }

    const nextHandle = () => {
        if (step < maxStep) {
            setStep(step + 1)
        }

        // console.log(cratorData.info)
    }

    return (
        <div className="player-creator">
            <div className="player-creator-view">
                <div className="player-creator-view-top">
                    <div className="player-creator-view-top__block player-creator-view-top__block--left">
                        <h1 className="player-creator-view-top__title">
                            Создание персонажа
                        </h1>
                        <p className="player-creator-view-top__text">
                            Создать персонажа можно только в этом меню, потом
                            поменять внешность персонажа можно будет только
                            через донат-меню
                        </p>
                    </div>
                    <div className="player-creator-view-top__block player-creator-view-top__block--right">
                        <button className="player-creator-view-top__btn">
                            Случайно
                            <svg
                                width="30"
                                height="26"
                                viewBox="0 0 30 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.33042 9.33109L10.3264 11.5904L12.8172 8.77099L11.1521 6.8863C9.37138 4.86958 6.79969 3.71427 4.09701 3.71427H0V7.42854H4.09701C5.71841 7.4286 7.26195 8.12144 8.33042 9.33109Z"
                                    fill="white"
                                />
                                <path
                                    d="M24.375 18.5715H24.0281C22.4067 18.5715 20.8631 17.8787 19.7946 16.669L16.5533 13L19.7946 9.33103C20.8631 8.12132 22.4067 7.42854 24.0281 7.42854H24.375V11.1428L29.9999 5.57123L24.375 0V3.71427H24.0281C21.3254 3.71427 18.7537 4.86952 16.973 6.8863L8.33037 16.669C7.26195 17.8786 5.71835 18.5715 4.09696 18.5715H0V22.2857H4.09701C6.79963 22.2857 9.37138 21.1304 11.1521 19.1137L14.0626 15.8192L16.973 19.1137C18.7538 21.1304 21.3254 22.2857 24.0281 22.2857H24.3751V26L30 20.4287L24.375 14.8572V18.5715Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="player-creator-view-bottom">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.5 6L20 6.5V17.25H10.5L12 10.5L16.5 6Z"
                            fill="#DDDDDD"
                        />
                        <path
                            d="M20 3.33331C16.9058 3.33331 13.9384 4.56248 11.7505 6.7504C9.56254 8.93833 8.33337 11.9058 8.33337 15V25C8.33337 28.0942 9.56254 31.0616 11.7505 33.2496C13.9384 35.4375 16.9058 36.6666 20 36.6666C23.0942 36.6666 26.0617 35.4375 28.2496 33.2496C30.4375 31.0616 31.6667 28.0942 31.6667 25V15C31.6667 11.9058 30.4375 8.93833 28.2496 6.7504C26.0617 4.56248 23.0942 3.33331 20 3.33331V3.33331ZM11.6667 15C11.6663 13.0789 12.3297 11.2167 13.5445 9.72848C14.7594 8.24028 16.4511 7.21753 18.3334 6.83331V16.6666H11.6667V15ZM28.3334 25C28.3334 27.2101 27.4554 29.3297 25.8926 30.8925C24.3298 32.4553 22.2102 33.3333 20 33.3333C17.7899 33.3333 15.6703 32.4553 14.1075 30.8925C12.5447 29.3297 11.6667 27.2101 11.6667 25V20H28.3334V25ZM28.3334 16.6666H21.6667V6.83331C23.549 7.21753 25.2407 8.24028 26.4556 9.72848C27.6704 11.2167 28.3338 13.0789 28.3334 15V16.6666Z"
                            fill="#DDDDDD"
                        />
                    </svg>
                    <span className="player-creator-view-bottom__text">
                        Воспользуйтесь мышью для поворота персонажа
                    </span>
                </div>
            </div>

            <div className="player-creator-menu">
                <Step step={step} />

                <div className="player-creator-menu-footer">
                    <StepList quantity={maxStep} active={step} />
                    <div className="player-creator-menu-footer-buttons">
                        <button
                            className="prev"
                            onClick={prevHandle}
                            ref={backButton}
                        >
                            {step === 1 ? prevBtn[0] : prevBtn[1]}
                        </button>
                        <button className="next" onClick={nextHandle}>
                            {step === maxStep ? nextBtn[1] : nextBtn[0]}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withWrap(Creator)
