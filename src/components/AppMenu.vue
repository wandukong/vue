<template>
  <v-navigation-drawer app color="#002a56de" dark v-model="$store.state.drawer">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> SeUnGwAn </v-list-item-title>
        <v-list-item-subtitle> Team2 </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list>
      <v-list-item to="/">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>HOME</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/about">
        <v-list-item-icon>
          <v-icon>mdi-help-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>ABOUT</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-group :value="false" prepend-icon="mdi-routes" active-class="blue--text">
        <template v-slot:activator>
          <v-list-item-title>Routing</v-list-item-title>
        </template>
        <v-list-item to="/menu01/exam01view" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>선언적 방식 화면 이동</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/menu01/exam02view" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>프로그래밍 방식 화면 이동</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/menu01/exam03view" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>중첩된 라우트</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/menu01/exam04view" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>이름이 있는 뷰</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/menu01/exam05view" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>URL 데이터 전달</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-group :value="false" prepend-icon="mdi-stack-overflow" active-class="blue--text">
        <template v-slot:activator>
          <v-list-item-title>Component</v-list-item-title>
        </template>
        <v-list-item to="/menu02/exam01expressions" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>표현식 바인딩</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/menu02/exam02directives" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>디렉티브 바인딩</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/menu02/exam03attrbinding" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>속성 바인딩</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/menu02/exam04formbinding" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>폼 바인딩</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/menu02/exam05forrepeatbinding" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>반복 바인딩</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/menu02/exam06computedbinding" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>computed 바인딩</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/menu02/exam07template" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>템플릿 바인딩</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-group :value="false" prepend-icon="mdi-bell-alert" active-class="blue--text">
        <template v-slot:activator>
          <v-list-item-title>Event Handling & Watch</v-list-item-title>
        </template>
        <v-list-item to="/menu03/exam01eventhandling" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>이벤트 처리</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/menu03/exam02watch" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>데이터 변경 감시</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-group :value="false" prepend-icon="mdi-truck-delivery" active-class="blue--text">
        <template v-slot:activator>
          <v-list-item-title>Data Delivery</v-list-item-title>
        </template>
        <v-list-item to="/menu04/exam01props" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>부모에서 자식으로 전달(props 이용)</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/menu04/exam02eventemit" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>자식에서 부모로 전달(event 이용)</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/menu04/exam03inject" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>의존성 주입</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/menu04/exam04ref" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>참조 이용</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-group :value="false" prepend-icon="mdi-recycle-variant" active-class="blue--text">
        <template v-slot:activator>
          <v-list-item-title>Life Cycle Hook</v-list-item-title>
        </template>
        <v-list-item to="/menu05/exam01lifecyclehook" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>라이프 사이클 훅</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-group :value="false" prepend-icon="mdi-content-save-all" active-class="blue--text">
        <template v-slot:activator>
          <v-list-item-title>Vuex State Management</v-list-item-title>
        </template>
        <v-list-item to="/menu06/exam01rootstate" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>루트 상태 읽기 및 변경</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/menu06/exam02counterstate" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>하위 상태 읽기 및 변경</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-group :value="false" prepend-icon="mdi-swap-horizontal-bold" active-class="blue--text">
        <template v-slot:activator>
          <v-list-item-title>Axois AJAX</v-list-item-title>
        </template>
        <v-list-item to="/menu07/exam01asynccontrol" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> 스피너</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/menu07/auth/JwtAuth" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>JWT 인증</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/menu07/board/list" color="white">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>게시물 목록</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {};
</script>
