<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <div class="card">
        <div class="card-header">
            ChildA
        </div>
        <div class="card-body">
            <p>provideData1: {{provideData1}}</p>
            <p>provideData2: {{provideData2}}</p>
            <hr/>
            <child-b/>
        </div>
    </div>    
</template>

<script>
import ChildB from "./ChildB"
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "ChildA",
    //추가하고 싶은 컴포넌트 등록
    components: {
        ChildB
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
        };
    },
    //컴포넌트 메소드 정의
    methods: {
    },
    //부모로부터 전달된 데이터 삽입
    //자식의 데이터처럼 사용이 가능
    inject: [
        "provideData1",
        "provideData2",
    ]
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>