import { configureStore } from "@reduxjs/toolkit";
import userReducer from  "./features/UserSlice"
export const store = configureStore({
    reducer:{   
        users:userReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;