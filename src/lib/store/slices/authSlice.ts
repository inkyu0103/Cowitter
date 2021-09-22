import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../model/userModel";

const initialState: User = {
  displayName: null,
  email: null,
  phoneNumber: null,
  photoURL: null,
  providerId: null,
  uid: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      (state.displayName = action.payload.displayName),
        (state.email = action.payload.email);
      state.phoneNumber = action.payload.phoneNumber;
      state.photoURL = action.payload.photoURL;
      state.providerId = action.payload.providerId;
      state.uid = action.payload.uid;
    },
    logout: (state) => {
      state.displayName = null;
      state.email = null;
      state.phoneNumber = null;
      state.photoURL = null;
      state.providerId = null;
      state.uid = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
