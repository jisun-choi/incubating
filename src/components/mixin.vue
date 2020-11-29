<template>
  <div id="mixin" @click="cardClick()">
    <div class="mixinImage">
      <img :src =brandi.imgSrc />
    </div>
    <div class="mixinText">
      <p id='title'>{{ brandi.titleData }}</p>
      <p>{{ brandi.text }}</p>
    </div>
  </div>
</template>

<script>
import mixin from '../mixins/mixin.js'

export default {
  mixins: [mixin]
}
</script>

<style scoped>
#mixin {
  margin-top:30px;
  margin-left:30px;
  width: 250px;
  display: flex;
  flex-direction: column;
}

#title {
  font-weight: bold;
}

img {
  width:300px;
}

.mixinImage {
  border: 1px solid #ddd;
  border-bottom: none;
  margin-top:20px;
  width: 300px;
}

.mixinText {
  border: 1px solid #ddd;
  border-top: none;
  width: 300px;
}

img {
  width: 300px;
}

p {
  padding-left:10px;
  text-align: left;
}
</style>
