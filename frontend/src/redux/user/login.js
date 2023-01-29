import {createSlice} from '@reduxjs/toolkit'
import {encode} from 'js-base64'
import {apiPcStore, user, userReg} from '../api'

const login = createSlice({
    name: 'user',
    initialState: {
        message: [],
        isLoading: false,
        user: '',
        success: false,
        successReg: false,
        localStorageState: false
    },
    reducers: {
        onStart: state => {
            state.isLoading = true
            state.success = false
        },
        onSuccess: (state, {payload}) => {
            localStorage.setItem('token', encode(payload?.data?.token))
            state.isLoading = false
            state.localStorageState = !state.localStorageState
            state.success = payload.success
        },
        userProfile: (state, {payload}) => {
            state.isLoading = false
            state.user = payload
        },
        userRegister: (state, {payload}) => {
            state.isLoading = false
            state.user = payload
        },
        onSuccessReg: (state, {payload}) => {
            state.isLoading = false
            state.successReg = payload.success
        },
        userUpdate: (state, {payload}) => {
            state.isLoading = false
            state.success = payload.success
        },
        userDelete: (state, {payload}) => {
            state.isLoading = false
            state.success = payload.success
        },
        onFail: (state, {payload}) => {
            state.isLoading = false
            state.success = payload.success
            state.successReg = payload.success
            state.message = [...payload?.response?.data?.message ]
        },
        logout: (state) => {
            localStorage.clear();
            state.user = ""
            state.success = false
            state.successReg = false
            state.localStorageState = !state.localStorageState;
        },
        stateReset: (state) => {
            state.successReg = false;
            state.success = false;
            state.message = [];
        }
    },
})

export const userLogin = data =>
    apiPcStore({
        url: user,
        method: 'post',
        data,
        onStart: login.actions.onStart.type,
        onSuccess: login.actions.onSuccess.type,
        onFail: login.actions.onFail.type,
    })

export const userRegister = data =>
    apiPcStore({
        url: userReg,
        method: 'post',
        data,
        onStart: login.actions.onStart.type,
        onSuccess: login.actions.onSuccessReg.type,
        onFail: login.actions.onFail.type,
    })

export const userProfile = () =>
    apiPcStore({
        url: user,
        method: 'get',
        onStart: login.actions.onStart.type,
        onSuccess: login.actions.userProfile.type,
        onFail: login.actions.onFail.type,
    })

export const userUpdate = data =>
    apiPcStore({
        url: user,
        method: 'put',
        data,
        onStart: login.actions.onStart.type,
        onSuccess: login.actions.userUpdate.type,
        onFail: login.actions.onFail.type,
    })

export const userDelete = data =>
    apiPcStore({
        url: user,
        method: 'post',
        data,
        onStart: login.actions.onStart.type,
        onSuccess: login.actions.userUpdate.type,
        onFail: login.actions.onFail.type,
    })

export default login.reducer
export const {logout, stateReset} = login.actions;
