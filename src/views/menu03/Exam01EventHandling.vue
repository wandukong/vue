<template>
  <div class="card">
    <div class="card-header">Exam01EventHandling</div>
    <div class="card-body">
      <div>
        <h6>[Event: Handler]</h6>
        <button class="btn btn-sm btn-primary mr-2" @click="handleBtn1">버튼1</button>
        <button class="btn btn-sm btn-primary mr-2" @click="handleBtn2('vue is good', $event)" name="btn2">버튼2</button>
        <button class="btn btn-sm btn-primary mr-2" @click="handleBtn2('vue is good', $event)" name="btn3">버튼3</button>
      </div>
      <hr />

      <a href="/" @click.prevent="handleLink">링크1</a>
      <hr />

      <form @submit.prevent="handleSubmit">
        <div class="d-flex align-items-center">
          <input type="submit" value="제출" class="btn btn-sm btn-warning mr-2" />
          <button class="btn btn-sm btn-success mr-2">제출</button>
          <input type="image" :src="require(`@/assets/logo.png`)" height="30" />
        </div>
      </form>
      <hr />
      <button class="btn btn-sm btn-primary mr-2" @click.ctrl="handleBtn3">ctrl+click</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exam01EventHandling",
  methods: {
    handleBtn1() {
      console.log("handleBtn1() 실행");
    },
    handleBtn2(arg, event) {
      console.log("args: ", arg);
      console.log("event: ", event);
      if (event.target.name === "btn2") {
        console.log("btn2이 클릭됨");
      } else if (event.target.name === "btn3") {
        console.log("btn3이 클릭됨");
      }
    },
    handleLink() {
      console.log("링크가 클릭됨");
    },
    handleSubmit() {
      console.log("Ajax 통신으로 폼 데이터 전송");
    },
    handleBtn3() {
      console.log("handleBtn3() 실행");
    },
  },
};
</script>

<style scoped></style>
