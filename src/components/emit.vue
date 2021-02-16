<template>
  <div class="emit">
      <h3>(local components)</h3>
      <key-event
      :presentedText="presentedText"
      @keyup="getChildData"></key-event>
      <p>{{ presentedText }}</p>
      <h3>(global components)</h3>
      <event @keyup="showAlert"></event>
  </div>
</template>

<script>
import event from './event.vue'

let keyEvent = {
    template: 
    '<div><input v-model="texts" @keyup="sendEvent()"></div>',
    data() {
        return {
            texts: 'Child',
        }
    },
    methods: {
        sendEvent() {
            this.$emit('keyup', this.texts)
        }
    }
}

export default {
    components: {
        event,
        'key-event': keyEvent,
    }, 
    data () {
        return {
            presentedText: 'Parent'
        }
    },
    methods: {
        getChildData(data) {
            // alert('지역 컴포넌트 이벤트 emit 입니다.')
            this.presentedText = data;
        },
        showAlert() {
            // alert('전역 컴포넌트 이벤트 emit 입니다.')
        }
    }
}
</script>

<style scoped>
</style>
