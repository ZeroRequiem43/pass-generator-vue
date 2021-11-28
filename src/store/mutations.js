const incrementPassLength = (state) => {
   state.passLength++
}
const decrementPassLength = (state) => {
   state.passLength--
}
const setPassLength = (state, payload) => {
   state.passLength = payload
}
const setOptions = (state, payload) => {
   state.options[payload.name] = payload.value
}
const setEmpty = (state, payload) => {
   state.options.empty = payload
}
const addAlphabet = (state, payload) => {
   state.alphabet.selected = state.alphabet.selected + payload
}
const deleteAlphabet = (state, payload) => {
   return state.alphabet.selected = (payload.selected.filter(i => !payload.deletedArr.includes(i))).join('')
}
const generatePassword = (state, payload) => {
   let pass = ''
   for (let i = 0; i < payload.length; i++) {
      pass += payload.alphabet.charAt(Math.floor(Math.random() * payload.alphabet.length))
   }
   return state.generatedPassword = pass
}
const setNotification = (state, payload) => {
   return state.notification = payload
}
const setActiveNotification = (state, payload) => {
   return state.notificationActive = payload
}
const setAdviceActive = (state, payload) => {
   return state.advice.active = payload
}
const setAdviceCurrent = (state, payload) => {
   return state.advice.current = payload
}

export default {
   incrementPassLength,
   decrementPassLength,
   setPassLength,
   setOptions,
   setEmpty,
   addAlphabet,
   deleteAlphabet,
   generatePassword,
   setNotification,
   setActiveNotification,
   setAdviceActive,
   setAdviceCurrent
}