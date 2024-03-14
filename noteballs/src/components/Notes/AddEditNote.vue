<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea v-model="content" ref="textareaRef" class="textarea" placeholder="Add a new note" />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from 'vue'
/*
  models
*/
const content = defineModel('content', { required: true })

/*
  props
*/

const props = defineProps({

})

/*
  emits
*/
const emit = defineEmits(['update:modelValue'])

/*
  focust textarea
*/

const textareaRef = ref(null)

const focusTextarea = () => {
  textareaRef.value.focus()
}

defineExpose({
  focusTextarea
})

</script>