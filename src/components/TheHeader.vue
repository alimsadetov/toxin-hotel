<template>

<div class="header">
    <div class="container">
      <img src="../assets/logo.svg" alt="logo" class="logo">
      <img src="../assets/TOXIN.svg" alt="toxin" class="toxin">

      <div class="navbar">
          <div class="simple">О нас</div>
          <div class="expandable">Услуги<span>expand_more</span></div>
          <div class="simple">Вакансии</div>
          <div class="simple">Новости</div>
          <div class="expandable">Соглашения<span>expand_more</span></div>
          <button class="sign-in">Войти</button>
        <button class="registration">Зарегистрироваться</button>
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
@import '../assets/variables';
.header {
    height: 70px;
    background: #FFFFFF;
    box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
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
    margin-left:400px;
    margin-right:0px;
    display:flex;
    justify-content: space-between;
}

.simple, .expandable {
    @extend %body;
    margin-top: 24px;
    color:$dark50;
}

.expandable {
    display:flex;
}

.sign-in {
    width: 87px;
    height: 34px;
    margin-top: 18px;
    border-radius: 22px;
    border: 2px solid;
    border-color: $purple;
    float:right;
    background-color: #FFFFFF;
    @extend %h3;
    color:$purple;
}

.sign-in:hover, .registration:hover {
    opacity: 0.5;
    cursor:pointer;
}

.registration {
    width: 196px;
    height: 34px;
    margin-top: 18px;
    background: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);
    border-radius: 22px;
    border-color:$purple;
    color:#FFFFFF;
    @extend %h3;
}

span {
    font-family: Material Icons;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 20px;
/* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;
    margin-top:-3px;
}

span:hover, .simple:hover, .expandable:hover {
    color:$dark100;
    cursor:pointer;
}
</style>
