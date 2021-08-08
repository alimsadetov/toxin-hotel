<template>
  <div class="rooms">
      <div class="container">
        <div class="title">Номера, которые мы для вас подобрали</div>
        <div class="allrooms">
          <Room v-for="i in 20" :key="i"></Room>
        </div>
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
@import '../assets/variables';
.title {
  @extend %h1;
  margin-top:30px;
  color:$dark100;
  text-align:center;
}

.allrooms {
  text-align:center;
  margin-top:21px;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap:20px;
  grid-row-gap:60px;
}

@media (max-width:1190px) {
  .allrooms {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width:870px) {
  .allrooms {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width:590px) {
  .allrooms {
    grid-template-columns: 1fr;
  }
}
</style>
