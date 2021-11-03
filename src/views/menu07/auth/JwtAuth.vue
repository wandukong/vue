<template>
  <div class="card">
    <div class="card-header">JwtAuth</div>
    <div class="card-body">
      <div class="card">
        <div class="card-header">
          JWT 인증
        </div>
        <div class="card-body">
          <div v-if="$store.state.userId === ''">
            <div class="form-group">
              <label class="form-label">User ID</label>
              <input type="text" class="form-control" id="userId" v-model="user.id" />
            </div>
            <div class="form-group">
              <label for="userPassword" class="col-form-label">User Password</label>
              <input type="text" class="form-control" v-model="user.password" />
            </div>
            <button class="btn btn-info btn-sm" v-on:click="handleLogin">로그인</button>
          </div>
          <div v-if="$store.state.userId !== ''">
            <button class="btn btn-info btn-sm mr-2" v-on:click="handleLogout">로그아웃</button>
          </div>
        </div>
      </div>

      <hr />
      <div class="card mt-5">
        <div class="card-header">
          회원 가입
        </div>
        <div class="card-body">
          <div class="form-group">
            <label class="form-label">User ID</label>
            <input type="text" class="form-control" v-model="user.id" />
          </div>
          <div class="form-group">
            <label class="form-label">User Name</label>
            <input type="text" class="form-control" v-model="user.name" />
          </div>
          <div class="form-group">
            <label class="col-form-label">User Password</label>
            <input type="text" class="form-control" v-model="user.password" />
          </div>
          <div class="form-group">
            <label class="col-form-label">User Role</label>
            <select class="form-control" name="mrole" v-model="user.role">
              <option value="ROLE_ADMIN">ROLE_ADMIN</option>
              <option value="ROLE_MANAGER">ROLE_MANAGER</option>
              <option value="ROLE_USER" selected>ROLE_USER</option>
            </select>
          </div>
          <div class="form-group">
            <label class="col-form-label">User Email</label>
            <input type="text" class="form-control" v-model="user.email" />
          </div>
          <button class="btn btn-info btn-sm" v-on:click="handleJoin">가입</button>
        </div>
      </div>
    </div>
    <alert-dialog :message="alertDialogMessage" :loading="loading" v-if="alertDialog" @close="alertDialog = false" />
  </div>
</template>

<script>
import auth from "@/apis/auth";
import AlertDialog from "@/components/menu07/AlertDialog.vue";

export default {
  name: "JwtAuth",
  components: { AlertDialog },
  data() {
    return {
      user: {
        id: "user",
        name: "사용자",
        password: "12345",
        role: "ROLE_USER",
        email: "user@mycompany.com",
      },
      alertDialogMessage: "",
      alertDialog: false,
      loading: false,
    };
  },
  methods: {
    async handleJoin() {
      this.loading = true;
      this.alertDialog = true;
      try {
        const response = await auth.join(this.user);
        this.loading = false;
        if (response.data.result === "success") {
          this.alertDialogMessage = "회원 가입 성공";
        } else if (response.data.result === "duplicated") {
          throw { message: "아이디 중복" };
        } else if (response.data.result === "fail") {
          throw { message: "서버 오류" };
        }
      } catch (error) {
        this.loading = false;
        this.alertDialogMessage = `회원 가입 실패(${error.message})`;
      }
    },

    async handleLogin() {
      this.loading = true;
      this.alertDialog = true;
      try {
        this.loading = false;
        this.alertDialog = false;
        const response = await auth.login(this.user);
        this.$store.dispatch("saveAuth", { userId: response.data.mid, authToken: response.data.jwt });
      } catch (error) {
        this.loading = false;
        try {
          if (error.response.status === 401) {
            this.alertDialogMessage = "로그인 실패(아이디 또는 패스워드가 틀림)";
          }
        } catch (err) {
          this.alertDialogMessage = "로그인 실패(네트워크 에러)";
        }
      }
    },
    handleLogout() {
      this.$store.dispatch("deleteAuth");
    },
  },
};
</script>

<style scoped></style>
