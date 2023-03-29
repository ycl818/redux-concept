const log = (store) => (next) => (action) => {
  console.log(action);
  console.log(next);
  console.log(store);
};

export default log;
