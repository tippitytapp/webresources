import { createAction, createReducer, nanoid } from "@reduxjs/toolkit";
import { initialState } from "../formSubmit";

export const updateValue = createAction("updateValue", function prepare(value:string, fieldName: string){return {payload:{value, fieldName, id: nanoid()}}})
export const toggleForm = createAction("showForm", function prepare(showForm: boolean){return {payload: {showForm }}})
export const initializeFields = createAction("initFields", function prepare(fields:any){return {payload: {fields}}})
export const formReducer = createReducer(initialState, (builder)=>{
    builder.addCase(updateValue, (state, action)=>{
        state.fields.find((field:any) => field.fieldName === action.payload.fieldName)
        return {
            ...state, values: {...state.values, [action.payload.fieldName]: action.payload.value}
        }
    })
    builder.addCase(toggleForm, (state, action) =>{
        return {
            ...state, 
            showForm: action.payload.showForm
        }
    })
    builder.addCase(initializeFields, (state, action)=>{
        
        return {...state, fields: action.payload.fields}
    })
})

export default formReducer