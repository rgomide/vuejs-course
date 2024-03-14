import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', () => {

  const notes = ref([
    {
      id: 'id1',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem fuga, unde accusantium repellat nulla, voluptas dolor reprehenderit natus ipsum autem deleniti quia odit veniam corporis ducimus distinctio facilis possimus dolorem?'
    },
    {
      id: 'id2',
      content: 'Shorter note!'
    }
  ])

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

  function getNote(noteId) {
    return notes.value.find(({ id }) => id == noteId)
  }

  function updateNote(updatedNote) {
    const index = notes.value.findIndex(({ id }) => id == updatedNote.id)
    if (index >= 0) {
      notes.value[index] = updatedNote
    }
  }

  function addNote(newNoteContent) {
    const currentDate = new Date().getTime()
    const id = currentDate.toString()

    const note = {
      id: id,
      content: newNoteContent
    }

    notes.value.unshift(note)
  }

  function deleteNote(noteId) {
    notes.value = notes.value.filter(({ id }) => id != noteId)
  }

  return { notes, totalOfNotes, totalOfCharacters, getNote, addNote, updateNote, deleteNote }
})