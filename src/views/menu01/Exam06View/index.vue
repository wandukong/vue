<!-- 컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">Exam06View</div>
    <div class="card-body">
      <h6>params(path variable)로 전달</h6>
      <!-- url의 정보를 갖고있는 route 객체 -->

      <div>bno: {{ $route.params.bno }}</div>
      <div>bno: {{ bno }}</div>
    </div>
  </div>
</template>

<script>
export default {
  // 컴포넌트의 이름(devtools에 나오는 이름, 디버깅에 유용)
  name: "Exam06View",
  // 추가하고 싶은 컴포넌트를 등록
  components: {},
  // 컴포넌트 데이터를 정의
  data: function() {
    return {};
  },
  // 컴포넌트 메소드 정의
  methods: {},

  // component가 생성될 때 실행된다.
  created() {
    console.log("Exam06View 컴포넌트가 생성됨");
    console.log(this.$route);
    console.log(this.$route.params.bno);
  },

  // <component bno="3"/>
  props: ["bno"],
};
</script>

<!-- scoped 해당 파일에서만 적용
scoped가 존재하지 않을 시, 전역으로 사용할 수 있다.-->

<style scoped></style>
