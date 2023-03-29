import { createAction, createReducer } from "@reduxjs/toolkit";

// Actions
export const addTask = createAction("ADD_TASK");
export const removeTask = createAction("REMOVE_TASK");
export const completeTask = createAction("COMPLETE_TASK");

// export const fetchTodo = () => {
//   return async function (dispatch, getState) {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     const task = await response.json();
//     dispatch(addTask(task.title));
//   };
// };

// Reducer

let id = 0;
export default createReducer([], {
  [addTask.type]: (state, action) => {
    state.push({
      id: ++id,
      task: action.payload.task,
      complete: false,
    });
  },
  [removeTask.type]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id);
    state.splice(index, 1);
  },
  [completeTask.type]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id);
    state[index].complete = true;
  },
});

// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case addTask.type:
//       return [
//         ...state,
//         {
//           id: ++id,
//           task: action.payload.task,
//           complete: false,
//         },
//       ];
//     case removeTask.type:
//       return state.filter((task) => task.id !== action.payload.id);

//     case completeTask.type:
//       return state.map((task) =>
//         task.id === action.payload.id
//           ? {
//               ...task,
//               complete: true,
//             }
//           : task
//       );
//     default:
//       return state;
//   }
// }
