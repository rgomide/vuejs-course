<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>
        show dark modals?
        <input type="checkbox" v-model="showDarkModals">

      </label>
    </div>
    <pre>{{ showDarkModals }}</pre>
    <button @click="showModal = true">Show modal</button>
    <component v-model="showModal" :is="showDarkModals ? ModalDark : Modal" title="My modal title (via prop)"
      @hideModal="showModal = false">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum ea maxime a repudiandae nam sapiente
        temporibus reiciendis veritatis beatae eius quaerat officia ad ex, provident neque eaque minus numquam non!
      </p>
    </component>
  </div>
</template>

<script setup>

// imports
import { ref } from 'vue'
import Modal from '../components/Modal.vue'
import ModalDark from '../components/ModalDark.vue'

// modals
const showDarkModals = ref(false)
const showModal = ref(false)

</script>