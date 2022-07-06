import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: { loggedIn: false },
  },
  reducers: {
    login: (state, action) => {
      state.value = {
        loggedIn: true,
        ...action.payload,
      };

      const localStorage = window.localStorage;
      localStorage.setItem(
        "user",
        JSON.stringify({
          loggedIn: true,
          ...action.payload,
        })
      );
    },

    logout: (state) => {
      state.value = { loggedIn: false };

      const localStorage = window.localStorage;
      localStorage.setItem(
        "user",
        JSON.stringify({
          loggedIn: false,
        })
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
