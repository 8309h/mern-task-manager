import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/api";

export const fetchBoards = createAsyncThunk(
      "boards/fetchBoards",
      async () => {

            const res = await API.get("/boards");

            console.log("Boards API Response:", res.data);

            return res.data.data;   // IMPORTANT
      }
);

const boardSlice = createSlice({
      name: "boards",

      initialState: {
            boards: [],
            loading: false
      },

      reducers: {},

      extraReducers: (builder) => {

            builder
                  .addCase(fetchBoards.pending, (state) => {
                        state.loading = true;
                  })

                  .addCase(fetchBoards.fulfilled, (state, action) => {
                        state.loading = false;
                        state.boards = action.payload;
                  })

                  .addCase(fetchBoards.rejected, (state, action) => {
                        state.loading = false;
                        console.error("Fetch boards failed:", action.error);
                  });

      }

});

export default boardSlice.reducer;