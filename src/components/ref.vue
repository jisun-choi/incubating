<template>
  <div id="ref">
      <input type="text" id="refInput" placeholder="이름">
      <input type="text" id="refInput" placeholder="나이">
      <input type="text" id="refInput" placeholder="직업">
      <button id="refBtn" type="button">확인</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#ref {
    margin-top:30px;
    width: 250px;
    display: flex;
    flex-direction: column;
}

#refBtn  {
    margin: 6px;
    font-weight:bold;
    padding: 6px;
    background-color:#FF204B;
    color:white;
    border-radius: 5px;
    border:none;
}

#refInput {
    padding:2px 8px;
    border-radius: 5px;
    border:1px solid #ddd;
    margin:6px;
    height:25px;
}
</style>
