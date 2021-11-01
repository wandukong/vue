# LifeCycle Hooks

## Lifecycle Hooks
> 컴포넌트의 상태에 따라 콜백되는 함수
- Lifecycle Hooks를 재정의해서 사용자 로직을 포함시킬 수 있다.
<img src="https://user-images.githubusercontent.com/47289479/139636537-4d280b22-7eb8-45b1-b803-a86433bd86bc.png" width=500/>

### beforeCreate
- 컴포넌트가 생성되고 나서 처음 콜백
- data와 methods가 아직 컴포넌트에 포함되어 있지 않음

### created
- data와 methods가 컴포넌트에 포함되고 나서 콜백(this.data, thid.method 사용 가능)
- 컴포넌트가 DOM에 연결되기 전이므로 template 에 정의된 DOM 요소에 접근할 수 없음
- **Restful API 서버에 데이터를 요청하여 받아오는 로직을 수행하기 좋은 위치**

### beforeMount
- 컴포넌트가 DOM에 연결되기 직전에 콜백
- template 에 정의된 내용을 JavaScript render() 함수로 변환

### mounted
- JavaScript render() 를 실행한 후, 컴포넌트를 DOM 에 연결한 후 콜백
- **template에 정의된 DOM 요소 제어와 관련된 로직을 수행하기 좋은 위치**

### beforeUpdate
- 컴포넌트의 데이터가 변경되기 전에 콜백
- 변경 예정인 새 데이터에 접근할 수 있음, 단 읽기만하고 변경해서는 안됨

### updated
- **컴포넌트의 데이터가 변경**되거나, **props가 변경되었을 경우** 콜백
- 데이터 변경 후 화면 요소 제어와 관련된 로직을 추가하기 좋은 위치
- **주의할 점은 데이터 변경을 하지 말아야됨(무한 루프에 빠짐)**

### beforeDestroy
- 컴포넌트가 파괴되기 직전에 콜백, 컴포넌트의 데이터를 삭제하는 로직을 수행하기 좋은 위치

### destroyed
- 컴포넌트가 파괴되고 나서 콜백, 자식 컴포넌트까지 모두 파괴됨


