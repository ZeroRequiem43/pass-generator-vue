<template>
  <div class="generator__output">
    <div class="generator__output-form">
      <form class="rel">
        <div
          class="generator__advice"
          ref="adviceRef"
          :class="[{ active: isAdviceActive }, selectClass]"
        >
          <span>{{ selectAdviceText }}</span>
        </div>
        <input
          type="text"
          name="generator-output"
          id="generator-output"
          maxlength="20"
          :value="generatedPassword"
          :disabled="true"
        />
      </form>
    </div>
<div class="generator__output-buttons">
      <button class="btn btn-refresh" @click="generateNewPass" />
      <button class="btn btn-primary" @click="copyPass">Копировать</button>
</div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'PasswordOutput',
  setup() {
    const store = useStore()
    const adviceRef = ref(null)

    let generatedPassword = computed(() => {
      return store.getters.getPassword
    })

    let generatedPasswordLength = computed(() => {
      return store.getters.getPassLength
    })

    const getPassLength = computed(() => {
      return store.getters.getPassLength
    })

    const isAdviceActive = computed(() => {
      return store.getters.getAdviceStatus
    })

    function generateNewPass() {
      store.dispatch('generatePassword')
    }

    const selectClass = computed(() => {
      let length = generatedPasswordLength.value
      let className = ''
      if (length > 0) {
        store.commit('setAdviceActive', true)
      } else {
        store.commit('setAdviceActive', false)
      }
      if (length > 0 && length <= 5) {
        className = 'bad'
        store.commit('setAdviceCurrent', 'bad')
      } else if (length > 5 && length <= 8) {
        className = 'medium'
        store.commit('setAdviceCurrent', 'medium')
      } else if (length > 8 && length <= 12) {
        className = 'strong'
        store.commit('setAdviceCurrent', 'strong')
      } else if (length > 12) {
        className = 'perfect'
        store.commit('setAdviceCurrent', 'perfect')
      }
      return className
    })

    const selectAdviceText = computed(() => {
      let text = ''
      let status = store.getters.getAdvice
      if (status.length > 1) {
        text = store.state.advice.messages[status]
      }
      return text
    })

    async function copyPass() {
      let pass = store.state.generatedPassword
      if (pass) {
        await navigator.clipboard.writeText(pass).then(function () {
          store.dispatch('showNotification', 'Пароль скопирован')
        }, function (err) {
          store.dispatch('showNotification', 'Что-то пошло не так')
          console.error(err)
        })
      } else {
        store.dispatch('showNotification', 'Нечего копировать :(')
      }
    }

    return { adviceRef, isAdviceActive, selectAdviceText, generatedPassword, generatedPasswordLength, getPassLength, generateNewPass, selectClass, copyPass }
  }
}
</script>
