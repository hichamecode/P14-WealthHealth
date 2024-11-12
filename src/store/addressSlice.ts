import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiKey } from "../utils/apiKey";

export const fetchAddressSuggestions = createAsyncThunk(
  "address/fetchSuggestions",
  async (input) => {
    const response = await fetch(
      `/api/place/autocomplete/json?input=${input}&components=country:us&key=${apiKey}`,
    );
    const data = await response.json();
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

