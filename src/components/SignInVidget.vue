<template>
  <div class="sign-in">
      <form>
      <div class="title">Войти</div>
      <input type="email" class="email" placeholder="Email">
      <input type="password" class="password" placeholder="Пароль">
      <div class="button">Войти</div>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/variables';

.sign-in {
    width: 380px;
    height: 350px;
    padding:30px;
    padding-top:40px;
    margin:0 auto;
    margin-top:172px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}

.title {
    @extend %h1;
    color:$dark100;
}

.email {
    height: 44px;
    margin-top:30px;
    width:100%;
    background: #FFFFFF;
    border: 1px solid rgba(31, 32, 65, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
    @extend %body;
    color:$dark75;
    padding-left:15px;
}

.password {
    height: 44px;
    margin-top:20px;
    width:100%;
    background: #FFFFFF;
    border: 1px solid rgba(31, 32, 65, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
    @extend %body;
    color:$dark75;
    padding-left:15px;
}

.button {
    height: 30px;
    width:100%;
    margin-top: 30px;
    background: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);
    border-radius: 22px;
    text-align:center;
    @extend %h3;
    color:#FFFFFF;
    padding-top:14px;
}

.button:hover {
    opacity:0.5;
    cursor:pointer;
}
</style>
