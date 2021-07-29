<template>
  <div class="footer">
      <div class="container">
        <div class="content">
          <div class="copyright">Copyright © 2018 Toxin отель. Все права защищены.</div>
          <img src="../assets/twitter.svg" alt="twitter" class="logo">
          <img src="../assets/facebook.svg" alt="facebook" class="logo">
          <img src="../assets/instagram.svg" alt="instagram" class="logo">
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/variables';

.footer {
    margin-top: 1px;
    height: 70px;
    background: #FFFFFF;
    box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
}

.content {
  display: flex;
  justify-content:space-between;
}

.copyright {
  margin-top:26px;
  @extend %body;
  color:$dark75;
  width:85%;
}

.logo {
  padding-top:23px;
  width:24px;
  height:24px;
  color:$purple;
}

.logo:hover {
  opacity: 0.7;
  cursor:pointer;
}

</style>
