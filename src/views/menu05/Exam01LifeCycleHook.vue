<template>
  <div class="card">
    <div class="card-header">Exam01LifeCycleHook</div>
    <div class="card-body">
      <p>data: {{ data }}</p>
      <button @click="chageData" class="btn btn-sm btn-danger">데이터 변경</button>
      <hr />
      <child :data="data" />
    </div>
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  name: "Exam01LifeCycleHook",
  components: {
    Child,
  },
  data() {
    return {
      data: "",
    };
  },
  methods: {
    chageData() {
      this.data += Math.floor(10 * Math.random());
    },
  },

  // 컴포넌트 생성
  beforeCreate() {
    console.log("beforeCreate state");
  },
  created() {
    console.log("created state");
  },
  beforeMount() {
    console.log("beforeMount state");
  },
  mounted() {
    console.log("mounted state");
  },
  beforeUpdate() {
    console.log("beforeUpdate state");
  },
  updated() {
    console.log("updated state");
  },

  //컴포넌트 제거
  beforeDestroy() {
    console.log("beforeDestroy state");
  },
  destroyed() {
    console.log("destroyed state");
  },
};
</script>

<style scoped></style>
