<template>
  <TheHeader></TheHeader>
</template>
<script>
import TheHeader from './components/TheHeader.vue'
export default {
  components: { TheHeader }
}
</script>
<style lang="scss">
body, html {
  padding: 0;
  margin: 0;
}
.container {
  max-width:1160px;
  margin:0 auto;
}
</style>
