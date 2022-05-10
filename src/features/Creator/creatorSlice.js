import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    info: {
        firstName: '',
        lastName: '',
        age: 18,
        promo: '',
    },
    gender: {
        gender: 1,
        mother: 0,
        father: 0,
    },
    face: {
        range: [
            { id: 1, value: 0.3, label: 'Схожесть' },
            { id: 2, value: 1, label: 'Цвет кожи' },
            { id: 21, value: 0, label: 'Лоб' },
            { id: 20, value: 1, label: 'Лоб' },
            { id: 30, value: 0.5, label: 'Скулы' },
            { id: 31, value: -1, label: 'Скулы' },
            { id: 40, value: 0.7, label: 'Глаза' },
            { id: 41, value: 0, label: 'Цвет глаз' },
            { id: 50, value: 0.3, label: 'Челюсть' },
            { id: 51, value: 0, label: 'Челюсть' },
            { id: 60, value: 1, label: 'Губы' },
            { id: 70, value: -0.4, label: 'Щеки' },
            { id: 80, value: 0, label: 'Шея' },
            { id: 90, value: 0, label: 'Профиль носа' },
            { id: 91, value: 0, label: 'Профиль носа' },
            { id: 92, value: 0, label: 'Глубина моста носа' },
            { id: 93, value: 0, label: 'Поломаность носа' },
            { id: 94, value: 0, label: 'Кончик носа' },
            { id: 95, value: 0, label: 'Высота кончика носа' },
            { id: 100, value: 0.3, label: 'Профиль подборотка' },
            { id: 101, value: 0.3, label: 'Профиль подборотка' },
            { id: 102, value: 0.3, label: 'Форма подборотка' },
            { id: 103, value: 0.3, label: 'Форма подборотка' },
        ],
    },
    hair: {
        hair: {
            value: 1,
            color: 1,
            colorSecond: 1,
            opacity: 100,
        },
        eyebrow: {
            value: 1,
            color: 1,
            colorSecond: 1,
            opacity: 100,
        },
        beard: {
            value: 1,
            color: 1,
            colorSecond: 1,
            opacity: 100,
        },
    },
}

export const creatorSlice = createSlice({
    name: 'creator',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.info.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.info.lastName = action.payload
        },
        setAge: (state, action) => {
            state.info.age = action.payload
        },
        setPromo: (state, action) => {
            state.info.promo = action.payload
        },
        setGender: (state, action) => {
            state.gender.gender = action.payload
        },
        setMother: (state, action) => {
            state.gender.mother = action.payload
        },
        setFather: (state, action) => {
            state.gender.father = action.payload
        },
        setFaceValue: (state, action) => {
            const { id, value } = action.payload
            state.face.range[id].value = +value
        },
        setHairValue: (state, action) => {
            state.hair.hair.value = action.payload
        },
        setHairColor: (state, action) => {
            state.hair.hair.color = action.payload
        },
        setHairColorSecond: (state, action) => {
            state.hair.hair.colorSecond = action.payload
        },
        setHairOpacity: (state, action) => {
            state.hair.hair.opacity = action.payload
        },
        setEyebrowValue: (state, action) => {
            state.hair.eyebrow.value = action.payload
        },
        setEyebrowColor: (state, action) => {
            state.hair.eyebrow.color = action.payload
        },
        setEyebrowColorSecond: (state, action) => {
            state.hair.eyebrow.colorSecond = action.payload
        },
        setEyebrowOpacity: (state, action) => {
            state.hair.eyebrow.opacity = action.payload
        },
        setBeardValue: (state, action) => {
            state.hair.beard.value = action.payload
        },
        setBeardColor: (state, action) => {
            state.hair.beard.color = action.payload
        },
        setBeardColorSecond: (state, action) => {
            state.hair.beard.colorSecond = action.payload
        },
        setBeardOpacity: (state, action) => {
            state.hair.beard.opacity = action.payload
        },
    },
})

export const {
    setFirstName,
    setLastName,
    setAge,
    setPromo,
    setGender,
    setMother,
    setFather,
    setFaceValue,
    setHairValue,
    setHairColor,
    setHairColorSecond,
    setHairOpacity,
    setEyebrowValue,
    setEyebrowColor,
    setEyebrowColorSecond,
    setEyebrowOpacity,
    setBeardValue,
    setBeardColor,
    setBeardColorSecond,
    setBeardOpacity,
} = creatorSlice.actions
export default creatorSlice.reducer
