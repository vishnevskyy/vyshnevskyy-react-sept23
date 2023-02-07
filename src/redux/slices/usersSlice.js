import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "../../services/users.service";

const initialState = {
    users: [],
    selectedUser: null
}
const getAll = createAsyncThunk('userSlice/getAll',
    async (_, {rejectedWithValue}) =>{
    try {
        const{data}=await usersService.getAll();
        return data
    }catch (e) {
        return rejectedWithValue(e.response.data)
    }

    })
const userSlice = createSlice({
    name: "userSlice",

    reducers: {
        setSelectedUser:(state, action)=>{
            state.selectedUser=action.payload
            console.log(state.selectedUser)
        }
    },
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(getAll.fulfilled,(state, action)=>{
                state.users=action.payload
            })
    }
})

const {reducer: userReducer, actions: {setSelectedUser}} = userSlice;

const userActions = {
    getAll,
    setSelectedUser
}
export {
    userSlice,
    userActions,
    userReducer
}