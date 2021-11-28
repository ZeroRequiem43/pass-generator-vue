<template>
  <div class="notification" :class="{active: isActive}">
    <div class="notification__body">{{ text }}</div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Notification',
  setup() {
    const store = useStore()
    let text = computed(() => {
      return store.getters.getNotification
    })
    let isActive = computed(() => {
       return store.getters.getNotificationActive
    })

    return { text, isActive }
  }
}

</script>