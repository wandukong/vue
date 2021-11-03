<template>
  <div class="card">
    <div class="card-header">게시물 목록</div>
    <div class="card-body">
      <router-link to="/menu07/board/writeform" class="btn btn-success btn-sm mb-2">✏</router-link>
      <div v-if="page != null">
        <table class="table table-sm table-striped table-bordered">
          <thead>
            <tr>
              <th class="text-center" style="width:70px">번호</th>
              <th class="text-center">제목</th>
              <th class="text-center" style="width:90px">글쓴이</th>
              <th class="text-center" style="width:120px">날짜</th>
              <th class="text-center" style="width:70px">조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="board in page.boards" :key="board.bno">
              <td class="text-center" style="width:70px">{{ board.bno }}</td>
              <td class="text-center">
                <router-link :to="`/menu07/board/read?bno=${board.bno}&pageNo=${page.pager.pageNo}&hit=true`">{{ board.btitle }} </router-link>
              </td>
              <td class="text-center" style="width:90px">{{ board.mid }}</td>
              <td class="text-center" style="width:120px">{{ new Date(board.bdate).toLocaleDateString() }}</td>
              <td class="text-center" style="width:70px">{{ board.bhitcount }}</td>
            </tr>
            <tr>
              <td colspan="5" class="text-center">
                <button class="btn btn-outline-warning btn-sm mr-1" @click="changePage(1)">처음</button>
                <button class="btn btn-outline-success btn-sm mr-1" @click="changePage(page.pager.startPageNo - 1)" v-if="page.pager.groupNo > 1">이전</button>
                <button v-for="pageNo in range(page.pager.startPageNo, page.pager.endPageNo)" :key="pageNo" @click="changePage(pageNo)" :class="`btn ${page.pager.pageNo != pageNo ? 'btn-outline-info' : 'btn-info'} btn-sm mr-1`">{{ pageNo }}</button>
                <button class="btn btn-outline-success btn-sm mr-1" @click="changePage(page.pager.endPageNo + 1)" v-if="page.pager.groupNo < page.pager.totalGroupNo">다음</button>
                <button class="btn btn-outline-warning btn-sm" @click="changePage(page.pager.totalPageNo)">맨끝</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <alert-dialog v-if="alertDialog" :loading="loading" :message="alertDialogMessage" @close="alertDialog = false" />
  </div>
</template>

<script>
import board from "@/apis/board";
import AlertDialog from "@/components/menu07/AlertDialog.vue";

export default {
  name: "List",
  components: { AlertDialog },
  data() {
    return {
      alertDialogMessage: "",
      alertDialog: false,
      loading: false,
      page: null,
    };
  },
  methods: {
    changePage(pageNo) {
      // url만 변경 변경
      this.$router.push(`/menu07/board/list?pageNo=${pageNo}`).catch(() => {});

      //url 변경을 감시하는 watch에서 데이터 가져옴
    },
    getBoardList(pageNo) {
      this.loading = true;
      this.alertDialog = true;
      board
        .getBoardList(pageNo)
        .then(response => {
          this.loading = false;
          this.alertDialog = false;
          this.page = response.data;
        })
        .catch(error => {
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
        });
    },
    range(start, end) {
      const arr = [];
      for (var i = start; i <= end; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  // 컴포넌트가 생성될 때 실행되는 훅
  created() {
    var pageNo = this.$route.query.pageNo; // 쿼리스트링의 param 얻기
    if (pageNo === "undefined") {
      pageNo = 1;
    }
    this.getBoardList(pageNo);
  },

  watch: {
    // 브라우저의 back 버튼을 이용해서 URL이 변경되었을 때 데이터 갱신을 위해 $route 감시
    $route(to, from) {
      // URL이 변경되면 URL에 맞는 해당 페이지 데이터 가져오기
      this.getBoardList(to.query.pageNo);
    },
  },
};
</script>

<style scoped></style>
