<template>
  <div class="card">
    <div class="card-header">
      Exam01RootState
    </div>
    <div class="card-body">
      <h6>[counter State 읽기]</h6>
      <p>counter/count 단방향 바인딩: {{ $store.state.counter.count }}</p>
      <p>counter/count 단방향 바인딩: {{ $store.getters["counter/getCount"] }}</p>
      <p>counter/count 단방향 바인딩: {{ getCount() }}</p>
      <p>counter/count 단방향 바인딩: {{ computedCount }}</p>
      <p>counter/count 양방향 바인딩: <input type="text" v-model="$store.state.counter.count" /></p>
      <hr />

      <h6>[counter State 변경]</h6>
      <p>counter value 양방향 바인딩: <input type="text" v-model.number="value" /></p>
      <div class="mt-2">
        <button class="btn btn-sm btn-warning mr-2" @click="changeCountByMutation">counter/count 변경(Mutation 동기 방식)</button>
        <button class="btn btn-sm btn-warning" @click="changeCountByAction">counter/count 변경(action 비동기 방식)</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exam01RootState",
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    getCount() {
      // return this.$store.state.couter.count;
      return this.$store.getters["counter/getCount"]; // 하위 상태일떄도 사용 가능
    },
    changeCountByMutation() {
      this.$store.commit("counter/setCount", this.value);
    },
    changeCountByAction() {
      this.$store.dispatch("counter/setCountByAsync", { value: this.value, duration: 3000 });
    },
  },
  computed: {
    computedCount() {
      return this.$store.getters["counter/getCount"];
    },
  },
};
</script>

<style scoped></style>
