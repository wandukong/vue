<template>
  <ModalDialogTemplate>
    <template v-slot:header>알림</template>

    <template v-slot:body>
      <div>
        <div v-if="loading" class="mt-3">
          <div class="spinner-grow text-danger" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div v-if="!loading">{{ message }}</div>
      </div>
    </template>

    <template v-slot:footer>
      <button class="btn btn-danger btn-sm" @click="$emit('close')">닫기</button>
    </template>
  </ModalDialogTemplate>
</template>

<script>
import ModalDialogTemplate from "@/components/menu02/ModalDialogTemplate.vue";

export default {
  name: "AlertDialog",
  components: { ModalDialogTemplate },
  data() {
    return {};
  },
  methods: {},
  props: ["message", "loading"],
};
</script>

<style scoped></style>
