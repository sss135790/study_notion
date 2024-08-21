import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../slice/authSlice'
import profileReducer from "../slice/profileSlice";
import cartReducer from "../slice/cartSlice";
import courseSlice from "../slice/courseSlice";
import viewCourseSlice from "../slice/viewCourseSlice";

const rootReducer=combineReducers({
    auth:authReducer,
    profile:profileReducer, 
    cart:cartReducer,
    course:courseSlice,
    viewCourse:viewCourseSlice
})

export default rootReducer 