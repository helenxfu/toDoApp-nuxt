<template>
  <header class="header">
    <h1>TO DO APP</h1>
    <h2>{{ $t('text.subtitle') }}</h2>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  padding: 10px;
}
</style>
