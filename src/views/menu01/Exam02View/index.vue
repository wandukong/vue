<!-- 컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">Exam02View</div>
    <div class="card-body">
      <sub-a-component class="mb-2" />
      <!-- 프로그램 방식 화면 이동-->
      <button class="btn btn-info btn-sm mr-2" v-on:click="goUrl">/menu01/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" v-on:click="goUrl()">/menu01/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" @click="goUrl">/menu01/exam01view</button>
      <button class="btn btn-info btn-sm" @click="goUrl()">/menu01/exam01view</button>
    </div>
  </div>
</template>

<script>
import SubAComponent from "./SubAComponent.vue";

export default {
  // 컴포넌트의 이름(devtools에 나오는 이름, 디버깅에 유용)
  name: "Exam02View",
  // 추가하고 싶은 컴포넌트를 등록
  components: { SubAComponent },
  // 컴포넌트 데이터를 정의
  data: function() {
    return {};
  },
  // 컴포넌트 메소드 정의
  methods: {
    goUrl() {
      this.$router.push("/menu01/exam02view");
      // this.$router.push({path:"/menu01/exam02view"});
      // this.$router.push({name:"menu01_exam02view");

      /* 현재 URL과 동일한 URL로 화면 이동을 할 경우 예외가 발생하므로 예외 처리 코드 필요
      this.$router
        .push("/menu01/exam02view")
        .then(() => {})
        .catch(() => {});
      */
    },
  },
};
</script>

<!-- scoped 해당 파일에서만 적용
scoped가 존재하지 않을 시, 전역으로 사용할 수 있다.-->

<style scoped></style>
