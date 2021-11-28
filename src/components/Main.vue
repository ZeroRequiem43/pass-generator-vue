<template>
  <main class="main">
    <div class="main__title">
      <h1>Генератор пароля</h1>
    </div>
    <div class="main__generator generator">
      <PasswordOutput />
      <div class="generator__settings">
        <PasswordLength />
        <PasswordCheckbox />
      </div>
    </div>
  <Notification />
  </main>
</template>

<script>
import PasswordLength from './PasswordLength'
import PasswordOutput from './PasswordOutput'
import PasswordCheckbox from './PasswordCheckbox'
import Notification from './Notification'

export default {
  name: 'Main',
  components: {
    PasswordLength,
    PasswordOutput,
    PasswordCheckbox,
    Notification
  }
}
</script>