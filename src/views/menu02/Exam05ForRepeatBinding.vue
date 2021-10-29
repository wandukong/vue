<template>
  <div class="card">
    <div class="card-header">Exam05ForRepeatBinding</div>
    <div class="card-body">
      <span v-for="n in 10" :key="n" class="mr-2">
        <img v-bind:src="require(`@/assets/photos/photo${n}.jpg`)" width="300" height="200" v-if="n % 2 === 0" />
      </span>
      <hr />

      <h6>배열 항목 반복</h6>
      <div>
        <span v-for="(photo, index) in photos" :key="index">
          <img v-bind:src="require(`@/assets/photos/${photo}`)" width="300" height="200" v-if="index <= 1" />
        </span>
      </div>
      <hr />

      <h6>객체 항목 반복</h6>
      <table class="table table-bordered">
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
import boardData from "@/data/boardData";
import photoData from "@/data/photoData";

export default {
  name: "Exam05ForRepeatBinding",
  components: {},
  data() {
    return {
      photos: photoData.photos,
      boards: boardData.boards,
    };
  },
  methods: {},
};
</script>

<style scoped></style>
