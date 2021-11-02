
# Event Handling & Watch

## ✨이벤트 처리 (Event Handling)
- **v-on:이벤트="실행문|핸들러|핸들러(arg1, …, $event)"**
	- 핸들러는 methods 속성에 정의된 메소드
```html
<button v-on:click=“handleBtnOk”>OK</button>
<button class="btn btn-sm btn-primary mr-2" @click="handleBtn2('vue is good', $event)" name="btn2">버튼2</button>
```
```javascript
methods: {
  handleBtnOk() { 
  },
  handleBtn2(arg, event) {
	  if (event.target.name === "btn2") {
		console.log("btn2이 클릭됨");
	  } else if (event.target.name === "btn3") {
		console.log("btn3이 클릭됨");
	  }
  },
}
```

## 👓이벤트 감시 (Watch)
> 컴포넌트의 데이터가 변경되면 자동으로 핸들러 호출

```javascript
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
  watch: {
    userId(newValue, oldValue) {
      console.log("newValue: " + newValue);
      console.log("oldValue : " + oldValue);
      console.log("this.userId: " + this.userId);
    },
    product: {
      deep: true,
      handler(newValue, oldValue) {
        // newValue와 oldValue 같은 값이 나옴
        console.log("newValue: ", newValue);
        console.log("oldValue : ", oldValue);
      },
    },
    // oldValue를 얻고 싶으면, 속성까지 포함하여 메소드를 정의한다.
    "product.name"(newValue, oldValue) {
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
```