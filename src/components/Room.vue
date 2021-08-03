<template>
  <div class="room">
      <img :src="randomPhoto()" alt="room" class="photo">
  </div>
</template>

<script>
export default {
  methods: {
    randomPhoto () {
      const random = Math.floor(Math.random() * (12 - 1 + 1)) + 1
      return `../assets/${random}.png`
    }
  }
}
</script>

<style lang="scss" scoped>
.room {
    width: 270px;
    height: 257px;
    background: #FFFFFF;
    box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
    border-radius: 4px;
}

.photo {
    width:100%;
    height:130px;
}

</style>
