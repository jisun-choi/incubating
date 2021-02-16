<template>
  <div id="watch">
    <select v-model="selected">
      <option value="brandi">브랜디</option>
      <option value="hiver">하이버</option>
      <option value="helpi">헬피</option>
    </select>
    <div class="watchImage">
      <img :src =result.imgSrc />
    </div>
    <div class="watchText">
      <p class="title">{{ result.titleData }}</p>
      <p>{{ result.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "watch",
  data () {
    return {
      selected: 'brandi',
      result: {
      },
      info: {
        brandi: {
          imgSrc: 'https://platum.kr/wp-content/uploads/2019/11/image.png',
          titleData: 'MZ세대를 겨냥한 여성 쇼핑 플랫폼 입니다. ',
          text: 'www.brandi.co.kr'
        },

        hiver: {
          imgSrc: 'https://www.venturesquare.net/wp-content/uploads/2019/03/hiver.jpg',
          titleData: '하이버 - 예쁜 남자옷 모음',
          text: 'www.hiver.co.kr'
        },

        helpi: {
          imgSrc: 'https://platum.kr/wp-content/uploads/2018/09/helpi.jpg',
          titleData: '온라인 의류 판매자를 위한 쉬운 쇼핑몰 운영 서비스',
          text: 'www.helpi.co.kr'
        }
      }
    }
  },
  watch: {
    selected: {
      handler(){
        if (this.selected === 'brandi') {
          this.result = this.info.brandi
        } else if (this.selected === 'hiver') {
          this.result = this.info.hiver
        } else if (this.selected === 'helpi') {
          this.result = this.info.helpi
        }
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
#watch {
  margin-top:30px;
  margin-left:30px;
  width: 250px;
  display: flex;
  flex-direction: column;
}

.title {
  font-weight: bold;
}
select {
  padding: 2px 5px;
  width:100px;
}

.watchImage {
  border: 1px solid #ddd;
  border-bottom: none;
  margin-top:20px;
  width: 300px;
}

.watchText {
  border: 1px solid #ddd;
  border-top: none;
  width: 300px;
}

img {
  width: 300px;
}

p {
  padding-left:10px;
  text-align: left;
}

</style>