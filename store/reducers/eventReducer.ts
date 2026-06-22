import { createSlice } from "@reduxjs/toolkit";

export interface EventReducer {
  events: Array<string>;
}

const initialState: EventReducer = {
  events: [],
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
});

export default eventSlice.reducer;
