<template>
  <div class="auth">
    <div class="tabs">
      <ul>
        <li :class="{ 'is-active': !register }"><a @click.prevent="register = false">Login</a></li>
        <li :class="{ 'is-active': register }"><a @click.prevent="register = true">Register</a></li>
      </ul>
    </div>
    <div class="card auth-form">
      <div class="card-content">
        <div class="title has-text-centered">
          {{ formTitle }}
        </div>

        <form>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input v-model="credentials.email" class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input v-model="credentials.password" class="input" type="password" placeholder="Enter a password">
            </div>
          </div>
          <div class="field is-grouped is-grouped-right">
            <div class="control">
              <button type="button" @click="onSubmit" class="button is-primary" :disabled="!isCredentialsValid">{{
          formTitle }}</button>
            </div>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/
import { computed, ref, reactive } from 'vue'
import { useStoreAuth } from '@/stores/storeAuth';

/*
  store auth
*/
const storeAuth = useStoreAuth()

const register = ref(false)

/*
  form title
*/
const formTitle = computed(() => {
  return register.value ? 'Register' : 'Login'
})

/*
  credentials
*/
const credentials = reactive({
  email: '',
  password: ''
})

const isCredentialsValid = computed(() => {
  return credentials.email !== '' && credentials.password !== ''
})

/*
  submit
*/
const onSubmit = () => {
  if (!isCredentialsValid) { return }

  if (register.value) {
    storeAuth.registerUser(credentials)
  } else {
    storeAuth.loginUser(credentials)
  }
}


</script>

<style>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>