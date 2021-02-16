<template>
  <div>
<<<<<<< HEAD
    <h1>Axious</h1>
    <table>
      <thead>
        <tr>
          <th>상품 번호</th>
          <th>상품명</th>
          <th>상품 가격</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ product.no }}</td>
          <td>{{ product.productName }}</td>
          <td>{{ product.price }}</td>
        </tr>
      </tbody>
    </table>
=======
      <h3>Axious</h3>
      <table>
          <thead>
              <tr>
                  <th>상품 번호</th>
                  <th>상품명</th>
                  <th>상품 가격</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="product in products" :key="product.id">
                  <td>{{ product.no }}</td>
                  <td>{{ product.productName }}</td>
                  <td>{{ product.price }}</td>
              </tr>
          </tbody>
      </table>
>>>>>>> 8447ff9c0ca0fdc0ca26a28f3e4af444203bd531
  </div>
</template>

<script>
<<<<<<< HEAD
// import axios from "axious";

export default {
  data() {
    return {
      products: ""
    };
  }
  // mounted() {
  //   axios.get("../data.json").then(response => (this.products = response));
  // }
};
</script>

<style></style>
=======
import axios from 'axios'

export default {
    name: 'axios',
    data() {
        return {
            products: []
        }
    },
    methods: {
        async fetchInfo() {
            const res = await axios.get("data.json")
            console.log(res)
            this.products = res.data
        }
    },

    mounted() {
        this.fetchInfo()
    }
}
</script>

<style scoped>
table, th, td {
    border-collapse: collapse;
    border: 1px solid black;
    text-align: center;
    padding:10px;
}
</style>
>>>>>>> 8447ff9c0ca0fdc0ca26a28f3e4af444203bd531
