import { RouteRecordRaw } from 'vue-router';
import TodoListView from '../modules/todos/pages/TodoListView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'todo',
    component: TodoListView,
  },
];

export default routes;
