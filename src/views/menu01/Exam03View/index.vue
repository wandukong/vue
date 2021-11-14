<!-- 컴포넌트 UI 정의-->
<template>
  <v-card>
    <v-card-title>Exam03View</v-card-title>
    <v-divider />
    <v-card-text>
      <v-subtitle>선언적 방식 컴포넌트 전환(화면 이동)</v-subtitle>
      <v-card-actions>
        <v-btn to="/menu01/exam03view/subacomponent" class="success mr-2">SubAComponent</v-btn>
        <v-btn to="/menu01/exam03view/subbcomponent" class="success mr-2">SubBComponent</v-btn>
      </v-card-actions>

      <v-divider />
      <v-card-subtitle>프로그래밍 방식 컴포넌트 전환(화면 이동)</v-card-subtitle>
      <v-card-actions>
        <v-btn @click="goUrl('a')" class="primary mr-2">SubAComponent</v-btn>
        <v-btn @click="goUrl('b')" class="primary mr-2">SubBComponent</v-btn>
      </v-card-actions>

      <v-divider />
      <router-view />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  // 컴포넌트의 이름(devtools에 나오는 이름, 디버깅에 유용)
  name: "",
  // 추가하고 싶은 컴포넌트를 등록
  components: {},
  // 컴포넌트 데이터를 정의
  data: function() {
    return {};
  },
  // 컴포넌트 메소드 정의
  methods: {
    goUrl(type) {
      this.$router.push(`/menu01/exam03view/sub${type}component`).catch(() => {});
    },
  },
};
</script>
