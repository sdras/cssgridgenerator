<template>
  <section>
    <p v-html="$t('explain.paragraph1')"></p>
    <p v-html="$t('explain.paragraph2')"></p>
    <p v-html="$t('explain.paragraph3')"></p>
    <p>
      {{ $t('explain.paragraph4') }}
      <a
        href="https://twitter.com/rachelandrew"
        target="_blank"
      >Rachel Andrew</a>,
      <a href="https://twitter.com/jensimmons" target="_blank">Jen Simmons</a>, {{ $t('utils.and') }}
      <a href="https://twitter.com/geddski" target="_blank">Dave Geddes</a> {{ $t('explain.paragraph5') }}
      <a
        href="https://css-tricks.com/snippets/css/complete-guide-grid/"
        target="_blank"
      >{{ $t('explain.cssguide') }}</a>, {{ $t('explain.paragraph6') }}
      <a href="https://cssgridgarden.com/" target="_blank">Grid Garden</a> {{ $t('explain.paragraph7') }}
    </p>
    <p>{{ $t('explain.note') }}</p>
    <p class="cursive">
      {{ $t('explain.contributions') }}
      <a
        href="https://github.com/sdras/cssgridgenerator"
        target="_blank"
      >{{ $t('explain.fork') }}</a>
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cursive {
  font-family: "Caveat", cursive;
  font-size: 25px;
  color: #ffd908;
  font-weight: normal;
  a,
  a:visited,
  a:active {
    color: #fb7826;
    text-decoration: underline;
  }
}

strong {
  color: #ffd908;
}

a,
a:visited,
a:active {
  color: $teal;
  text-decoration: none;
}
</style>