<template>
  <div>
    <table>
      <tbody>
        <tr>
          <th>{{ $t('status.tableCount') }}</th>
          <td>{{ todos.length }}</td>
        </tr>
        <tr>
          <th>{{ $t('status.tableLeft') }}</th>
          <td>{{ todos.length - todoComp }}</td>
        </tr>
        <tr>
          <th>
            {{ $t('status.tableComp') }}
            <span
              v-if="todoComp > 0"
              id="delete"
              @click="$emit('del-completed')"
            >
              {{ $t('status.delComp') }}
            </span>
          </th>
          <td>{{ todoComp }}</td>
        </tr>
        <tr>
          <th>{{ $t('status.tableRate') }}</th>
          <td>{{ todoRate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Status',
  props: {
    todos: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    todoComp: function () {
      return this.todos.filter(x => x.completed === true).length
    },
    todoRate: function () {
      return this.todos.length === 0
        ? this.$t('status.noTasks')
        : Math.round((this.todoComp / this.todos.length) * 100) + '%'
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  margin-bottom: 10px;
}
table,
th,
td {
  border: 1px solid rgb(161, 148, 148);
  border-collapse: collapse;
  padding: 15px;
  text-align: left;
  color: rgb(97, 20, 20);
}
tr:nth-child(even) {
  background-color: rgb(240, 254, 255);
}
#delete {
  font-size: 5px;
  color: rgb(75, 114, 150);
  font-weight: normal;
  cursor: pointer;
  display: inline-block;
}
#delete:hover {
  color: rgb(197, 12, 12);
}
</style>
