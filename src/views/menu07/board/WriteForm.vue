<template>
  <v-card>
    <v-card-title>새글</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form @submit.prevent="handleAdd">
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
        </v-container>
      </v-form>

      <alert-dialog v-if="alertDialog" :loading="loading" :message="alertDialogMessage" @close="alertDialog = false" />
    </v-card-text>
  </v-card>
</template>

<script>
import apiBoard from "@/apis/board";
import AlertDialog from "@/components/menu07/AlertDialog.vue";

export default {
  name: "WriteForm",
  components: { AlertDialog },
  data() {
    return {
      board: {
        btitle: "",
        bcontent: "",
      },
      files: [],
      alertDialogMessage: "",
      alertDialog: false,
      loading: false,
    };
  },
  methods: {
    async handleAdd() {
      try {
        const multipartFormData = new FormData();
        multipartFormData.append("btitle", this.board.btitle);
        multipartFormData.append("bcontent", this.board.bcontent);
        multipartFormData.append("mid", this.$store.state.userId);
        if (this.files.length !== 0) {
          multipartFormData.append("battach", this.files);
        }
        this.loading = true;
        this.alertDialog = true;
        const response = await apiBoard.createBoard(multipartFormData);
        console.log(response);
        this.loading = false;
        this.alertDialog = false;
        this.$router.push("/menu07/board/list");
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
      this.$router.push("/menu07/board/list");
    },
  },
};
</script>

<style scoped></style>
