<template>
  <div class="sign-in-vidget">
      <form>
      <div class="title">Войти</div>
      <input type="email" class="email" placeholder="Email или имя пользователя" v-model="email">
      <div class="error-two" v-if="!validtwo">Длина вашего Email не может превышать 30 символов</div>
      <input type="password" class="password" placeholder="Пароль" v-model="password">
      <div class="error" v-if="!valid">Пожалуйста, заполните все поля</div>
      <div class="button" @click.prevent="validation(email, password)">Войти</div>
      </form>
  </div>
</template>

<script>
export default {
  inject: ['addUser'],
  data () {
    return {
      email: '',
      password: '',
      valid: true,
      validtwo: true
    }
  },
  methods: {
    validation (email, password) {
      if (this.email === '' || this.password === '') {
        this.valid = false
        return false
      };
      if (this.email.length >= 30) {
        this.validtwo = false
        console.log(this.validtwo)
        return false
      }
      this.valid = true
      this.addUser(email, password)
      // this.$router.push('/main')
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/variables';

.sign-in-vidget {
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

.error {
    @extend %body;
    color:$dark75;
    margin-top:10px;
}

.error-two {
    @extend %body;
    color:$dark75;
    margin-top:10px;
}
</style>
