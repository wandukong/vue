<template>
  <div class="card">
    <div class="card-header">Exam02Watch</div>
    <div class="card-body">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">UserId</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="userId" />
        </div>
      </div>
      <hr />
      <form>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="product.name" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Company</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="product.company" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Price</label>
          <div class="col-sm-10">
            <input type="number" :class="`form-control ${bgColor}`" v-model.number="product.price" />
          </div>
        </div>
      </form>
      <hr />
      <button @click="handleButton" class="btn btn-info btn-sm">product 객체 변경</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exam02Watch",
  components: {},
  data() {
    return {
      userId: "user1",
      product: {
        name: "정장",
        company: "한섬",
        price: 1000000,
      },
      bgColor: "",
    };
  },
  methods: {
    handleButton() {
      this.product = {
        name: "정장2",
        company: "한섬",
        price: 3000000,
      };
    },
  },
  watch: {
    userId(newValue, oldValue) {
      console.log("newValue: " + newValue);
      console.log("oldValue : " + oldValue);
      console.log("this.userId: " + this.userId);
    },
    // product(newValue, oldValue) {
    //   console.log("newValue: ", newValue);
    //   console.log("oldValue : ", oldValue);
    //   console.log("this.product: ", this.product);
    // },
    product: {
      deep: true,
      handler(newValue, oldValue) {
        // newValue와 oldValue 같은 값이 나옴
        console.log("newValue: ", newValue);
        console.log("oldValue : ", oldValue);
      },
    },
    "product.name"(newValue, oldValue) {
      // oldValue를 얻고 싶으면, 속성까지 포함하여 메소드를 정의한다.
      console.log("newValue: " + newValue);
      console.log("oldValue : " + oldValue);
      console.log("this.product.name: " + this.product.name);
    },
    "product.price"(newValue, oldValue) {
      if (newValue < 0) this.bgColor = "bg-danger";
      else if (0 <= newValue && newValue <= 100000) this.bgColor = "bg-success";
      else this.bgColor = "bg-warning";
    },
  },
};
</script>

<style scoped></style>
