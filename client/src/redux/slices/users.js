import { createSlice } from "@reduxjs/toolkit";
import {
  getAllUsers,
  loginUser,
  logoutUser,
  registerUser,
} from "../../services/api";

const initialAccessToken = localStorage.getItem("accessToken");
const initialRefreshToken = localStorage.getItem("refreshToken");

const initialState = {
  accessToken: initialAccessToken,
  refreshToken: initialRefreshToken,
  loading: false,
  isLoggedIn: false,
  userData: {},
  allUsers: [],
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.loading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.loading = false;
      const { users } = action.payload;
      let usersEmails = [];
      for (let user of users) {
        usersEmails.push(user.email);
      }
      state.allUsers = usersEmails;
      state.error = null;
    },
    [getAllUsers.rejected]: (state) => {
      state.loading = false;
    },
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      const { userData } = action.payload;
      const userEmail = userData.email;
      state.allUsers.push(userEmail);
      state.error = null;
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      const { accessToken, refreshToken, sid, userData } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.sid = sid;
      state.userData = userData;
      state.loading = false;
      state.isLoggedIn = true;
      state.error = null;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [logoutUser.pending]: (state) => {
      state.loading = true;
    },
    [logoutUser.fulfilled]: (state) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.sid = null;
      state.userData = {};
      state.error = null;
    },
    [logoutUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default usersSlice.reducer;
