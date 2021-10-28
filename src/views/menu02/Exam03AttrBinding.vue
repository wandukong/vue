<template>
  <div class="card">
    <div class="card-header">
      Exam03AttrBinding
    </div>
    <div class="card-body">
      <p>
        <img height="150" class="mr-2" v-bind:src="require(`@/assets/photos/${imgName1}`)" />
        <img height="150" class="mr-2" :src="require(`@/assets/photos/${imgName2}`)" />
      </p>
      <div>
        <p :class="className">아름다운 풍경</p>
        <p :style="css">가을에는 Vue를 공부하고 싶어요.</p>
      </div>
      <hr />
      <button class="btn btn-info btn-sm" @click="changeData()">변경</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exam03AttrBinding",
  components: {},
  data() {
    return {
      imgName1: "photo1.jpg",
      imgName2: "photo2.jpg",
      className: "class1",
      css: "color:blue;",
      toggle: true,
    };
  },
  methods: {
    changeData() {
      if (this.toggle) {
        this.imgName1 = "photo3.jpg";
        this.imgName2 = "photo4.jpg";
        this.className = "class2";
        this.css = "color:yellow";
      } else {
        this.imgName1 = "photo1.jpg";
        this.imgName2 = "photo2.jpg";
        this.className = "class1";
        this.css = "color:blue;";
      }
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style scoped>
.class1 {
  color: red;
}
.class2 {
  color: green;
}
</style>
