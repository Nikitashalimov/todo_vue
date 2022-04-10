<template>
  <div class="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  letter-spacing: 0.01rem;
}

@media (max-width: 767px) {
  html {
    font-size: 62.5%;
  }
}

@media (min-width: 768px) {
  html {
    font-size: 62.5%;
  }
}

@font-face {
  font-family: opensans_bold;
  src: url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap");
  font-style: normal;
}

@font-face {
  font-family: opensans_regular;
  src: url("https://fonts.googleapis.com/css2?family=Open+Sans:ital@1&display=swap");
  font-style: normal;
}

@font-face {
  font-family: opensans_light;
  src: url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap");
  font-style: normal;
}
</style>