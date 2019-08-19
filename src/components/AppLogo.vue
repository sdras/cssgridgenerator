<template>
  <nav>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
      <g class="logo" fill-rule="nonzero">
        <path d="M23 23v65h65V23H23zm-1-1h67v67H22V22zM10 10v8h8v-8h-8zM9 9h10v10H9V9z"></path>
        <path
          d="M9.146 9.854a.5.5 0 1 1 .708-.708l9 9a.5.5 0 0 1-.708.708l-9-9zM33 22h1v66.168h-1zM66 22h1v66.168h-1zM44 22h1v66.168h-1zM77 22h1v66.168h-1zM55 22h1v66.168h-1z"
        ></path>
        <path
          d="M88.584 34.084v-1H22.416v1zM88.584 78.084v-1H22.416v1zM88.584 56.084v-1H22.416v1zM88.584 45.084v-1H22.416v1zM89.084 67.084v-1H22.916v1zM13 18.5h1V89h-1zM18 14v-1h71v1z"
        ></path>
        <path d="M88 9h1v9h-1zM9 89v-1h9v1z"></path>
      </g>
    </svg>
    CSS Grid Generator
    <p class="caveat">
      {{ $t("header.builtby") }}
      <a href="https://twitter.com/sarah_edo" target="_blank">sarah_edo</a>
    </p>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo {
  fill: $teal;
}

nav {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 5px #000;
  text-align: center;
}

svg {
  vertical-align: middle;
  margin-top: -3px;
}

.caveat {
  font-family: "Caveat", cursive;
  font-size: 25px;
  margin-top: -10px;
  padding-left: 22px;
  color: #ffd908;
  opacity: 0.9;
  font-weight: normal;
}

a,
a:visited,
a:active {
  color: #ffd908;
  text-decoration: none;
}
</style>