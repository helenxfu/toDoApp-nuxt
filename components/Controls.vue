<template>
  <div id="container">
    <h2>{{ $t('controls.titleControls') }}</h2>
    <div class="buttonRow">
      <button @click="$emit('order-priority')">
        {{ $t('controls.orderPriority') }}
      </button>
      <button @click="$emit('order-deadline')">
        {{ $t('controls.orderDeadline') }}
      </button>
      <button @click="$emit('order-category')">
        {{ $t('controls.orderCategory') }}
      </button>
    </div>
    <div class="buttonRow">
      <button class="buttonDelete" @click="$emit('delete-all')">
        {{ $t('controls.deleteAll') }}
      </button>
    </div>
    <div>
      <h4>{{ $t('controls.titleSwitchLang') }}</h4>
      <div class="buttonRow">
        <button @click="switchLang('en')">
          English
        </button>
        <button @click="switchLang('ja')">
          日本語
        </button>
        <button @click="switchLang('zh')">
          中文
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Controls',
  methods: {
    switchLang(lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style scoped>
#container {
  margin-bottom: 10px;
}
.buttonRow {
  display: flex;
}
button {
  width: 100%;
  background-color: rgb(177, 153, 153);
  color: rgb(51, 25, 75);
  padding: 10px 15px;
  margin: 5px 2px;
  border: 1px solid rgb(92, 62, 83);
  border-radius: 20px;
  box-shadow: 0 2px #999;
}
.buttonDelete {
  background-color: rgb(233, 224, 224);
  box-shadow: 0px 2px rgb(116, 22, 22);
  color: red;
}
h4 {
  padding-top: 5px;
}
</style>
