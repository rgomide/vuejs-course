<template>
  <!-- Dinamically send the inner content to body selector -->
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal">
      <h1>{{ props.title }} </h1>
      <slot />
      <button @click="handleButtonClick">Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>
// props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'No title specified'
  }
})

// emits
const emit = defineEmits(['hideModal', 'update:modelValue'])

// event to handle hide modal on parent component
// const handleButtonClick = () => {
//   console.log('handleButtonClick')
//   emit('hideModal')
// }


const handleButtonClick = () => {
  emit('update:modelValue', false)
}

</script>

<style>
.modal {
  background: beige;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>