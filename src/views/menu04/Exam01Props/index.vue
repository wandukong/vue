<template>
  <div class="card">
    <div class="card-header">Exam01Props</div>
    <div class="card-body">
      <child-a :prop1="data1" :prop2="data2" :productNo="pno" :productKind="pkind" :productPrice="pprice" />
      <hr />
      <child-b :product="product" />
      <hr />
      <child-c :propD="'string-data'" propA="3" :propB="5" :propC="7" :propE="9" :propF="{ message: 'hello, vue' }" :propG="['red', 'green', 'blue']" :propI="5" />
    </div>
  </div>
</template>

<script>
import ChildA from "./ChildA.vue";
import ChildB from "./ChildB.vue";
import ChildC from "./ChildC.vue";

export default {
  name: "Exam01Props",
  components: { ChildA, ChildB, ChildC },
  data() {
    return {
      data1: "value1",
      data2: "value2",
      pno: 1,
      pkind: "bag",
      pprice: 10,
      product: {
        no: 2,
        kind: "정장",
      },
    };
  },
};
</script>

<style scoped></style>
