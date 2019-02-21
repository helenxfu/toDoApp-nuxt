import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    status: {
      tableCount: 'Task Count', tableLeft: 'Remaining', tableComp: 'Completed', tableRate: 'Completion Rate', delComp: 'Delete Completed', noTasks: 'No Tasks'
    },
    controls: {
      titleControls: 'Controls', titleSwitchLang: 'Change Language', orderPriority: 'By Priority', orderDeadline: 'By Deadline', orderCategory: 'By Category', deleteAll: 'Delete All Tasks'
    },
    forms: {
      titleContents: 'Todo Title', titlePriority: 'Priority', titleCategory: 'Category', titleLimit: 'Deadline', titleEditData: 'Edit Data', inputContentsNew: 'Add new todo item here...', inputContentsEdit: 'Edit title name here...', inputCategory: 'category name', buttonSubmit: 'submit', buttonSubmitEdit: 'Update', buttonReset: 'reset', buttonEdit: 'Edit', priorityHigh: 'High', priorityMid: 'Mid', priorityLow: 'Low', completed: 'Completed'
    },
    countDown: {
      today: 'TODAY!', passed: 'PASSED!!', count: 'Days Remain: '
    },
    text: {
      subtitle: 'Todo Application for your long term goals', made: 'Made with Nuxt', more: 'For more infirmation...', none: 'Please add tasks from the form below', warning: 'Are you sure you want to delete all tasks?'
    }
  },
  ja: {
    status: {
      tableCount: 'タスク総数', tableLeft: '残数', tableComp: '完了済み', tableRate: '完遂率', delComp: '完了済みタスク削除', noTasks: 'タスク無'
    },
    controls: {
      titleControls: 'オプション', titleSwitchLang: '言語切り替え', orderPriority: '優先順', orderDeadline: '期限順', orderCategory: '類別順', deleteAll: '全タスク削除'
    },
    forms: {
      titleContents: '内容', titlePriority: '優先度', titleCategory: '類別', titleLimit: '期限', titleEditData: 'データ編集', inputContentsNew: '新しいタスクを追加', inputContentsEdit: 'タスク名を変更', inputCategory: '類別名', buttonSubmit: '追加', buttonSubmitEdit: '変更', buttonReset: 'リセット', buttonEdit: '編集', priorityHigh: '高', priorityMid: '中', priorityLow: '低', completed: '完'
    },
    countDown: {
      today: '今日!', passed: '期限過ぎ!', count: '残留日数: '
    },
    text: {
      subtitle: 'Todo Application for your long term goals', made: 'Made with Nuxt', more: 'For more infirmation...', none: '下記フォームからタスクを入力してください', warning: '本当に全てのタスクを削除してもよろしいですか？'
    }
  },
  zh: {
    status: {
      tableCount: '任务总数', tableLeft: '剩余数', tableComp: '完成数', tableRate: '完成率', delComp: '消除完成的项目', noTasks: '没有任务'
    },
    controls: {
      titleControls: '控制选项', titleSwitchLang: '切换语言', orderPriority: '优先度', orderDeadline: '期限', orderCategory: '类别', deleteAll: '消除所有项目'
    },
    forms: {
      titleContents: '内容', titlePriority: '优先度', titleCategory: '类别', titleLimit: '期限', titleEditData: '变更项目', inputContentsNew: '追加新的项目', inputContentsEdit: '变更项目名', inputCategory: '类别名', buttonSubmit: '追加', buttonSubmitEdit: '变更', buttonReset: '重置', buttonEdit: '变更', priorityHigh: '高', priorityMid: '中', priorityLow: '低', completed: '完'
    },
    countDown: {
      today: '今天！', passed: '过期了！', count: '剩余天数: '
    },
    text: {
      subtitle: 'Todo Application for your long term goals', made: 'Made with Nuxt', more: 'For more infirmation...', none: '请追加项目', warning: '真的要全部消除吗？'
    }
  }
}

export default ({ app }) => {
  app.i18n = new VueI18n({
    locale: 'ja',
    fallbackLocale: 'en',
    messages
  })
}

// const i18n = new VueI18n({
//   locale: 'en', // set locale
//   fallbackLocale: 'en', // set fallback locale
//   messages // set locale messages
// })

// new Vue({ i18n }).$mount('#app')
