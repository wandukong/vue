<template>
  <div class="card">
    <div class="card-header">Child</div>
    <div class="card-body">
      <h6>[자식 -> 부모]</h6>
      <button @click="handleBtn1" class="btn btn-info bt-sm mr-2">chilld-event-1 emit</button>
      <button @click="handleBtn2" class="btn btn-info bt-sm mr-2">chilld-event-2 emit</button>
      <hr />

      <h6>[부모 -> 자식 -> 부모 -> 자식]</h6>
      <p class="mb-2">부모로부터 받은 counter: {{ counter }}</p>
      <button @click="handleBtn3" class="btn btn-info bt-sm mr-2">증가 요청(자식->요청)</button>
      <button @click="handleBtn4" class="btn btn-info bt-sm mr-2">감소 요청(자식->요청)</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Child",
  data() {
    return {
      data1: "child-value1",
      data2: 100,
    };
  },
  methods: {
    handleBtn1() {
      // 이벤트 발생
      this.$emit("child-event-1", this.data1);
    },
    handleBtn2() {
      this.$emit("child-event-2", this.data1, this.data2);
    },
    handleBtn3() {
      this.$emit("counter-increment", 1);
    },
    handleBtn4() {
      this.$emit("counter-decrement", 1);
    },
  },
  props: ["counter"],
};
</script>

<style scoped></style>
