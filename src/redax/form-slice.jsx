import { createSlice } from "@reduxjs/toolkit";
import formOperations from "./form-operation";

const formSlice = createSlice({
  name: "form",
  initialState: {
    department: null,
    isLoading: false,
    clients: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(formOperations.numberDepartment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(formOperations.numberDepartment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.department = action.payload;
      state.error = null;
    });
    builder.addCase(formOperations.numberDepartment.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(formOperations.addClient.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(formOperations.addClient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.clients.push(action.payload);
        state.error = null;
      });
      builder.addCase(formOperations.addClient.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
   
  },
});


export const { numberDepartment,addClient  } = formSlice.actions;
export const formReducer = formSlice.reducer;
