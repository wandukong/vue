<template>
  <v-app>
    <v-app-bar app color="#002a56de" dark>
      <v-app-bar-nav-icon @click="$store.state.drawer = !$store.state.drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <app-menu />

    <v-footer app color="#002a56de" dark>
      <!--가운데 정렬-->
      <div class="mx-auto">SeUnGwAn</div>
    </v-footer>
  </v-app>
</template>

<script>
import AppMenu from "@/components/AppMenu.vue";
export default {
  name: "App",
  components: { AppMenu },
  created() {
    this.$store.dispatch("loadAuth");
  },
};
</script>
