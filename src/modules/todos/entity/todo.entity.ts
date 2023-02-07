import { storeToRefs } from 'pinia';
import CalculaTotal from 'src/shared/mixins/calculaTotal';
import { useTodoGateway } from '../gateways/todo.gateway';
import { useTodoStore } from './../stores/todo.store';
export default class TodoEntity {
  todoStore = useTodoStore();
  $todoService = useTodoGateway();

  getStoreToRefs() {
    return storeToRefs(this.todoStore);
  }

  adicionar(task: string) {
    if (task === '') {
      return;
    }
    const data = {
      description: task,
    };
    this.$todoService.save(data).then((res) => {
      console.log('teste');
      console.log(res.data);
      this.todoStore.addTodo(res.data);
    });
  }

  remover(todo: any) {
    this.$todoService.delete(todo.id).then((res) => {
      this.todoStore.removeTodo(todo);
    });
    CalculaTotal(1, 2);
  }

  loadTodosToState() {
    this.$todoService.getAll().then((res) => {
      console.log(res);
      this.todoStore.$patch({ todos: res.data });
    });
  }
}
