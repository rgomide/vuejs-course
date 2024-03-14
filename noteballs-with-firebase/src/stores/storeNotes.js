import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import { db } from '@/js/firebase'

import {
  onSnapshot,
  query,
  orderBy,
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore'

import { useStoreAuth } from './storeAuth'

let notesCollectionRef
let notesQuery

let getNotesSnapshot

export const useStoreNotes = defineStore('storeNotes', () => {

  const notes = ref([])
  const notesLoaded = ref(false)

  function init() {
    const storeAuth = useStoreAuth()

    notesCollectionRef = collection(db, 'users', storeAuth.loggedUser.id, 'notes')
    notesQuery = query(notesCollectionRef, orderBy('date', 'desc'))

    getNotes()
  }

  const totalOfNotes = computed(() => {
    return notes.value.length
  })
  const totalOfCharacters = computed(() => {
    return notes.value.reduce(
      (total, note) => {
        return total + note.content.length
      },
      0)
  })

  function clearNotes() {
    notes.value = []
    if (getNotesSnapshot) {
      getNotesSnapshot() // unsubscribe from any active listener
    }
  }

  async function getNotes() {
    getNotesSnapshot = onSnapshot(notesQuery, (querySnapshot) => {
      const loadedNotes = []
      querySnapshot.forEach((doc) => {
        const docData = doc.data()

        const note = {
          id: doc.id,
          content: docData.content,
          date: docData.date
        }

        loadedNotes.push(note)
      })

      notes.value = loadedNotes
      notesLoaded.value = true
    })
  }

  function getNote(noteId) {
    return notes.value.find(({ id }) => id == noteId)
  }

  async function updateNote({ id, content }) {
    await updateDoc(doc(notesCollectionRef, id), { content })
  }

  async function addNote(newNoteContent) {

    const currentDate = new Date().getTime()
    const date = currentDate.toString()

    const note = {
      content: newNoteContent,
      date: date
    }

    await addDoc(notesCollectionRef, note)
  }

  async function deleteNote(noteId) {
    await deleteDoc(doc(notesCollectionRef, noteId))
  }

  return {
    notes,
    notesLoaded,
    totalOfNotes,
    totalOfCharacters,
    init,
    clearNotes,
    getNotes,
    getNote,
    addNote,
    updateNote,
    deleteNote
  }
})