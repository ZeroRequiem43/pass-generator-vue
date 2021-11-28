<template>
  <div class="generator__length generator-lvl">
    <div class="generator__length-text">
      Длина пароля:
      <span class="bold">{{ passLength }}</span>
    </div>
    <div class="generator__length-form">
      <form class="form-fl form-range">
        <div class="range-control btn-minus" @click="decrementLength">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z"
            />
          </svg>
        </div>
        <input
          type="range"
          name="generator-range"
          id="generator-range"
          min="0"
          max="20"
          v-model.number="passLength"
          ref="rangeInput"
          @change="generatePassword"
        />
        <div class="range-control btn-plus" @click="incrementLength">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"
            />
          </svg>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'PasswordLength',
  setup() {
    const store = useStore()
    const rangeInput = ref(null)
    const settings = {
      minLength: '0',
      maxLength: '20'
    }

    const passLength = computed({
      get() {
        return store.state.passLength
      },
      set(value) {
        store.commit('setPassLength', value)
      }
    })

    function incrementLength() {
      if (passLength.value < settings.maxLength) {
        store.commit('incrementPassLength')
        if (!store.state.options.empty) {
          store.dispatch('generatePassword')
        }
      }
      return
    }

    function decrementLength() {
      if (passLength.value > settings.minLength) {
        store.commit('decrementPassLength')
        if (!store.state.options.empty) {
          store.dispatch('generatePassword')
        }
      }
      return
    }

    watch(passLength, () => {
      colorInputRange()
    })

    function colorInputRange() {
      const min = rangeInput.value.min
      const max = rangeInput.value.max
      const inputValue = store.getters.getCurrentLength
      const newValue = (inputValue - min) / (max - min) * 100
      rangeInput.value.style.background = `linear-gradient(to right, #2c609c 0%, #2c609c ${newValue}%, #ccc ${newValue}%, #ccc)`
    }

    function generatePassword() {
      if (!store.state.options.empty) {
        store.dispatch('generatePassword')
      }
    }
    return { rangeInput, settings, passLength, incrementLength, decrementLength, colorInputRange, generatePassword }
  }
}
</script>
