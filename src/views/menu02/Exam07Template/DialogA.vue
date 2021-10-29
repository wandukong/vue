<template>
  <modal-dialog-template>
    <template v-slot:header>
      DialogA
    </template>
    <template v-slot:body>
      DialogA 내용입니다.
    </template>
    <template v-slot:footer>
      <button class="modal-default-button btn btn-sm btn-dark mr-2" @click="$emit('close')">확인</button>
      <button class="modal-default-button btn btn-sm btn-dark mr-2" @click="$emit('close')">닫기</button>
    </template>
  </modal-dialog-template>
</template>

<script>
import ModalDialogTemplate from "@/components/menu02/ModalDialogTemplate.vue";
export default {
  name: "DialogA",
  components: { ModalDialogTemplate },
};
</script>

<style scoped></style>
