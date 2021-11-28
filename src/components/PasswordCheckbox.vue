<template>
  <div class="generator__symbols generator-lvl">
    <div class="generator__symbols-text">
      Использовать символы: <span class="bold"></span>
    </div>
    <div class="generator__symbols-form">
      <form class="form-fl form-checkbox">
        <div class="form-fl__input-container">
          <input
            type="checkbox"
            id="symbols-upper"
            name="upper-case"
            value="0"
            v-model="upperCase"
            @click="changeChecked"
          />
          <label for="symbols-upper">ABC</label>
        </div>
        <div class="form-fl__input-container">
          <input
            type="checkbox"
            id="symbols-lower"
            name="lower-case"
            value="1"
            v-model="lowerCase"
            @click="changeChecked"
          />
          <label for="symbols-lower">abc</label>
        </div>
        <div class="form-fl__input-container">
          <input
            type="checkbox"
            id="symbols-numbers"
            name="numbers"
            value="2"
            v-model="numbers"
            @click="changeChecked"
          />
          <label for="symbols-numbers">123</label>
        </div>
        <div class="form-fl__input-container">
          <input
            type="checkbox"
            id="symbols-special"
            name="symbols"
            value="3"
            v-model="symbols"
            @click="changeChecked"
          />
          <label for="symbols-special">#!.</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, watch, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: "PasswordCheckbox",
  setup() {
    const store = useStore()
    const isChecked = reactive([false, false, false, false])


    function check(el, newValue) {
      isChecked[el] = newValue
    }

    function changeChecked(event) {
      const item = event.target.value
      isChecked[item] = event.target.checked
    }

    let emptyStatus = computed(() => {
      return store.getters.isEmpty
    })

    watch(() => [...isChecked], () => {
      if (isChecked.includes(true) && emptyStatus.value) {
        store.commit('setEmpty', false)
      } else if (!isChecked.includes(true) && !emptyStatus.value) {
        store.commit('setEmpty', true)
      } else {
        return
      }
    })

    const upperCase = computed({
      get() {
        return store.state.options.upperCase
      },
      set(value) {
        store.dispatch('setCheckboxSettings', { name: 'upperCase', value })
        check(0, value)
      }
    })

    const lowerCase = computed({
      get() {
        return store.state.options.lowerCase
      },
      set(value) {
        store.dispatch('setCheckboxSettings', { name: 'lowerCase', value })
        check(1, value)
      }
    })

    const numbers = computed({
      get() {
        return store.state.options.numbers
      },
      set(value) {
        store.dispatch('setCheckboxSettings', { name: 'numbers', value })
        check(2, value)
      }
    })

    const symbols = computed({
      get() {
        return store.state.options.symbols
      },
      set(value) {
        store.dispatch('setCheckboxSettings', { name: 'symbols', value })
        check(3, value)
      }
    })
    return { isChecked, check, changeChecked, upperCase, lowerCase, numbers, symbols, emptyStatus }
  }
}
</script>