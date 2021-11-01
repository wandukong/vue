<template>
  <div class="card">
    <div class="card-header">Child</div>
    <div class="card-body">
      <p>data: {{ data }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: ["data"],

  // 컴포넌트 생성
  beforeCreate() {
    console.log("child beforeCreate state");
  },
  created() {
    console.log("child  created state");
  },
  beforeMount() {
    console.log("child  beforeMount state");
  },
  mounted() {
    console.log("child  mounted state");
  },
  beforeUpdate() {
    console.log("child  beforeUpdate state");
  },
  updated() {
    console.log("child  updated state");
  },

  //컴포넌트 제거
  beforeDestroy() {
    console.log("child  beforeDestroy state");
  },
  destroyed() {
    console.log("child  destroyed state");
  },
};
</script>

<style scoped></style>
