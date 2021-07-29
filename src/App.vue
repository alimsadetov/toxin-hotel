<template>
  <TheHeader></TheHeader>
  <ThePrefooter></ThePrefooter>
  <TheFooter></TheFooter>
</template>
<script>

import TheHeader from './components/TheHeader.vue'
import ThePrefooter from './components/ThePrefooter.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  components: { TheHeader, ThePrefooter, TheFooter }
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
}

</style>
