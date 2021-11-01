<template>
  <div class="card">
    <div class="card-header">ChildA</div>
    <div class="card-body">
      <p>prop1: {{ prop1 }}</p>
      <p>prop2: {{ prop2 }}</p>
      <p>productNo: {{ productNo }}</p>
      <p>productKind: {{ productKind }}</p>
      <p>productPrice: {{ productPrice + 1 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildA",
  // 부모가 전달해줌
  props: ["prop1", "prop2", "productNo", "productKind", "productPrice"],
};
</script>

<style scoped></style>
