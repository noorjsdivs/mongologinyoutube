import { createSlice } from "@reduxjs/toolkit";

// Create Initail state
const initialState = {
  userInfo: null,
};
// Declar the Slices
export const mongoSlice = createSlice({
  name: "mongo",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});
// Export the Slices and reducers
export const { addUser, removeUser } = mongoSlice.actions;
export default mongoSlice.reducer;
