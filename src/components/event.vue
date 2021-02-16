<template>
  <div class="event">
    <div class="key-event-block">
      <h3>Key Event</h3>
      <input v-model="texts" @keyup="getKeycode()" />
      <p>{{ texts }}</p>
      <p>{{ keyCode }}</p>
    </div>
    <div class="mouse-event-block">
      <h3>Mouse Event</h3>
      <div class="mouse-div" @mousemove="getMouseIndex()" @mouseleave="getDefaultIndex()"></div>
      <p>{{ xAxis }}</p>
      <p>{{ yAxis }}</p>
    </div>
  </div>
</template>

<script>
const Hangul = require("hangul-js");

export default {
  data() {
    return {
      texts: "",
      keyCode: [],
      xAxis: 0,
      yAxis: 0
    };
  },
  methods: {
<<<<<<< HEAD
    getKeycode() {
      if (event.key == "Backspace") {
        // var removeKeycode = this.keyCode.length / this.texts.length
        // var reversedKeycode = this.keyCode.slice().reverse()
        // reversedKeycode.splice(0,removeKeycode-1)
        // this.keyCode  = reversedKeycode.slice().reverse()
      } else if (
        event.key == "Shift" ||
        event.key == "CapsLock" ||
        event.key == "Enter"
      ) {
        this.keyCode;
      } else if (event.keyCode == 32) {
        this.keyCode.push("");
=======
    getKeycode () {
      if (event.key == 'Backspace') {
        var removeKeycode = this.keyCode.length / this.texts.length
        var reversedKeycode = this.keyCode.slice().reverse()
        reversedKeycode.splice(0,removeKeycode-1)
        this.keyCode  = reversedKeycode.slice().reverse()
      } else if (event.key == 'Shift' || event.key == 'CapsLock' || event.key == 'Enter') {
        this.keyCode
      } else if (event.keyCode == 32) { //스페이스바 누를 경우 공백 추가해줍니다. 
        this.keyCode.push('')
>>>>>>> 8447ff9c0ca0fdc0ca26a28f3e4af444203bd531
      } else {
        if (Hangul.isComplete(this.texts)) {
          console.log(this.texts, "한글");
          console.log(this.keyCode, "키코드");
        }
        console.log(Hangul.isComplete(this.texts));
        this.keyCode.push(event.keyCode);
      }
      this.$emit("keyup");
    },
    getMouseIndex() {
      this.xAxis = event.pageX;
      this.yAxis = event.pageY;
      this.$emit("mousemove");
    },
    getDefaultIndex() {
      this.xAxis = 0;
      this.yAxis = 0;
    }
  }
};
</script>

<style scoped>
.event {
 justify-content: center;
  display: flex;
  padding: 30px;
}

<<<<<<< HEAD
#key-event-block {
  width: 300px;
=======
.key-event-block {
  width:300px;
>>>>>>> 8447ff9c0ca0fdc0ca26a28f3e4af444203bd531
  margin: 20px;
}

.mouse-event-block {
  margin: 20px;
}

.mouse-div {
  width: 220px;
  height: 300px;
  border: 2px solid #ddd;
  border-radius: 4px;
}

<<<<<<< HEAD
#mouse-div:hover {
  border-color: red;
=======
.mouse-div:hover {
  border-color:red;
>>>>>>> 8447ff9c0ca0fdc0ca26a28f3e4af444203bd531
}

h3 {
  font-weight: bold;
}

input {
  width: 230px;
  height: 22px;
  border: 2px solid #ddd;
  border-radius: 4px;
}
</style>
