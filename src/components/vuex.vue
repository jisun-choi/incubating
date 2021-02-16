<template>
  <div class="vue">
<<<<<<< HEAD
    <h1>Vuex</h1>
    <div class="vue-image">
      <img src="https://www.venturesquare.net/wp-content/uploads/2019/03/hiver.jpg" />
    </div>
    <div class="vue-text">
      하이
      <!-- <p>{{ $store.state.personalData.occupation }}</p>
      <span>{{ $store.state.personalData.name }}</span>
      <span>{{ $store.state.personalData.age }}</span>-->
    </div>
=======
      <h1>Vuex</h1>
      <div class="vue-image">
        <img src="https://www.venturesquare.net/wp-content/uploads/2019/03/hiver.jpg">
      </div>
      <div class="vue-text">
        <p>{{ $store.state.personalData.occupation }}</p>
        <span>{{ $store.state.personalData.name }}</span>
        <span>{{ $store.state.personalData.age }}</span>

      </div>
>>>>>>> 8447ff9c0ca0fdc0ca26a28f3e4af444203bd531
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.vue {
  margin-top: 30px;
  margin-left: 30px;
  width: 250px;
  display: flex;
  flex-direction: column;
}

.title {
  font-weight: bold;
}

img {
  width: 300px;
}

.vue-image {
  border: 1px solid #ddd;
  border-bottom: none;
  margin-top: 20px;
  width: 300px;
}

.vue-text {
  border: 1px solid #ddd;
  border-top: none;
  width: 300px;
}

<<<<<<< HEAD
.personal-info {
  display: inline;
}

span {
  float: left;
  padding-left: 10px;
  padding-bottom: 15px;
  text-align: left;
}

p {
  padding-left: 10px;
  text-align: left;
  font-weight: bold;
}
</style>
=======
<style scoped>
.vue {
  margin-top:30px;
  margin-left:30px;
  width: 250px;
  display: flex;
  flex-direction: column;
}

.title {
  font-weight: bold;
}

img {
  width:300px;
}

.vue-image {
  border: 1px solid #ddd;
  border-bottom: none;
  margin-top:20px;
  width: 300px;
}

.vue-text {
  border: 1px solid #ddd;
  border-top: none;
  width: 300px;
}

.personal-info {
  display: inline;

}

span {
  float:left;
  padding-left:10px;
  padding-bottom: 15px;
  text-align: left;
}

p {
  padding-left:10px;
  text-align: left;
  font-weight: bold;
}
</style>
>>>>>>> 8447ff9c0ca0fdc0ca26a28f3e4af444203bd531
