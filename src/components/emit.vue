<template>
  <div id="emit">
      <h1>(local components)</h1>
      <key-event
      :presentedText="this.presentedText"
      @keyup="getChildData"></key-event>
      <p>{{ presentedText }}</p>
      <h1>(global components)</h1>
      <event @keyup="showAlert"></event>
  </div>
</template>

<script>
import event from './event.vue'

var keyEvent = {
    template: 
    '<div><input v-model="texts" @keyup="sendEvent()"></div>',
    data() {
        return {
            texts:'Child',
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
            // alert.once('전역 컴포넌트 이벤트 emit 입니다.')
        }
    }
}
</script>

<style scoped>
</style>
