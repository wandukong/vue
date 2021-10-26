<template>
  <div class="card">
    <div class="card-header">
      Home
    </div>
    <div class="card-body">
      <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
