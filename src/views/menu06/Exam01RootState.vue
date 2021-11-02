<template>
  <div class="card">
    <div class="card-header">
      Exam01RootState
    </div>
    <div class="card-body">
      <h6>[Root State 읽기]</h6>
      <p>userId 단방향 바인딩: {{ $store.state.userId }}</p>
      <p>userId 단방향 바인딩: {{ $store.getters.getUserId }}</p>
      <p>userId 단방향 바인딩: {{ getUserId() }}</p>
      <p>userId 단방향 바인딩: {{ computedUserId }}</p>
      <p>userId 양방향 바인딩: <input type="text" v-model="$store.state.userId" /></p>
      <hr />

      <h6>[Root State 변경]</h6>
      <p>Component userId 양방향 바인딩: <input type="text" v-model="userId" /></p>
      <div class="mt-2">
        <button class="btn btn-sm btn-warning mr-2" @click="changeUserIdByMutation">userId 변경(Mutation 동기 방식)</button>
        <button class="btn btn-sm btn-warning" @click="changeUserIdByAction">userId 변경(action 비동기 방식)</button>
      </div>
      <child class="mt-2" />
    </div>
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  name: "Exam01RootState",
  components: { Child },
  data() {
    return {
      userId: "",
    };
  },
  methods: {
    getUserId() {
      // return this.$store.state.userId;
      // return this.$store.getters.getUserId; // 루트 상태일때만 가능
      return this.$store.getters["getUserId"]; // 하위 상태일떄도 사용 가능
    },
    changeUserIdByMutation() {
      this.$store.commit("setUserId", this.userId);
    },
    changeUserIdByAction() {
      this.$store.dispatch("setUserIdByAsync", { userId: this.userId, duration: 3000 });
    },
  },
  computed: {
    computedUserId() {
      return this.$store.getters["getUserId"];
    },
  },
};
</script>

<style scoped></style>
