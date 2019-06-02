<template>
  <section>
    <p>
      You can set the numbers, and units of your columns and rows, and I'll generate a CSS grid for you!
      <strong>Drag within the boxes</strong> to create divs placed within the grid.
    </p>
    <p>Though this project can get a basic layout started for you, this project is not a comprehensive tour of CSS Grid capabilities. It is a way for you to use CSS Grid features quickly.</p>
    <p>I noticed a lot of people weren't using Grid because they felt it was too complicated and they couldn't understand it. Grid is capable of so much, and this small generator only touches on a fraction of the features. The purpose of this is so people get up and running quickly, and create more interesting layouts.</p>
    <p>
      Once you work with this a bit, I suggest checking out resources by
      <a
        href="https://twitter.com/rachelandrew"
        target="_blank"
      >Rachel Andrew</a>,
      <a href="https://twitter.com/jensimmons" target="_blank">Jen Simmons</a>, and
      <a href="https://twitter.com/geddski" target="_blank">Dave Geddes</a> to dive deeper. There is also a
      <a
        href="https://css-tricks.com/snippets/css/complete-guide-grid/"
        target="_blank"
      >CSS Grid Guide on CSS-Tricks</a>, and a fun little game called
      <a href="https://cssgridgarden.com/" target="_blank">Grid Garden</a> to help you learn more!
    </p>
    <p>Please note: Screenreaders will read the divs in the order you add the divs in, please keep this in mind while you're building a grid.</p>
    <p class="cursive">
      This project is open to contributions!
      <a
        href="https://github.com/sdras/cssgridgenerator"
        target="_blank"
      >Fork it here.</a>
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