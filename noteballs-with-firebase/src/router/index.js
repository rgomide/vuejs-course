import { createRouter, createWebHashHistory } from 'vue-router'

import { useStoreAuth } from '@/stores/storeAuth'

import ViewNotes from '@/views/ViewNotes.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewAuth from '@/views/ViewAuth.vue'

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/auth',
    name: 'auth',
    component: ViewAuth
  },
  {
    path: '/editNote/:id',
    name: 'edit-notes',
    component: ViewEditNote
  },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStats
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from) => {
  const storeAuth = useStoreAuth()

  // await new Promise((resolve) => {
  //   if (storeAuth.loggedUser) return resolve()
  // })

  console.log(storeAuth.loggedUser)

  if (!storeAuth.loggedUser.id && to.name != 'auth') {
    return { name: 'auth' }
  }

  if (storeAuth.loggedUser.id && to.name == 'auth') {
    return false
  }
})

export default router