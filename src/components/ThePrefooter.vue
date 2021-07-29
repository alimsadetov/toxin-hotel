<template>
  <div class="prefooter">
      <div class="container">
          <div class="content">
              <div class="content__toxin">
                  <div><img src="../assets/logo.svg" alt="logo" class="logo"><img src="../assets/TOXIN.svg" alt="toxin" class="toxin"></div>
                  <div class="best-hotel-text">Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»</div>
              </div>

              <div class="content__navigation">
                  <div class="fat">Навигация</div>
                  <div class="simple">О нас</div>
                  <div class="simple">Новости</div>
                  <div class="simple">Служба поддержки</div>
                  <div class="simple">Услуги</div>
              </div>

              <div class="content__about-us">
                  <div class="fat">О нас</div>
                  <div class="simple">О сервисе</div>
                  <div class="simple">Наша команда</div>
                  <div class="simple">Вакансии</div>
                  <div class="simple">Инвесторы</div>
              </div>

              <div class="content__service">
                  <div class="fat">Служба поддержки</div>
                  <div class="simple">Соглашения</div>
                  <div class="simple">Сообщества</div>
                  <div class="simple">Связь с нами</div>
              </div>

              <div class="content__sub">
                  <div class="fat">Подписка</div>
                  <div class="subscribe-please-text">Получайте специальные предложения и новости сервиса</div>
                  <div class="subscribe">
                      <input type="text" placeholder="Email"/>
                      <span>arrow_forward</span>
                  </div>
              </div>

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

.prefooter {
    height: 372px;
    background: #FFFFFF;
    box-shadow: 0px 1px 0px rgba(31, 32, 65, 0.1);

}

.content {
    display:flex;
    justify-content: space-between;
    margin-top:100px;
}

.content__toxin {
    display:flex;
    flex-wrap:nowrap;
    flex-direction:column;
    align-items: flex-start;
    gap:20px;
    width:23%;
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

.best-hotel-text {
    color:$dark75;
    @extend %body;
    display:inline;
}

.content__navigation, .content__about-us, .content__service, .content__sub {
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    align-items: flex-start;
    gap:21px;
}

.content__sub {
    width:25%;
}

.fat {
    @extend %h3;
    color:$dark100;
}

.simple {
    @extend %body;
    color:$dark50;
}

.subscribe-please-text {
    @extend %body;
    color:$dark75;
}

.subscribe {
    width:100%;
    position:relative;
}

input {
    position: absolute;
    height: 44px;
    width:100%;
    padding-left: 15px;
    background: #FFFFFF;
    border: 1px solid rgba(31, 32, 65, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
    color:$dark25;
    @extend %body;
}

span {
    position: absolute;
    height:44px;
    width:44px;
    left:255px;
    font-family: Material Icons;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    color:$purple;
    cursor:pointer;
}

.simple:hover {
    color:$dark75;
    cursor:pointer;
}
</style>
