import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    task: [],
  },

  reducers: {
    addTask: (state, action) => {
      state.task.push(action.payload);
    },
    removeTask: (state, action) => {
      state.task = state.task.filter((id) => id.id !== action.payload);
    },
    completedTask: (state, action) => {
      state.task = state.task.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: true,
          };
        }
        return task;
      });
    },
  },
});

export const { addTask, removeTask, completedTask } = taskSlice.actions;
export default taskSlice.reducer;
