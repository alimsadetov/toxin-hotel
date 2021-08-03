<template>
  <div class="rooms">
      <div class="container">
          <Room v-for="i in 20" :key="i"></Room>
      </div>
  </div>
</template>

<script>
import Room from '../components/Room.vue'

export default {
  components: { Room }
}
</script>

<style lang="scss" scoped>
.rooms {
    height: 1385px;
}
</style>
