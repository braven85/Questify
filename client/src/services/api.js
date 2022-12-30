import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = "https://questify-api.vercel.app/api";

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
  try {
    const { data } = await axios.get(`${apiURL}/users`);
    return data;
  } catch (error) {
    return error?.response;
  }
});

export const registerUser = createAsyncThunk(
  "users/register",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${apiURL}/users/register`, {
        email: user.email,
        password: user.password,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/login",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${apiURL}/users/login`, {
        email: user.email,
        password: user.password,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "users/logout",
  async (accessToken, { rejectWithValue }) => {
    try {
      axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
      const { data } = await axios.post(`${apiURL}/users/logout`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllCards = createAsyncThunk(
  "getAllCards",
  async (accessToken, { rejectWithValue }) => {
    try {
      axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
      const { data } = await axios.get(`${apiURL}/card`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createCard = createAsyncThunk(
  "createCard",
  async ({ accessToken, cardData }, { rejectWithValue }) => {
    try {
      axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
      const { data } = await axios.post(`${apiURL}/card`, {
        title: cardData.title,
        difficulty: cardData.difficulty,
        category: cardData.category,
        date: cardData.date,
        time: cardData.time,
        type: cardData.type,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const editCard = createAsyncThunk(
  "editCard",
  async ({ accessToken, cardData, cardId }, { rejectWithValue }) => {
    try {
      axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
      const { data } = await axios.patch(`${apiURL}/card/${cardId}`, cardData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteCard = createAsyncThunk(
  "deleteCard",
  async ({ accessToken, cardId }, { rejectWithValue }) => {
    try {
      axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
      await axios.delete(`${apiURL}/card/${cardId}`);
      const { data } = await axios.get(`${apiURL}/card`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateCardStatus = createAsyncThunk(
  "updateCardStatus",
  async ({ accessToken, cardId }, { rejectWithValue }) => {
    try {
      axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
      const { data } = await axios.patch(`${apiURL}/card/complete/${cardId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
