<template>
  <div class="card">
    <div class="card-header">Exam01AsyncControl</div>
    <div class="card-body">
      <div>
        <button class="btn btn-sm btn-success mr-2" @click="handleBtn1">비동기 작업1</button>
        <button class="btn btn-sm btn-primary mr-2" @click="handleBtn2">비동기 작업2</button>
        <div v-if="loading" class="mt-3">
          <div class="spinner-grow text-danger" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div v-if="!loading" class="mt-3">처리결과: {{ result }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exam01AsyncControl",
  data() {
    return {
      loading: false,
      result: "",
    };
  },
  methods: {
    work() {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("점심 먹으로 가쟈!!!");
        }, 3000);
      });
      return promise;
    },
    handleBtn1() {
      this.loading = true;
      this.work()
        .then(result => {
          this.result = result;
        })
        .catch(err => {})
        .finally(() => {
          this.loading = false;
        });
    },
    async handleBtn2() {
      this.loading = true;
      try {
        const result = await this.work(); // await : 동기로 바꿈
        this.result = result;
      } catch (err) {
        //
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped></style>
