<template>
  <div class="container">
    <div
      class="divTitle"
      :class="{'is-passed-title':passed, 'is-complete-title':todo.completed}"
      :style="{backgroundColor: colors[0][todo.priority]}"
    >
      <div class="title leftSpan">
        <p>{{ todo.title }}</p>
      </div>
      <div class="rightSpan">
        <p>{{ todo.category }}</p>
      </div>
    </div>
    <div
      class="divBody"
      :class="{'is-passed':passed, 'is-complete':todo.completed}"
      :style="{backgroundColor: colors[1][todo.priority]}"
    >
      <div class="leftSpan">
        <span>
          <b>{{ $t('forms.titlePriority') }}:</b>
          {{ priorityName[todo.priority] }}
        </span>
        <span>
          <b>{{ $t('forms.titleLimit') }}:</b>
          {{ todo.limit }}
        </span>
        <span>[{{ dateRemain() }}]</span>
      </div>
      <div class="rightSpan">
        <label>
          <input type="checkbox" @change="markComplete">
          {{ $t('forms.completed') }}
        </label>
        <button @click="showModal = true">
          {{ $t('forms.buttonEdit') }}
        </button>
        <button class="deleteButton" @click="$emit('del-todo', todo.id)">
          X
        </button>
        <Modal v-if="showModal" :todo="todo" @close="showModal = false" @edit-todo="editTodo" />
      </div>
    </div>
  </div>
</template>

<script>
import dateFormat from '~/assets/js/format-date.js'
import Modal from '~/components/Modal'

export default {
  name: 'TodoItem',
  components: {
    Modal
  },
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
      colors: [
        ['rgb(247, 255, 199)', 'rgb(193, 255, 184)', 'rgb(224, 254, 255)'],
        ['rgb(239, 255, 146)', 'rgb(159, 223, 153)', 'rgb(167, 230, 233)']
      ],
      priorityName: [
        this.$t('forms.priorityHigh'),
        this.$t('forms.priorityMid'),
        this.$t('forms.priorityLow')
      ],
      passed: false,
      showModal: false
    }
  },
  computed: {
    passedDate: function () {
      return new Date(this.todo.limit) < new Date(dateFormat.dateToday())
    }
  },
  created() {
    this.passed = this.passedDate
  },
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed
    },
    dateRemain() {
      const countDown =
        (new Date(this.todo.limit) - new Date(dateFormat.dateToday())) /
        86400000
      return countDown > 0
        ? this.$t('countDown.count') + countDown
        : countDown === 0
          ? this.$t('countDown.today')
          : this.$t('countDown.passed')
    },
    editTodo(changeTodo) {
      this.$emit('edit-todo', changeTodo)
    }
  }
}
</script>

<style scoped>
.divTitle {
  padding: 5px 12px 3px 12px;
  display: flex;
  justify-content: space-between;
}
.divBody {
  padding: 3px 12px 5px 12px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
span {
  display: inline-block;
}
.title {
  color: rgb(28, 45, 122);
  font-size: 14px;
}
input[type="checkbox"] {
  cursor: pointer;
}
button {
  padding: 5px;
  border-radius: 15px;
  background-color: rgb(208, 254, 255);
  border: 1px solid rgb(136, 113, 129);
  box-shadow: 0 1px rgb(59, 80, 88);
}
.deleteButton {
  background-color: rgb(165, 105, 105);
  border-radius: 50%;
}
.is-passed-title {
  background-color: rgb(238, 178, 178) !important;
}
.is-passed {
  background-color: rgb(243, 154, 154) !important;
}
.is-complete-title {
  background-color: rgb(219, 219, 219) !important;
}
.is-complete {
  background-color: rgb(187, 187, 187) !important;
}
</style>
