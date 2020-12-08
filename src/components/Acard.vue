<template>
  <div class="card">
    <div class="watch-image">
      <img :src =result.imgSrc />
    </div>
    <div class="watch-text">
      <p class="title">{{ result.titleData }}</p>
      <p>{{ result.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"Acard",
  data () {
    return {
      result: {
      },
      optionList: [
        {
          value: 'brandi',
          name: '브랜디',
          imgSrc: "https://platum.kr/wp-content/uploads/2019/11/image.png",
          titleData: "MZ세대를 겨냥한 여성 쇼핑 플랫폼 입니다. ",
          text: "www.brandi.co.kr"
        },
        {
          value: 'hiver',
          name: '하이버',
          imgSrc: "https://www.venturesquare.net/wp-content/uploads/2019/03/hiver.jpg",
          titleData: "하이버 - 예쁜 남자옷 모음",
          text: "www.hiver.co.kr"
        },
        {
          value: 'helpi',
          name: '헬피',
          imgSrc: "https://platum.kr/wp-content/uploads/2018/09/helpi.jpg",
          titleData: "온라인 의류 판매자를 위한 쉬운 쇼핑몰 운영 서비스",
          text: "www.helpi.co.kr"
        }
      ]
    }
  },
  computed: {
    checkSelected() {
      return this.$store.state.selected
    }
  },
  mounted() {
    if (this.$store.state.selected === '') {
      this.result = this.optionList[0]
    }
  },
  watch: {
    // '$store.state.selected'() {
    //   this.result = this.optionList.find(d=>{ return d.value == this.$store.state.selected})
    // },
    checkSelected() {
      this.result = this.optionList.find(d=>{ return d.value == this.$store.state.selected})
    }
  }
}
</script>

<style scoped>
.title {
  font-weight: bold;
}

.watch-image {
  border: 1px solid #ddd;
  border-bottom: none;
  margin-top:20px;
  width: 300px;
}

.watch-text {
  border: 1px solid #ddd;
  border-top: none;
  width: 300px;
}
.card {
  padding-top:15%;
  position: absolute;
  z-index: -1;
}

img {
  width: 300px;
}

p {
  padding-left:10px;
  text-align: left;
}
</style>