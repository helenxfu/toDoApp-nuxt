<template>
  <div id="App">
    <Header />
    <div class="leftScreen">
      <Todos :todos="todos" @del-todo="deleteTodo" @edit-todo="editTodo" />
      <AddTodo :todos="todos" @add-todo="addTodo" />
    </div>
    <div class="rightScreen">
      <div class="rightBit">
        <Status id="status" :todos="todos" @del-completed="deleteCompleted" />
        <Controls
          id="control"
          :todos="todos"
          @order-priority="orderPriority"
          @order-deadline="orderDeadline"
          @order-category="orderCategory"
          @delete-all="deleteAll"
        />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import AddTodo from '~/components/AddTodo'
import Controls from '~/components/Controls'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Status from '~/components/Status'
import Todos from '~/components/Todos'

export default {
  name: 'App',
  components: {
    AddTodo,
    Controls,
    Footer,
    Header,
    Status,
    Todos
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'React',
          priority: 0,
          category: 'React',
          limit: '2019-05-14',
          completed: false
        },
        {
          id: 2,
          title: 'Vue',
          priority: 0,
          category: 'Vue',
          limit: '2019-06-11',
          completed: false
        },
        {
          id: 3,
          title: 'Portfolio',
          priority: 0,
          category: 'Personal',
          limit: '2019-07-22',
          completed: false
        },
        {
          id: 4,
          title: 'Statistics',
          priority: 2,
          category: 'CrashCourse',
          limit: '2019-12-22',
          completed: false
        },
        {
          id: 5,
          title: 'CS50',
          priority: 1,
          category: 'YouTube',
          limit: '2019-07-12',
          completed: false
        },
        {
          id: 6,
          title: 'Illustrator crashcourse',
          priority: 2,
          category: 'Adobe',
          limit: '2019-08-22',
          completed: false
        },
        {
          id: 7,
          title: 'Objective programming',
          priority: 2,
          category: 'Youtube',
          limit: '2019-05-02',
          completed: false
        }
      ]
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    addTodo(newTodo) {
      this.todos.push(newTodo)
    },
    editTodo(changeTodo) {
      const x = changeTodo.id - 1
      this.todos.splice(x, 1, changeTodo)
    },
    orderPriority() {
      this.todos
        .sort((a, b) => b.priority - a.priority)
        .sort(done => (done.completed ? 1 : -1))
    },
    orderDeadline() {
      this.todos
        .sort((a, b) => new Date(b.limit) - new Date(a.limit))
        .sort(done => (done.completed ? 1 : -1))
    },
    orderCategory() {
      this.todos
        .sort((a, b) => (a.category < b.category ? 1 : -1))
        .sort(done => (done.completed ? 1 : -1))
    },
    deleteAll() {
      this.todos = []
    },
    deleteCompleted() {
      this.todos = this.todos.filter(x => !x.completed)
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: rgb(97, 20, 20);
  line-height: 1.4;
}
input,
button {
  border: none;
  outline: none;
  text-decoration: none;
}
button {
  cursor: pointer;
  transition-property: filter;
  transition-duration: 1s;
}
button:hover {
  filter: hue-rotate(270deg);
}
button:active {
  transform: translateY(1px);
  box-shadow: none;
}
a {
  text-decoration: none;
  color: rgb(84, 69, 218);
}
.leftScreen {
  float: left;
  width: 70%;
  padding: 20px;
}
.rightScreen {
  float: left;
  width: 30%;
  padding: 20px;
}

@media screen and (max-width: 930px) {
  .leftScreen,
  .rightScreen {
    width: 100%;
  }
  .rightBit {
    display: flex;
  }
  #status,
  #control {
    width: 50%;
    padding: 5px;
  }
}

@media screen and (max-width: 550px) {
  .rightBit {
    display: block;
  }
  #status,
  #control {
    width: 100%;
    padding: 0;
  }
}
</style>
