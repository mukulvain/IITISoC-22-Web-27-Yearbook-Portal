import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: { loggedIn: false },
  },
  reducers: {
    login: (state, action) => {
      const loginJSON = {
        loggedIn: true, ...action.payload,
      }

      state.value = loginJSON;
      const localStorage = window.localStorage;
      localStorage.setItem(
        "user",
        JSON.stringify(loginJSON)
      );

      // when login, create new user, all vaidation etc. will be
      // handled at bacprocess.env.REACT_APP_API_URLkend.
      axios.post(process.env.REACT_APP_API_URL + "user/createNewUser", {
        name: loginJSON.name,
        email: loginJSON.email,
        googleId: loginJSON.googleId,
      }).catch((err) => {
        console.log(err);
      });
    },

    logout: (state) => {
      const logoutJSON = { loggedIn: false, }

      state.value = logoutJSON;
      const localStorage = window.localStorage;
      localStorage.setItem(
        "user",
        JSON.stringify(logoutJSON)
      );
    },

    initialize: (state) => {
      const localStorage = window.localStorage;
      state.value = JSON.parse(localStorage.getItem("user"));
      if (!state.value) state.value = { loggedIn: false };
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, initialize } = userSlice.actions;
export default userSlice.reducer;
