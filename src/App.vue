<template>
  <div id="app">
    <app-github-corner/>
    <app-logo/>
    <section class="grid"></section>
  </div>
</template>

<script>
import AppLogo from "./components/AppLogo.vue";
import AppGithubCorner from "./components/AppGithubCorner.vue";

export default {
  components: {
    AppGithubCorner,
    AppLogo
  }
};
</script>

<style lang="scss">
body {
  width: 100vw;
  min-height: 100vh;
  background: #192d38; /* Old browsers */
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    #192d38 0%,
    #211f2f 100%
  ); /* FF3.6-15 */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    #192d38 0%,
    #211f2f 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(
    ellipse at center,
    #192d38 0%,
    #211f2f 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#192d38', endColorstr='#211f2f',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  font-family: "Mukta Mahee", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  font-weight: 300;
}

#app {
  margin: 5vmin;
}

.grid {
  border: 1px solid #08ffbd;
  width: calc(70vw - 50px);
  height: calc(70vh - 50px);
  background: #131321; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #131321 0%,
    #1f1c2c 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #131321 0%,
    #1f1c2c 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #131321 0%,
    #1f1c2c 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#131321', endColorstr='#1f1c2c',GradientType=0 ); /* IE6-9 */
  box-shadow: 0 2px 20px 0 #000;
}
</style>
