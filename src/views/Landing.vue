<template>
  <div class="landing">
      <div class="landing-background">
      <div class="container">
          <div class="cringy"></div>
          <Picking></Picking>
      </div>
      </div>
  </div>
</template>

<script>
import Picking from '../components/Picking.vue'

export default {
  components: { Picking }
}
</script>

<style lang="scss" scoped>
.landing {
    height:830px;
}

.landing-background {
    height:830px;
    background: url('../assets/landing-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment:fixed;
}

.cringy {
    margin-top:0;
    height:1px;
}
</style>
