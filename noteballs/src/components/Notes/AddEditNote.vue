<template>
  <div class="p-4 mb-5" :class="`card has-background-${bgColor}-dark`">
    <label v-if="label" class="label has-text-white">
      {{ label }}
    </label>
    <div class="field">
      <div class="control">
        <textarea v-model="content" v-autofocus ref="textareaRef" class="textarea" :placeholder="placeholder"
          maxlength="100" />
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
import { vAutofocus } from '@/directives/vAutofocus'
/*
  models
*/
const content = defineModel('content', { required: true })

/*
  props
*/

const props = defineProps({
  bgColor: {
    type: String,
    default: 'success'
  },
  placeholder: {
    type: String,
    default: 'Type something...'
  },
  label: {
    type: String
  }
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