import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0)
  const title = ref('My counter title')

  // getters
  const oddOrEven = computed(() => {
    return (count.value % 2 === 0) ? 'even' : 'odd'
  })

  // actions
  function increaseCounter(amount) {
    count.value += amount
  }
  function decreaseCounter(amount) {
    count.value -= amount
  }

  return { count, title, oddOrEven, increaseCounter, decreaseCounter }
})
