<template>
  <div class="picking">
      <div class="title">Найдём номера под ваши пожелания</div>
      <datepicker v-model="picked" />
  </div>
</template>

<script>
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'

export default {
  components: { Datepicker },
  data () {
    return {
      picked: ref(new Date())
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/variables';

.picking {
    margin-top:70px;
    width: 380px;
    height: 374px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}
</style>
