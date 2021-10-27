<!-- 컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">Exam08View</div>
    <div class="card-body">
      <div>
        <p>kind : {{ $route.query.kind }}</p>
        <p>color : {{ $route.query.color }}</p>

        <p>kind : {{ kind }}</p>
        <p>color : {{ color }}</p>

        <hr />

        <button class="btn btn-sm btn-warning mr-2" @click="goHome">홈으로 이동</button>
        <button class="btn btn-sm btn-danger" @click="goBack">뒤로 가기</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  // 컴포넌트의 이름(devtools에 나오는 이름, 디버깅에 유용)
  name: "Exam08View",
  // 추가하고 싶은 컴포넌트를 등록
  components: {},
  // 컴포넌트 데이터를 정의
  data: function() {
    return {};
  },
  // 컴포넌트 메소드 정의
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  // 컴포넌트가 생성된 후 실행되는 메소드
  created() {
    console.log(this.$route);
    console.log(this.$route.query.kind);
    console.log(this.$route.query.color);
  },
  props: ["kind", "color"],
};
</script>

<!-- scoped 해당 파일에서만 적용
scoped가 존재하지 않을 시, 전역으로 사용할 수 있다.-->

<style scoped></style>
