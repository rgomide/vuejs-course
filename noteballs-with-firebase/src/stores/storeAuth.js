import { ref } from 'vue'
import { defineStore } from 'pinia'

import { auth } from '@/js/firebase'
import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'

import { useStoreNotes } from './storeNotes'

export const useStoreAuth = defineStore('storeAuth', () => {

  const loggedUser = ref({})

  function init() {
    const storeNotes = useStoreNotes()

    onAuthStateChanged(auth, (user) => {
      if (user) {
        loggedUser.value = { id: user.uid, email: user.email }
        this.router.push('/')

        storeNotes.init()
      } else {
        loggedUser.value = {}
        this.router.replace('/auth')

        storeNotes.clearNotes()
      }
    })
  }

  function registerUser({ email, password }) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => { })
      .catch((error) => {
        console.log(error.message)
      })
  }

  function loginUser({ email, password }) {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user
    }).catch((error) => {
      console.log('error:', error.message)
    })
  }

  function logoutUser() {
    signOut(auth)
      .then(() => { })
      .catch((error) => {
        console.log(error.message)
      })
  }

  return {
    loggedUser,
    registerUser,
    logoutUser,
    loginUser,
    init
  }
})