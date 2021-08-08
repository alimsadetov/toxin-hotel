<template>
  <div class="room" @click="$router.push(`/room/${id}/${photo}/${cost}`)">
      <img :src="randomPhoto()" alt="room" class="photo">
      <div class="nomer">№ {{ id }}</div>
      <div class="cost">{{ cost }}₽ в сутки</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: Math.floor(Math.random() * 945) + 1,
      photo: Math.floor(Math.random() * (12)) + 1,
      cost: Math.floor(Math.random() * 25000) + 3000
    }
  },
  methods: {
    randomPhoto () {
      const random = this.photo
      return require(`../assets/${random}.svg`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/variables';
.room {
    width: 270px;
    height: 220px;
    background: #FFFFFF;
    box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
    border-radius: 4px;
    position:relative;
    margin:0 auto;
}

.room:hover {
  cursor:pointer;
}

.photo {
    width:100%;
    height:130px;
}

.nomer {
  position: absolute;
  left: 20px;
  top: 171px;
  @extend %h1;
  color: #1F2041;
}

.cost {
  position: absolute;
  left: 153px;
  top: 175px;
  @extend %body;
  color:$dark50;
}

</style>
