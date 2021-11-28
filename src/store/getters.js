const getPassword = (state) => {
   return state.generatedPassword
}
const getCurrentLength = (state) => {
   return state.passLength
}
const getPassLength = (state) => {
   return state.generatedPassword.length
}
const isEmpty = (state) => {
   return state.options.empty
}
const getAlphabet = (state) => (name) => {
   return state.alphabet[name]
}
const getSplittedAlphabet = (state) => (name) => {
   return state.alphabet[name].split('')
}
const getNotification = (state) => {
   return state.notification
}
const getNotificationActive = (state) => {
   return state.notificationActive
}
const getAdviceStatus = (state) => {
   return state.advice.active
}
const getAdvice = (state) => {
   return state.advice.current
}



export default {
   getPassword,
   getCurrentLength,
   getPassLength,
   isEmpty,
   getAlphabet,
   getSplittedAlphabet,
   getNotification,
   getNotificationActive,
   getAdviceStatus,
   getAdvice
}