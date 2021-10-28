<template>
  <div class="card">
    <div class="card-header">Exam01Expressions</div>
    <div class="card-body">
      <h5>상품정보</h5>
      <p>번호: {{ no }}</p>
      <p>이름: {{ name }}</p>
      <p>회사: {{ company }}</p>
      <p>판매여부: {{ sale ? "판매" : "품절" }}</p>
      <p>가격: {{ price }}</p>
      <p>가격: {{ getPrice() }}</p>
      <button class="btn btn-dark btn-sm mt-2" @click="changeData">변경</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exam01Expressions",
  data: function() {
    return {
      no: 1,
      name: "미니백",
      company: "클레인",
      price: 300000,
      sale: true,
    };
  },
  methods: {
    getPrice() {
      return this.price; // 컴포넌트의 객체에 접근하려면 this를 붙인다.
    },
    changeData() {
      this.price += 1000;
      this.sale = !this.sale;
    },
  },
};
</script>

<style scoped></style>
