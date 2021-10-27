<!-- 컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">Exam03View</div>
    <div class="card-body">
      <h6>선언적 방식 컴포넌트 전환(화면 이동)</h6>
      <router-link to="/menu01/exam03view/subacomponent" class="btn btn-sm btn-success mr-2">SubAComponent</router-link>
      <router-link to="/menu01/exam03view/subbcomponent" class="btn btn-sm btn-success">SubBComponent</router-link>

      <h6 class="mt-2">프로그래밍 방식 컴포넌트 전환(화면 이동)</h6>
      <button @click="goUrl('a')" class="btn btn-sm btn-primary mr-2">SubAComponent</button>
      <button @click="goUrl('b')" class="btn btn-sm btn-primary mr-2">SubBComponent</button>
      <div class="mt-2">
        <router-view />
      </div>
    </div>
  </div>
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

<!-- scoped 해당 파일에서만 적용
scoped가 존재하지 않을 시, 전역으로 사용할 수 있다.-->

<style scoped></style>
