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
          :placeholder="$t('forms.inputContentsNew')"
          required
        >
      </div>
      <div class="inputSection">
        <label>
          {{ $t('forms.titlePriority') }}
        </label>
        <br>
        <label class="radioButtonTitle">
          <input
            v-model="priority"
            type="radio"
            name="priority"
            value="0"
          >{{ $t('forms.priorityHigh') }}
        </label>
        <label class="radioButtonTitle">
          <input v-model="priority" type="radio" name="priority" value="1">{{ $t('forms.priorityMid') }}
        </label>
        <label class="radioButtonTitle">
          <input v-model="priority" type="radio" name="priority" value="2">{{ $t('forms.priorityLow') }}
        </label>
      </div>
      <div class="inputSection">
        <label>{{ $t('forms.titleCategory') }}</label><br><input
          v-model="category"
          type="text"
          class="inputText"
          name="category"
          :placeholder="$t('forms.inputCategory')"
          required
        >
      </div>
      <div class="inputSection">
        <label>{{ $t('forms.titleLimit') }}</label><br><input
          v-model="limit"
          type="date"
          class="inputText"
          name="limit"
          required
        >
      </div>
      <div class="inputSection">
        <input type="submit" :value="$t('forms.buttonSubmit')">
        <input type="reset" :value="$t('forms.buttonReset')">
      </div>
    </form>
  </div>
</template>

<script>
import dateFormat from '~/assets/js/format-date.js'

export default {
  name: 'AddTodo',
  props: {
    todos: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      title: '',
      priority: 0,
      category: '',
      limit: ''
    }
  },
  created() {
    this.limit = dateFormat.dateToday()
  },
  methods: {
    addTodo() {
      const newTodo = {
        id: this.todos.length + 1,
        title: this.title,
        priority: this.priority,
        category: this.category,
        limit: this.limit,
        completed: false
      }
      this.$emit('add-todo', newTodo)
      this.title = ''
    }
  }
}
</script>

<style src="~/assets/forms.css" scoped>
</style>
