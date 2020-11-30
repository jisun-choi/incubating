<template>
  <div id="ref">
      <input type="text" class="ref-input" ref="inputNameInfo" placeholder="이름" v-model="inputName">
      <input type="text" class="ref-input" ref="inputAgeInfo" placeholder="나이" v-model="inputAge">
      <input type="text" class="ref-input" ref="inputOccupationInfo" placeholder="직업" v-model="inputOccupation">
      <button class="ref-btn" type="button" @click="readRefs">확인</button>
  </div>
</template>

<script>
export default {
  methods: {
    readRefs () {
      if (!this.inputName) {
        this.$refs.inputNameInfo.focus()
      } else if (!this.inputAge) {
        this.$refs.inputAgeInfo.focus()
      } else if (!this.inputOccupation) {
        this.$refs.inputOccupationInfo.focus()
      } else {
        alert('모두 입력되었습니다.')
      }
    }
  }
}
</script>

<style scoped>
#ref {
    margin-top:30px;
    width: 250px;
    display: flex;
    flex-direction: column;
}

.refBtn {
    margin: 6px;
    font-weight:bold;
    padding: 6px;
    background-color:#FF204B;
    color:white;
    border-radius: 5px;
    border:none;
}

.ref-input {
    padding:2px 8px;
    border-radius: 5px;
    border:1px solid #ddd;
    margin:6px;
    height:25px;
}
</style>
