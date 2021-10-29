<template>
  <div class="card">
    <div class="card-header">Exam06ComputedBinding</div>
    <div class="card-body">
      <div>
        <p>ssn1: {{ ssn1 }}</p>
        <p>ssn2: {{ ssn2 }}</p>
        <p>ssn: {{ ssn1 }} - {{ ssn2.charAt(0) + "******" }}</p>
        <p>{{ date }}</p>
      </div>

      <div>
        <p>ssn(getSsn): {{ getSsn() }}</p>
        <p>ssn(computedSsn): {{ computedSsn }}</p>
      </div>

      <button @click="changeData" class="btn btn-sm btn-dark" mt-2>변경</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exam06ComputedBinding",
  data() {
    return {
      ssn1: "960106",
      ssn2: "1235825",
      date: new Date(),
    };
  },
  methods: {
    getSsn() {
      console.log("getSsn 실행");
      return this.ssn1 + " - " + this.ssn2.charAt(0) + "******";
    },
    changeData() {
      this.date = new Date();
      this.ssn2 = "2220123";
    },
  },

  computed: {
    computedSsn() {
      console.log("computedSsn 실행");
      return this.ssn1 + " - " + this.ssn2.charAt(0) + "******";
    },
  },
};
</script>

<style scoped></style>
