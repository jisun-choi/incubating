<template>
    <div>
        <button id="routingBtn" type="button" @click="directToHome">Home</button>
        <button id="routingBtn" type="button" @click="directToPrevious">Back</button>
        <button id="routingBtn" type="button" @click="directToNext">Next</button>
    </div>

</template>

<script>
export default {
  methods: {
    directToHome () {
      this.$router.push({ path: '/' })
    },
    directToPrevious () {
      this.$router.go(-1)
    },
    directToNext () {
    //   this.$router.go(1)
      this.$router.push({ path: '/vuex' })
    }
  }
}
</script>

<style>
#routingBtn {
    font-weight:bold;
    margin: 50px 15px;
    padding: 10px 20px;
    background-color: lightgrey;
    border-radius: 9px;
    border:none;
}
</style>
