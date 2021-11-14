<!-- 컴포넌트 UI 정의-->
<template>
  <v-card>
    <v-card-title>Exam04View</v-card-title>
    <v-divider />
    <v-card-text>
      <router-view class="mb-2" />
      <router-view name="rv1" class="mb-2" />
      <router-view name="rv2" class="mb-2" />
      <v-divider />
      <sub-a-component class="mb-2" />
      <sub-b-component class="mb-2" />
      <sub-c-component class="mb-2" />
    </v-card-text>
  </v-card>
</template>

<script>
import SubAComponent from "@/components/menu01/SubAComponent.vue";
import SubBComponent from "@/components/menu01/SubBComponent.vue";
import SubCComponent from "@/components/menu01/SubCComponent.vue";

export default {
  // 컴포넌트의 이름(devtools에 나오는 이름, 디버깅에 유용)
  name: "",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    SubAComponent,
    SubBComponent,
    SubCComponent,
  },
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
