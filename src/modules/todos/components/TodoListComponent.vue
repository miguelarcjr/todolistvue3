<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.description">
        <button @click="todoEntity.remover(todo)">X</button>
        {{ todo.description }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import TodoEntity from '../entity/todo.entity';

const todoEntity = new TodoEntity();

const { todos } = todoEntity.getStoreToRefs();

onMounted(() => {
  todoEntity.loadTodosToState();
});

//const todos = [{ description: 'teste' }, { description: 'teste2' }];
</script>

<style scoped></style>
