<template>
  <div class="card">
    <div class="card-header">Exam05ForRepeatBinding</div>
    <div class="card-body">
      <span v-for="n in 10" :key="n" class="mr-2">
        <img v-bind:src="require(`@/assets/photos/photo${n}.jpg`)" width="300" height="200" />
      </span>
      <hr />

      <h6>배열 항목 반복</h6>
      <div>
        <span v-for="(photo, index) in photos" :key="index">
          <img v-bind:src="require(`@/assets/photos/${photo}`)" width="300" height="200" />
        </span>
      </div>
      <hr />

      <h6>객체 항목 반복</h6>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="board in boards" :key="board.bno">
            <td>{{ board.bno }}</td>
            <td>{{ board.btitle }}</td>
            <td>{{ board.bwriter }}</td>
            <td>{{ board.bdate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exam05ForRepeatBinding",
  components: {},
  data() {
    return {
      photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
      boards: [
        { bno: 1, btitle: "제목1", bwriter: "글쓴이1", bdate: "2021-08-07" },
        { bno: 2, btitle: "제목2", bwriter: "글쓴이2", bdate: "2021-08-08" },
        { bno: 3, btitle: "제목3", bwriter: "글쓴이3", bdate: "2021-08-09" },
      ],
      board: {
        bno: 4,
        btitle: "제목4",
        bcontent: "내용4",
        bwriter: "글쓴이4",
        bdate: "2021-08-10",
      },
    };
  },
  methods: {},
};
</script>

<style scoped></style>
