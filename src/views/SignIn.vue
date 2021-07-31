<template>
  <div class="sign-in">
      <div class="sign-in-background">
      <div class="container">
          <div class="cringy"></div>
          <SignIn></SignIn>
      </div>
      </div>
  </div>
</template>

<script>
import SignIn from '../components/SignInVidget.vue'

export default {
  components: { SignIn }
}
</script>

<style lang="scss" scoped>
.sign-in {
    height:830px;
}

.sign-in-background {
    height:830px;
    background: url('../assets/sign-in-background.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.cringy {
    margin-top:0;
    height:1px;
}

</style>
