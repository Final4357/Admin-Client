import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
    alumni: [],
    user: [],
    admin:[],
    totalAlumni: 0,
    totalUser: 0,
    totalAdmin: 0,
    id: null,
    profileDetails: null,
    students: [],
    loading: false,
  },
  reducers: {
    setAlumni: (state, action)=>{
        state.alumni = action.payload
    },
    setUser: (state, action)=>{
        state.user = action.payload
    },
    setAdmin: (state, action)=>{
        state.admin = action.payload
    },
    setAlumniTotal: (state, action)=>{
        state.totalAlumni = action.payload
    },
    setUserTotal: (state, action)=>{
        state.totalUser = action.payload
    },
    setAdminTotal: (state, action)=>{
        state.totalAdmin = action.payload
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

export const {setAlumni,setUser,setAdmin, setAlumniTotal,setUserTotal,setAdminTotal, setDetails, setLoading, setID} = userSlice.actions
export default userSlice.reducer