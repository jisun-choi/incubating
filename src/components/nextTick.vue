<template>
  <div class="next-tick">
    <h2>nextTick</h2>
    <div>
      <span>height:{{ boxSize.height }}, width: {{ boxSize.width }}</span>
      <button @click="addRandomElement">텍스트 추가하기</button>
      <button @click="measureBoxSize">상자크기 가져오기</button>
      <div class="box-elements" ref="strBox">
        <p v-show="randomStrList" v-for="(element, index) in randomStrList" :key="element.id">
          random str = {{ element }} 
          <button @click="updateElementSize(index)">제거</button>
        </p>
      </div>
    </div>
    <h2>select2</h2>
    <select-2 :dropDownList="dropdownList" @updateSelected="updateSelected"></select-2>
    <acard></acard>
  </div> 
</template>

<script>
import Select2 from './select2.vue'
import Acard from './Acard.vue'

export default {
  name: "nexttick",
  components: {
    Select2,
    Acard
  },
  data() {
    return {
      boxSize: {
        height: '',
        width: ''
      },
      randomStrList:[],
      dropdownList: [
        {
          text: '브랜디',
          value: 'brandi'
        },
        {
          text: '하이버',
          value: 'hiver'
        },
        {
          text: '헬피',
          value: 'helpi'
        }
      ]
    }
  },
  methods: {
    updateSelected(data) {
      this.$store.commit('updateSelected', data)
    },
    measureBoxSize() {
      this.$nextTick(
        function() {
          this.boxSize.height = this.$refs.strBox.clientHeight
          this.boxSize.width = this.$refs.strBox.clientWidth
        }
      )
    },

    makeRandomStr(length) {
      let result           = '';
      let characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    },
    
    addRandomElement() {
      let randomLength = Math.floor(Math.random() * 16) +1
      this.randomStrList.push(this.makeRandomStr(randomLength))
      this.measureBoxSize()
    },

    updateElementSize(index) {
      this.randomStrList.splice(index,1)
      this.measureBoxSize()
    },
  }
}
</script>

<style scoped>
.next-tick {
  margin-top:30px;
  margin-left:30px;
  width: 250px;
  display: flex;
  flex-direction: column;
}
.box-elements {
  border: 1px solid #ddd;
}
p {
  border:none;
}
</style>