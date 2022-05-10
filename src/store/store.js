import { configureStore } from '@reduxjs/toolkit'
import creatorSlice from '../features/creator/creatorSlice'

export const store = configureStore({
    reducer: {
        creator: creatorSlice,
    },
})
