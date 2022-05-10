import React from 'react'
import First from './steps/First'
import Second from './steps/Second'
import Third from './steps/Third'
import Fourth from './steps/Fourth'
import Fifth from './steps/Fifth'
// import { useDispatch } from 'react-redux'
// import {
//     setFirstName,
//     setLastName,
//     setPromo,
// } from '../../../features/creator/creatorSlice'

const Step = ({ step }) => {
    // const dispatch = useDispatch()

    return (
        <>
            {step === 1 && <First />}
            {step === 2 && <Second />}
            {step === 3 && <Third />}
            {step === 4 && <Fourth />}
            {step === 5 && <Fifth />}
        </>
    )
}

export default Step
