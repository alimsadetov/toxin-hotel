<template>
  <div class="roomreview">
      <img :src="require(`../assets/${$route.params.photo}.svg`)" alt="photo" class="photo">
      <div class="container">
          <div class="content">
              <div class="reviews">Отзывы
                  <div class="add-review">
                      <textarea class="add-review-text" autofocus="" v-model="activeComment" />
                      <div class="button-add-review" @click.prevent="addComment()">Добавить отзыв</div>
                  </div>
                  <div class="comments">
                      <div class="comment" v-for="i in comments" :key="i">
                          <div class="comment__usesrname">{{ i.username }}</div>
                          <div class="comment__comment">{{ i.comment }}</div>
                      </div>
                  </div>
              </div>
              <div class="roombooking">
                  <div class="nomer">№ {{ $route.params.id }}</div>
                  <div class="cost">{{ $route.params.cost }}₽ в сутки</div>
                  <div class="arrive__text">прибытие</div>
                  <div class="checkout__text">выезд</div>
                  <input type="date" class="arrival-date" placeholder="19.08.2034" v-model="date1">
                  <input type="date" class="checkout-date" placeholder="19.08.2034" v-model="date2">
                  <div class="guests__text">гости</div>
                  <input type="number" class="guests" placeholder="2">
                  <div class="calculating">{{ $route.params.cost }}₽ х {{ getDateDiff() }} суток</div>
                  <div class="calculating__sum">{{ $route.params.cost * getDateDiff() }}₽</div>
                  <div class="skidka">Скидка</div>
                  <div class="skidka__sum">0₽</div>
                  <div class="itogo">Итого</div>
                  <div class="itogo__sum">{{ $route.params.cost * getDateDiff() }}₽</div>
                  <div class="button" @click.prevent="bron()">забронировать</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  inject: ['isAuthored'],
  data () {
    return {
      date1: '2021-05-08',
      date2: '2021-05-27',
      comments: [],
      activeComment: ''
    }
  },
  methods: {
    getDateDiff () {
      const dateArr = this.date1.split('-')
      const dateCheckout = this.date2.split('-')
      const days = ((dateCheckout[0] - dateArr[0]) * 365) + ((dateCheckout[1] - dateArr[1]) * 30) + ((dateCheckout[2] - dateArr[2]))
      return days
    },
    addComment () {
      if (this.isAuthored() !== '') {
        this.comments.push({
          username: this.isAuthored(),
          comment: this.activeComment
        })
        this.activeComment = ''
      };
      if (this.isAuthored() === '') {
        this.$router.push('/signin')
      }
    },
    bron () {
      alert('Спасибо за выбор нашего отеля!')
      this.$router.push('/main')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/variables';
.photo{
    width:100%;
    height:485px;
}

.content {
    display:flex;
    justify-content: space-between;
    padding-top:70px;
    gap:5px;
}

.reviews {
    width:60%;
}

.roombooking {
    position:relative;
    width: 380px;
    height: 467px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}

.nomer {
    position: absolute;
    left: 30px;
    top: 40px;
    @extend %h1;
    color: #1F2041;
}

.cost {
    position: absolute;
    left: 250px;
    top: 45px;
    @extend %body;
    color: rgba(31, 32, 65, 0.5);
}

.arrive__text {
position: absolute;
left: 30px;
top: 90px;
@extend %h3;
color: #1F2041;
}

.checkout__text {
position: absolute;
left: 200px;
top: 90px;
@extend %h3;
color: #1F2041;
}

.arrival-date {
    position: absolute;
    width: 150px;
    height: 44px;
    left: 30px;
    top: 110.44px;
    background: #FFFFFF;
    border: 1px solid rgba(31, 32, 65, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
    @extend %body;
}

.checkout-date {
    position: absolute;
    width: 150px;
    height: 44px;
    left: 200px;
    top: 110.44px;
    background: #FFFFFF;
    border: 1px solid rgba(31, 32, 65, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
    @extend %body;
}

.guests__text {
position: absolute;
left: 30px;
top: 175px;
@extend %h3;
color: #1F2041;
}

.guests {
    position: absolute;
    width: 320px;
    height: 44px;
    left: 30px;
    top: 195px;
    background: #FFFFFF;
    border: 1px solid rgba(31, 32, 65, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
    @extend %body;
}

.calculating {
    position: absolute;
    height: 24px;
    left: 30px;
    top: 259.56px;
    @extend %body;
    color: rgba(31, 32, 65, 0.75);
}

.calculating__sum {
    position: absolute;
    height: 24px;
    left: 293px;
    top: 259.56px;
    @extend %body;
    color: rgba(31, 32, 65, 0.75);
}

.skidka {
    position: absolute;
    height: 24px;
    left: 30px;
    top: 293.56px;
    @extend %body;
    color: rgba(31, 32, 65, 0.75);
}

.skidka__sum {
    position: absolute;
    height: 24px;
    left: 330px;
    top: 293.56px;
    @extend %body;
    color: rgba(31, 32, 65, 0.75);
}

.itogo {
    position: absolute;
    height: 24px;
    left: 30px;
    top: 330.56px;
    @extend %h1;
    color: $dark100;
}

.itogo__sum {
    position: absolute;
    height: 24px;
    left: 250px;
    top: 330.56px;
    @extend %h1;
    color: $dark100;
}

.button {
    position: absolute;
    width: 320px;
    height: 30px;
    left: 30px;
    top: 380.56px;
    background: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);
    border-radius: 22px;
    @extend %h3;
    color:#FFFFFF;
    text-align:center;
    padding-top:14px;
}

.button:hover {
    opacity:0.5;
    cursor:pointer;
}

.reviews {
    @extend %h1;
}

.comment {
    padding:15px;
    margin-top:30px;
    width: 100%;
    border-radius: 22px;
    border-radius: 22px;
    border: 2px solid;
    border-color: $purple;
    background-color: #FFFFFF;
}

.add-review {
    margin-top:30px;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid rgba(150, 139, 139, 0.12);
    box-sizing: border-box;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding:15px;
}

textarea {
    width:100%;
    height:60px;
    resize:none;
    background-color: #f8f8ff;
    border:0.5px solid #a8a8a8;
    font-size:20px;
}

.button-add-review {
    width: 40%;
    height: 30px;
    margin-top: 5px;
    background: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);
    border-radius: 22px;
    @extend %h3;
    color:#FFFFFF;
    text-align:center;
    padding-top:14px;
}

.button-add-review:hover {
    cursor:pointer;
    opacity:0.5;
}

.comment__usesrname {
    color:$purple;
    @extend %body;
}

.comment__comment {
    @extend %body;
    margin-top:20px;
    word-break:break-all;
}
</style>
