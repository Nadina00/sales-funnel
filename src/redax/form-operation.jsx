import { createAsyncThunk } from "@reduxjs/toolkit";

const numberDepartment = createAsyncThunk("form/department", async (number) => {
  try {
    return number;
  } catch (error) {
    console.error(error);
  }
});

const addClient = createAsyncThunk("form/clients", async (data) => {
  try {
    return data;
  } catch (error) {
    console.error(error);
  }
});

const formOperations = {
  numberDepartment,
  addClient
};

export default formOperations;
