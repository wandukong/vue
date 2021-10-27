<!-- 컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">Exam01View</div>
    <div class="card-body">
      <h6>선언적 방식 화면 이동</h6>
      <router-link to="/menu01/exam02view" class="btn btn-sm btn-info mr-2">/menu01/exam02view</router-link>
      <router-link v-bind:to="`/menu01/exam02view`" class="btn btn-sm btn-info mr-2">/menu01/exam02view</router-link>
      <router-link :to="{ path: '/menu01/exam02view' }" class="btn btn-sm btn-info mr-2">/menu01/exam02view</router-link>
      <router-link :to="{ name: 'menu01_exam02view' }" class="btn btn-sm btn-info mr-2">/menu01/exam02view</router-link>
    </div>
  </div>
</template>

<script>
export default {
  // 컴포넌트의 이름(devtools에 나오는 이름, 디버깅에 유용)
  name: "Exam01View",
  // 추가하고 싶은 컴포넌트를 등록
  components: {},
  // 컴포넌트 데이터를 정의
  data: function() {
    return {};
  },
  // 컴포넌트 메소드 정의
  methods: {},
};
</script>

<!-- scoped 해당 파일에서만 적용
scoped가 존재하지 않을 시, 전역으로 사용할 수 있다.-->

<style scoped></style>
