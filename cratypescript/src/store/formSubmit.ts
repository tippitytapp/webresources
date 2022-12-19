import { createSlice } from "@reduxjs/toolkit"
import type { Reducer } from "@reduxjs/toolkit"
export const initialState={
    submit: false,
    showForm: false,
    values:{},
    error:{},
    fields:[]
}
export declare const formReducer: Reducer<{}>;
export const formSlice = createSlice({
    name: "ContactForm",
    initialState,
    reducers:{
        updateValues: (state, action)=>{
            let newState = {
                ...state,
                values: {
                    ...state.values,
                    [action.payload.fieldName]: action.payload.value
                }
            }
            return newState
        }
    }
})

export default formReducer