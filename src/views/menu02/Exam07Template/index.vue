<template>
  <div class="card">
    <div class="card-header">Exam07Template</div>
    <div class="card-body">
      <button class="btn btn-sm btn-danger mr-2" @click="modalDialogTemplate = true">show ModalDialogTemplate</button>
      <button class="btn btn-sm btn-warning mr-2" @click="dialogA = true">show DialogA</button>
      <button class="btn btn-sm btn-success" @click="dialogB = true">show DialogB</button>
    </div>
    <modal-dialog-template v-if="modalDialogTemplate" @close="modalDialogTemplate = false" />
    <!-- 

      <button class="modal-default-button btn btn-sm btn-dark" @click="$emit('close')"
      => 버튼이 클릭되었을때 'close' 라는 이벤트가 발생하게한다.
      

      <modal-dialog-template v-if="modalDialogTemplate" @close="modalDialogTemplate=false" />
      => 'close' 이벤트가 발생하면,  modalDialogTemplate=false 실행

    -->

    <dialog-a v-if="dialogA" @close="dialogA = false" />
    <dialog-b v-if="dialogB" @close="dialogB = false" />
  </div>
</template>

<script>
import ModalDialogTemplate from "@/components/menu02/ModalDialogTemplate.vue";
import DialogA from "./DialogA.vue";
import DialogB from "./DialogB.vue";

export default {
  name: "Exam07Template",
  components: { ModalDialogTemplate, DialogA, DialogB },
  data() {
    return {
      modalDialogTemplate: false,
      dialogA: false,
      dialogB: false,
    };
  },
  methods: {},
};
</script>

<style scoped></style>
