<template>
  <div>
    <form @submit.prevent="addTodo">
      <!-- <form action="/url-where-you-want-to-submit-form-data"> -->
      <div class="inputSection">
        <label>{{ $t('forms.titleContents') }}</label>
        <br>
        <input
          v-model="title"
          class="inputText"
          type="text"
          name="title"
          :placeholder="$t('forms.inputContentsEdit')"
          required
        >
      </div>
      <div class="inputSection">
        <label>{{ $t('forms.titlePriority') }}</label>
        <br>
        <label class="radioButtonTitle">
          <input v-model="priority" type="radio" name="priority" value="0">
          {{ $t('forms.priorityHigh') }}
        </label>
        <label class="radioButtonTitle">
          <input v-model="priority" type="radio" name="priority" value="1">
          {{ $t('forms.priorityMid') }}
        </label>
        <label class="radioButtonTitle">
          <input v-model="priority" type="radio" name="priority" value="2">
          {{ $t('forms.priorityLow') }}
        </label>
      </div>
      <div class="inputSection">
        <label>{{ $t('forms.titleCategory') }}</label>
        <br>
        <input
          v-model="category"
          type="text"
          class="inputText"
          name="category"
          :placeholder="$t('forms.inputCategory')"
          required
        >
      </div>
      <div class="inputSection">
        <label>{{ $t('forms.titleLimit') }}</label>
        <br>
        <input v-model="limit" type="date" class="inputText" name="limit" required>
      </div>
      <div class="inputSection">
        <input type="submit" :value="$t('forms.buttonSubmitEdit')">
        <input type="reset" :value="$t('forms.buttonReset')">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditTodo',
  props: {
    todo: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      id: this.todo.id,
      title: this.todo.title,
      priority: this.todo.priority,
      category: this.todo.category,
      limit: this.todo.limit
    }
  },
  methods: {
    editTodo() {
      const changeTodo = {
        id: this.todo.id,
        title: this.title,
        priority: this.priority,
        category: this.category,
        limit: this.limit,
        completed: this.todo.completed
      }
      this.$emit('edit-todo', changeTodo)
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
form {
  background-color: rgb(57, 103, 114);
  border: 1px solid rgb(100, 33, 102);
  border-radius: 10px;
  color: rgb(208, 254, 255);
  font-size: 14px;
}
.inputSection {
  margin: 5px 12px;
}
.radioButtonTitle {
  color: rgb(218, 217, 202);
  margin: 0;
}
.inputText {
  width: 100%;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
}
input[type="radio"] {
  height: 1em;
  margin: 5px 2px;
  cursor: pointer;
}
input[type="submit"],
input[type="reset"] {
  padding: 5px;
  width: 50px;
  border-radius: 15px;
  background-color: rgb(208, 254, 255);
  cursor: pointer;
}
input[type="submit"]:hover,
input[type="reset"]:hover {
  filter: hue-rotate(270deg);
}
input[type="submit"]:active,
input[type="reset"]:active {
  transform: translateY(1px);
  box-shadow: none;
}
</style>
