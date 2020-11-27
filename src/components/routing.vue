<template>
    <div>
        <button class="routingBtn" type="button" @click="directToHome">Home</button>
        <button class="routingBtn" type="button" @click="directToPrevious">Back</button>
        <button class="routingBtn" type="button" @click="directToNext">Next</button>
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
      this.$router.go(1)
    }
  }
}
</script>

<style scoped>
.routingBtn {
    font-weight:bold;
    margin: 50px 15px;
    padding: 10px 20px;
    background-color: lightgrey;
    border-radius: 9px;
    border:none;
}
</style>
