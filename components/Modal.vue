<template>
  <div id="modal">
    <div id="modalContent">
      <div id="top">
        <div><h3>{{ $t('forms.titleEditData') }}</h3></div>
        <div>
          <button @click="$emit('close')">
            &times;
          </button>
        </div>
      </div><hr>
      <!-- @edit-todo="(changeTodo) => {$emit('edit-todo', changeTodo)}" -->
      <EditTodo
        :todo="todo"
        @edit-todo="editTodo"
        @close="$emit('close')"
      />
    </div>
  </div>
</template>

<script>
import EditTodo from '~/components/EditTodo'

export default {
  name: 'Modal',
  components: {
    EditTodo
  },
  props: {
    todo: {
      type: Object,
      default: () => {
        return {}
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

#modal {
  background-color: rgba(113, 168, 168, 0.6);
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  animation-name: modalOpen;
  animation-duration: 1s;
}
#modalContent {
  background-color: rgb(255, 248, 234);
  margin: 20% auto;
  padding: 20px;
  width: 70%;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.5);
  animation-name: modalScale;
  animation-duration: 1s;
}
#top{
  display: flex;
  justify-content: space-between;
}
button{
  background-color: transparent;
  font-size: 20px;
}

@keyframes modalOpen{
  from {opacity : 0;}
  to {opacity : 1;}
}
@keyframes modalScale{
  from {transform: scale(0.7);}
  to { transform: scale(1);}
}
</style>
