import {
  nextTick,
  reactive,
  computed,
  watch
} from 'vue'


// keep this reactive object outside to have a global value
const counterData = reactive({
  count: 0,
  title: 'My counter'
})

export function useCounter() {

  watch(() => counterData.count, (newCount, oldCount) => {
    if (newCount === 20) {
      alert('way to go! you made it to 20!')
    }
  })

  const oddOrEven = computed(() => {
    return (counterData.count % 2 === 0) ? 'even' : 'odd'
  })

  const increaseCounter = async (amount, e) => {
    console.log(e)
    counterData.count += amount
    await nextTick()
    console.log('Next tick after DOM update')
  }

  const decreaseCounter = (amount) => {
    counterData.count -= amount
  }

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter
  }
}