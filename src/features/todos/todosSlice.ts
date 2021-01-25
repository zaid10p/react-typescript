import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

// features/todos/todosSlice.ts
type TodoId = string;
export type Todo = {
  id: TodoId;
  title: string;
  completed: boolean;
};
type TodosState = {
  list: Todo[];
};
const initialState: TodosState = {
  list: [{ id: '123', title: 'First todo', completed: false }],
};

export const todosSlice = createSlice({
  // A name, used in action types:
  name: 'todos',
  // The initial state:
  initialState,
  // Key names will be used to generate actions:
  reducers: {
    // Arguments of actions are basically the same.
    // The first one is the state,the second one is an action.
    addTodo(
      state: TodosState,
      // `PayloadAction` is a generic-type that allows you to specify an action with a typped payload.
      // In our case, this payload is of `Todo` type:
      action: PayloadAction<Todo>,
    ) {
      state.list.push(action.payload);
    },
    toggleTodo(state, action: PayloadAction<TodoId>) {
      const index = state.list.findIndex(({ id }) => id === action.payload);
      if (index !== -1) {
        state.list[index].completed = !state.list[index].completed;
      }
    },
  },
});

// Export all of the actions:
export const { toggleTodo, addTodo } = todosSlice.actions;

export const addTodoAsync = (title: string): AppThunk => async (dispatch) => {
  const newTodo: Todo = {
    id: Math.random().toString(36).substr(2, 9),
    completed: false,
    title,
  };
  setTimeout(() => {
    dispatch(addTodo(newTodo));
  }, 800);
};

// Create and export the selector:
export const selectTodos = (state: RootState) => state.todos.list;

// It is a convention to export reducer as a default export:
export default todosSlice.reducer;
