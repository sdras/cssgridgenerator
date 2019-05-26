<template>
  <header>
    <app-github-corner/>
    <app-logo/>
  </header>
</template>

<script>
import AppLogo from "./AppLogo.vue";
import AppGithubCorner from "./AppGithubCorner.vue";

export default {
  components: {
    AppGithubCorner,
    AppLogo
  }
};
</script>

<style lang="scss" scoped>
</style>