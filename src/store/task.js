import { createAction } from "@reduxjs/toolkit";

// Actions
export const addTask = createAction("ADD_TASK");
export const removeTask = createAction("REMOVE_TASK");
export const completeTask = createAction("COMPLETE_TASK");
// console.log(test({ task: "Task1" }));

// export const addTask = (task) => {
//   return {
//     type: ADD_TASK,
//     payload: {
//       task,
//     },
//   };
// };

// export const removeTask = (id) => {
//   return {
//     type: REMOVE_TASK,
//     payload: {
//       id,
//     },
//   };
// };
// export const completeTask = (id) => {
//   return {
//     type: COMPLETE_TASK,
//     payload: {
//       id,
//     },
//   };
// };

export const fetchTodo = () => {
  return async function (dispatch, getState) {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const task = await response.json();
    dispatch(addTask(task.title));
  };
};

let id = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case addTask.type:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          complete: false,
        },
      ];
    case removeTask.type:
      return state.filter((task) => task.id !== action.payload.id);

    case completeTask.type:
      return state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              complete: true,
            }
          : task
      );
    default:
      return state;
  }
}
