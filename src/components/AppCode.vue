<template>
  <div class="group codegroup">
    <h3>{{ $t("modal.copy.title") }}</h3>
    <div class="gridcode">
      <div class="copycode" @click.stop.prevent="copy">{{ $t("modal.copy.clipboard") }}</div>

      <div id="code" ref="code">
        <p>
          <span class="cname">.parent</span> {
        </p>
        <p class="sp">
          <span class="ckey">display</span>:
          <span class="cprop">grid</span>;
        </p>
        <p class="sp">
          <span class="ckey">grid-template-columns</span>:
          <span class="cprop">{{ colTemplate }}</span>;
        </p>
        <p class="sp">
          <span class="ckey">grid-template-rows</span>:
          <span class="cprop">{{ rowTemplate }}</span>;
        </p>
        <p class="sp">
          <span class="ckey">grid-column-gap</span>:
          <span class="cprop">{{ columngap }}px;</span>
        </p>
        <p class="sp">
          <span class="ckey">grid-row-gap</span>:
          <span class="cprop">{{ rowgap }}px</span>;
        </p>
        <div v-if="childarea.length > 0" class="child">
          <div v-for="(child, i) in childarea" :key="child">
            <p>
              <span class="cname">.div{{ i + 1 }}</span> {
              <span class="ckey">grid-area</span>:
              <span class="cprop">{{ child }}</span>; }
            </p>
          </div>
        </div>
        <p>}</p>
      </div>
      <!--code-->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["columngap", "rowgap", "childarea"]),
    ...mapGetters(["rowTemplate", "colTemplate"])
  },
  methods: {
    copy() {
      var text = this.$refs.code,
        range,
        selection;

      if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
      } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
      }

      document.execCommand("copy");
      alert("copied!");
    }
  }
};
</script>

<style lang="scss" scoped>
.gridcode {
  position: relative;
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
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #08ffbd;
  font-size: 15px;
  font-family: "Roboto Mono", Courier, monospace;
  max-height: 50vh;
  overflow-y: scroll;
  p {
    margin: 5px;
  }
}

.copycode {
  position: absolute;
  right: 0;
  top: 0;
  background: #0f8a8ab3;
  padding: 8px 12px;
  border-radius: 0 4px 0 4px;
  font-family: "Mukta Mahee", Helvetica, Arial, sans-serif;
  cursor: pointer;
}

.child {
  padding-left: 40px;
}

.codegroup {
  margin-top: 30px;
}

.sp {
  padding-left: 20px;
}

.ckey {
  color: #6af2d7;
}

.cprop {
  color: #f8a384;
}
.cname {
  color: #ffea18;
}
</style>
