<template>
  <div class="post-detail">
    <h1>This is a post page</h1>
    <p>Display post with id: <span class="bold">{{ $route.params.id }}</span></p>
    <div>
      <button @click="showPostId">Show post id</button>
    </div>
    <div>
      <button @click="goHomeIn3Seconds">Go home in 3 seconds</button>
    </div>
    <div>
      <button @click="goToFirstPost">Go to first post</button>
    </div>
    <RouterLink to="/posts">&lt; Back</RouterLink>
  </div>
</template>

<script setup>

import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const showPostId = () => {
  alert(`The id of this post id ${route.params.id}`)
}

const goToFirstPost = () => {
  router.push({
    name: 'postDetail',
    params: {
      id: 1
    }
  })
}

const goHomeIn3Seconds = () => {
  setTimeout(() => {
    router.push('/')
  }, 3000);
}

</script>

<style scoped>
.bold {
  font-weight: bold;
}
</style>
