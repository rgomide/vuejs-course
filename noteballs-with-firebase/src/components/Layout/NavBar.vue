<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <RouterLink to="/" class="navbar-item is-size-4 is-family-monospace">
          Noteballs
        </RouterLink>

        <a @click.prevent="showMobileNav = !showMobileNav" role="button" class="navbar-burger"
          :class="{ 'is-active': showMobileNav }" aria-label="menu" aria-expanded="false"
          data-target="navbarBasicExample" ref="navbarBurgerRef">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" ref="navbarMenuRef" class="navbar-menu" :class="{ 'is-active': showMobileNav }">
        <div class="navbar-start">
          <button v-if="storeAuth.loggedUser.id" @click="onLogout" class="button is-small is-info mt-3 ml-3">
            Log out - {{ storeAuth.loggedUser.email }}
          </button>
        </div>
        <div class="navbar-end">
          <RouterLink @click="showMobileNav = false" to="/" class="navbar-item" active-class="is-active"> Home
          </RouterLink>
          <RouterLink @click="showMobileNav = false" to="/stats" class="navbar-item"> Stats </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
/*
  imports
*/
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useStoreAuth } from '@/stores/storeAuth';

/*
  store auth
*/
const storeAuth = useStoreAuth()

/*
  mobile nav
*/

const showMobileNav = ref(false)

/*
  click outside to close
*/
const navbarMenuRef = ref(null)
const navbarBurgerRef = ref(null)

onClickOutside(navbarMenuRef, () => {
  showMobileNav.value = false
}, {
  ignore: [navbarBurgerRef]
})

const onLogout = () => {
  showMobileNav.value = false
  storeAuth.logoutUser()
}

</script>

<style>
@media(max-width: 1024px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>