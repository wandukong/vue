<template>
  <div class="card">
    <div class="card-header">ChildB</div>
    <div class="card-body">
      <p>product.no: {{ product.no }}</p>
      <p>product.kind: {{ product.kind }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildB",
  props: ["product"],
};
</script>

<style scoped></style>
