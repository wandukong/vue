<!-- 컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">Exam07View</div>
    <div class="card-body">
      <div>
        <p>kind : {{ kind }}</p>
        <p>color : {{ color }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 컴포넌트의 이름(devtools에 나오는 이름, 디버깅에 유용)
  name: "Exam07View",
  // 추가하고 싶은 컴포넌트를 등록
  components: {},
  // 컴포넌트 데이터를 정의
  data: function() {
    return {};
  },
  // 컴포넌트 메소드 정의
  methods: {},
  props: ["kind", "color"],
};
</script>

<!-- scoped 해당 파일에서만 적용
scoped가 존재하지 않을 시, 전역으로 사용할 수 있다.-->

<style scoped></style>
