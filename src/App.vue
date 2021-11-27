<template>
<Main />
</template>

<script>

import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style lang="scss">
@import "./assets/scss/vars";
@import url('./assets/scss/index.scss');
@import "./assets/scss/buttons";
@import "./assets/scss/forms";
@import "./assets/scss/input-range";
@import "./assets/scss/main";
@import "./assets/scss/advice";
@import "./assets/scss/notifications";

#app {
  width: 100%;
  height: 100%;
  background: #0d112d;
}
</style>
