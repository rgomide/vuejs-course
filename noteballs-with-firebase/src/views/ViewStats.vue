<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Status</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ totalOfNotes }}</td>
        </tr>
        <tr>
          <td>Number of Character of all notes</td>
          <td>{{ totalOfCharacters }}</td>
        </tr>
      </tbody>
    </table>
    <input maxlength="50" type="text" class="input" placeholder="Do you love noteballs?" v-model="loveNoteballs" v-autofocus>
  </div>
</template>

<script setup>
/*
  imports
*/
import {ref } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'
import { useStoreNotes } from '@/stores/storeNotes'
import { useWatchCharacters } from '@/use/useWatchCharacters'

const {
  totalOfNotes,
  totalOfCharacters
} = useStoreNotes()

const loveNoteballs = ref('')
useWatchCharacters(loveNoteballs, 50)

</script>