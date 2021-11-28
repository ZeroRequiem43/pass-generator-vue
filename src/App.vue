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
@import './assets/scss/index';
@import "./assets/scss/buttons";
@import "./assets/scss/forms";
@import "./assets/scss/input-range";
@import "./assets/scss/main";
@import "./assets/scss/advice";
@import "./assets/scss/notifications";
@import "./assets/scss/media";

#app {
  width: 100%;
  height: 100%;
}
</style>
