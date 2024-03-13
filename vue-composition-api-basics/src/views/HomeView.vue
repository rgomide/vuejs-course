<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text" v-autofocus-global>
    </div>

  </div>
</template>

<!-- Composition API with script setup -->
<script setup>

// imports
import {
  ref,
  nextTick,
  reactive,
  computed,
  watch,
  onBeforeUnmount,
  onUnmounted,
  onMounted,
  onBeforeMount,
  onActivated,
  onDeactivated,
  onBeforeUpdate,
  onUpdated
} from 'vue'

import { vAutofocusGlobal } from '@/directives/vAutofocus'

// appTitle
const appTitle = 'My amazing counter app'

const appTitleRef = ref(null)

onMounted(() => {
  console.log(`The app title is ${appTitleRef.value.offsetWidth} px wide!`)
})

// counterData
const counterData = reactive({
  count: 0,
  title: 'My counter'
})

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

// directives
const vAutofocus = {
  mounted: (el) => {
    el.focus()
  }
}

// Hooks

// Updated Hooks
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})
onUpdated(() => {
  console.log('onUpdated')
})

// Mounted Hooks
onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})
onUnmounted(() => {
  console.log('onUnmounted')
})

// Activated Hooks
onActivated(() => {
  console.log('onActivated')
})
onDeactivated(() => {
  console.log('onDeactivated')
})

</script>


<!-- Composition API function setup
<script>

import { ref } from 'vue'

export default {
  setup() {
    const counter = ref(0)

    const increaseCounter = () => {
      counter.value++
    }

    const decreaseCounter = () => {
      counter.value--
    }

    return {
      counter,
      increaseCounter,
      decreaseCounter
    }
  }
}

</script> 
-->

<!-- 
  Options API
  <script>

export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter() {
      this.counter++
    },
    decreaseCounter() {
      this.counter--
    }
  }
}

</script> 
-->

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>