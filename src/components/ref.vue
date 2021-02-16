<template>
  <div id="ref">
<<<<<<< HEAD
    <input type="text" class="ref-input" ref="inputNameInfo" placeholder="이름" v-model="inputName" />
    <input type="text" class="ref-input" ref="inputAgeInfo" placeholder="나이" v-model="inputAge" />
    <input
      type="text"
      class="ref-input"
      ref="inputOccupationInfo"
      placeholder="직업"
      v-model="inputOccupation"
    />
=======
    <input type="text" class="ref-input" ref="inputNameInfo" placeholder="이름" v-model="inputName">
    <input type="text" class="ref-input" ref="inputAgeInfo" placeholder="나이" v-model="inputAge">
    <input type="text" class="ref-input" ref="inputOccupationInfo" placeholder="직업" v-model="inputOccupation">
>>>>>>> 8447ff9c0ca0fdc0ca26a28f3e4af444203bd531
    <button class="ref-btn" type="button" @click="readRefs">확인</button>
    <vuex></vuex>
  </div>
</template>

<script>
<<<<<<< HEAD
import Vuex from "./vuex.vue";
=======
import Vuex from './vuex.vue'
>>>>>>> 8447ff9c0ca0fdc0ca26a28f3e4af444203bd531

export default {
  name: "ref",
  components: {
    Vuex
  },
  data() {
    return {
<<<<<<< HEAD
      inputName: "",
      inputAge: "",
      inputOccupation: "",
      inputData: {}
    };
=======
      inputName: '',
      inputAge: '',
      inputOccupation:'',
      inputData: {}
    }
>>>>>>> 8447ff9c0ca0fdc0ca26a28f3e4af444203bd531
  },
  methods: {
    readRefs() {
      if (!this.inputName) {
        this.$refs.inputNameInfo.focus();
      } else if (!this.inputAge) {
        this.$refs.inputAgeInfo.focus();
      } else if (!this.inputOccupation) {
        this.$refs.inputOccupationInfo.focus();
      } else {
<<<<<<< HEAD
        this.inputData["name"] = this.inputName;
        this.inputData["age"] = this.inputAge;
        this.inputData["occupation"] = this.inputOccupation;
        // this.$store.commit("updatePersonalInfo", this.inputData);
        console.log(this.inputData);
        alert("모두 입력되었습니다.");
=======
        this.inputData['name'] = this.inputName
				this.inputData['age'] = this.inputAge
				this.inputData['occupation'] = this.inputOccupation
        this.$store.commit('updatePersonalInfo', this.inputData)
        alert('모두 입력되었습니다.')
>>>>>>> 8447ff9c0ca0fdc0ca26a28f3e4af444203bd531
      }
    }
  }
};
</script>

<style scoped>
#ref {
  margin-top: 30px;
  width: 250px;
  display: flex;
  flex-direction: column;
}

.ref-btn {
<<<<<<< HEAD
  margin: 6px;
  font-weight: bold;
  padding: 6px;
  background-color: #ff204b;
  color: white;
  border-radius: 5px;
  border: none;
=======
    margin: 6px;
    font-weight:bold;
    padding: 6px;
    background-color:#FF204B;
    color:white;
    border-radius: 5px;
    border:none;
>>>>>>> 8447ff9c0ca0fdc0ca26a28f3e4af444203bd531
}

.ref-input {
  padding: 2px 8px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 6px;
  height: 25px;
}
</style>