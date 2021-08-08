<template>
  <TheHeader :username="user.email"></TheHeader>
  <router-view></router-view>
  <ThePrefooter></ThePrefooter>
  <TheFooter></TheFooter>
</template>
<script>

import TheHeader from './components/TheHeader.vue'
import ThePrefooter from './components/ThePrefooter.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  components: { TheHeader, ThePrefooter, TheFooter },
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    addUser (email, password) {
      this.user.email = email
      this.user.password = password
      console.log(this.user.email)
    },
    isAuthored () {
      return this.user.email
    }
  },
  provide () {
    return {
      addUser: this.addUser,
      isAuthored: this.isAuthored
    }
  }
}

</script>

<style lang="scss">

@import 'assets/variables';

body, html {
  padding: 0;
  margin: 0;
}
.container {
  max-width:1160px;
  margin:0 auto;
  padding:0 5px;
}

</style>
