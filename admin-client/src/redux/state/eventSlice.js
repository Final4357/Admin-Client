import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
    name: 'event',
    initialState:{
        loading:false,
        pageNo: 1,
        eventList: [],
        Total: 0,
        eventId:null,
        eventDetails:null
    },
    reducers:{
        setLoading: (state, action)=>{
            state.loading = action.payload
        },
        setPageNo: (state, action)=>{
            state.pageNo = action.payload
        },
        setEvent: (state, action)=>{
            state.eventList = action.payload
        },
        setEventTotal: (state, action)=>{
            state.Total = action.payload
        },
        setEventId:(state, action)=>{
            state.eventId = action.payload
        },
        setEventDetails:(state, action)=>{
            state.eventDetails = action.payload
        }
    }
})

export const { setLoading, setPageNo, setEvent, setEventTotal, setEventId, setEventDetails } = eventSlice.actions
export default eventSlice.reducer