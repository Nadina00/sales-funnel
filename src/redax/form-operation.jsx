import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://sales-funnel-noda.onrender.com";

const numberDepartment = createAsyncThunk("form/department", async (number) => {
  try {
    return number;
  } catch (error) {
    console.error(error);
  }
});

const addClient = createAsyncThunk("form/clients", async (credential) => {
  try {
    const { data } = await axios.post("/add", credential);
    return data;
  } catch (error) {
    console.error(error);
  }
});

const getClient = createAsyncThunk("form/getClients", async (credential) => {
  try {
    const { data } = await axios.post("/", credential);
    const listItem = data.result;
    return listItem;
  } catch (error) {
    console.error(error);
  }
});
const deleteClient = createAsyncThunk("form/delClients", async (id) => {
  try {
    const { data } = await axios.delete(`/delClients/${id}`);
    return data.result;
  } catch (error) {
    console.error(error);
  }
});

const formOperations = {
  numberDepartment,
  addClient,
  getClient,
  deleteClient,
};

export default formOperations;
