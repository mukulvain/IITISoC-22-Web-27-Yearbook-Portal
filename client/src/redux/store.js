import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserState/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
