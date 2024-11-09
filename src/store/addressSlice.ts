// store/addressSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAddressSuggestions = createAsyncThunk(
  "address/fetchSuggestions",
  async (input) => {
    const response = await fetch(
      `/api/place/autocomplete/json?input=${input}&components=country:us&key=AIzaSyD3GzAis1lcQb2Ullniu_spiQS_mqOkRAU`,
    );
    const data = await response.json();
    console.log("data from api", data);
    return data.predictions;
  },
);

const addressSlice = createSlice({
  name: "address",
  initialState: { suggestions: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddressSuggestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAddressSuggestions.fulfilled, (state, action) => {
        state.suggestions = action.payload;
        state.loading = false;
      })
      .addCase(fetchAddressSuggestions.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default addressSlice.reducer;
