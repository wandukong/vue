


# 컴포넌트간 데이터 전달

### 부모 컴포넌트와 자식 컴포넌트간의 데이터 전달

<img src="https://user-images.githubusercontent.com/47289479/139608708-c80d18fd-4cef-49a5-a837-9497361e8078.png"
		width="300">
		
- 부모는 자식에게 props로 데이터 전달
- 자식은 자신에게 일어난 일을 부모에게 event로 알림
- props는 아래로, event는 위로		
- 부모는 자식에서 발생된 이벤트를 처리
		- 부모 데이터 갱신 작업
		- 필요하면 props로 다시 자식으로 데이터 전달

## 부모 -> 자식 (props)
- 자식은 props 속성을 통해 부모로부터 받고 싶은 데이터를 명시적으로 기술해야한다.
- [Parent 컴포넌트]
	- \<child prop1=“value1” prop2=“value2”></child>	
- [Child 컴포넌트]
	- props: [“prop1”, “prop2”]
<hr/>

#### 동적 props (v-bind, :)
- v-bind, :를 사용하여 부모의 데이터를 props에 동적으로 바인딩
- 부모의 데이터가 변경될 때마다 자식으로 자동 전달됨
<hr/>

#### Prop 검증
>자식에서 받고자하는  prop를 정의할 때 요구사항을 기술할 수 있다.
- props: [ … ] 대신 props: { … } 사용
- 요구사항이 충족되지 않으면 Vue에서 경고를 보냄
- 이 기능은 배포된 컴포넌트를 다른 사용자가 이용할 때 특히 유용
```javascript
props: {
	propA: null, 		// 어떤 타입이든 가능
	propB: Number, 		// 숫자 타입만 가능
	propC: [String, Number], 	// String 타입, Number 타입 가능
	propD: { 					// 문자열 타입이어야 하고, 꼭 필요하다.
		type: String,
		required: true
	},
	propE: { 			// 숫자여야 하고, 기본값이 5이다.
		type: Number,
		default: 5
	},
	propF: {
		type: object,
		default(){
			return {message:"Hello"}
		}
	},
	propG: {  			// 배열 타입이어야하고, 디폴트가 black과 white이다.
		type: Array,
		default(){
			return ["black","white"]
		}
	},
	propI: { 			// 숫자이어야 하고, 0 혹은 양수이어야 한다.
		type: Number, 
		validator(value) {
			 return value > 0
		}
	}
}
```

## 자식 -> 부모 (event)

- 자식은 이벤트를 발생 
	-**this.$emit(“이벤트명“, 전달데이터, …);**
- 부모는 이벤트 핸들링
	- **<child v-on:이벤트명=＂핸들러＂></child>**
	- **<child @이벤트명=＂핸들러＂></child>**

#### 자식 컴포넌트
```html
<h6>[자식 -> 부모]</h6>
<button @click="handleBtn" class="btn btn-info bt-sm mr-2">chilld-event-1 emit</button>
```
```javascript
handleBtn() {
	this.$emit("child-event", this.data1, this.data2);
},
```

#### 부모 컴포넌트
```html
<child @child-event="handleChildEvent" />
```
```javascript
handleChildEvent(arg1, arg2) {
	console.log("arg1: ", arg1);
	console.log("arg2: ", arg2);
},
```

## 의존성 주입
> 부모가 모든 자식 컴포넌트에게 제공하고 싶은 데이터를 지정
	
#### 부모가 모든 자식 컴포넌트에게 제공하고 싶은 데이터를 지정
- 부모의 정적인 내용만 전달 가능
- 부모의 데이터가 변경되면, 변경된 값이 자동으로 전달되지 않음
```` javascript
provide() {
    return {
        provideData1: this.data1,
        provideData2: this.data2
    }
}
````
#### 자식은 이용하고자하는 데이터를 주입
- 하위컴포넌트마다 props로 데이터를 전달하는 것을 없애준다.
```javascript
inject: ["provideData1"]
```

## 참조 이용






