<template>

<div class="header">
    <div class="container">
      <img src="../assets/logo.svg" alt="logo" class="logo">
      <img src="../assets/TOXIN.svg" alt="toxin" class="toxin">

      <div class="navbar">
          <div class="simple">О нас</div>
          <div class="expandable">Услуги</div>
          <div class="simple">Вакансии</div>
          <div class="simple">Новости</div>
          <div class="expandable">Соглашения</div>
      </div>

      <div class="auth"></div>
    </div>
</div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
    height: 70px;
}

.logo {
    margin-top: 15px;
    float: left;
}

.toxin {
    margin-top:28.3px;
    margin-left: 10px;
    float:left;
}
.navbar {
    float:right;
}

.simple {
    @extend %body !optional;
    margin-top: 26px;
}
</style>
