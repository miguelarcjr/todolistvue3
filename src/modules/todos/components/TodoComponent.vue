<template>
  <div>
    <form>
      <input type="text" v-model="task" placeholder="Nome da tarefa" />
      <button type="button" @click="adicionar()">Adicionar</button>
      {{ task }}
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TodoEntity from '../entity/todo.entity';

const task = ref('');
const todoEntity = new TodoEntity();

function adicionar() {
  todoEntity.adicionar(task.value);
  
  //alert('TAREFA ADICIONADA!' + task.value);
}
</script>

<style scoped></style>
