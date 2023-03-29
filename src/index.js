import store from "./store/configureStore";
import { addTask, removeTask, completeTask } from "./store/task";
import { addEmployee } from "./store/employee";

const unsubsribe = store.subscribe(() => {
  console.log("Update", store.getState());
});

// store.dispatch(addTask({ task: "Task1" }));
// store.dispatch(addTask({ task: "Task2" }));
// console.log(store.getState());

// store.dispatch(completeTask({ id: 2 }));

// store.dispatch(removeTask({ id: 1 }));
// // store.dispatch(fetchTodo());
// console.log(store.getState());
store.dispatch(addEmployee({ name: "Harley" }));
