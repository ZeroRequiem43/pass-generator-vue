const generatePassword = ({ commit, getters, state }) => {
   const length = state.passLength
   const alphabet = getters.getAlphabet('selected')
   commit('generatePassword', { length, alphabet })
}
const deleteAlphabet = ({ commit, getters }, payload) => {
   const selected = getters.getSplittedAlphabet('selected')
   const deletedArr = getters.getSplittedAlphabet(payload)
   commit('deleteAlphabet', { selected, deletedArr })
}
const setCheckboxSettings = async ({ commit, dispatch, state }, payload) => {
   await commit('setOptions', { name: payload.name, value: payload.value })
   if (payload.value) {
      await commit('addAlphabet', state.alphabet[payload.name])
   } else {
      await dispatch('deleteAlphabet', payload.name)
   }
   if (state.passLength !== 0) {
      dispatch('generatePassword')
   }
}
const showNotification = ({ commit }, payload) => {
   commit('setNotification', payload)
   commit('setActiveNotification', true)
   setTimeout(() => {
      commit('setActiveNotification', false)
   }, 2500)
}

export default {
   generatePassword,
   deleteAlphabet,
   setCheckboxSettings,
   showNotification,
}