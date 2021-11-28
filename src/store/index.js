import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const store = createStore({
   state: {
      generatedPassword: '',
      passLength: 0,
      notification: '',
      notificationActive: false,
      alphabet: {
         upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
         lowerCase: 'abcdefghijklmnopqrstuvwxyz',
         numbers: '0123456789',
         symbols: `!"#$%&'()*+,-./:;=?[]^_~\``,
         selected: ''
      },
      options: {
         empty: true,
         upperCase: false,
         lowerCase: false,
         numbers: false,
         symbols: false
      },
      advice: {
         active: false,
         current: '',
         messages: {
            bad: 'Слабый пароль',
            medium: 'Средний пароль',
            strong: 'Сильный пароль',
            perfect: 'Отличный пароль'
         }
      }
   },
   mutations,
   actions,
   getters
})

export default store