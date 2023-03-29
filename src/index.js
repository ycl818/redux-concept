import store from "./store/configureStore";
import { addTask, removeTask, completeTask, fetchTodo } from "./store/task";

// const unsubsribe = store.subscribe(() => {
//   console.log("Update", store.getState());
// });

// store.dispatch(addTask("Task1"));
// store.dispatch(addTask("Task2"));
// console.log(store.getState());

// store.dispatch(completeTask(2));

// store.dispatch(removeTask(1));
// store.dispatch(fetchTodo());
// console.log(store.getState());
