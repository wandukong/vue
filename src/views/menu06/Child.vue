<template>
  <div class="card">
    <div class="card-header">Child</div>
    <div class="card-body">
      <h6>[Root State 읽기]</h6>
      <p>userId 단방향 바인딩: {{ $store.state.userId }}</p>
      <p>userId 단방향 바인딩: {{ $store.getters.getUserId }}</p>
      <p>userId 양방향 바인딩: <input type="text" v-model="$store.state.userId" /></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Child",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
