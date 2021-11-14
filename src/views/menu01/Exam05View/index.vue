<!-- 컴포넌트 UI 정의-->
<template>
  <v-card>
    <v-card-title>Exam05View</v-card-title>
    <v-divider />
    <v-card-text>
      <v-list dense>
        <v-subheader>params(path variable)로 전달</v-subheader>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon> </v-list-item-icon>
            <v-list-item-content>
              <v-btn to="/menu01/exam06view/1">exam06view/1</v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon> </v-list-item-icon>
            <v-list-item-content>
              <v-btn v-bind:to="`/menu01/exam06view/${bno1}`">exam06view/3</v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon> </v-list-item-icon>
            <v-list-item-content>
              <v-btn :to="{ path: `/menu01/exam06view/${bno2}` }">exam06view/5</v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon> </v-list-item-icon>
            <v-list-item-content>
              <v-btn :to="{ name: 'menu01_exam06view', params: { bno: bno3 } }">exam06view/7</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-list dense>
        <v-subheader>정적 prop 객체로 전달</v-subheader>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon> </v-list-item-icon>
            <v-list-item-content>
              <v-btn to="/menu01/exam07view">exam07view</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-list dense>
        <v-subheader>쿼리 스트링으로 데이터 전달</v-subheader>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon> </v-list-item-icon>
            <v-list-item-content>
              <v-btn to="/menu01/exam08view?kind=freeboard&color=blue">exam08view?kind=freeboard&color=blue</v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon> </v-list-item-icon>
            <v-list-item-content>
              <v-btn :to="`/menu01/exam08view?kind=${kind1}&color=${color1}`">exam08view?kind=freeboard&color=blue</v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon> </v-list-item-icon>
            <v-list-item-content>
              <v-btn :to="{ path: `/menu01/exam08view?kind=${kind2}&color=${color2}` }">exam08view?kind=album&color=red</v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon> </v-list-item-icon>
            <v-list-item-content>
              <v-btn :to="{ name: 'menu01_exam08view', query: { kind: kind3, color: color3 } }">exam08view?kind=qa&color=yellow</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  // 컴포넌트의 이름(devtools에 나오는 이름, 디버깅에 유용)
  name: "Exam05View",
  // 추가하고 싶은 컴포넌트를 등록
  components: {},
  // 컴포넌트 데이터를 정의
  data: () => ({
    bno1: 3,
    bno2: 5,
    bno3: 7,
    kind1: "freeboard",
    color1: "blue",
    kind2: "album",
    color2: "red",
    kind3: "qa",
    color3: "yellow",
  }),
  // 컴포넌트 메소드 정의
  methods: {},
};
</script>

<!-- scoped 해당 파일에서만 적용
scoped가 존재하지 않을 시, 전역으로 사용할 수 있다.-->

<style scoped></style>
