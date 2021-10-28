d<!-- 컴포넌트 UI 정의-->
<template>
  <div class="card">
    <div class="card-header">Exam02Directives</div>
    <div class="card-body">
      <div>
        <img class="mr-2" src="@/assets/photos/photo1.jpg" width="300" height="200" />
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" width="300" height="200" />
      </div>
      <hr />

      <!-- 요소 숨김 여부-->
      <span v-if="sale" class="mr-2">
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" width="300" height="200" />
        <!--블록 자체가 사라짐-->
      </span>
      <span v-show="sale">
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" width="300" height="200" />
        <!--블록은 존재하지만, 보이지 않음-->
      </span>
      <hr />

      <!-- HTML 태그 처리 -->
      <p>정보: {{ info }}</p>
      <p>정보: <span v-html="info" /></p>

      <hr />
      <button class="btn btn-dark btn-sm" @click="changeData">변경</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exam02Directives",
  components: {},
  data: function() {
    return {
      photoFileName: "photo2.jpg",
      sale: true,
      info: '<div style="background-color: #eeeeee">스타일 적용 확인</div>',
    };
  },
  methods: {
    changeData() {
      if (this.photoFileName === "photo2.jpg") this.photoFileName = "photo3.jpg";
      else this.photoFileName = "photo2.jpg";
      this.sale = !this.sale;
    },
  },
};
</script>

<style scoped></style>
