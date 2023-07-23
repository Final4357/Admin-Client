import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
    alumni: [],
    totalAlumni: 0,
    id: null,
    profileDetails: null,
    students: [],
    loading: false,
  },
  reducers: {
    setAlumni: (state, action)=>{
        state.alumni = action.payload
    },
    setAlumniTotal: (state, action)=>{
        state.totalAlumni = action.payload
    },
    setDetails:(state, action)=>{
        state.profileDetails = action.payload
    },
    setID:(state, action)=>{
        state.id = action.payload
    },
    setLoading:(state, action)=>{
        state.loading = action.payload
    },
  }
})

export const {setAlumni, setAlumniTotal, setDetails, setLoading, setID} = userSlice.actions
export default userSlice.reducer