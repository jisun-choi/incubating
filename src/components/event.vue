<template>
  <div id="event">
    <div id="key-event-block">
      <h3>Key Event</h3>
      <input v-model="texts" @keyup="getKeycode()">
      <p>{{ texts }}</p>
      <p>{{ keyCode }} </p>
    </div>
    <div id="mouse-event-block">
      <h3>Mouse Event</h3>
      <div id="mouse-div" @mousemove="getMouseIndex()" @mouseleave="getDefaultIndex()"></div>
      <p>{{ xAxis }}</p>
      <p>{{ yAxis }} </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      texts: '',
      keyCode: [],
      xAxis: 0,
      yAxis: 0
    }
  },
  methods: {
    getKeycode () {
      console.log(this.texts)
      console.log(event.key)
      if (event.key == 'Backspace') {
        this.keyCode.pop()
      } else if (event.key == 'Shift' || event.key == 'CapsLock' || event.key == 'Enter') {
        this.keyCode
      } else if (event.keyCode == 32) {
        this.keyCode.push('')
      } else {
        this.keyCode.push(event.keyCode)
      }
    },
    getMouseIndex() {
      this.xAxis = event.pageX
      this.yAxis = event.pageY
    },
    getDefaultIndex() {
      this.xAxis = 0
      this.yAxis = 0
    }
  }
}
</script>

<style scoped>
#event {
  display: flex;
  padding: 30px;
}

#key-event-block {
  width:300px;
  margin: 20px;
}

#mouse-event-block {
  margin: 20px;
}

#mouse-div {
  width: 220px;
  height:300px;
  border: 2px solid #ddd;
  border-radius: 4px;
}

#mouse-div:hover {
  border-color:red;
}

h3 {
  font-weight:bold;
}

input {
  width:230px;
  height:22px;
  border: 2px solid #ddd;
  border-radius: 4px;
}
</style>
