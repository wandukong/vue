<!-- 컴포넌트 UI 정의-->
<template>
  <v-card>
    <v-card-title>프로그래밍 방식 화면 이동</v-card-title>
    <v-divider />
    <v-card-text>
      <!-- 프로그램 방식 화면 이동-->
      <v-row>
        <sub-a-component />
      </v-row>

      <v-row class="mt-16">
        <v-btn v-on:click="goUrl" color="warning" class="mr-2">/menu01/exam01view</v-btn>
        <v-btn v-on:click="goUrl()" color="primary" class="mr-2">/menu01/exam01view</v-btn>
        <v-btn @click="goUrl" color="success" class="mr-2">/menu01/exam01view</v-btn>
        <v-btn @click="goUrl()" color="yellow">/menu01/exam01view</v-btn>
      </v-row>
    </v-card-text>
  </v-card>
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
      this.$router.push("/menu01/exam01view");
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
