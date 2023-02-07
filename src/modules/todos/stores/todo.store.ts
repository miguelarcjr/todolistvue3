import { defineStore } from 'pinia';
export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as any[],
    id: 0,
  }),
  actions: {
    addTodo(data: any) {
      this.todos.push(data);
    },
    removeTodo(todo: any) {
      this.todos = this.todos.filter((item) => item.id !== todo.id);
    },
  },
});
