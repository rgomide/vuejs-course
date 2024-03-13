<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3>{{ counter.title }}</h3>
    <div>
      <button @click="counter.decreaseCounter(2)" class="btn">--</button>
      <button @click="counter.decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button @click="counter.increaseCounter(1)" class="btn">+</button>
      <button @click="counter.increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ counter.oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-model="counter.title" v-autofocus-global>
    </div>

  </div>
</template>

<!-- Composition API with script setup -->
<script setup>

// imports
import {
  ref,
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
import { useCounterStore } from '@/stores/counter'

// appTitle
const appTitle = 'My amazing counter app'

const appTitleRef = ref(null)

onMounted(() => {
  console.log(`The app title is ${appTitleRef.value.offsetWidth} px wide!`)
})

// counter
const counter = useCounterStore()


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