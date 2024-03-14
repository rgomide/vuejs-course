<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/editNote/${note.id}`" class="card-footer-item">Edit</RouterLink>
      <a @click.prevent="modals.deleteNote = true" href="#" class="card-footer-item">Delete</a>
    </footer>
    <ModalDeleteNote v-if="modals.deleteNote" v-model:isOpened="modals.deleteNote" @delete="deleteNote(note.id)" />
  </div>
</template>

<script setup>
/*
  imports
*/
import { computed, reactive } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue'

/*
  store
*/
const { deleteNote } = useStoreNotes()

/*
  character length
*/

const characterLength = computed(() => {
  const length = props.note.content.length
  const description = (length === 1) ? 'character' : 'characters'

  return `${length} ${description}`
})

/*
  props
*/

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

/*
  modals
*/
const modals = reactive({
  deleteNote: false
})

</script>