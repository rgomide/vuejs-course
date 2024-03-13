<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <Modal v-model="showModal" title="My modal title (via prop)" @hideModal="showModal = false">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum ea maxime a repudiandae nam sapiente
        temporibus reiciendis veritatis beatae eius quaerat officia ad ex, provident neque eaque minus numquam non!
      </p>
    </Modal>
  </div>
</template>

<script setup>

// imports
import { ref } from 'vue'
import Modal from '../components/Modal.vue'

// modals
const showModal = ref(false)

</script>