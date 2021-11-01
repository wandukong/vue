<template>
  <div class="card">
    <div class="card-header">Exam02EventEmit</div>
    <div class="card-body">
      <p class="mb-2">counter: {{ counter }}</p>
      <child @child-event-1="handleChildEvent1" @child-event-2="handleChildEvent2" :counter="counter" @counter-increment="handleCounterIncrement" @counter-decrement="handleCounterDecrement" />
    </div>
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  name: "Exam02EventEmit",
  components: { Child },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    handleChildEvent1(arg) {
      console.log("arg: ", arg);
    },
    handleChildEvent2(arg1, arg2) {
      console.log("arg1: ", arg1);
      console.log("arg2: ", arg2);
    },
    handleCounterIncrement(arg) {
      this.counter += arg;
    },
    handleCounterDecrement(arg) {
      this.counter -= arg;
    },
  },
};
</script>

<style scoped></style>
