export const ADD_TODO = "ADD_TODO";
export const RENDER_TODO_LIST = "RENDER_TODO_LIST";
export const LOAD_TODO_LIST = "LOAD_TODO_LIST";

type TodoType = {
  title: string;
};

export function addToDo(title: string) {
  return {
    type: ADD_TODO,
    toDoItem: {
      _id: new Date().getTime(),
      title
    }
  };
}

export function loadToDoList() {
  return {
    type: LOAD_TODO_LIST
  };
}
