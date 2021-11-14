<template>
  <v-card>
    <v-card-title>게시물 수정</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form @submit.prevent="handleUpdate">
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field label="제목" single-line full-width v-model="board.btitle"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-textarea v-model="board.bcontent" label="내용" counter maxlength="1000" full-width single-line></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-file-input label="첨부파일" v-model="files" show-size></v-file-input>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-btn class="success" type="submit">
                작성
              </v-btn>
              <v-btn class="red" @click="handleCancel">
                취소
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <img v-bind:src="`${baseURL}/board/battach/${board.bno}?jwt=${$store.state.authToken}`" alt="" width="200" />
          </v-row>
        </v-container>
      </v-form>

      <alert-dialog v-if="alertDialog" :loading="loading" :message="alertDialogMessage" @close="alertDialog = false" />
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";
import apiBoard from "@/apis/board";

export default {
  name: "UpdateForm",
  components: {},
  data() {
    return {
      baseURL: axios.defaults.baseURL,
      board: null,
      files: [],
    };
  },
  methods: {
    async handleUpdate() {
      try {
        const multipartFormData = new FormData();
        multipartFormData.append("bno", this.board.bno);
        multipartFormData.append("btitle", this.board.btitle);
        multipartFormData.append("bcontent", this.board.bcontent);

        if (this.files.length !== 0) {
          multipartFormData.append("battach", this.files);
        }

        this.loading = true;
        this.alertDialog = true;
        const response = await apiBoard.updateBoard(multipartFormData);
        this.loading = false;
        this.alertDialog = false;
        this.$router.push(`/menu07/board/read?bno=${this.$route.query.bno}&pageNo=${this.$route.query.pageNo}&hit=false`);
      } catch (error) {
        if (error.response) {
          if (error.response.status === 403) {
            this.loading = false;
            this.alertDialog = false;
            this.$router.push("/menu07/auth/jwtauth");
          }
        } else {
          this.loading = false;
          this.alertDialogMessage = "네트워크 통신 오류";
        }
      }
    },
    handleCancel() {
      this.$router.push(`/menu07/board/read?bno=${this.$route.query.bno}&pageNo=${this.$route.query.pageNo}&hit=false`);
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
