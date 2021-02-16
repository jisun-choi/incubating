<template>
  <div>
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
  </div>
</template>

<script>
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
