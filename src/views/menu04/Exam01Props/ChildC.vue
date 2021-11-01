<template>
  <div class="card">
    <div class="card-header">ChildC</div>
    <div class="card-body">
      <p>propA: {{propA + 10}}</p>
      <p>propB: {{propB + 10}}</p>
      <p>propC: {{propC + 10}}</p>
      <p>propD: {{propD}}</p>
      <p>propE: {{propE + 10}}</p>
      <p>propF: {{propF.message}}</p>
      <p>propG: 
        <ul>
          <li v-for="(value, index) in propG" :key="index">
            {{value}}
          </li>
        </ul>
      </p>
      <p>propI: {{propI}}</p>

    </div>
  </div>
</template>

<script>
export default {
  name: "ChildC",
  props: {
    propA: null, //어떤 타입이든 가능
    propB: Number, //숫자 타입만 가능
    propC: [String, Number], //여러개의 가능한 타입(값 타입이 배열 아님)
    propD: {
      //문자 타입이고 반드시 필요
      type: String,
      required: true,
    },
    propE: {
      //숫자 타입이고 기본값은 100
      type: Number,
      default: 5,
    },
    propF: {
      //객체 타입이고 기본값은 {message: "Hello"}
      type: Object,
      default() {
        return { message: "Hello" };
      },
    },
    propG: {
      //배열 타입이고 기본값은 ["black", "white"]
      type: Array,
      default() {
        return ["black", "white"];
      },
    },
    propI: {
      type: Number,
      //사용자 유효성 검사 가능
      validator(value) {
        return value > 0;
      },
    },
  },
};
</script>

<style scoped></style>
