import { initializeTimes, updateTimes } from "./BookingPage";

test("initializeTimes returns the correct initial state", () => {
     const initialTimes = initializeTimes();
     expect(initialTimes).toEqual(["12:00 PM", "1:00 PM", "2:00 PM"]);
});

test("updateTimes returns the same state when no logic is implemented", () => {
     const initialState = ["12:00 PM", "1:00 PM", "2:00 PM"];
     const action = { type: "SELECT_DATE", payload: "2024-12-25" }; // Replace with your action structure
     const updatedState = updateTimes(initialState, action);
     expect(updatedState).toEqual(initialState);
});
