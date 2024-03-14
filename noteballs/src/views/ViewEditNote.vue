<template>
  <div class="edit-note">
    <AddEditNote v-model:content="note.content" label="Edit Note" placeholder="Edit note" bgColor="link"
      ref="addEditNoteRef">
      <template #buttons>
        <button @click="$router.back()" class="button is-link is-light mr-2">Cancel</button>
        <button @click="saveClicked" :disabled="!note.content" class="button is-link has-background-link">Save
          Note</button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
/* 
  imports
*/
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'

/*
  note
*/

const { getNote, updateNote } = useStoreNotes()

const route = useRoute()
const router = useRouter()
const note = getNote(route.params.id)

/*
  save clicked
*/
const saveClicked = () => {
  updateNote(note)
  
  router.back()
}

</script>