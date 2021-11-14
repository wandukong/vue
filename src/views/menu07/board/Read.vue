<template>
  <v-card>
    <v-card-title>게시물 내용</v-card-title>
    <v-divider />
    <v-card-text>
      <v-row>
        <v-col>
          <p>bno: {{ board.bno }}</p>
          <p>btitle: {{ board.btitle }}</p>
          <p>bcontent: {{ board.bcontent }}</p>
          <p>mid: {{ board.mid }}</p>
          <p>bdate: {{ new Date(board.bdate).toLocaleDateString() }}</p>
          <p>bhitcount: {{ board.bhitcount }}</p>
          <p v-if="board.battachoname">
            battachoname:
            <a v-bind:href="`${baseURL}/board/battach/${board.bno}?jwt=${$store.state.authToken}`">
              {{ board.battachoname }}
            </a>
          </p>
        </v-col>
        <v-col>
          <div class="align-items-center ml-5">
            <img v-bind:src="`${baseURL}/board/battach/${board.bno}?jwt=${$store.state.authToken}`" alt="" width="300" />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-btn :to="`/menu07/board/list?pageNo=${$route.query.pageNo}`" color="primary" class="mr-2">목록</v-btn>
        <v-btn :to="`/menu07/board/updateform?bno=${$route.query.bno}&pageNo=${$route.query.pageNo}`" color="warning" class="mr-2">수정</v-btn>
        <v-btn @click="handleRemove" color="red">삭제</v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import apiBoard from "@/apis/board";
import axios from "axios";

export default {
  name: "Read",
  components: {},
  data() {
    return {
      baseURL: axios.defaults.baseURL,
      board: null,
    };
  },
  methods: {
    async handleRemove() {
      try {
        const response = await apiBoard.deleteBoard(this.board.bno);
        this.$router.push(`/menu07/board/list?pageNo=${this.$route.query.pageNo}`);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    apiBoard
      .readBoard(this.$route.query.bno, this.$route.query.hit)
      .then(response => {
        this.board = response.data;
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 403) {
            this.$router.push("/menu07/auth/jwtauth");
          }
        }
      });
  },
};
</script>

<style scoped></style>
