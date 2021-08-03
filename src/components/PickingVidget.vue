<template>
  <div class="picking">
      <div class="title">Найдём номера под ваши пожелания</div>
      <div class="date">
        <div class="arrival-text">прибытие</div>
        <div class="checkout-text">выезд</div>
        <input type="date" class="arrival-date" placeholder="19.08.2034">
        <input type="date" class="checkout-date" placeholder="19.08.2034">
      </div>
      <div class="guests-text">гости</div>
      <input type="text" class="guests-dropdown" placeholder="Сколько гостей" readonly>
      <picking-vidget-dropdown></picking-vidget-dropdown>
      <router-link to="/rooms"><div class="button">подобрать номер</div></router-link>
  </div>
</template>

<script>
// import PickingVidgetDropdown from './PickingVidgetDropdown.vue'

export default {
  data () {
    return {
      picked: new Date()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/variables';

.picking {
    position:relative;
    margin-top:70px;
    padding:30px;
    width: 380px;
    height: 374px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}

.title {
  margin-top:10px;
  @extend %h1;
  color:$dark100;
}

.date {
  margin-top:21px;
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  justify-content:space-between;
}

.arrival-date {
  height: 44px;
  width:45%;
  background: #FFFFFF;
  border: 1px solid rgba(31, 32, 65, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  @extend %body;
}

.arrival-text {
  width:45%;
  @extend %h3;
  color:$dark100;
}

.checkout-date {
  height: 44px;
  width:45%;
  background: #FFFFFF;
  border: 1px solid rgba(31, 32, 65, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  @extend %body;
}

.checkout-text {
  width:45%;
  @extend %h3;
  color:$dark100;
}

.guests-text {
  margin-top:20px;
  @extend %h3;
  color:$dark100;
}

.guests-dropdown {
  margin-top:5px;
  height: 44px;
  width:100%;
  background: #FFFFFF;
  border: 1px solid $dark25;
  box-sizing: border-box;
  border-radius: 4px;
  @extend %body;
  color:$dark100;
  padding-left:15px;
}

.button {
  width:100%;
  height: 30px;
  margin-top: 31px;
  background: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);
  border-radius: 22px;
  @extend %h3;
  color:#FFFFFF;
  border-color:#FFFFFF;
  text-align:center;
  padding-top:14px;
}

.button:hover {
  opacity: 0.5;
  cursor:pointer;
}
</style>
