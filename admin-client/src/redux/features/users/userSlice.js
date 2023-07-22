import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { alumniListRequest } from "./usersApiRequest";
import { ErrorToast } from "../../../helper/formHelper";

export const alumniList = createAsyncThunk(
    'user/alumniList',
    async (arg, { rejectWithValue }) => {
        try {
            const response = await alumniListRequest(arg.pageNo, arg.perPage, arg.searchKey);
            if (response.status === 200) {
                return response.data.data[0];
            } else {
                return rejectWithValue("Something went wrong.")
            }
        } catch (error) {
            return rejectWithValue(response)
        }      
    }
  );

export const userSlice = createSlice({
  name: "user",
  initialState: {
    alumni: [],
    totalAlumni: 0,
    students: [],
    loading: false,
    error: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(alumniList.pending, (state) => {
        state.loading = true;
      })
      .addCase(alumniList.fulfilled, (state, action) => {
        state.loading = false;
        state.alumni = action.payload.Row
        state.totalAlumni = action.payload.Total[0].total
      })
      .addCase(alumniList.rejected, (state, action) => {
        state.loading = false;
      })
  }
});

 //export const { setPageNo } = userSlice.actions; //use when anything use in reducer section.
export default userSlice.reducer;