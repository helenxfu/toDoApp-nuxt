<template>
  <div id="container">
    <div v-if="!todos.length">
      <TodoNone />
    </div>
    <div v-for="todo in todos" v-else :key="todo.id">
      <TodoItem :todo="todo" @del-todo="$emit('del-todo', todo.id)" @edit-todo="editTodo" />
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import TodoNone from './TodoNone.vue'

export default {
  name: 'Todos',
  components: {
    TodoItem,
    TodoNone
  },
  props: {
    todos: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    editTodo(changeTodo) {
      this.$emit('edit-todo', changeTodo)
    }
  }
}
</script>

<style scoped>
div{
  border: 0.5px solid rgb(136, 113, 129);
  border-radius: 10px;
}
#container {
  margin-bottom: 20px;
}
</style>
