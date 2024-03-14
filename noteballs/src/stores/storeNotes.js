import { ref } from 'vue'
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
    notes.value = notes.value.filter(({ id }) => id !== noteId)
  }

  return { notes, addNote, deleteNote }
})