<template>
  <div>
    <div class="dropdown">
      <input type="search"
        placeholder="입력하세요"
        :value="search"
        @input="updateSearch"
        @focus="activateFocus"
        @blur="deactivateFocus">
      <div class="dropdown-contents" v-show="isFocused" v-for="item in filteredList" :key="item.value">
        <a @click="updateSelected(item.value)">{{ item.text }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "select2",
  props: {
    dropDownList: {
      default: []
    }
  },
  data() {
    return {
      search: '',
      isFocused: false
    }
  },
  computed: {
    filteredList() {
      return this.dropDownList.filter(d=>{
        return d.text.includes(this.search)
      })
    }
  },
  methods: {
    activateFocus() {
      this.isFocused = true
    },
    deactivateFocus() {
      setTimeout(()=>{
        this.isFocused = false
      }, 100)
    },
    //한글입력시 바로 data 업데이트 되게 하기 위한 함수
    updateSearch(e) {
      this.search = e.target.value
    },
    updateSelected(data) {
      this.$emit('updateSelected', data)
      // this.$store.commit('updateSelected', data)
    }
  }
}
</script>

<style scoped>
a {
  display: block;
  text-align: center;
  text-decoration: none;
  padding:2px;
}
a:visited,
a:link {
  color:gray;
}
a:hover {
  color:rgb(36, 114, 230);
  background-color: rgb(156, 197, 235);
}
.dropdown {
  display: inline-block;
}
.dropdown-contents {
  border: 1px solid #ddd;
  background-color: #fff;
  text-align: center;
  /* z-index:1; */
}
</style>