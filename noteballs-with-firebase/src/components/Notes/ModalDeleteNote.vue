<template>
  <div class="modal p-2" :class="{ 'is-active': isOpened }">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="closeModal">Cancel</button>
        <button class="button is-danger" @click="deleteClicked">Delete</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside, onKeyStroke } from '@vueuse/core'

const modalCardRef = ref(null)

const isOpened = defineModel('isOpened', { required: true })

const closeModal = () => {
  isOpened.value = false
}

const emit = defineEmits(['delete'])

onClickOutside(modalCardRef, closeModal)

/*
  keyboard control
*/
onKeyStroke('Escape', () => {
  closeModal()
})

const deleteClicked = () => {
  emit('delete')
}

</script>