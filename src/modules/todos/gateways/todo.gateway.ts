import { api } from 'src/boot/axios';

class TodoGateway {
  getAll() {
    return api.get('/todos');
  }

  save(data: any) {
    return api.post('/todos', data);
  }

  delete(id: number) {
    return api.delete('/todos/' + id);
  }
}

export const useTodoGateway = () => new TodoGateway();
